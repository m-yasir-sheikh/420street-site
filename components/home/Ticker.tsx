const ITEMS = [
  "Licences and expiry dates",
  "Buyer checks",
  "Batch tests against spec",
  "GACP and GMP steps",
  "Funding tranches",
  "Delivery acceptance",
  "Invoices and repayments",
];

export default function Ticker() {
  return (
    <div className="overflow-hidden border-y border-line-soft bg-paper-muted py-4" aria-hidden="true">
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 gap-10">
            {ITEMS.map((item) => (
              <span
                key={item}
                className="flex items-center gap-2.5 text-[15px] font-medium text-muted"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-mint" />
                {item}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
