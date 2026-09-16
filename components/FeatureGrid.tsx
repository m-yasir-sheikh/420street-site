"use client";

import { CheckCircle2, Database, Share2, ShieldCheck } from "lucide-react";

export default function FeatureGrid() {
  const pillars = [
    {
      icon: ShieldCheck,
      label: "Structured Due Diligence",
      title: "Compliance Profile",
      description:
        "Australia, USA, Thailand, Germany and other regulated international markets.",
      points: [
        "Business, ownership and identity information",
        "Licence and certification records",
        "Batch and supply-chain documentation",
      ],
    },
    {
      icon: Share2,
      label: "Permissioned Sharing",
      title: "Controlled Access",
      description:
        "Operators choose which information to share with selected capital providers.",
      points: [
        "Role-based access to relevant records",
        "Direct capital provider sharing",
        "Document access history",
      ],
    },
    {
      icon: Database,
      label: "Transaction Records",
      title: "Deal Tracking",
      description:
        "Track funding completed outside 420 Street and repayment progress in one place.",
      points: [
        "Recorded funding and repayment events",
        "Key documents and agreed terms",
        "Repayment schedules and status updates",
      ],
    },
  ];

  return (
    <section id="features" className="relative border-t border-[#292929] bg-[#151515] py-20 text-[#E8E2DA] md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 max-w-3xl md:mb-16">
          <div className="mb-3 text-xs font-mono uppercase tracking-[0.2em] text-[#B47B70]">
            — Core Capabilities
          </div>
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#E8E2DA] sm:text-4xl md:text-5xl">
            Three Pillars of Connected Infrastructure
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#555555] sm:text-lg">
            Built to organise the information and workflows behind compliance and capital decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 lg:gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;

            return (
              <article
                key={pillar.title}
                className="group relative rounded-sm border border-[#292929] bg-[#0A0A0A] p-6 text-[#E8E2DA] transition-colors duration-300 hover:border-[#B47B70]/60 sm:p-8"
              >
                <div className="mb-8 flex items-center justify-between gap-4 border-b border-[#292929] pb-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-sm border border-[#292929] bg-[#0A0A0A] text-[#B47B70] transition-colors duration-300 group-hover:border-[#B47B70]/50">
                    <Icon className="h-7 w-7" strokeWidth={1.5} />
                  </div>
                  <span className="border border-[#292929] bg-[#1c1c1c] px-3 py-2 text-right text-[10px] font-mono uppercase tracking-[0.16em] text-[#E8E2DA]/80">
                    {pillar.label}
                  </span>
                </div>

                <h3 className="text-2xl font-semibold tracking-tight text-[#E8E2DA]">
                  {pillar.title}
                </h3>
                <p className="mt-4 min-h-[78px] text-base leading-relaxed text-[#E8E2DA]/70">
                  {pillar.description}
                </p>

                <div className="mt-7 border-t border-[#292929] pt-6">
                  <ul className="space-y-4">
                    {pillar.points.map((point) => (
                      <li key={point} className="flex items-start gap-3 text-sm leading-relaxed text-[#E8E2DA]/75">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#B47B70]" strokeWidth={1.6} />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#B47B70] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
