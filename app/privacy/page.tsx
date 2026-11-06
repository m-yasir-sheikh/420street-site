import type { Metadata } from "next";

import LegalDocument from "@/components/LegalDocument";

export const metadata: Metadata = {
  title: "Privacy Policy | 420 Street",
  description: "How 420 Street collects, uses, shares and protects information.",
};

export default function PrivacyPage() {
  return <LegalDocument title="Privacy Policy" textPath="legal/privacy-policy.txt" />;
}
