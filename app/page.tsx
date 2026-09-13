"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeatureGrid from "@/components/FeatureGrid";
import TargetAudience from "@/components/TargetAudience";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-[#E8E2DA] relative overflow-hidden">
      <Header />
      <Hero />
      <FeatureGrid />
      <TargetAudience />
      <HowItWorks />
      <Footer />
    </main>
  );
}
