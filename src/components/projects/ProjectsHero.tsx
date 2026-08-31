import { ArrowRight, Sparkles } from "lucide-react";

export default function ProjectsHero() {
  return (
    <section className="relative overflow-hidden bg-[var(--delux-green)]">
      <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/10" />

      <div className="absolute -bottom-24 right-[-40px] h-80 w-80 rounded-full bg-[var(--delux-yellow)]/15" />

      <div className="container-delux relative py-20 sm:py-24 lg:py-28">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-bold text-white">
            <Sparkles size={17} />
            Our Projects
          </div>

          <h1 className="text-5xl font-black leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Ideas Turned
            <span className="block text-[var(--delux-yellow)]">
              Into Play.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-green-50">
            Take a look at playgrounds, recreational spaces and children's
            experiences created by Delux Kidzplay.
          </p>

          <a
            href="/get-a-quote"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-black uppercase tracking-wide text-[var(--delux-green-dark)] shadow-xl transition hover:-translate-y-1"
          >
            Start Your Project
            <ArrowRight size={18} />
          </a>
        </div>
      </div>

      <div className="relative h-16 overflow-hidden">
        <div className="absolute bottom-[-18px] left-[-5%] h-12 w-[110%] rotate-[-1deg] bg-[var(--delux-yellow)]" />
        <div className="absolute bottom-[-10px] left-[-5%] h-8 w-[110%] rotate-[-1deg] bg-[var(--delux-orange)]" />
        <div className="absolute bottom-[-5px] left-[-5%] h-5 w-[110%] rotate-[-1deg] bg-[var(--delux-red)]" />
        <div className="absolute bottom-0 left-[-5%] h-2 w-[110%] rotate-[-1deg] bg-[var(--delux-blue)]" />
      </div>
    </section>
  );
}