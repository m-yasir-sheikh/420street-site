"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface LegalDocumentProps {
  title: string;
  textUrl: string;
  pdfUrl: string;
}

export default function LegalDocument({ title, textUrl, pdfUrl }: LegalDocumentProps) {
  const [content, setContent] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    let active = true;

    fetch(textUrl)
      .then((response) => {
        if (!response.ok) throw new Error("Unable to load document");
        return response.text();
      })
      .then((text) => {
        if (active) setContent(text);
      })
      .catch(() => {
        if (active) setError(true);
      });

    return () => {
      active = false;
    };
  }, [textUrl]);

  return (
    <main className="min-h-screen bg-[#0A0A0A] px-4 py-10 text-[#E8E2DA] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 flex flex-col gap-5 border-b border-[#292929] pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Link href="/" className="text-xs font-mono uppercase tracking-[0.2em] text-[#B47B70] transition-colors hover:text-[#E8E2DA]">
              420 STREET
            </Link>
            <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h1>
          </div>
          <div className="flex gap-4 text-xs font-mono uppercase tracking-wider">
            <a href={pdfUrl} target="_blank" rel="noreferrer" className="text-[#E8E2DA]/70 transition-colors hover:text-[#B47B70]">
              Open PDF
            </a>
            <a href={pdfUrl} download className="text-[#E8E2DA]/70 transition-colors hover:text-[#B47B70]">
              Download PDF
            </a>
          </div>
        </div>

        <div className="rounded-sm border border-[#292929] bg-[#151515] p-5 shadow-2xl sm:p-8">
          {error ? (
            <p className="text-sm text-red-400">Unable to load this document. Please use the PDF controls above.</p>
          ) : content ? (
            <pre className="whitespace-pre-wrap break-words font-sans text-sm leading-7 text-[#E8E2DA]/85 sm:text-base">
              {content}
            </pre>
          ) : (
            <p className="text-sm text-[#555555]">Loading document...</p>
          )}
        </div>
      </div>
    </main>
  );
}
