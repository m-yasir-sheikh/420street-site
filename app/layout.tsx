import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://420street.com.au";
const TITLE = "420 Street | Compliance · Capital · Cashflow";
const DESCRIPTION =
  "420 Street builds one audit-ready record for cannabis exporters: the proof importers ask for and the evidence lenders need.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "420 Street",
    "cannabis export compliance",
    "GACP",
    "EU-GMP",
    "trade finance",
    "audit-ready record",
  ],
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "420 Street",
    images: [{ url: "/media/og-image.jpg", width: 1200, height: 630, alt: "420 Street" }],
    locale: "en_AU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className="bg-paper text-ink antialiased">{children}</body>
    </html>
  );
}
