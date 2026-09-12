"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import WaitlistForm from "./WaitlistForm";
import { Sparkles, Clock, Compass, Lock } from "lucide-react";

export default function VisionExperience() {
  // Live target countdown timer demo
  const [timeLeft, setTimeLeft] = useState({
    days: 42,
    hours: 18,
    minutes: 34,
    seconds: 20,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="experience" className="py-20 md:py-32 bg-[#151515] relative overflow-hidden border-t border-[#292929]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 2-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left column: Vision text & Countdown */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-[#0A0A0A] border border-[#292929] text-xs font-mono text-[#B47B70] uppercase">
              <Compass className="w-3.5 h-3.5" />
              <span>Vision &amp; Timeline</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-[#E8E2DA] leading-tight mb-6">
              A GLIMPSE INTO THE UPCOMING EXPERIENCE
            </h2>

            <p className="text-base text-[#E8E2DA]/80 leading-relaxed mb-8">
              Every detail of the 420 STREET platform is crafted to provide a seamless, sophisticated, and confidential experience. From curated drops to private lounge access, experience next-generation digital luxury.
            </p>

            {/* Countdown timer component */}
            <div className="mb-10 p-6 bg-[#0A0A0A] border border-[#292929] rounded-sm">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#B47B70] mb-4">
                <Clock className="w-4 h-4" />
                <span>Estimated Countdown to Official Opening</span>
              </div>

              <div className="grid grid-cols-4 gap-3 text-center">
                <div className="p-3 bg-[#151515] border border-[#292929] rounded-sm">
                  <span className="block text-2xl sm:text-3xl font-bold font-mono text-[#E8E2DA]">
                    {String(timeLeft.days).padStart(2, "0")}
                  </span>
                  <span className="text-[10px] text-[#555555] uppercase font-mono">Days</span>
                </div>
                <div className="p-3 bg-[#151515] border border-[#292929] rounded-sm">
                  <span className="block text-2xl sm:text-3xl font-bold font-mono text-[#E8E2DA]">
                    {String(timeLeft.hours).padStart(2, "0")}
                  </span>
                  <span className="text-[10px] text-[#555555] uppercase font-mono">Hours</span>
                </div>
                <div className="p-3 bg-[#151515] border border-[#292929] rounded-sm">
                  <span className="block text-2xl sm:text-3xl font-bold font-mono text-[#E8E2DA]">
                    {String(timeLeft.minutes).padStart(2, "0")}
                  </span>
                  <span className="text-[10px] text-[#555555] uppercase font-mono">Mins</span>
                </div>
                <div className="p-3 bg-[#151515] border border-[#292929] rounded-sm">
                  <span className="block text-2xl sm:text-3xl font-bold font-mono text-[#B47B70]">
                    {String(timeLeft.seconds).padStart(2, "0")}
                  </span>
                  <span className="text-[10px] text-[#555555] uppercase font-mono">Secs</span>
                </div>
              </div>
            </div>

            {/* Quote block */}
            <div className="p-4 border-l-2 border-[#B47B70] bg-[#0A0A0A]/50 text-xs italic text-[#E8E2DA]/70">
              &ldquo;Exclusivity is not merely about raw scarcity, but about the standards of the experience delivered to every member.&rdquo;
            </div>
          </div>

          {/* Right column: Platform Mockup Showcase Frame */}
          <div className="lg:col-span-6">
            <div className="relative p-2 bg-[#0A0A0A] border border-[#292929] rounded-sm shadow-2xl overflow-hidden group">
              
              {/* Fake Browser / App Top Bar */}
              <div className="px-4 py-3 bg-[#151515] border-b border-[#292929] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#292929]" />
                  <span className="w-3 h-3 rounded-full bg-[#292929]" />
                  <span className="w-3 h-3 rounded-full bg-[#292929]" />
                </div>
                <div className="text-[10px] font-mono text-[#555555] truncate max-w-[200px]">
                  https://420street.com/coming-soon
                </div>
                <div className="flex items-center gap-1 text-[#B47B70]">
                  <Lock className="w-3 h-3" />
                  <span className="text-[10px] font-mono">SECURE VIP</span>
                </div>
              </div>

              {/* Showcase Frame Content */}
              <div className="relative h-[360px] sm:h-[420px] bg-[#0A0A0A] flex flex-col justify-between p-6 sm:p-8 overflow-hidden">
                
                {/* Background Logo Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
                  <Image
                    src="/logo-white.png"
                    alt="420 STREET watermark"
                    width={400}
                    height={150}
                    className="object-contain"
                  />
                </div>

                {/* Inner Content Teaser */}
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#151515] border border-[#292929] text-[10px] font-mono text-[#E8E2DA] mb-4">
                    <Sparkles className="w-3 h-3 text-[#B47B70]" />
                    <span>CONFIDENTIAL MEMBER PORTAL</span>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-bold uppercase text-[#E8E2DA] max-w-sm mb-2">
                    420 STREET PLATFORM
                  </h4>
                  <p className="text-xs text-[#555555]">
                    The full interface is currently accessible exclusively in closed beta to verified members.
                  </p>
                </div>

                {/* Mini Form Inside Showcase */}
                <div className="relative z-10 pt-6 border-t border-[#292929]">
                  <div className="text-xs font-bold uppercase text-[#E8E2DA] mb-2">
                    Request your VIP invitation:
                  </div>
                  <WaitlistForm buttonText="Request Access" placeholderText="Enter your work or personal email..." />
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
