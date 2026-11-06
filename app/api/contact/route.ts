import { NextResponse } from "next/server";

const LOOPS_ENDPOINT = "https://app.loops.so/api/v1/contacts/update";
const LOOPS_FIND_ENDPOINT = "https://app.loops.so/api/v1/contacts/find";

/**
 * Loops rejects any string value in the request body over 500 characters,
 * so the message is capped below that on both the client and the server.
 */
const MESSAGE_MAX_LENGTH = 450;
const NAME_MAX_LENGTH = 100;
const EMAIL_MAX_LENGTH = 200;

const ROLES = ["Grower", "Importer", "Lender or investor"] as const;
type Role = (typeof ROLES)[number];

interface ContactPayload {
  role: unknown;
  name: unknown;
  email: unknown;
  message: unknown;
  consent: unknown;
  company: unknown;
}

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

/**
 * Loops has no "create only if new" flag, so an existing contact is detected up front.
 * On error this returns `true`, which is the safe default: it leaves an unknown
 * contact's existing subscription status untouched rather than overwriting it.
 */
async function contactExists(email: string, apiKey: string): Promise<boolean> {
  try {
    const response = await fetch(
      `${LOOPS_FIND_ENDPOINT}?email=${encodeURIComponent(email)}`,
      { headers: { Authorization: `Bearer ${apiKey}` } }
    );

    if (!response.ok) return true;

    const found = await response.json();
    return Array.isArray(found) && found.length > 0;
  } catch {
    return true;
  }
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { role, name, email, message, consent, company } = payload;

  // Honeypot: real visitors never see this field, so anything in it is a bot.
  if (isNonEmptyString(company)) {
    return NextResponse.json({ success: true }, { status: 200 });
  }

  if (!isNonEmptyString(name)) {
    return NextResponse.json({ error: "Please enter your name." }, { status: 400 });
  }

  if (!isNonEmptyString(email) || !isValidEmail(email.trim())) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  if (!isNonEmptyString(role) || !ROLES.includes(role as Role)) {
    return NextResponse.json({ error: "Please select who you are." }, { status: 400 });
  }

  const cleanName = name.trim().slice(0, NAME_MAX_LENGTH);
  const cleanEmail = email.trim().toLowerCase().slice(0, EMAIL_MAX_LENGTH);
  const cleanRole = role as Role;
  const cleanMessage = isNonEmptyString(message) ? message.trim().slice(0, MESSAGE_MAX_LENGTH) : "";
  const hasConsented = consent === true;

  // Enquiry details are serialised into the log message itself: the Next.js logger
  // drops extra console arguments, and losing a lead to an outage is not acceptable.
  const enquiryForLog = JSON.stringify({
    name: cleanName,
    email: cleanEmail,
    role: cleanRole,
    message: cleanMessage,
    consent: hasConsented,
  });

  const apiKey = process.env.LOOPS_API_KEY;

  if (!apiKey) {
    console.error(
      `[420 Street contact] LOOPS_API_KEY is not set — enquiry was not saved. ${enquiryForLog}`
    );
    return NextResponse.json({ error: "The contact form is not configured yet." }, { status: 503 });
  }

  const [firstName, ...restOfName] = cleanName.split(/\s+/);

  const body: Record<string, unknown> = {
    email: cleanEmail,
    firstName,
    source: "420 Street website contact form",
    role: cleanRole,
    message: cleanMessage,
    enquiredAt: new Date().toISOString(),
  };

  if (restOfName.length > 0) {
    body.lastName = restOfName.join(" ");
  }

  if (hasConsented) {
    body.subscribed = true;
  } else if (!(await contactExists(cleanEmail, apiKey))) {
    // Loops subscribes every new contact by default, so consent is only honoured by
    // sending `subscribed: false` explicitly. Existing contacts are left alone rather
    // than downgraded, in case they opted in through another channel.
    body.subscribed = false;
  }

  let response: Response;

  try {
    response = await fetch(LOOPS_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  } catch (error) {
    console.error(
      `[420 Street contact] Could not reach Loops: ${String(error)} — enquiry: ${enquiryForLog}`
    );
    return NextResponse.json({ error: "We could not save your message." }, { status: 502 });
  }

  if (!response.ok) {
    let detail = "";
    try {
      detail = JSON.stringify(await response.json());
    } catch {
      /* Loops returns an empty body on some errors. */
    }

    console.error(
      `[420 Street contact] Loops contact upsert failed (${response.status}): ${detail} — enquiry: ${enquiryForLog}`
    );
    return NextResponse.json({ error: "We could not save your message." }, { status: 502 });
  }

  return NextResponse.json({ success: true }, { status: 200 });
}
