# 420 Street

Marketing site for **420 Street** — Compliance · Capital · Cashflow.

Built with **Next.js 16 (App Router)**, **Tailwind CSS v4**, **TypeScript**, and **Loops.so**
for contact-form delivery and audience management.

---

## Pages

| Route | Page |
|---|---|
| `/` | Home |
| `/how-it-works` | How it works + FAQ |
| `/about` | About / founder / principles |
| `/contact` | Contact form |
| `/privacy` | Privacy policy (rendered from `public/legal/privacy-policy.txt`) |
| `/terms` | Terms of use (rendered from `public/legal/terms-of-use.txt`) |

---

## Brand

- Black `#0E0E0E`, white `#FFFFFF`, light grey `#F5F5F3`, mint accent `#7FD8A6`, check green `#1F7A4D`
- Tagline: Compliance · Capital · Cashflow
- Font: Inter, loaded from Google Fonts
- Tokens live in the `@theme` block in [`app/globals.css`](app/globals.css) and are used as Tailwind
  utilities (`bg-ink`, `text-mint`, `border-line-soft`, and so on). Change a colour there, not in
  individual components.

### Media

Videos and poster frames are in `public/media/`. They are muted, looping and 1080p, and they do
**not** autoplay for visitors who have set "reduce motion" — see
[`components/BackgroundVideo.tsx`](components/BackgroundVideo.tsx).

---

## Contact form

The form posts to [`app/api/contact/route.ts`](app/api/contact/route.ts), which **saves the
enquiry onto the contact's record in Loops**. No email is sent — enquiries are read in the Loops
audience (Audience → filter by `source`).

Fields written to the contact: `firstName`, `lastName`, `email`, `role`, `message`, `enquiredAt`,
`source`.

It also includes a honeypot field and server-side validation. Submissions fail closed: if Loops
cannot be reached, the visitor is shown the company email address as a fallback and the full
enquiry is written to the server log so it is never silently lost.

### ⚠️ Repeat enquiries overwrite

Loops contact properties hold a **single value**. If the same email address submits the form
twice, the second `message` replaces the first and the original is not recoverable from Loops.
This is an accepted trade-off of the no-email design. If a permanent per-enquiry record becomes
important, the alternative is a Loops transactional email — that requires creating and publishing
a template in the Loops dashboard, because the Loops API has no raw-send endpoint (SMTP requires a
template too).

Until then, the server log is the only secondary record of an enquiry, and only when Loops fails.

### ⚠️ The 450-character message cap

Loops rejects **any string value in an API request body over 500 characters**. The message field
is therefore capped at 450 characters, enforced in both the UI (with a live counter) and the API
route. Do not raise this limit without re-checking the Loops constraint — exceeding it causes the
whole request to fail.

### Required Loops setup

Loops does **not** auto-create custom properties, so these must exist before the form works.
*All four already exist in the current account.*

| Property | Type |
|---|---|
| `role` | string |
| `source` | string |
| `message` | string |
| `enquiredAt` | date |

They can be created via the API if the account is ever rebuilt:

```bash
curl -X POST https://app.loops.so/api/v1/contacts/properties \
  -H "Authorization: Bearer $LOOPS_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"name":"message","type":"string"}'
```

### Environment variables

```env
# Loops API key — Loops → Settings → API Keys
LOOPS_API_KEY=your_loops_api_key_here
```

Without `LOOPS_API_KEY` the route returns `503` and logs the enquiry rather than pretending to
succeed.

### Marketing consent

The form has an optional "keep me updated" checkbox, which controls the Loops `subscribed` flag:

| Case | `subscribed` sent | Result |
|---|---|---|
| New contact, box ticked | `true` | Subscribed |
| New contact, box unticked | `false` | Not subscribed |
| Existing contact, box ticked | `true` | Subscribed |
| Existing contact, box unticked | *omitted* | Status left as-is |

**`subscribed: false` must be sent explicitly for new contacts.** Loops subscribes every new
contact by default, so simply omitting the field silently opts people in — which would defeat the
checkbox and create a problem under the Australian Spam Act. The route therefore looks the contact
up first (`/v1/contacts/find`) and only omits `subscribed` for *existing* contacts, so someone who
opted in through another channel is never downgraded by a later enquiry.

Keep this behaviour if the route is refactored.

---

## Local development

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

---

## Deployment

1. Push to the repository.
2. Connect the project on [Vercel](https://vercel.com/new).
3. Add `LOOPS_API_KEY` under **Environment Variables**.
4. Deploy.

---

## Outstanding, from the client handoff

- **Legal review pending.** Finance wording is deliberately "in development, not an offer". Do not
  add rates, amounts, calculators or funding promises until that review is done.
- **Keep the footer disclaimer wording as is.**
- **Headshot** — the founder section has no photo by choice; one can be added beside the quote later.
- **Video licence** — both clips appear to be from Pexels (free for commercial use); confirm the source.
- **Analytics / cookie banner** if required.
