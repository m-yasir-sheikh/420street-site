import type { Metadata } from "next";
import Link from "next/link";

import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "About | 420 Street",
  description:
    "Wall Street discipline for the cannabis trade. Founded by Gen Caird, CA, to bring the discipline of finance to cannabis exports: prove it first, then fund it.",
};

const LINKEDIN_URL = "https://www.linkedin.com/in/gen-caird-CA";
const CONTACT_EMAIL = "gen@420street.com.au";

const PRINCIPLES = [
  {
    number: "01",
    title: "Act only against proof",
    body: "Nothing irreversible moves until the proof is on the record.",
  },
  {
    number: "02",
    title: "A person signs it off",
    body: "Software reads and flags. A named person signs every record.",
  },
  {
    number: "03",
    title: "You own your record",
    body: "You choose who sees it, and you can take access back.",
  },
  {
    number: "04",
    title: "Build in the order money can follow",
    body: "Buyer first, then licence, then batch, then capital.",
  },
];

const STAGES = [
  { label: "Audit-ready compliance records", status: "Onboarding", tone: "live" },
  { label: "Platform, with repeat checks automated", status: "In build", tone: "live" },
  { label: "Capital, released in steps", status: "Next, built on compliance", tone: "next" },
  { label: "Cashflow on accepted invoices", status: "Coming soon", tone: "next" },
];

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About"
        title="Wall Street discipline for the cannabis trade."
        intro="Other industries learned long ago to sign the buyer before the build and pay against documents. We're bringing that discipline to medical cannabis, one audit-ready record at a time."
      />

      <section className="bg-paper px-6 py-20 sm:py-28">
        <div className="mx-auto w-full max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.14em] text-muted uppercase">Founder</p>
          <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">Gen Caird, CA</h2>
          <p className="mt-2 text-[15px] text-muted">
            Founder, 420 Street · Chartered Accountant
          </p>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft">
            Gen is a Chartered Accountant who founded 420 Street to bring the discipline of finance
            to the cannabis export trade: prove it first, then fund it.
          </p>

          <blockquote className="mt-8 border-l-2 border-mint pl-6">
            <p className="text-xl leading-relaxed font-semibold sm:text-2xl">
              &ldquo;Buying compliance isn&rsquo;t a strategy. Building it in the order the money
              can follow is.&rdquo;
            </p>
            <footer className="mt-3 text-[15px] text-muted">AICEF Bangkok</footer>
          </blockquote>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[15px] font-semibold underline underline-offset-4"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-[15px] font-semibold underline underline-offset-4"
            >
              {CONTACT_EMAIL}
            </a>
          </div>

          <div className="mt-10 rounded-2xl bg-paper-muted p-6">
            <p className="text-xs font-semibold tracking-[0.14em] text-muted uppercase">
              Speaking
            </p>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
              AICEF 2026 · Strategic Forum V · Bangkok · &ldquo;The Strategy behind
              Compliance&rdquo;
            </p>
          </div>
        </div>
      </section>

      <section className="bg-paper-muted px-6 py-20 sm:py-28">
        <div className="mx-auto w-full max-w-6xl">
          <p className="text-xs font-semibold tracking-[0.14em] text-muted uppercase">
            How we work
          </p>
          <h2 className="mt-4 max-w-2xl text-3xl font-extrabold sm:text-4xl">
            Four rules we don&rsquo;t break.
          </h2>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {PRINCIPLES.map((principle) => (
              <div
                key={principle.number}
                className="rounded-2xl border border-line-soft bg-paper p-8"
              >
                <p className="text-sm font-bold text-mint">{principle.number}</p>
                <h3 className="mt-3 text-xl font-bold">{principle.title}</h3>
                <p className="mt-2.5 text-[15px] leading-relaxed text-muted">{principle.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper px-6 py-20 sm:py-28">
        <div className="mx-auto w-full max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.14em] text-muted uppercase">
            Where we&rsquo;re at
          </p>
          <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
            No hype. Here&rsquo;s where we are.
          </h2>
          <p className="mt-4 text-lg text-muted">
            We&rsquo;d rather you know exactly what&rsquo;s live and what&rsquo;s next.
          </p>

          <ul className="mt-10 flex flex-col gap-3">
            {STAGES.map((stage) => (
              <li
                key={stage.label}
                className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-line-soft px-5 py-4"
              >
                <span className="text-[15px] font-semibold">{stage.label}</span>
                <span
                  className={`rounded-full px-3 py-1 text-[13px] font-semibold ${
                    stage.tone === "live"
                      ? "bg-check-wash text-check"
                      : "bg-amber-wash text-ink-soft"
                  }`}
                >
                  {stage.status}
                </span>
              </li>
            ))}
          </ul>

          <p className="mt-6 text-[13px] leading-relaxed text-muted">
            Capital and cashflow are coming soon. We&rsquo;ll launch them once the required
            approvals are in place, so you can rely on them from day one.
          </p>
        </div>
      </section>

      <section className="bg-paper px-6 pb-20 sm:pb-24">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-7 rounded-3xl bg-ink px-8 py-14 text-paper sm:px-12 md:flex-row md:items-center">
          <div>
            <h2 className="text-3xl font-extrabold sm:text-4xl">Bring us your next order.</h2>
            <p className="mt-3 text-lg text-on-dark-muted">
              Growers, importers and lenders: tell us what you need to see.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 rounded-xl bg-paper px-7 py-4 text-base font-bold text-ink transition-opacity hover:opacity-90"
          >
            Get in touch
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
