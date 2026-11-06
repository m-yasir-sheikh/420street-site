import type { Metadata } from "next";

import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Get started | 420 Street",
  description:
    "Tell us who you are and what you need, and we'll be in touch. Growers, importers and lenders welcome.",
};

const LINKEDIN_URL = "https://www.linkedin.com/in/gen-caird-CA";
const CONTACT_EMAIL = "gen@420street.com.au";

const NEXT_STEPS = [
  "A short call to understand your buyer, market and timing.",
  "We map what your record needs, in the order the money can follow.",
  "You start building it, checked and signed off by a named person as you go.",
];

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Get started"
        title="Start with one record."
        intro="Tell us who you are and what you need, and we'll be in touch."
      />

      <section className="bg-paper px-6 py-20">
        <div className="mx-auto grid w-full max-w-6xl gap-14 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
          <ContactForm />

          <aside className="flex flex-col gap-10">
            <div className="rounded-2xl bg-paper-muted p-8">
              <p className="text-xs font-semibold tracking-[0.14em] text-muted uppercase">
                What happens next
              </p>
              <ol className="mt-6 flex flex-col gap-5">
                {NEXT_STEPS.map((step, index) => (
                  <li key={step} className="flex gap-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-ink text-sm font-bold text-paper">
                      {index + 1}
                    </span>
                    <span className="text-[15px] leading-relaxed text-ink-soft">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="rounded-2xl border border-line-soft p-8">
              <p className="text-xs font-semibold tracking-[0.14em] text-muted uppercase">
                Contact us now
              </p>
              <div className="mt-5 flex flex-col items-start gap-2.5">
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-[15px] font-semibold hover:underline"
                >
                  {CONTACT_EMAIL}
                </a>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[15px] font-semibold hover:underline"
                >
                  LinkedIn &rarr;
                </a>
              </div>
              <p className="mt-5 text-[13px] leading-relaxed text-muted">
                Western Australia · working with Thailand, Europe and Australia
              </p>
            </div>
          </aside>
        </div>
      </section>

      <Footer />
    </main>
  );
}
