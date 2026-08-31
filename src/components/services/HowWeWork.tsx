import {
  ClipboardList,
  Hammer,
  Lightbulb,
  PencilRuler,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Consultation",
    description:
      "We discuss your requirements, available space, goals and project expectations.",
    icon: ClipboardList,
    color: "var(--delux-green)",
  },
  {
    number: "02",
    title: "Planning & Design",
    description:
      "We develop an approach suited to your space, needs and recreational objectives.",
    icon: PencilRuler,
    color: "var(--delux-orange)",
  },
  {
    number: "03",
    title: "Equipment & Preparation",
    description:
      "We help identify suitable equipment and prepare the project for implementation.",
    icon: Lightbulb,
    color: "var(--delux-red)",
  },
  {
    number: "04",
    title: "Installation & Delivery",
    description:
      "We implement the project with attention to quality, functionality and the intended experience.",
    icon: Hammer,
    color: "var(--delux-blue)",
  },
];

export default function HowWeWork() {
  return (
    <section className="bg-[var(--delux-cream)] py-20">
      <div className="container-delux">
        <div className="section-title">
          <span className="section-eyebrow">Our Process</span>

          <h2>
            From Idea <span>to Play.</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            We make the process straightforward, from the first conversation
            through to the finished recreational space.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <article
                key={step.number}
                className="relative rounded-[28px] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-2xl text-white"
                    style={{ background: step.color }}
                  >
                    <Icon size={27} />
                  </div>

                  <span
                    className="text-3xl font-black opacity-15"
                    style={{ color: step.color }}
                  >
                    {step.number}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-black text-[var(--delux-blue)]">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {step.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}