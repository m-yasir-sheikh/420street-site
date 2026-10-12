"use client";

import WaitlistForm from "./WaitlistForm";
import { Building2, Lock } from "lucide-react";

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
              Compliance is messy. <span className="bg-gradient-to-r from-[#B47B70] to-[#79514B] bg-clip-text text-transparent">Funding is slow.</span> We fix both.
            </h1>

            <p className="mb-9 max-w-xl text-base leading-relaxed text-[#E8E2DA]/75 sm:text-lg">
              You upload only what matters. Lenders get the full picture instantly. The compliance-to-funding workflow finally moves.
            </p>

            <div className="max-w-xl rounded-sm border border-[#292929] bg-[#151515]/90 p-4 shadow-2xl glass-panel sm:p-5">
              <div className="mb-4">
                <h2 className="text-sm font-semibold uppercase tracking-widest text-[#E8E2DA]">Get Early Access</h2>
                <p className="mt-1 text-xs text-[#999999]">For licensed operators, lenders and capital providers.</p>
              </div>
              <WaitlistForm buttonText="Request Early Access" placeholderText="Enter your work email" />
            </div>

            <div className="mt-5 flex items-center gap-2 text-xs text-[#999999]">
              <Lock className="h-3.5 w-3.5 text-[#B47B70]" />
              <span>Secure, permission-controlled access to business information.</span>
            </div>
          </div>

          {/* Product preview */}
          <div className="relative mx-auto w-full max-w-[560px] lg:mx-0">
            <div className="absolute -inset-8 rounded-full bg-[#B47B70]/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-sm border border-[#292929] bg-[#111111] shadow-2xl glow-rosegold">
              <div className="flex items-center justify-between border-b border-[#292929] px-3 py-2.5 sm:px-4">
                <div>
                  <p className="text-[9px] font-semibold tracking-[0.16em] text-[#E8E2DA] sm:text-[10px]">420 STREET</p>
                  <p className="mt-0.5 text-[8px] uppercase tracking-[0.12em] text-[#999999]">Sample operator workspace</p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-[9px] font-mono uppercase tracking-wider text-[#999999] sm:text-[10px]">
                  <Lock className="h-3 w-3 text-[#B47B70]" /> Illustrative data
                </span>
              </div>

              <div className="min-h-[340px] p-3 sm:p-4">
                  <div className="mb-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
                    <div className="rounded-sm border border-[#292929] bg-[#151515] p-2">
                      <p className="text-[9px] text-[#E8E2DA]">Compliance</p>
                      <p className="mt-1 inline-block border border-[#B47B70]/60 px-1.5 py-0.5 text-[7px] font-semibold uppercase tracking-wider text-[#D6A077]">Complete</p>
                    </div>
                    <div className="rounded-sm border border-[#292929] bg-[#151515] p-2">
                      <p className="text-[9px] text-[#E8E2DA]">Accounting</p>
                      <p className="mt-1 inline-block border border-[#B47B70]/60 bg-[#B47B70]/10 px-1.5 py-0.5 text-[7px] font-semibold uppercase tracking-wider text-[#D6A077]">Current</p>
                    </div>
                    <div className="rounded-sm border border-[#292929] bg-[#151515] p-2">
                      <p className="text-[9px] text-[#E8E2DA]">Operations</p>
                      <p className="mt-1 inline-block border border-[#B47B70]/60 bg-[#B47B70]/10 px-1.5 py-0.5 text-[7px] font-semibold uppercase tracking-wider text-[#D6A077]">Active</p>
                    </div>
                    <div className="rounded-sm border border-[#292929] bg-[#151515] p-2">
                      <p className="text-[9px] text-[#E8E2DA]">Funding</p>
                      <p className="mt-1 inline-block border border-[#B47B70]/60 bg-[#B47B70]/10 px-1.5 py-0.5 text-[7px] font-semibold uppercase tracking-wider text-[#D6A077]">Active</p>
                    </div>
                  </div>

                  <div className="grid gap-2 sm:grid-cols-[1.15fr_0.85fr]">
                    <section className="rounded-sm border border-[#292929] bg-[#151515] p-3">
                      <p className="text-[7px] font-mono uppercase tracking-[0.18em] text-[#B47B70]">Your workspace is ready</p>
                      <h2 className="mt-2 text-sm font-medium uppercase leading-snug tracking-wide text-[#E8E2DA] sm:text-base">
                        A complete profile. Funding in motion.
                      </h2>
                      <p className="mt-2 text-[9px] leading-relaxed text-[#999999]">
                        Sample workspace: 5 of 5 profile sections complete, with an active illustrative facility.
                      </p>
                      <div className="mt-3 grid grid-cols-3 gap-1.5">
                        <div className="rounded-sm border border-[#292929] bg-[#0A0A0A] p-1.5">
                          <p className="text-[7px] uppercase tracking-wider text-[#999999]">Facility</p>
                          <p className="mt-1 text-[9px] font-semibold text-[#E8E2DA]">$2.4M</p>
                        </div>
                        <div className="rounded-sm border border-[#292929] bg-[#0A0A0A] p-1.5">
                          <p className="text-[7px] uppercase tracking-wider text-[#999999]">Drawn</p>
                          <p className="mt-1 text-[9px] font-semibold text-[#E8E2DA]">$1.75M</p>
                        </div>
                        <div className="rounded-sm border border-[#292929] bg-[#0A0A0A] p-1.5">
                          <p className="text-[7px] uppercase tracking-wider text-[#999999]">Available</p>
                          <p className="mt-1 text-[9px] font-semibold text-[#E8E2DA]">$650K</p>
                        </div>
                      </div>
                      <div className="mt-3 flex flex-wrap gap-2">
                        <span className="bg-[#B47B70] px-2 py-1.5 text-[7px] font-bold uppercase tracking-wider text-[#0A0A0A]">View facility</span>
                        <span className="border border-[#79514B] px-2 py-1.5 text-[7px] font-semibold uppercase tracking-wider text-[#B47B70]">View profile</span>
                      </div>
                    </section>

                    <section className="rounded-sm border border-[#292929] bg-[#151515] p-3">
                      <p className="text-[7px] font-mono uppercase tracking-[0.18em] text-[#999999]">Readiness</p>
                      <div className="mt-3 space-y-3 text-[8px]">
                        <div className="flex items-start justify-between gap-2">
                          <div><p className="text-[#E8E2DA]">Company workspace</p><p className="mt-0.5 text-[#999999]">Demo Operator Co.</p></div>
                          <span className="border border-[#292929] px-1.5 py-1 text-[7px] font-semibold uppercase tracking-wider text-[#E8E2DA]">Complete</span>
                        </div>
                        <div className="flex items-start justify-between gap-2">
                          <div><p className="text-[#E8E2DA]">Identity verification</p><p className="mt-0.5 text-[#999999]">Verified</p></div>
                          <span className="border border-[#B47B70]/60 bg-[#B47B70]/10 px-1.5 py-1 text-[7px] font-semibold uppercase tracking-wider text-[#D6A077]">Complete</span>
                        </div>
                        <div className="flex items-start justify-between gap-2">
                          <div><p className="text-[#E8E2DA]">Operator licence</p><p className="mt-0.5 leading-relaxed text-[#999999]">12 sample records on file</p></div>
                          <span className="border border-[#B47B70]/60 bg-[#B47B70]/10 px-1.5 py-1 text-[7px] font-semibold uppercase tracking-wider text-[#D6A077]">Current</span>
                        </div>
                      </div>
                    </section>
                  </div>

                  <div className="mt-2 rounded-sm border border-[#292929] bg-[#151515] px-3 py-2">
                    <p className="text-[7px] font-mono uppercase tracking-[0.18em] text-[#999999]">Recent activity</p>
                    <p className="mt-1 text-[8px] leading-relaxed text-[#999999]">Sample activity: $250K facility draw recorded 14 Sep 2026.</p>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
