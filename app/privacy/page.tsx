import type { Metadata } from "next";
import LegalDocument from "@/components/LegalDocument";

export const metadata: Metadata = {
  title: "Privacy Policy | 420 STREET",
  description: "Read the 420 STREET Privacy Policy.",
};

export default function PrivacyPage() {
  return <LegalDocument title="Privacy Policy" textUrl="/legal/privacy-policy.txt" />;
}
