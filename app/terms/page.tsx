import type { Metadata } from "next";

import LegalDocument from "@/components/LegalDocument";

export const metadata: Metadata = {
  title: "Terms of Use | 420 Street",
  description: "The terms that apply when you use the 420 Street website.",
};

export default function TermsPage() {
  return <LegalDocument title="Terms of Use" textPath="legal/terms-of-use.txt" />;
}
