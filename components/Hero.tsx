"use client";

import WaitlistForm from "./WaitlistForm";
import { ArrowUpRight, Building2, CheckCircle2, Lock, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section id="waitlist" className="relative overflow-hidden pb-20 pt-32 md:pb-28 md:pt-44">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#B47B70]/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-[#79514B]/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Grid line pattern background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#29292915_1px,transparent_1px),linear-gradient(to_bottom,#29292915_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(420px,0.9fr)] lg:gap-20">
          <div className="max-w-2xl">
            {/* Top Tagline */}
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#292929] bg-[#151515] px-4 py-1.5 text-xs font-mono uppercase tracking-widest text-[#B47B70]">
              <Building2 className="h-3.5 w-3.5" />
              <span>Compliance + Capital Infrastructure</span>
            </div>

            <h1 className="mb-6 text-4xl font-bold leading-[1.12] tracking-tight text-[#E8E2DA] sm:text-5xl md:text-6xl">
              Roll your compliance and <span className="bg-gradient-to-r from-[#B47B70] to-[#79514B] bg-clip-text text-transparent">capital needs into one.</span>
            </h1>

            <p className="mb-9 max-w-xl text-base leading-relaxed text-[#E8E2DA]/75 sm:text-lg">
              420 Street helps licensed cannabis and hemp operators organise business, compliance and financial information and connect with capital providers. Lenders can review opportunities and manage the process in one place.
            </p>

            <div className="max-w-xl rounded-sm border border-[#292929] bg-[#151515]/90 p-4 shadow-2xl glass-panel sm:p-5">
              <div className="mb-4">
                <h2 className="text-sm font-semibold uppercase tracking-widest text-[#E8E2DA]">Get Early Access</h2>
                <p className="mt-1 text-xs text-[#555555]">For licensed operators, lenders and capital providers.</p>
              </div>
              <WaitlistForm buttonText="Request Early Access" placeholderText="Enter your work email" />
            </div>

            <div className="mt-5 flex items-center gap-2 text-xs text-[#555555]">
              <Lock className="h-3.5 w-3.5 text-[#B47B70]" />
              <span>Bank-grade security &amp; permissioned data encryption.</span>
            </div>
          </div>

          {/* Product preview */}
          <div className="relative mx-auto w-full max-w-[560px] lg:mx-0">
            <div className="absolute -inset-8 rounded-full bg-[#B47B70]/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-sm border border-[#555555]/60 bg-[#111111] p-2 shadow-2xl glow-rosegold">
              <div className="flex items-center justify-between border-b border-[#292929] px-4 py-3 text-[10px] font-mono uppercase tracking-widest text-[#555555]">
                <span>420 Street / Facility Vault</span>
                <span className="flex items-center gap-1.5 text-[#B47B70]"><Lock className="h-3 w-3" /> Secure</span>
              </div>

              <div className="relative p-5 sm:p-7">
                <div className="absolute right-8 top-10 h-32 w-32 rounded-full bg-[#79514B]/20 blur-3xl" />
                <div className="relative flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#555555]">Active Facility</p>
                    <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[#E8E2DA] sm:text-3xl">Facility Vault</h2>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-[#B47B70]/40 bg-[#B47B70]/10 px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider text-[#B47B70]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#B47B70]" /> Compliant
                  </span>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-3">
                  <div className="rounded-sm border border-[#292929] bg-[#151515] p-4">
                    <p className="text-[10px] font-mono uppercase tracking-wider text-[#555555]">Facility Amount</p>
                    <p className="mt-2 text-xl font-semibold tracking-tight text-[#E8E2DA]">$12.5M</p>
                    <p className="mt-1 text-[10px] text-[#555555]">Committed capital</p>
                  </div>
                  <div className="rounded-sm border border-[#292929] bg-[#151515] p-4">
                    <p className="text-[10px] font-mono uppercase tracking-wider text-[#555555]">Risk Monitor</p>
                    <p className="mt-2 text-xl font-semibold tracking-tight text-[#B47B70]">Low</p>
                    <p className="mt-1 text-[10px] text-[#555555]">No active exceptions</p>
                  </div>
                </div>

                <div className="mt-3 rounded-sm border border-[#292929] bg-[#151515] p-4">
                  <div className="flex items-center justify-between">
                    <p className="text-[10px] font-mono uppercase tracking-wider text-[#555555]">Verification Status</p>
                    <CheckCircle2 className="h-4 w-4 text-[#B47B70]" />
                  </div>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    <div className="flex items-center gap-2 text-xs text-[#E8E2DA]/80"><ShieldCheck className="h-4 w-4 text-[#B47B70]" /> Dual-layer KYB/KYC</div>
                    <div className="flex items-center gap-2 text-xs text-[#E8E2DA]/80"><CheckCircle2 className="h-4 w-4 text-[#B47B70]" /> State license active</div>
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-between border-t border-[#292929] pt-4 text-[10px] font-mono uppercase tracking-wider text-[#555555]">
                  <span>Ledger synced 2 min ago</span>
                  <ArrowUpRight className="h-4 w-4 text-[#B47B70]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
