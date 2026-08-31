import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Decorative shapes */}
      <div
        className="absolute left-[-80px] top-20 h-40 w-40 rounded-full opacity-10"
        style={{ background: "var(--delux-green)" }}
      />

      <div
        className="absolute right-[-60px] top-16 h-48 w-48 rounded-full opacity-10"
        style={{ background: "var(--delux-orange)" }}
      />

      <div className="container-delux relative">
        <div className="grid min-h-[650px] items-center gap-10 py-14 lg:grid-cols-[0.9fr_1.1fr] lg:py-20">
          {/* Text */}
          <div className="relative z-10">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[var(--delux-green-light)] px-4 py-2 text-sm font-extrabold text-[var(--delux-green-dark)]">
              <Sparkles size={17} />
              Play • Learn • Grow
            </div>

            <h1 className="max-w-2xl text-5xl font-black leading-[0.95] tracking-tight text-[var(--delux-blue)] sm:text-6xl lg:text-[76px]">
              Bringing Your
              <span className="block text-[var(--delux-green)]">
                Playground
              </span>
              <span className="block">
                <span className="text-[var(--delux-red)]">to Life.</span>
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
              We design, supply and install exciting playgrounds and
              recreational spaces where children can safely{" "}
              <strong className="text-[var(--delux-green-dark)]">
                play, learn & grow.
              </strong>
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="/get-a-quote"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--delux-green)] px-7 py-4 text-sm font-black uppercase tracking-wide text-white shadow-lg transition hover:-translate-y-1 hover:bg-[var(--delux-green-dark)]"
              >
                Request a Quote
                <ArrowRight size={18} />
              </a>

              <a
                href="/projects"
                className="inline-flex items-center justify-center rounded-full border-2 border-[var(--delux-red)] px-7 py-4 text-sm font-black uppercase tracking-wide text-[var(--delux-red)] transition hover:bg-[var(--delux-red)] hover:text-white"
              >
                View Our Work
              </a>
            </div>

            {/* Trust points */}
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-600">
                <CheckCircle2
                  size={18}
                  className="text-[var(--delux-green)]"
                />
                Quality Equipment
              </div>

              <div className="flex items-center gap-2 text-sm font-semibold text-slate-600">
                <CheckCircle2
                  size={18}
                  className="text-[var(--delux-green)]"
                />
                Professional Installation
              </div>
            </div>
          </div>

          {/* Image area */}
          <div className="relative">
            {/* Main image placeholder */}
            <div className="relative overflow-hidden rounded-[40px] bg-[var(--delux-green-light)] shadow-2xl">
              <div className="flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-[var(--delux-green-light)] via-white to-[var(--delux-yellow)]">
                <div className="px-8 text-center">
                  <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-[var(--delux-green)] text-white shadow-lg">
                    <Sparkles size={34} />
                  </div>

                  <p className="text-xl font-black text-[var(--delux-blue)]">
                    Your Playground Image
                  </p>

                  <p className="mt-2 text-sm text-slate-500">
                    Your actual project photograph will go here.
                  </p>
                </div>
              </div>

              {/* Image frame accents */}
              <div className="absolute left-0 top-0 h-3 w-32 bg-[var(--delux-red)]" />
              <div className="absolute right-0 top-0 h-3 w-32 bg-[var(--delux-orange)]" />
              <div className="absolute bottom-0 left-0 h-3 w-32 bg-[var(--delux-yellow)]" />
              <div className="absolute bottom-0 right-0 h-3 w-32 bg-[var(--delux-green)]" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-4 rounded-3xl bg-white p-4 shadow-xl sm:-left-8 sm:p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--delux-green)] text-white">
                  <CheckCircle2 size={25} />
                </div>

                <div>
                  <p className="text-sm font-black text-[var(--delux-blue)]">
                    Built for Fun
                  </p>
                  <p className="text-xs text-slate-500">
                    Designed for children
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Brand wave */}
      <div className="relative h-24">
        <div
          className="absolute bottom-0 left-[-5%] h-14 w-[110%] rotate-[-2deg]"
          style={{ background: "var(--delux-green)" }}
        />

        <div
          className="absolute bottom-0 left-[-5%] h-9 w-[110%] rotate-[-2deg]"
          style={{ background: "var(--delux-orange)" }}
        />

        <div
          className="absolute bottom-0 left-[-5%] h-5 w-[110%] rotate-[-2deg]"
          style={{ background: "var(--delux-red)" }}
        />

        <div
          className="absolute bottom-0 left-[-5%] h-2 w-[110%] rotate-[-2deg]"
          style={{ background: "var(--delux-blue)" }}
        />
      </div>
    </section>
  );
}