import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 py-6">
      <Link href="/" aria-label="420 Street home">
        <Image
          src="/logo-white.png"
          alt="420 Street"
          width={162}
          height={80}
          priority
          className="h-8 w-auto"
        />
      </Link>

      <nav aria-label="Main" className="flex flex-wrap items-center gap-x-7 gap-y-1.5 text-[15px]">
        <Link href="/how-it-works" className="text-on-dark-muted transition-colors hover:text-paper">
          How it works
        </Link>
        <Link href="/about" className="text-on-dark-muted transition-colors hover:text-paper">
          About
        </Link>
        <Link
          href="/contact"
          className="rounded-full bg-paper px-[18px] py-2.5 font-semibold text-ink transition-opacity hover:opacity-90"
        >
          Get started
        </Link>
      </nav>
    </div>
  );
}
