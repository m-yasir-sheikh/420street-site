import BackgroundVideo from "@/components/BackgroundVideo";

export default function FarmBanner() {
  return (
    <section className="relative overflow-hidden bg-ink px-6 text-paper">
      <BackgroundVideo src="/media/farm.mp4" poster="/media/farm-poster.jpg" />
      <div aria-hidden="true" className="absolute inset-0 bg-ink/65" />

      <div className="relative z-10 mx-auto w-full max-w-6xl py-28 sm:py-36">
        <h2 id="farm" className="max-w-xl text-4xl leading-[1.1] font-extrabold sm:text-5xl">
          Proof starts
          <br />
          at the farm.
        </h2>
        <p className="mt-5 max-w-lg text-lg leading-relaxed text-on-dark-muted">
          Every step and every test goes on the record. Funding only moves when the proof does.
        </p>
      </div>
    </section>
  );
}
