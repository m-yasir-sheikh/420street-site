import Header from "@/components/Header";

interface PageHeroProps {
  eyebrow: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  children?: React.ReactNode;
}

export default function PageHero({ eyebrow, title, intro, children }: PageHeroProps) {
  return (
    <header className="topo-bg bg-ink px-6 text-paper">
      <Header />
      <div className="mx-auto w-full max-w-6xl pt-16 pb-24 sm:pt-24 sm:pb-32">
        <p className="text-xs font-semibold tracking-[0.18em] text-mint uppercase">{eyebrow}</p>
        <h1 className="mt-5 max-w-3xl text-4xl leading-[1.08] font-extrabold sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-on-dark-muted">{intro}</p>
        )}
        {children}
      </div>
    </header>
  );
}
