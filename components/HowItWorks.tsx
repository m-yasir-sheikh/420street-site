"use client";

import { BarChart3, FileText, ShieldCheck } from "lucide-react";

const workflowItems = [
  {
    icon: FileText,
    title: "Business & Identity",
    description: "KYB, KYC and ownership information",
  },
  {
    icon: ShieldCheck,
    title: "Compliance Records",
    description: "Licences, certifications and supporting documents",
  },
  {
    icon: BarChart3,
    title: "Financial Profile",
    description: "Financials, funding needs and supporting records",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative border-t border-[#292929] bg-[#151515] py-20 text-[#E8E2DA] md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#B47B70]">
            — Built for Better Decisions
          </p>
          <h2 className="mt-5 max-w-3xl text-3xl font-bold leading-tight tracking-tight text-[#E8E2DA] sm:text-4xl md:text-5xl">
            The right information. Ready when capital providers need it.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#555555] sm:text-lg">
            Build one structured profile for compliance reviews and funding conversations.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
          {workflowItems.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="flex min-h-48 items-center gap-5 rounded-sm border border-[#292929] bg-[#0A0A0A] p-6 transition-colors duration-300 hover:border-[#B47B70]/80 sm:p-7"
              >
                <div className="flex h-16 w-16 shrink-0 items-center justify-center text-[#B47B70]">
                  <Icon className="h-12 w-12" strokeWidth={1.35} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold uppercase tracking-[0.04em] text-[#E8E2DA]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#E8E2DA]/60">
                    {item.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
