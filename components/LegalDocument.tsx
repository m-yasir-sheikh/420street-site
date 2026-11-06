import { readFile } from "node:fs/promises";
import path from "node:path";

import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

interface LegalDocumentProps {
  title: string;
  /** Path relative to `public/`, e.g. `legal/privacy-policy.txt`. */
  textPath: string;
}

export default async function LegalDocument({ title, textPath }: LegalDocumentProps) {
  let content = "";
  let failed = false;

  try {
    content = await readFile(path.join(process.cwd(), "public", textPath), "utf8");
  } catch {
    failed = true;
  }

  // The source files repeat the document title on the first line, which PageHero already renders.
  const lines = content.split("\n");
  if (lines[0]?.trim() === title) {
    content = lines.slice(1).join("\n").trimStart();
  }

  return (
    <main>
      <PageHero eyebrow="Legal" title={title} />

      <section className="bg-paper px-6 py-16 sm:py-20">
        <div className="mx-auto w-full max-w-3xl">
          {failed ? (
            <p className="text-[15px] text-muted">
              This document could not be loaded. Please email{" "}
              <a href="mailto:gen@420street.com.au" className="underline">
                gen@420street.com.au
              </a>{" "}
              and we&rsquo;ll send you a copy.
            </p>
          ) : (
            <pre className="font-sans text-[15px] leading-7 break-words whitespace-pre-wrap text-ink-soft">
              {content}
            </pre>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
