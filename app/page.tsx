import Link from "next/link";

import Footer from "@/components/Footer";
import Comparison from "@/components/home/Comparison";
import FarmBanner from "@/components/home/FarmBanner";
import HomeHero from "@/components/home/HomeHero";
import Lenders from "@/components/home/Lenders";
import Pillars from "@/components/home/Pillars";
import Route from "@/components/home/Route";
import Ticker from "@/components/home/Ticker";
import WhoItsFor from "@/components/home/WhoItsFor";

export default function Home() {
  return (
    <main>
      <HomeHero />
      <Ticker />
      <FarmBanner />
      <Route />
      <Pillars />
      <Lenders />
      <Comparison />
      <WhoItsFor />

      <section className="bg-paper px-6 py-20 sm:py-28">
        <figure className="mx-auto w-full max-w-3xl text-center">
          <blockquote className="text-2xl leading-relaxed font-semibold sm:text-3xl">
            &ldquo;Buying compliance isn&rsquo;t a strategy.{" "}
            <span className="text-check">
              Building it in the order the money can follow is.
            </span>
            &rdquo;
          </blockquote>
          <figcaption className="mt-7 flex flex-col gap-1">
            <b className="text-[15px]">Gen Caird, CA</b>
            <span className="text-[15px] text-muted">Founder · AICEF Bangkok</span>
          </figcaption>
        </figure>
      </section>

      <section className="bg-paper px-6 pb-20 sm:pb-28">
        <div className="topo-bg mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-8 rounded-[28px] bg-ink px-8 py-16 text-paper sm:px-14 sm:py-20 md:flex-row md:items-center">
          <div>
            <h2 className="max-w-2xl text-3xl font-extrabold sm:text-4xl">
              Your next batch shouldn&rsquo;t wait for your last invoice.
            </h2>
            <p className="mt-3 text-lg text-on-dark-muted">
              Start with one record. Register your interest and we&rsquo;ll be in touch.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 rounded-xl bg-paper px-7 py-4 text-base font-bold text-ink transition-opacity hover:opacity-90"
          >
            Get started
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
