"use client";

import { useState } from "react";

const ROLES = ["Grower", "Importer", "Lender or investor"] as const;
type Role = (typeof ROLES)[number];

const MESSAGE_MAX_LENGTH = 450;
const CONTACT_EMAIL = "gen@420street.com.au";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [role, setRole] = useState<Role>("Grower");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);
  const [company, setCompany] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const remaining = MESSAGE_MAX_LENGTH - message.length;

  const reset = () => {
    setRole("Grower");
    setName("");
    setEmail("");
    setMessage("");
    setConsent(false);
    setStatus("idle");
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ role, name, email, message, consent, company }),
      });

      if (!response.ok) {
        setStatus("error");
        return;
      }

      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="rounded-2xl border border-line-soft bg-check-wash p-8">
        <p className="text-xl font-bold">Thanks, we&rsquo;ve got it.</p>
        <p className="mt-2 text-[15px] text-muted">We&rsquo;ll be in touch soon.</p>
        <button
          type="button"
          onClick={reset}
          className="mt-6 rounded-xl border border-ink bg-transparent px-5 py-3 text-[15px] font-semibold text-ink transition-colors hover:bg-ink hover:text-paper"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      {/* Honeypot — hidden from real visitors, catches bots that fill every field. */}
      <input
        type="text"
        name="company"
        value={company}
        onChange={(event) => setCompany(event.target.value)}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <fieldset className="flex flex-col gap-2.5">
        <legend className="mb-2.5 text-[15px] font-semibold">I&rsquo;m a&hellip;</legend>
        <div className="flex flex-wrap gap-2">
          {ROLES.map((option) => {
            const isSelected = role === option;
            return (
              <button
                key={option}
                type="button"
                aria-pressed={isSelected}
                onClick={() => setRole(option)}
                className={`min-h-11 rounded-full px-5 py-3 text-[15px] font-semibold transition-colors ${
                  isSelected
                    ? "border border-ink bg-ink text-paper"
                    : "border border-line bg-paper text-ink-soft hover:border-ink"
                }`}
              >
                {option}
              </button>
            );
          })}
        </div>
      </fieldset>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="c-name" className="text-sm font-semibold">
            Name
          </label>
          <input
            id="c-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="min-h-11 rounded-[10px] border border-line bg-paper px-3.5 py-3 text-base text-ink-soft outline-none focus:border-ink"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="c-email" className="text-sm font-semibold">
            Email
          </label>
          <input
            id="c-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="min-h-11 rounded-[10px] border border-line bg-paper px-3.5 py-3 text-base text-ink-soft outline-none focus:border-ink"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="c-msg" className="text-sm font-semibold">
          Tell us a bit about what you need
        </label>
        <textarea
          id="c-msg"
          name="message"
          rows={4}
          maxLength={MESSAGE_MAX_LENGTH}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          className="resize-y rounded-[10px] border border-line bg-paper px-3.5 py-3 text-base text-ink-soft outline-none focus:border-ink"
        />
        <p
          className={`text-right text-[13px] ${remaining <= 50 ? "text-check" : "text-muted"}`}
          aria-live="polite"
        >
          {remaining} characters left
        </p>
      </div>

      <label className="flex cursor-pointer items-start gap-3 text-[15px]">
        <input
          type="checkbox"
          checked={consent}
          onChange={(event) => setConsent(event.target.checked)}
          className="mt-0.5 h-4 w-4 shrink-0 accent-ink"
        />
        <span className="text-muted">
          Keep me updated about 420 Street. You can unsubscribe at any time.
        </span>
      </label>

      <button
        type="submit"
        disabled={status === "sending"}
        className="min-h-13 self-start rounded-xl bg-ink px-6 py-4 text-base font-bold text-paper transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {status === "sending" ? "Sending\u2026" : "Send"}
      </button>

      {status === "error" && (
        <p role="alert" className="text-[15px] font-semibold text-[#9B1C1C]">
          Sorry, that didn&rsquo;t send. Please email{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="underline">
            {CONTACT_EMAIL}
          </a>{" "}
          instead.
        </p>
      )}

      <p className="text-[13px] leading-relaxed text-muted">
        We use your details only to reply to you. See our{" "}
        <a href="/privacy" className="underline">
          privacy policy
        </a>
        .
      </p>
    </form>
  );
}
