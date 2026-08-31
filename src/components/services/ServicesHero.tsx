import { ArrowRight, Sparkles } from "lucide-react";

export default function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-[var(--delux-green)]">
      {/* Decorative shapes */}
      <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/10" />

      <div className="absolute -bottom-32 right-[-40px] h-80 w-80 rounded-full bg-[var(--delux-yellow)]/15" />

      <div className="absolute right-[15%] top-16 h-5 w-5 rounded-full bg-[var(--delux-orange)]" />

      <div className="container-delux relative py-20 sm:py-24 lg:py-28">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-bold text-white">
            <Sparkles size={17} />
            Our Services
          </div>

          <h1 className="text-5xl font-black leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Creating Spaces
            <span className="block text-[var(--delux-yellow)]">
              Made for Play.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-green-50">
            From playground design and equipment installation to children's
            entertainment and school recreational programmes, Delux Kidzplay
            creates experiences that encourage children to play, learn and
            grow.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="/get-a-quote"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-black uppercase tracking-wide text-[var(--delux-green-dark)] shadow-xl transition hover:-translate-y-1"
            >
              Discuss Your Project
              <ArrowRight size={18} />
            </a>

            <a
              href="#playground-equipment"
              className="inline-flex items-center justify-center rounded-full border-2 border-white px-7 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:bg-white hover:text-[var(--delux-green-dark)]"
            >
              Explore Services
            </a>
          </div>
        </div>
      </div>

      {/* Brand colour wave */}
      <div className="relative h-20 overflow-hidden">
        <div className="absolute bottom-[-20px] left-[-5%] h-14 w-[110%] rotate-[-1.5deg] bg-[var(--delux-yellow)]" />

        <div className="absolute bottom-[-12px] left-[-5%] h-9 w-[110%] rotate-[-1.5deg] bg-[var(--delux-orange)]" />

        <div className="absolute bottom-[-6px] left-[-5%] h-5 w-[110%] rotate-[-1.5deg] bg-[var(--delux-red)]" />

        <div className="absolute bottom-0 left-[-5%] h-2 w-[110%] rotate-[-1.5deg] bg-[var(--delux-blue)]" />
      </div>
    </section>
  );
}