import {
  BadgeCheck,
  HeartHandshake,
  Lightbulb,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Safety First",
    description:
      "We prioritize safe, thoughtfully planned recreational environments for children.",
    color: "var(--delux-green)",
  },
  {
    icon: Lightbulb,
    title: "Creative Design",
    description:
      "We transform available spaces into engaging playgrounds designed around children's needs.",
    color: "var(--delux-orange)",
  },
  {
    icon: Wrench,
    title: "Professional Installation",
    description:
      "Our playground equipment is professionally installed with attention to quality and durability.",
    color: "var(--delux-red)",
  },
  {
    icon: HeartHandshake,
    title: "Customer Focused",
    description:
      "We work closely with schools, organizations and clients from consultation through completion.",
    color: "var(--delux-blue)",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-[var(--delux-green)] py-20">
      {/* Decorative shapes */}
      <div className="absolute -left-16 top-10 h-40 w-40 rounded-full bg-white/10" />
      <div className="absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-white/10" />

      <div className="container-delux relative">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          {/* Introduction */}
          <div className="text-white">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-bold">
              <Sparkles size={17} />
              Why Delux Kidzplay?
            </div>

            <h2 className="text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              More Than a
              <span className="block text-[var(--delux-yellow)]">
                Playground.
              </span>
            </h2>

            <p className="mt-6 max-w-lg leading-7 text-green-50">
              We believe playgrounds are more than equipment. They are spaces
              where children build confidence, discover creativity, develop
              friendships and create memories.
            </p>

            <a
              href="/about"
              className="mt-8 inline-flex rounded-full bg-white px-6 py-3 text-sm font-black text-[var(--delux-green-dark)] shadow-lg transition hover:-translate-y-1"
            >
              Discover Delux Kidzplay
            </a>
          </div>

          {/* Reasons */}
          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map((reason) => {
              const Icon = reason.icon;

              return (
                <article
                  key={reason.title}
                  className="rounded-[26px] bg-white p-6 shadow-lg transition hover:-translate-y-1"
                >
                  <div
                    className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl text-white"
                    style={{ background: reason.color }}
                  >
                    <Icon size={27} />
                  </div>

                  <h3 className="text-lg font-black text-[var(--delux-blue)]">
                    {reason.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {reason.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>

        {/* Bottom trust strip */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 border-t border-white/20 pt-8 text-sm font-bold text-white">
          <span className="flex items-center gap-2">
            <BadgeCheck size={19} />
            Quality Focused
          </span>

          <span className="flex items-center gap-2">
            <BadgeCheck size={19} />
            Creative Solutions
          </span>

          <span className="flex items-center gap-2">
            <BadgeCheck size={19} />
            Professional Service
          </span>
        </div>
      </div>
    </section>
  );
}