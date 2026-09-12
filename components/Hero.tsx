"use client";

import WaitlistForm from "./WaitlistForm";
import { ShieldCheck, Lock, Activity, Building2 } from "lucide-react";

export default function Hero() {
  return (
    <section id="waitlist" className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#B47B70]/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-[#79514B]/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Grid line pattern background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#29292915_1px,transparent_1px),linear-gradient(to_bottom,#29292915_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Top Tagline */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full bg-[#151515] border border-[#292929] text-xs font-mono tracking-widest text-[#B47B70] uppercase">
            <Building2 className="w-3.5 h-3.5 text-[#B47B70]" />
            <span>Specialized Finance Infrastructure</span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#E8E2DA] leading-[1.15] mb-6">
            Enterprise Compliance &amp; Workflow for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8E2DA] via-[#B47B70] to-[#79514B]">Specialized Finance</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-[#E8E2DA]/80 font-normal leading-relaxed mb-10 max-w-3xl mx-auto">
            The immutable ledger connecting institutional capital with verified operators. Streamline due diligence, manage facility workflows, and monitor risk—without regulatory friction.
          </p>

          {/* Embedded Waitlist Form */}
          <div className="max-w-xl mx-auto p-2 sm:p-3 bg-[#151515]/90 border border-[#292929] rounded-sm shadow-2xl glass-panel relative mb-12">
            <div className="p-4 sm:p-6">
              <div className="text-left mb-4">
                <h3 className="text-sm uppercase tracking-widest font-bold text-[#E8E2DA]">
                  Institutional Early Access
                </h3>
                <p className="text-xs text-[#555555] mt-1">
                  Onboarding for qualified lenders, capital providers, and licensed operators.
                </p>
              </div>

              <WaitlistForm buttonText="Request Early Access" placeholderText="Enter institutional or work email..." />
            </div>
          </div>

          {/* Security & Infrastructure Trust Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-[#292929]/80 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 p-3 bg-[#151515]/40 border border-[#292929]/50 rounded-sm">
              <ShieldCheck className="w-5 h-5 text-[#B47B70] shrink-0" />
              <div className="text-left">
                <div className="text-xs font-bold text-[#E8E2DA] uppercase">Dual-Layer KYB/KYC</div>
                <div className="text-[10px] text-[#555555]">Seed-to-Sale Verification</div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 p-3 bg-[#151515]/40 border border-[#292929]/50 rounded-sm">
              <Lock className="w-5 h-5 text-[#B47B70] shrink-0" />
              <div className="text-left">
                <div className="text-xs font-bold text-[#E8E2DA] uppercase">Permissioned Vaults</div>
                <div className="text-[10px] text-[#555555]">Granular Data Controls</div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 p-3 bg-[#151515]/40 border border-[#292929]/50 rounded-sm">
              <Activity className="w-5 h-5 text-[#B47B70] shrink-0" />
              <div className="text-left">
                <div className="text-xs font-bold text-[#E8E2DA] uppercase">Immutable Ledger</div>
                <div className="text-[10px] text-[#555555]">Bank-Grade Tracking</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
