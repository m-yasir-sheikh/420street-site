const LICENCES = [
  { label: "Thai licence", value: "✓ Aug 2027" },
  { label: "GACP", value: "112 days" },
  { label: "EU-GMP partner", value: "✓ Sep 2028" },
];

const CAPITAL_PROOFS = ["Buyer ✓", "Licences ✓", "Batch ✓"];

export default function Pillars() {
  return (
    <section className="bg-ink px-6 py-20 text-paper sm:py-28">
      <div className="mx-auto w-full max-w-6xl">
        <h2 id="pillars" className="max-w-2xl text-3xl font-extrabold sm:text-4xl">
          Compliance unlocks capital. <span className="text-mint">Delivery unlocks cashflow.</span>
        </h2>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          <article className="flex flex-col rounded-2xl border border-ink-line bg-ink-raised p-6">
            <div aria-hidden="true" className="rounded-xl bg-paper p-5 text-ink-soft">
              <dl className="flex flex-col gap-3">
                {LICENCES.map((licence) => (
                  <div
                    key={licence.label}
                    className="flex items-center justify-between border-t border-line-soft pt-3 first:border-0 first:pt-0"
                  >
                    <dt className="text-[13px] text-muted">{licence.label}</dt>
                    <dd className="text-[13px] font-semibold">{licence.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <h3 className="mt-6 text-xl font-bold">Compliance</h3>
            <p className="mt-2.5 text-[15px] leading-relaxed text-on-dark-muted">
              Built backwards from the buyer&rsquo;s sign-off. Every licence tracked, every step
              logged, every batch tested, all signed by a person.
            </p>
          </article>

          <article className="flex flex-col rounded-2xl border border-ink-line bg-ink-raised p-6">
            <div aria-hidden="true" className="rounded-xl bg-paper p-5 text-ink-soft">
              <div className="flex items-center justify-between">
                <b className="text-[13px]">Funding in steps</b>
                <span className="text-[12px] text-muted">Follows the proof</span>
              </div>
              <div className="mt-4 flex gap-1.5">
                {CAPITAL_PROOFS.map((proof) => (
                  <div key={proof} className="h-1.5 flex-1 rounded-full bg-check" />
                ))}
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {CAPITAL_PROOFS.map((proof) => (
                  <span
                    key={proof}
                    className="rounded-full bg-check-wash px-2.5 py-1 text-[12px] font-semibold text-check"
                  >
                    {proof}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1">
              <h3 className="text-xl font-bold">Capital</h3>
              <span className="rounded-full bg-amber-wash px-2.5 py-1 text-[12px] font-semibold text-[#8A4B00]">
                Built on compliance
              </span>
            </div>
            <p className="mt-2.5 text-[15px] leading-relaxed text-on-dark-muted">
              Designed to release funding in steps as each proof lands. No proof, no irreversible
              spend.
            </p>
          </article>

          <article className="flex flex-col rounded-2xl border border-ink-line bg-ink-raised p-6">
            <div aria-hidden="true" className="flex flex-col gap-3 rounded-xl bg-ink-soft p-5">
              <span className="rounded-lg bg-mint px-3 py-2 text-[13px] font-semibold text-ink">
                Delivery accepted
              </span>
              <span className="rounded-lg bg-paper px-3 py-2 text-[13px] font-semibold text-ink">
                Early payment
              </span>
              <span className="text-[12px] text-on-dark-muted">
                Coming soon. Register for early access.
              </span>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1">
              <h3 className="text-xl font-bold">Cashflow</h3>
              <span className="rounded-full bg-amber-wash px-2.5 py-1 text-[12px] font-semibold text-[#8A4B00]">
                Coming soon
              </span>
            </div>
            <p className="mt-2.5 text-[15px] leading-relaxed text-on-dark-muted">
              Designed to let you draw on an accepted invoice instead of waiting on payment terms.
            </p>
          </article>
        </div>

        <p className="mt-8 text-[13px] leading-relaxed text-on-dark-muted">
          Product screens show illustrative sample data. Capital and cashflow are coming soon.
          Register now for early access.
        </p>
      </div>
    </section>
  );
}
