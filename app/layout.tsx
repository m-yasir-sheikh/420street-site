import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://420street.com"),
  title: "420 STREET — Enterprise Compliance & Workflow for Specialized Finance",
  description:
    "The immutable ledger connecting institutional capital with verified operators. Streamline due diligence, manage facility workflows, and monitor risk—without regulatory friction.",
  keywords: [
    "420 STREET",
    "Specialized Finance",
    "Enterprise Compliance",
    "Institutional Capital",
    "KYB/KYC Verification",
    "Facility Workflows",
  ],
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "420 STREET — Enterprise Compliance & Workflow for Specialized Finance",
    description:
      "The immutable ledger connecting institutional capital with verified operators.",
    url: "https://420street.com",
    siteName: "420 STREET",
    images: [
      {
        url: "/logo-white.png",
        width: 800,
        height: 400,
        alt: "420 STREET Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#0A0A0A] text-[#E8E2DA] antialiased selection:bg-[#B47B70] selection:text-[#0A0A0A]">
        {children}
      </body>
    </html>
  );
}
