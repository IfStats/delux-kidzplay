import { ArrowRight, CheckCircle2 } from "lucide-react";

const highlights = [
  "Playground design and planning",
  "Equipment supply and installation",
  "Children's events and funfairs",
  "School recreational programs",
];

export default function AboutPreview() {
  return (
    <section className="bg-[var(--delux-cream)] py-20">
      <div className="container-delux">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Visual */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-[38px] bg-white p-3 shadow-xl">
              <div className="flex aspect-[4/3] items-center justify-center rounded-[30px] bg-[var(--delux-green-light)]">
                <div className="text-center">
                  <div className="mx-auto mb-4 h-20 w-20 rounded-full bg-[var(--delux-green)]" />

                  <p className="font-black text-[var(--delux-blue)]">
                    Delux Kidzplay
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    Company / team photograph
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative cards */}
            <div className="absolute -bottom-6 -right-4 rounded-3xl bg-[var(--delux-orange)] px-6 py-5 text-white shadow-xl sm:-right-8">
              <p className="text-2xl font-black">Play</p>
              <p className="text-sm font-semibold">Learn • Grow</p>
            </div>

            <div className="absolute -left-3 -top-4 h-16 w-16 rounded-full bg-[var(--delux-red)] shadow-lg sm:-left-6" />
          </div>

          {/* Content */}
          <div>
            <span className="section-eyebrow">Who We Are</span>

            <h2 className="mt-2 text-4xl font-black leading-tight text-[var(--delux-blue)] sm:text-5xl">
              Creating Spaces
              <span className="block text-[var(--delux-green)]">
                Children Love.
              </span>
            </h2>

            <p className="mt-6 leading-7 text-slate-600">
              Delux Kidzplay & Entertainment is focused on creating exciting
              playground and recreational experiences for children. From
              planning and design to equipment supply, installation and
              entertainment, we help turn ordinary spaces into places where
              children can thrive.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 text-sm font-semibold text-slate-700"
                >
                  <CheckCircle2
                    size={19}
                    className="mt-0.5 shrink-0 text-[var(--delux-green)]"
                  />
                  {item}
                </div>
              ))}
            </div>

            <a
              href="/about"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--delux-blue)] px-6 py-3 text-sm font-black text-white transition hover:-translate-y-1"
            >
              Learn More About Us
              <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}