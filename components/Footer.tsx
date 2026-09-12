"use client";

import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0A0A0A] border-t border-[#292929] pt-16 pb-12 text-[#E8E2DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#292929]">
          
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-4">
            <div className="relative h-9 w-40">
              <Image
                src="/logo-white.png"
                alt="420 STREET"
                fill
                className="object-contain object-left"
              />
            </div>
            <p className="text-xs text-[#555555] max-w-md leading-relaxed">
              420 Street provides enterprise compliance and workflow software for specialized finance institutions and operators.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#B47B70] mb-4">
              Infrastructure
            </h4>
            <ul className="space-y-2.5 text-xs text-[#E8E2DA]/80 font-mono uppercase">
              <li>
                <a href="#waitlist" className="hover:text-[#B47B70] transition-colors">
                  Early Access
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-[#B47B70] transition-colors">
                  Capabilities
                </a>
              </li>
              <li>
                <a href="#audience" className="hover:text-[#B47B70] transition-colors">
                  Solutions
                </a>
              </li>
            </ul>
          </div>

          {/* Regulatory Notice */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#B47B70] mb-4">
              Compliance
            </h4>
            <p className="text-[11px] text-[#555555] font-mono leading-relaxed">
              Bank-grade security standards &amp; permissioned data encryption.
            </p>
          </div>

        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-[11px] font-mono text-[#555555] gap-4">
          <div className="text-center md:text-left">
            <p className="text-[#E8E2DA]/60 italic mb-1">
              &ldquo;420 Street is a technology software provider, not a bank, broker, or financial intermediary.&rdquo;
            </p>
            <p>&copy; {year} 420 STREET. All rights reserved.</p>
          </div>

          <div className="flex items-center gap-6">
            <span className="hover:text-[#E8E2DA] cursor-pointer">Privacy Policy</span>
            <span className="hover:text-[#E8E2DA] cursor-pointer">Terms of Service</span>
            <span className="text-[#B47B70]">Loops.so Secured</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
