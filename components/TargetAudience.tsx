"use client";

import { Building, Landmark, Check, ArrowRight } from "lucide-react";

export default function TargetAudience() {
  const capitalProviderBenefits = [
    "Standardized due diligence & compliance packs",
    "Real-time facility performance & covenant monitoring",
    "Automated license verification and risk alerts",
    "Immutable transaction ledger for disbursements & repayments",
  ];

  const operatorBenefits = [
    "One-time KYB/KYC verification with direct data control",
    "Selective, permissioned sharing with prospective lenders",
    "Streamlined facility management & reduced audit overhead",
    "Direct pathway to institutional debt and growth capital",
  ];

  return (
    <section id="audience" className="py-20 md:py-28 bg-[#151515] relative border-t border-[#292929]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-mono text-[#B47B70] tracking-widest uppercase mb-2">
            — Ecosystem Alignment
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#E8E2DA]">
            Built for Capital &amp; Operations
          </h2>
          <p className="text-sm sm:text-base text-[#555555] mt-3">
            Providing a neutral, secure infrastructure that aligns the requirements of institutional debt with operational realities.
          </p>
        </div>

        {/* 2-Card Audience Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1: Capital Providers */}
          <div className="p-8 bg-[#0A0A0A] border border-[#292929] hover:border-[#B47B70]/60 transition-all duration-300 rounded-sm flex flex-col justify-between relative group">
            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#292929]">
                <div className="p-3 bg-[#151515] border border-[#292929] rounded-sm text-[#B47B70]">
                  <Landmark className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-[#B47B70] uppercase tracking-widest block">
                    Institutional Debt
                  </span>
                  <h3 className="text-xl font-semibold tracking-tight text-[#E8E2DA]">
                    Capital Providers
                  </h3>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#E8E2DA]/80 leading-relaxed mb-6">
                Deploy capital with confidence. Eliminate manual diligence bottlenecks and monitor borrower compliance continuously post-closing.
              </p>

              <ul className="space-y-3 mb-8">
                {capitalProviderBenefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#E8E2DA]/90">
                    <div className="p-1 rounded-full bg-[#151515] border border-[#B47B70]/40 text-[#B47B70] shrink-0 mt-0.5">
                      <Check className="w-3 h-3" />
                    </div>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="#waitlist"
              className="inline-flex items-center justify-between w-full p-4 bg-[#151515] border border-[#292929] hover:border-[#B47B70] text-xs font-mono uppercase tracking-widest text-[#E8E2DA] transition-all duration-200 group-hover:bg-[#151515]/80"
            >
              <span>Access Lender Onboarding</span>
              <ArrowRight className="w-4 h-4 text-[#B47B70]" />
            </a>
          </div>

          {/* Card 2: Operators */}
          <div className="p-8 bg-[#0A0A0A] border border-[#292929] hover:border-[#B47B70]/60 transition-all duration-300 rounded-sm flex flex-col justify-between relative group">
            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#292929]">
                <div className="p-3 bg-[#151515] border border-[#292929] rounded-sm text-[#B47B70]">
                  <Building className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-[#B47B70] uppercase tracking-widest block">
                    Licensed Entities
                  </span>
                  <h3 className="text-xl font-semibold tracking-tight text-[#E8E2DA]">
                    Operators
                  </h3>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#E8E2DA]/80 leading-relaxed mb-6">
                Take control of your financial data. Securely share verified compliance packs with multiple capital sources without repeating cumbersome paperwork.
              </p>

              <ul className="space-y-3 mb-8">
                {operatorBenefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#E8E2DA]/90">
                    <div className="p-1 rounded-full bg-[#151515] border border-[#B47B70]/40 text-[#B47B70] shrink-0 mt-0.5">
                      <Check className="w-3 h-3" />
                    </div>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="#waitlist"
              className="inline-flex items-center justify-between w-full p-4 bg-[#151515] border border-[#292929] hover:border-[#B47B70] text-xs font-mono uppercase tracking-widest text-[#E8E2DA] transition-all duration-200 group-hover:bg-[#151515]/80"
            >
              <span>Access Operator Portal</span>
              <ArrowRight className="w-4 h-4 text-[#B47B70]" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
