import Image from "next/image";
import Link from "next/link";

const LINKEDIN_URL = "https://www.linkedin.com/in/gen-caird-CA";
const CONTACT_EMAIL = "gen@420street.com.au";

export default function Footer() {
  return (
    <footer className="bg-ink px-6 text-paper">
      <div className="mx-auto w-full max-w-6xl py-16">
        <div className="flex flex-col justify-between gap-12 md:flex-row">
          <div>
            <Image
              src="/logo-white.png"
              alt="420 Street"
              width={162}
              height={80}
              className="h-8 w-auto"
            />
            <p className="mt-4 text-sm text-on-dark-muted">Compliance · Capital · Cashflow</p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <div className="flex flex-col gap-2.5">
              <p className="text-xs font-semibold tracking-[0.12em] text-on-dark-muted uppercase">
                Platform
              </p>
              <Link href="/how-it-works" className="text-[15px] hover:underline">
                How it works
              </Link>
              <Link href="/#who" className="text-[15px] hover:underline">
                Who it&rsquo;s for
              </Link>
            </div>

            <div className="flex flex-col gap-2.5">
              <p className="text-xs font-semibold tracking-[0.12em] text-on-dark-muted uppercase">
                Company
              </p>
              <Link href="/about" className="text-[15px] hover:underline">
                About
              </Link>
              <Link href="/contact" className="text-[15px] hover:underline">
                Contact
              </Link>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[15px] hover:underline"
              >
                LinkedIn
              </a>
            </div>

            <div className="flex flex-col gap-2.5">
              <p className="text-xs font-semibold tracking-[0.12em] text-on-dark-muted uppercase">
                Contact
              </p>
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-[15px] hover:underline">
                {CONTACT_EMAIL}
              </a>
              <span className="text-[15px] text-on-dark-muted">Western Australia</span>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-ink-line pt-8">
          <p className="max-w-3xl text-[13px] leading-relaxed text-on-dark-muted">
            Capital and cashflow launch once the required approvals are in place. Until then,
            nothing on this site is an offer of finance, or legal or financial advice. Product
            screens show illustrative data.
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] text-on-dark-muted">
            <p>© 2026 420 Street&trade;</p>
            <Link href="/privacy" className="hover:underline">
              Privacy
            </Link>
            <Link href="/terms" className="hover:underline">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
