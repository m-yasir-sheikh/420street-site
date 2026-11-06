import Link from "next/link";

import BackgroundVideo from "@/components/BackgroundVideo";

const CHECKS = [
  "Buyer and credit checked",
  "Batch tested to spec, licences current",
  "Delivery accepted, invoice matches the order",
  "Every item signed by a named person",
];

export default function Lenders() {
  return (
    <section className="bg-paper px-6 py-20 sm:py-28">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="relative min-h-[320px] overflow-hidden rounded-2xl bg-ink lg:min-h-[420px]">
          <BackgroundVideo src="/media/markets.mp4" poster="/media/markets-poster.jpg" />
          <div aria-hidden="true" className="absolute inset-0 bg-ink/45" />
          <div className="absolute inset-x-5 bottom-5 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-ink-line bg-ink-soft/90 p-4 text-paper backdrop-blur">
            <div className="flex flex-col">
              <span className="text-[12px] text-on-dark-muted">Shared with lender · sample</span>
              <b className="text-[15px]">Batch HG-2611</b>
            </div>
            <span className="text-[13px] font-semibold text-mint">5 of 5 checked ✓</span>
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold tracking-[0.14em] text-muted uppercase">
            For lenders and investors
          </p>
          <h2 id="lend" className="mt-4 text-3xl font-extrabold sm:text-4xl">
            Lenders fund what they can check.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">
            <b>41%</b> of small-business trade finance applications are rejected. We give lenders a
            record they can actually check, and we&rsquo;re building funding that is repaid from
            the buyer&rsquo;s payment.
          </p>

          <ul className="mt-8 flex flex-col gap-3">
            {CHECKS.map((check) => (
              <li
                key={check}
                className="flex items-center justify-between gap-4 border-b border-line-soft pb-3"
              >
                <span className="text-[15px] text-ink-soft">{check}</span>
                <b aria-hidden="true" className="text-check">
                  ✓
                </b>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col items-start gap-4">
            <Link
              href="/contact"
              className="rounded-xl bg-ink px-6 py-3.5 text-base font-semibold text-paper transition-opacity hover:opacity-90"
            >
              Talk to us about partnering
            </Link>
            <span className="text-[13px] text-muted">
              Source: ADB Global Trade Finance Gap Survey, Dec 2025
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
