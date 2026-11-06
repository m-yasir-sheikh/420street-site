const COLUMNS = ["Compliance consultant", "Bank loan", "Wait for the buyer", "420 Street"];

const ROWS = [
  { label: "Export-ready record", values: ["✓", "—", "—", "✓"] },
  { label: "Funds the batch", values: ["—", "Usually needs collateral", "—", "Built on compliance"] },
  { label: "Paid on delivery", values: ["—", "—", "When the invoice is due", "Coming soon"] },
  { label: "One record for buyers and lenders", values: ["—", "—", "—", "✓"] },
];

export default function Comparison() {
  return (
    <section className="bg-paper px-6 py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl">
        <h2 id="compare" className="max-w-3xl text-3xl font-extrabold sm:text-4xl">
          Most compliance stops at the certificate.{" "}
          <span className="text-check">Ours starts there.</span>
        </h2>

        <div className="mt-12 overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <caption className="sr-only">
              How 420 Street compares with a compliance consultant, a bank loan, and waiting for
              the buyer
            </caption>
            <thead>
              <tr>
                <th scope="col" className="w-1/3 pb-4" />
                {COLUMNS.map((column) => (
                  <th
                    key={column}
                    scope="col"
                    className={`pb-4 text-[13px] font-semibold tracking-wide uppercase ${
                      column === "420 Street" ? "text-ink" : "text-muted"
                    }`}
                  >
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row) => (
                <tr key={row.label} className="border-t border-line">
                  <th scope="row" className="py-5 pr-4 text-[15px] font-semibold">
                    {row.label}
                  </th>
                  {row.values.map((value, index) => (
                    <td
                      key={`${row.label}-${COLUMNS[index]}`}
                      className={`py-5 pr-4 text-[15px] ${
                        index === COLUMNS.length - 1
                          ? "font-semibold text-check"
                          : "text-muted"
                      }`}
                    >
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-8 text-[13px] text-muted">
          Capital and cashflow are coming soon, subject to approvals.
        </p>
      </div>
    </section>
  );
}
