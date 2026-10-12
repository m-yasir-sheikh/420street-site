"use client";

import { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";

interface LegalDocumentProps {
  title: string;
  textUrl: string;
}

export default function LegalDocument({ title, textUrl }: LegalDocumentProps) {
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
    <>
      <Header />
      <main className="min-h-screen bg-[#0A0A0A] px-4 pb-20 pt-32 text-[#E8E2DA] sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8 border-b border-[#292929] pb-6">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h1>
          </div>

          <div className="rounded-sm border border-[#292929] bg-[#151515] p-5 shadow-2xl sm:p-8">
            {error ? (
              <p className="text-sm text-red-400">Unable to load this document.</p>
            ) : content ? (
              <pre className="whitespace-pre-wrap break-words font-sans text-sm leading-7 text-[#E8E2DA]/85 sm:text-base">
                {content}
              </pre>
            ) : (
              <p className="text-sm text-[#999999]">Loading document...</p>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
