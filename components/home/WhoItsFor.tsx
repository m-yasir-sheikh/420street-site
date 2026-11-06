import Link from "next/link";

const AUDIENCES = [
  {
    id: "growers",
    title: "Growers",
    body: "Prove it once and show every buyer. Funding and early payment are coming soon.",
    cta: "Build your record",
    preview: (
      <>
        <div className="flex items-center justify-between">
          <b className="text-[13px]">Your record</b>
          <span className="text-[12px] font-semibold text-check">5 of 6 ✓</span>
        </div>
        <div className="mt-4 h-1.5 w-full rounded-full bg-line-soft">
          <div className="h-1.5 w-5/6 rounded-full bg-mint" />
        </div>
      </>
    ),
  },
  {
    id: "importers",
    title: "Importers",
    body: "The records your Qualified Person asks for before releasing a batch, in one place.",
    cta: "Tell us what you check",
    preview: (
      <div className="flex flex-col gap-2.5">
        {["Spec match", "GACP / GMP chain", "Ready to release"].map((item) => (
          <div key={item} className="flex items-center justify-between">
            <span className="text-[13px] text-muted">{item}</span>
            <b className="text-[13px] text-check">✓</b>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "lenders",
    title: "Lenders",
    body: "See the proof before you fund. Partner with us early and help shape the product.",
    cta: "Partner with us",
    preview: (
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-[12px] text-muted">Shared record</span>
          <b className="text-[13px]">Batch HG-2611</b>
        </div>
        <span className="rounded-lg bg-ink px-3 py-1.5 text-[12px] font-semibold text-paper">
          View
        </span>
      </div>
    ),
  },
];

export default function WhoItsFor() {
  return (
    <section id="who" className="scroll-mt-8 bg-paper-muted px-6 py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl">
        <h2 className="text-3xl font-extrabold sm:text-4xl">One record. Every side of the deal.</h2>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {AUDIENCES.map((audience) => (
            <article
              key={audience.id}
              id={audience.id}
              className="flex scroll-mt-8 flex-col rounded-2xl bg-paper p-6"
            >
              <div aria-hidden="true" className="rounded-xl bg-paper-muted p-5">
                {audience.preview}
              </div>
              <h3 className="mt-6 text-xl font-bold">{audience.title}</h3>
              <p className="mt-2.5 flex-1 text-[15px] leading-relaxed text-muted">
                {audience.body}
              </p>
              <Link
                href="/contact"
                className="mt-5 text-[15px] font-semibold underline underline-offset-4"
              >
                {audience.cta} &rarr;
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
