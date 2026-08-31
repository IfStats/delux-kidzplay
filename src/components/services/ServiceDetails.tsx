import { ArrowRight, CheckCircle2 } from "lucide-react";
import { services } from "@/data/services";

export default function ServiceDetails() {
  return (
    <section className="bg-white py-20">
      <div className="container-delux">
        <div className="space-y-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const reversed = index % 2 !== 0;

            return (
              <article
                key={service.id}
                id={service.id}
                className="scroll-mt-32 overflow-hidden rounded-[36px] border border-[var(--delux-border)] bg-[var(--delux-cream)]"
              >
                <div
                  className={`grid lg:grid-cols-2 ${
                    reversed ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  {/* Visual panel */}
                  <div
                    className="relative flex min-h-[360px] items-center justify-center overflow-hidden p-10"
                    style={{ background: service.light }}
                  >
                    <div
                      className="absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-30"
                      style={{ background: service.color }}
                    />

                    <div
                      className="absolute -bottom-20 -left-10 h-44 w-44 rounded-full opacity-15"
                      style={{ background: service.color }}
                    />

                    <div className="relative text-center">
                      <div
                        className="mx-auto flex h-28 w-28 items-center justify-center rounded-[32px] text-white shadow-xl"
                        style={{ background: service.color }}
                      >
                        <Icon size={52} strokeWidth={1.8} />
                      </div>

                      <div className="mt-7">
                        <span
                          className="text-sm font-black uppercase tracking-[0.15em]"
                          style={{ color: service.color }}
                        >
                          Service {String(index + 1).padStart(2, "0")}
                        </span>

                        <div className="mt-2 text-xl font-black text-[var(--delux-blue)]">
                          Play • Learn • Grow
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 sm:p-10 lg:p-12">
                    <span
                      className="text-sm font-black uppercase tracking-[0.12em]"
                      style={{ color: service.color }}
                    >
                      {service.shortTitle}
                    </span>

                    <h2 className="mt-3 text-3xl font-black leading-tight text-[var(--delux-blue)] sm:text-4xl">
                      {service.title}
                    </h2>

                    <p className="mt-5 leading-7 text-slate-600">
                      {service.fullDescription}
                    </p>

                    <div className="mt-7 space-y-3">
                      {service.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-start gap-3 text-sm font-semibold text-slate-700"
                        >
                          <CheckCircle2
                            size={19}
                            className="mt-0.5 shrink-0"
                            style={{ color: service.color }}
                          />
                          {feature}
                        </div>
                      ))}
                    </div>

                    <a
                      href={`/get-a-quote?service=${service.id}`}
                      className="mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-black text-white shadow-md transition hover:-translate-y-1"
                      style={{ background: service.color }}
                    >
                      Request a Quote
                      <ArrowRight size={17} />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}