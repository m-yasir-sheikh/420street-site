"use client";

import { Layers, Users, Sparkles, Crown, ArrowRight } from "lucide-react";

export default function Presentation() {
  const pillars = [
    {
      num: "01",
      title: "THE DIGITAL HUB PLATFORM",
      category: "CENTRAL ECOSYSTEM",
      icon: Layers,
      description:
        "A sleek and immersive interface centralizing curations, exceptional product showcases, and major industry trends.",
      features: [
        "Trends aggregator & editorial content",
        "Exclusive product showcases & collections",
        "Secure & personalized member portal",
      ],
    },
    {
      num: "02",
      title: "THE PRIVATE COMMUNITY",
      category: "NETWORKING & CIRCLE",
      icon: Users,
      description:
        "A selective circle bringing together enthusiasts, creators, and key visionaries to connect and collaborate in a private setting.",
      features: [
        "Access to private lounge discussions",
        "Partnership & collaboration opportunities",
        "Exclusive invitation-only meetups & events",
      ],
    },
    {
      num: "03",
      title: "TAILORED SERVICES",
      category: "INNOVATION & EXPERTISE",
      icon: Sparkles,
      description:
        "High-performance tools and digital concierges tailored to the exacting demands of our members and partners.",
      features: [
        "Bespoke advisory and recommendations",
        "Negotiated VIP privileges & offers",
        "Dedicated 24/7 concierge support",
      ],
    },
    {
      num: "04",
      title: "FOUNDER MEMBER EXPERIENCE",
      category: "PERPETUAL PRIVILEGES",
      icon: Crown,
      description:
        "By joining the waitlist today, you secure Founder Member status with permanent lifetime privileges.",
      features: [
        "Founder VIP badge & recognition",
        "Priority preview access to all drops",
        "Invitations to official launch galas",
      ],
    },
  ];

  return (
    <section id="piliers" className="py-20 md:py-32 bg-[#0A0A0A] relative border-t border-[#292929]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="text-xs font-mono text-[#B47B70] tracking-widest uppercase mb-2">
              — Concept Overview
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-[#E8E2DA]">
              FOUR FOUNDATIONAL PILLARS
            </h2>
          </div>
          <p className="text-sm text-[#555555] max-w-md">
            Explore the core structure and philosophy driving 420 STREET across its key components.
          </p>
        </div>

        {/* Pillars Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {pillars.map((pillar) => {
            const IconComponent = pillar.icon;
            return (
              <div
                key={pillar.num}
                className="group relative p-8 bg-[#151515] border border-[#292929] hover:border-[#B47B70]/60 transition-all duration-300 rounded-sm flex flex-col justify-between"
              >
                {/* Number Badge & Icon */}
                <div>
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#292929]">
                    <span className="text-3xl font-extrabold font-mono text-[#79514B] group-hover:text-[#B47B70] transition-colors duration-300">
                      {pillar.num}
                    </span>
                    <span className="text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 bg-[#292929]/50 text-[#E8E2DA]/80 border border-[#292929]">
                      {pillar.category}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold uppercase tracking-wide text-[#E8E2DA] mb-3 flex items-center gap-3">
                    <IconComponent className="w-5 h-5 text-[#B47B70] shrink-0" />
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-[#E8E2DA]/70 leading-relaxed mb-6 font-normal">
                    {pillar.description}
                  </p>
                </div>

                {/* Feature Bullet Points */}
                <div className="pt-4 border-t border-[#292929]/60">
                  <ul className="space-y-2">
                    {pillar.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-[#E8E2DA]/80">
                        <ArrowRight className="w-3 h-3 text-[#B47B70] shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Subtle bottom hover accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#B47B70] to-[#79514B] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
