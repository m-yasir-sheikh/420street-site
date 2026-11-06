const STEPS = [
  {
    title: "Grow",
    body: "GACP farm, every step logged",
    icon: (
      <>
        <path d="M12 21v-8" />
        <path d="M12 13c0-4 3-7 7-7 0 4-3 7-7 7z" />
        <path d="M12 15c0-3-2.5-5.5-6-5.5 0 3 2.5 5.5 6 5.5z" />
      </>
    ),
  },
  {
    title: "Test",
    body: "Results matched to the buyer\u2019s spec",
    icon: (
      <>
        <path d="M9 3h6" />
        <path d="M10 3v6l-5 9a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-9V3" />
        <path d="M7.5 15h9" />
      </>
    ),
  },
  {
    title: "Ship",
    body: "Through an EU-GMP partner",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18" />
        <path d="M12 3a14 14 0 0 1 0 18" />
        <path d="M12 3a14 14 0 0 0 0 18" />
      </>
    ),
  },
  {
    title: "Release",
    body: "Importer\u2019s Qualified Person signs off",
    icon: (
      <>
        <path d="M3 21h18" />
        <path d="M5 21V8l7-4 7 4v13" />
        <path d="M9 21v-6h6v6" />
      </>
    ),
  },
  {
    title: "Get paid",
    body: "When the buyer accepts, not when the invoice is due",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M15 9.5c-.5-1-1.6-1.5-3-1.5-1.7 0-3 .9-3 2s1.3 1.7 3 2 3 .9 3 2-1.3 2-3 2c-1.4 0-2.5-.5-3-1.5" />
        <path d="M12 6v2" />
        <path d="M12 16v2" />
      </>
    ),
  },
];

export default function Route() {
  return (
    <section className="bg-paper px-6 py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl">
        <h2 id="route" className="max-w-2xl text-3xl font-extrabold sm:text-4xl">
          From farm to funded, on one record.
        </h2>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
          Every step from the grow to the buyer&rsquo;s payment is checked, signed and visible to
          the people who need it.
        </p>

        <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {STEPS.map((step, index) => (
            <li
              key={step.title}
              className="relative rounded-2xl border border-line-soft bg-paper-muted p-6"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-ink text-mint">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                  aria-hidden="true"
                >
                  {step.icon}
                </svg>
              </div>
              <p className="mt-5 text-[13px] font-semibold text-muted">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-1 text-xl font-bold">{step.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
