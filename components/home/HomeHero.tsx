import Link from "next/link";

import BackgroundVideo from "@/components/BackgroundVideo";
import Header from "@/components/Header";

const PILLARS = [
  { label: "Compliance", status: "Audit-ready", tone: "ready" },
  { label: "Capital", status: "Coming soon", tone: "soon" },
  { label: "Cashflow", status: "Coming soon", tone: "soon" },
];

export default function HomeHero() {
  return (
    <header className="relative overflow-hidden bg-ink px-6 text-paper">
      <BackgroundVideo src="/media/hero.mp4" poster="/media/hero-poster.jpg" />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-ink/85 via-ink/75 to-ink"
      />

      <Header />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-14 pt-14 pb-24 lg:grid-cols-[1.15fr_1fr] lg:gap-16 lg:pt-20 lg:pb-32">
        <div>
          <p className="text-xs font-semibold tracking-[0.18em] text-mint uppercase">
            The Wall Street standard for cannabis exports
          </p>
          <h1 className="mt-5 text-4xl leading-[1.08] font-extrabold sm:text-5xl lg:text-6xl">
            Banks say no.
            <br />
            Buyers want proof.
            <br />
            <span className="text-mint">One record answers both.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-on-dark-muted">
            420 Street turns your compliance into one audit-ready record: the proof importers ask
            for, and the evidence lenders need to fund you.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-xl bg-paper px-7 py-4 text-base font-bold text-ink transition-opacity hover:opacity-90"
            >
              Build your record
            </Link>
            <Link
              href="/how-it-works"
              className="rounded-xl border border-ink-line px-7 py-4 text-base font-semibold transition-colors hover:border-paper"
            >
              See how it works
            </Link>
          </div>

          <p className="mt-8 flex items-center gap-2.5 text-[15px] text-on-dark-muted">
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-mint" />
            Now taking registrations from growers, importers and lending partners
          </p>
        </div>

        <ProofCard />
      </div>
    </header>
  );
}

function ProofCard() {
  return (
    <div className="relative" aria-hidden="true">
      <div className="rounded-2xl border border-ink-line bg-ink-raised/90 p-6 shadow-2xl backdrop-blur">
        <div className="flex items-center justify-between border-b border-ink-line pb-4">
          <p className="text-[15px] font-semibold">Order #EU-0142 · 50 kg</p>
          <span className="rounded-full bg-ink-line px-2.5 py-1 text-[11px] font-semibold text-on-dark-muted">
            Sample
          </span>
        </div>

        <div className="mt-5 flex flex-col gap-2.5">
          {PILLARS.map((pillar) => (
            <div key={pillar.label} className="flex items-center justify-between">
              <span className="text-[11px] font-semibold tracking-[0.14em] text-on-dark-muted uppercase">
                {pillar.label}
              </span>
              <span
                className={`rounded-full px-2.5 py-1 text-[12px] font-semibold ${
                  pillar.tone === "ready" ? "bg-mint text-ink" : "bg-ink-line text-on-dark-muted"
                }`}
              >
                {pillar.status}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-7 gap-1.5">
          {Array.from({ length: 7 }).map((_, index) => (
            <div
              key={index}
              className={`h-1.5 rounded-full ${index < 5 ? "bg-mint" : "bg-ink-line"}`}
            />
          ))}
        </div>
      </div>

      <div className="mt-4 flex items-start gap-3 rounded-xl border border-ink-line bg-ink-soft/90 p-4 backdrop-blur">
        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-check text-xs text-paper">
          ✓
        </span>
        <div className="flex flex-col">
          <span className="text-[15px] font-semibold">Batch HG-2611 passed</span>
          <span className="text-[13px] text-on-dark-muted">
            All tests match the buyer&rsquo;s spec
          </span>
        </div>
      </div>

      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        <div className="flex flex-col rounded-xl border border-ink-line bg-ink-soft/90 p-4 backdrop-blur">
          <span className="text-[13px] text-on-dark-muted">GACP certificate</span>
          <span className="text-[15px] font-semibold">Renew in 112 days</span>
        </div>
        <div className="flex flex-col rounded-xl border border-ink-line bg-ink-soft/90 p-4 backdrop-blur">
          <span className="text-[13px] text-on-dark-muted">Record shared with buyer</span>
          <span className="text-[15px] font-semibold text-mint">5 of 5 checked ✓</span>
        </div>
      </div>
    </div>
  );
}
