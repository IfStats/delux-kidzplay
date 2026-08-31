import {
  Building2,
  GraduationCap,
  PartyPopper,
  Trees,
} from "lucide-react";

const services = [
  {
    title: "Playground Equipment Supply & Installation",
    description:
      "Quality playground equipment supplied and professionally installed to create safe, exciting spaces for children.",
    icon: Trees,
    color: "var(--delux-green)",
    light: "var(--delux-green-light)",
  },
  {
    title: "School Playground Design & Setup",
    description:
      "We design and create engaging playground environments tailored to your school's space, needs and budget.",
    icon: GraduationCap,
    color: "var(--delux-red)",
    light: "#fff0f0",
  },
  {
    title: "Kids Funfairs & Entertainment Events",
    description:
      "Fun-filled experiences, games and entertainment designed to make children's events memorable.",
    icon: PartyPopper,
    color: "var(--delux-orange)",
    light: "#fff7e5",
  },
  {
    title: "School-Based Recreational Programs",
    description:
      "Engaging recreational activities that encourage physical activity, creativity, confidence and social development.",
    icon: Building2,
    color: "var(--delux-blue)",
    light: "var(--delux-blue-light)",
  },
];

export default function ServicesPreview() {
  return (
    <section className="relative overflow-hidden bg-[var(--delux-cream)] py-20">
      {/* Decorative dots */}
      <div
        className="absolute left-8 top-20 h-4 w-4 rounded-full"
        style={{ background: "var(--delux-orange)" }}
      />

      <div
        className="absolute right-10 top-32 h-5 w-5 rounded-full"
        style={{ background: "var(--delux-green)" }}
      />

      <div className="container-delux relative">
        <div className="section-title">
          <span className="section-eyebrow">What We Do</span>

          <h2>
            Our <span>Services</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            From playground design and installation to exciting children's
            events, we create experiences that bring spaces and communities to
            life.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="group relative overflow-hidden rounded-[28px] border border-white bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                {/* Top colour line */}
                <div
                  className="absolute left-0 right-0 top-0 h-1.5"
                  style={{ background: service.color }}
                />

                <div
                  className="mb-6 flex h-16 w-16 items-center justify-center rounded-full"
                  style={{
                    background: service.light,
                    color: service.color,
                  }}
                >
                  <Icon size={30} strokeWidth={2.2} />
                </div>

                <h3 className="min-h-[58px] text-lg font-black leading-6 text-[var(--delux-blue)]">
                  {service.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-slate-600">
                  {service.description}
                </p>

                <a
                  href="/services"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-black"
                  style={{ color: service.color }}
                >
                  Learn More
                  <span className="transition group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}