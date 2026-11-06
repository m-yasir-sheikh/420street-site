import type { Metadata } from "next";
import Link from "next/link";

import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "How it works | 420 Street",
  description:
    "Three steps on one record. Compliance you can build today, with capital and cashflow built on the same record.",
};

const STEP_LINKS = [
  { href: "#compliance", label: "1 · Compliance" },
  { href: "#capital", label: "2 · Capital" },
  { href: "#cashflow", label: "3 · Cashflow" },
];

const LICENCES = [
  { label: "Thai cultivation licence", value: "✓ Aug 2027" },
  { label: "GACP certificate", value: "Renew in 112 days" },
  { label: "EU-GMP partner", value: "✓ Sep 2028" },
];

const CAPITAL_PROOFS = ["Buyer agreed", "Licences current", "Batch passes tests"];

const CASHFLOW_STEPS = [
  "Buyer accepts the delivery",
  "You draw on the invoice",
  "Buyer pays the invoice",
  "The balance comes to you",
];

const FAQS = [
  {
    question: "Who checks the record?",
    answer:
      "A named person signs off every record. Software reads, checks and flags. People decide.",
  },
  {
    question: "Who owns my data?",
    answer:
      "You do. You choose who sees each part of your record, and you can remove access at any time.",
  },
  {
    question: "Which markets do you work with?",
    answer:
      "We're starting with Thai-grown medical cannabis supplied to licensed importers in Europe and Australia. Get in touch if you work elsewhere.",
  },
  {
    question: "Do you provide finance?",
    answer:
      "Not yet. Capital and cashflow are coming soon, and we'll launch them once the required approvals are in place. Register your interest for early access.",
  },
  {
    question: "What does it cost?",
    answer:
      "It depends on the size of your operation and what you need. Get in touch and we'll talk it through.",
  },
];

