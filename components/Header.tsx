"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A0A0A]/90 backdrop-blur-md border-b border-[#292929] py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Minimalist Logo */}
        <a href="#" className="flex items-center gap-3">
          <div className="relative h-9 w-36 sm:h-10 sm:w-40">
            <Image
              src="/logo-white.png"
              alt="420 STREET"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </a>

        {/* Early Access CTA */}
        <div>
          <a
            href="#waitlist"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#0A0A0A] bg-[#B47B70] hover:bg-[#E8E2DA] transition-all duration-300 rounded-sm shadow-md"
          >
            <span>Early Access</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </header>
  );
}
