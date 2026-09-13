"use client";

import { ArrowRight, Building2, Check, Landmark } from "lucide-react";

export default function TargetAudience() {
  const capitalProviderBenefits = [
    "Structured due diligence and compliance profiles",
    "Financial information and supporting documents",
    "Controlled access and document history",
    "Deal terms, repayments and status tracking",
  ];

  const operatorBenefits = [
    "One structured business and compliance profile",
    "Controlled sharing with selected capital providers",
    "Funding requests and supporting documents",
    "Terms, repayments and progress in one place",
  ];

  return (
    <section id="audience" className="relative border-t border-[#292929] bg-[#0A0A0A] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 max-w-3xl md:mb-16">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#B47B70]">— Ecosystem Alignment</p>
          <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-[#E8E2DA] sm:text-4xl md:text-5xl">
            Built for Capital &amp; Operations
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[#555555] sm:text-lg">
            Providing a neutral, secure infrastructure that aligns the requirements of institutional debt with operational realities.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          {/* Capital providers card */}
          <article className="group rounded-sm border border-[#292929] bg-[#0A0A0A] p-6 transition-colors duration-300 hover:border-[#B47B70]/60 sm:p-8 md:p-10">
            <div className="flex items-start gap-5 border-b border-[#292929] pb-7">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-sm border border-[#292929] bg-[#151515] text-[#B47B70]">
                <Landmark className="h-8 w-8" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#B47B70]">For Capital Providers</p>
                <h2 className="mt-2 text-3xl font-semibold tracking-tight text-[#E8E2DA] sm:text-4xl">Review Opportunities</h2>
              </div>
            </div>

            <p className="mt-8 max-w-3xl text-base leading-relaxed text-[#E8E2DA]/75 sm:text-lg">
              Access structured business, compliance and financial information. Manage review, terms and progress in one place.
            </p>

            <ul className="mt-8 grid gap-5 sm:grid-cols-2">
              {capitalProviderBenefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3 text-sm leading-relaxed text-[#E8E2DA]/80 sm:text-base">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#B47B70]/50 text-[#B47B70]">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <a href="#waitlist" className="mt-10 flex items-center justify-between border border-[#292929] bg-[#151515] px-5 py-4 text-xs font-mono uppercase tracking-[0.16em] text-[#E8E2DA] transition-colors duration-300 hover:border-[#B47B70]">
              <span>Request Provider Access</span>
              <ArrowRight className="h-5 w-5 text-[#B47B70]" />
            </a>
          </article>

          {/* Operators card */}
          <article className="group rounded-sm border border-[#292929] bg-[#0A0A0A] p-6 transition-colors duration-300 hover:border-[#B47B70]/60 sm:p-8 md:p-10">
            <div className="flex items-start gap-5 border-b border-[#292929] pb-7">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-sm border border-[#292929] bg-[#151515] text-[#B47B70]">
                <Building2 className="h-8 w-8" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#B47B70]">For Operators</p>
                <h2 className="mt-2 text-3xl font-semibold tracking-tight text-[#E8E2DA] sm:text-4xl">Present Your Business</h2>
              </div>
            </div>

            <p className="mt-8 max-w-3xl text-base leading-relaxed text-[#E8E2DA]/75 sm:text-lg">
              Organise business, compliance and financial information once. Share relevant records with selected capital providers.
            </p>

            <ul className="mt-8 grid gap-5 sm:grid-cols-2">
              {operatorBenefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3 text-sm leading-relaxed text-[#E8E2DA]/80 sm:text-base">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#B47B70]/50 text-[#B47B70]">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <a href="#waitlist" className="mt-10 flex items-center justify-between border border-[#292929] bg-[#151515] px-5 py-4 text-xs font-mono uppercase tracking-[0.16em] text-[#E8E2DA] transition-colors duration-300 hover:border-[#B47B70]">
              <span>Request Operator Access</span>
              <ArrowRight className="h-5 w-5 text-[#B47B70]" />
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