export default function HowItWorksPage() {
  return (
    <main>
      <PageHero
        eyebrow="How it works"
        title={
          <>
            Prove it. Fund it. <span className="text-mint">Get paid.</span>
          </>
        }
        intro="Three steps on one record. It starts with compliance, the part you can build today. Capital and cashflow are coming soon, built on the same record."
      >
        <div className="mt-10 flex flex-wrap gap-3">
          {STEP_LINKS.map((step) => (
            <a
              key={step.href}
              href={step.href}
              className="rounded-full border border-ink-line px-5 py-2.5 text-[15px] font-semibold transition-colors hover:border-paper"
            >
              {step.label}
            </a>
          ))}
        </div>
      </PageHero>

      <section id="compliance" className="scroll-mt-8 bg-paper px-6 py-20 sm:py-28">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-xs font-semibold tracking-[0.14em] text-muted uppercase">
              Step 1 · Compliance
            </p>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Built backwards from the buyer&rsquo;s sign-off.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink-soft">
              In Europe, the importer&rsquo;s Qualified Person signs off every batch. We build the
              record they ask for: a named buyer and a margin that works, licences with every
              expiry tracked, every GACP and GMP step logged, and test results matched to spec.
            </p>
            <p className="mt-4 text-lg font-semibold">Signed off by a named person. Every time.</p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="rounded-2xl border border-line-soft bg-paper-muted p-6">
              <div className="flex items-center justify-between">
                <b className="text-[15px]">Licences</b>
                <span className="rounded-full bg-line-soft px-2.5 py-1 text-[11px] font-semibold text-muted">
                  Sample
                </span>
              </div>
              <dl className="mt-5 flex flex-col gap-3">
                {LICENCES.map((licence) => (
                  <div
                    key={licence.label}
                    className="flex flex-wrap items-center justify-between gap-2 border-t border-line-soft pt-3 first:border-0 first:pt-0"
                  >
                    <dt className="text-[15px] text-muted">{licence.label}</dt>
                    <dd className="text-[15px] font-semibold">{licence.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="rounded-2xl border border-line-soft p-6">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-[15px] text-muted">Batch tests vs buyer spec</span>
                <b className="text-[15px] text-check">All match ✓</b>
              </div>
              <div className="mt-3 flex flex-wrap items-center justify-between gap-2 border-t border-line-soft pt-3">
                <span className="text-[15px] text-muted">Signed off by</span>
                <b className="text-[15px]">Named reviewer, dated</b>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="capital" className="scroll-mt-8 bg-paper-muted px-6 py-20 sm:py-28">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="order-2 rounded-2xl border border-line-soft bg-paper p-6 lg:order-1">
            <div className="flex items-center justify-between">
              <b className="text-[15px]">Funding in steps</b>
              <span className="text-[13px] text-muted">Built on compliance</span>
            </div>
            <div className="mt-5 flex gap-1.5">
              {CAPITAL_PROOFS.map((proof) => (
                <div key={proof} className="h-1.5 flex-1 rounded-full bg-mint" />
              ))}
            </div>
            <dl className="mt-5 flex flex-col gap-3">
              {CAPITAL_PROOFS.map((proof) => (
                <div
                  key={proof}
                  className="flex flex-wrap items-center justify-between gap-2 border-t border-line-soft pt-3 first:border-0 first:pt-0"
                >
                  <dt className="text-[13px] tracking-wide text-muted uppercase">
                    Proof on the record
                  </dt>
                  <dd className="text-[15px] font-semibold">{proof}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-5 text-[13px] text-muted">
              Illustration only. Not an offer of finance.
            </p>
          </div>

          <div className="order-1 lg:order-2">
            <p className="text-xs font-semibold tracking-[0.14em] text-muted uppercase">
              Step 2 · Capital · built on compliance
            </p>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Funding that follows your proof.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink-soft">
              We&rsquo;re building funding that is released in steps, each one matched to something
              already proven on the record. If a licence lapses or a batch fails, the next step
              waits.
            </p>
            <p className="mt-4 text-lg font-semibold">No proof, no irreversible spend.</p>
          </div>
        </div>
      </section>

      <section id="cashflow" className="scroll-mt-8 bg-ink px-6 py-20 text-paper sm:py-28">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-xs font-semibold tracking-[0.14em] text-on-dark-muted uppercase">
              Step 3 · Cashflow · coming soon
            </p>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Paid on acceptance, not on payment terms.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-on-dark-muted">
              Growers often wait weeks or months after delivery to be paid, while the next batch
              needs funding now. We&rsquo;re building a way to draw on an accepted invoice, backed
              by the same audit-ready record.
            </p>
          </div>

          <div className="rounded-2xl border border-ink-line bg-ink-raised p-6">
            <div className="flex items-center justify-between">
              <b className="text-[15px]">How it&rsquo;s designed to work</b>
              <span className="rounded-full bg-amber-wash px-2.5 py-1 text-[11px] font-semibold text-[#8A4B00]">
                Coming soon
              </span>
            </div>
            <ol className="mt-5 flex flex-col gap-4">
              {CASHFLOW_STEPS.map((step, index) => (
                <li key={step} className="flex items-center gap-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-mint text-sm font-bold text-ink">
                    {index + 1}
                  </span>
                  <span className="text-[15px] text-on-dark-muted">{step}</span>
                </li>
              ))}
            </ol>
            <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-ink-line pt-5">
              <span className="text-[15px] text-on-dark-muted">
                Be first in line when it launches.
              </span>
              <Link
                href="/contact"
                className="rounded-lg bg-paper px-4 py-2.5 text-[15px] font-semibold text-ink transition-opacity hover:opacity-90"
              >
                Register interest
              </Link>
            </div>
            <p className="mt-5 text-[13px] text-on-dark-muted">
              Illustration only. Not an offer of finance.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-paper px-6 pt-20 sm:pt-24">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-6 rounded-[28px] bg-mint p-10 text-ink md:flex-row md:items-center">
          <div className="flex items-center gap-5">
            <span aria-hidden="true" className="text-5xl leading-none font-bold">
              ↺
            </span>
            <h2 className="text-2xl font-extrabold sm:text-3xl">
              Build it once. Use it every batch.
            </h2>
          </div>
          <p className="max-w-md text-[15px] leading-relaxed">
            Your record carries forward, so every new order starts from proof you already have
            instead of a fresh pile of paperwork.
          </p>
        </div>
      </section>

      <section className="bg-paper px-6 py-20 sm:py-28">
        <div className="mx-auto w-full max-w-3xl">
          <h2 className="text-3xl font-extrabold sm:text-4xl">Questions</h2>
          <div className="mt-10 flex flex-col gap-3">
            {FAQS.map((faq, index) => (
              <details
                key={faq.question}
                open={index === 0}
                className="group rounded-xl border border-line-soft px-6 py-5 open:bg-paper-muted"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[17px] font-semibold">
                  {faq.question}
                  <span
                    aria-hidden="true"
                    className="shrink-0 text-xl text-muted transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-4 text-[15px] leading-relaxed text-muted">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper px-6 pb-20 sm:pb-28">
        <div className="topo-bg mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-6 rounded-[28px] bg-ink px-8 py-14 text-paper sm:px-14 md:flex-row md:items-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl">Start with one record.</h2>
          <Link
            href="/contact"
            className="shrink-0 rounded-xl bg-paper px-7 py-4 text-base font-bold text-ink transition-opacity hover:opacity-90"
          >
            Get started
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
