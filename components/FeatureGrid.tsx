"use client";

import { ShieldCheck, Share2, Database, CheckCircle2 } from "lucide-react";

export default function FeatureGrid() {
  const pillars = [
    {
      icon: ShieldCheck,
      title: "Verified Compliance",
      badge: "Institutional Trust",
      description:
        "Dual-layer KYB/KYC, state licenses, and seed-to-sale data verification.",
      points: [
        "Automated KYB & UBO screening",
        "Real-time state license status tracking",
        "Direct seed-to-sale API verification",
      ],
    },
    {
      icon: Share2,
      title: "Neutral Workflow",
      badge: "Permissioned Sharing",
      description:
        "Secure permissions for operators to share data packs directly with selected lenders.",
      points: [
        "Granular room & data vault access",
        "Direct-to-lender data pack sharing",
        "Encrypted diligence audit trails",
      ],
    },
    {
      icon: Database,
      title: "Immutable Tracking",
      badge: "Audit-Ready Ledger",
      description:
        "Bank-grade ledger monitoring for external disbursements and repayments.",
      points: [
        "Real-time facility monitoring",
        "Verifiable disbursement event logs",
        "Automated repayment schedules & alerts",
      ],
    },
  ];

  return (
    <section id="features" className="py-20 md:py-28 bg-[#0A0A0A] relative border-t border-[#292929]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-mono text-[#B47B70] tracking-widest uppercase mb-2">
            — Core Capabilities
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#E8E2DA]">
            Three Pillars of Specialized Infrastructure
          </h2>
          <p className="text-sm sm:text-base text-[#555555] mt-3">
            Designed specifically to resolve institutional friction in complex compliance environments.
          </p>
        </div>

        {/* 3-Pillar Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="group relative p-8 bg-[#151515] border border-[#292929] hover:border-[#B47B70]/60 transition-all duration-300 rounded-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#292929]">
                    <div className="p-3 bg-[#0A0A0A] border border-[#292929] rounded-sm group-hover:border-[#B47B70]/40 transition-colors">
                      <Icon className="w-6 h-6 text-[#B47B70]" />
                    </div>
                    <span className="text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 bg-[#292929]/50 text-[#E8E2DA]/80 border border-[#292929]">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold tracking-tight text-[#E8E2DA] mb-3">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-[#E8E2DA]/80 leading-relaxed mb-6 font-normal">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#292929]/60">
                  <ul className="space-y-2.5">
                    {pillar.points.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2 text-xs text-[#E8E2DA]/70">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#B47B70] shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Subtle bottom hover line */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#B47B70] to-[#79514B] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
