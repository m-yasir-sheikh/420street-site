"use client";

import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#292929] bg-[#0A0A0A] pb-10 pt-16 text-[#E8E2DA]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 border-b border-[#292929] pb-12 md:grid-cols-12 md:gap-10">
          {/* Brand */}
          <div className="space-y-5 md:col-span-6">
            <div className="relative h-9 w-40">
              <Image
                src="/logo-white.png"
                alt="420 STREET"
                fill
                sizes="160px"
                className="object-contain object-left"
              />
            </div>
            <p className="max-w-md text-sm leading-relaxed text-[#555555]">
              420 Street provides compliance, information-sharing and deal-workflow software for cannabis and hemp operators and capital providers.
            </p>
          </div>

          {/* Platform links */}
          <div className="md:col-span-3">
            <h2 className="mb-5 text-xs font-mono uppercase tracking-[0.18em] text-[#B47B70]">
              Platform
            </h2>
            <ul className="space-y-3 text-sm text-[#E8E2DA]/75">
              <li>
                <a href="#waitlist" className="transition-colors hover:text-[#B47B70]">
                  Early Access
                </a>
              </li>
              <li>
                <a href="#features" className="transition-colors hover:text-[#B47B70]">
                  Capabilities
                </a>
              </li>
              <li>
                <a href="#audience" className="transition-colors hover:text-[#B47B70]">
                  Solutions
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="transition-colors hover:text-[#B47B70]">
                  How It Works
                </a>
              </li>
            </ul>
          </div>

          {/* Data & access */}
          <div className="md:col-span-3">
            <h2 className="mb-5 text-xs font-mono uppercase tracking-[0.18em] text-[#B47B70]">
              Data &amp; Access
            </h2>
            <p className="text-sm leading-relaxed text-[#555555]">
              Operators control what they share. Capital providers access only the information they need.
            </p>
          </div>
        </div>

        {/* Disclaimer and legal links */}
        <div className="flex flex-col gap-6 pt-8 text-xs text-[#555555] md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl space-y-2 leading-relaxed">
            <p className="text-[#E8E2DA]/65">
              420 Street is a software provider. We do not provide financial advice, lending, brokerage or investment services.
            </p>
            <p>&copy; {year} 420 STREET. All rights reserved.</p>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <a href="/privacy" className="transition-colors hover:text-[#E8E2DA]">Privacy Policy</a>
            <a href="/terms" className="transition-colors hover:text-[#E8E2DA]">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
