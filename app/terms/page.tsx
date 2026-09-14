import type { Metadata } from "next";
import LegalDocument from "@/components/LegalDocument";

export const metadata: Metadata = {
  title: "Terms of Use | 420 STREET",
  description: "Read the 420 STREET Terms of Use.",
};

export default function TermsPage() {
  return <LegalDocument title="Terms of Use" textUrl="/legal/terms-of-use.txt" />;
}
