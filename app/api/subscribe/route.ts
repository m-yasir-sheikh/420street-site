import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const apiKey = process.env.LOOPS_API_KEY;

    if (apiKey) {
      // Send contact creation to Loops.so
      const response = await fetch("https://app.loops.so/api/v1/contacts/create", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email.trim(),
          source: "420street Landing Page",
          subscribed: true,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        // If user is already on the list, treat as success with friendly message
        if (data?.message?.toLowerCase().includes("already") || data?.error?.toLowerCase().includes("already")) {
          return NextResponse.json(
            { success: true, message: "You are already registered on the waitlist!" },
            { status: 200 }
          );
        }

        console.error("Loops API Error:", data);
        return NextResponse.json(
          { error: data?.message || "An error occurred during subscription." },
          { status: response.status }
        );
      }
    } else {
      // Demo / fallback mode when LOOPS_API_KEY is not set yet
      console.log(`[420street Waitlist] Demo signup received for: ${email}`);
    }

    return NextResponse.json(
      {
        success: true,
        message: "Thank you! You have been successfully added to the waitlist.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Subscription endpoint error:", error);
    return NextResponse.json(
      { error: "An internal server error occurred. Please try again." },
      { status: 500 }
    );
  }
}
