import {
  Heart,
  Lightbulb,
  ShieldCheck,
  Users,
} from "lucide-react";

const values = [
  {
    title: "Our Mission",
    text: "To create engaging recreational environments where children can play, learn, develop and grow.",
    icon: Heart,
    color: "var(--delux-green)",
  },
  {
    title: "Safety",
    text: "We believe children's recreational spaces should be thoughtfully planned with safety and suitability in mind.",
    icon: ShieldCheck,
    color: "var(--delux-red)",
  },
  {
    title: "Creativity",
    text: "We look for creative ways to transform spaces into exciting environments that children want to explore.",
    icon: Lightbulb,
    color: "var(--delux-orange)",
  },
  {
    title: "Community",
    text: "We work with schools, organizations and families to create experiences that bring people together.",
    icon: Users,
    color: "var(--delux-blue)",
  },
];

export default function MissionValues() {
  return (
    <section className="bg-[var(--delux-cream)] py-20">
      <div className="container-delux">
        <div className="section-title">
          <span className="section-eyebrow">What Drives Us</span>

          <h2>
            Play. Learn. <span>Grow.</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Our approach is guided by a simple belief: great recreational
            spaces can contribute to happier, healthier and more confident
            children.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <article
                key={value.title}
                className="rounded-[28px] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-2xl text-white"
                  style={{ background: value.color }}
                >
                  <Icon size={27} />
                </div>

                <h3 className="mt-6 text-xl font-black text-[var(--delux-blue)]">
                  {value.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {value.text}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}