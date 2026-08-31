import { Award, BriefcaseBusiness, Sparkles } from "lucide-react";

export default function Leadership() {
  return (
    <section className="bg-white py-20">
      <div className="container-delux">
        <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Portrait */}
          <div className="relative mx-auto w-full max-w-md">
            <div className="overflow-hidden rounded-[36px] bg-[var(--delux-green-light)] p-3 shadow-xl">
              <div className="flex aspect-[4/5] items-center justify-center rounded-[28px] bg-white">
                <div className="text-center px-6">
                  <div className="mx-auto mb-5 flex h-24 w-24 items-center justify-center rounded-full bg-[var(--delux-green)] text-white">
                    <BriefcaseBusiness size={40} />
                  </div>

                  <p className="font-black text-[var(--delux-blue)]">
                    Leadership Photograph
                  </p>

                  <p className="mt-2 text-sm text-slate-500">
                    Approved profile photograph will be added here.
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 -right-4 rounded-3xl bg-[var(--delux-red)] px-6 py-4 text-white shadow-xl">
              <p className="text-sm font-black">Delux Kidzplay</p>
              <p className="text-xs font-semibold">Leadership</p>
            </div>
          </div>

          {/* Profile */}
          <div>
            <span className="section-eyebrow">Our Leadership</span>

            <h2 className="mt-2 text-4xl font-black leading-tight text-[var(--delux-blue)] sm:text-5xl">
              Meet
              <span className="block text-[var(--delux-green)]">
                Ms. Ann B. Agyemang.
              </span>
            </h2>

            <p className="mt-2 font-bold text-[var(--delux-orange)]">
              General Manager & Site Planner
            </p>

            <p className="mt-6 leading-7 text-slate-600">
              Ms. Ann B. Agyemang leads the planning and delivery of Delux
              Kidzplay's playground and recreational projects.
            </p>

            <p className="mt-4 leading-7 text-slate-600">
              Her profile, experience and professional background will be
              presented here using information approved by Delux Kidzplay.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-[var(--delux-green-light)] p-5">
                <Award
                  size={24}
                  className="text-[var(--delux-green)]"
                />

                <p className="mt-3 text-sm font-black text-[var(--delux-blue)]">
                  Experience
                </p>

                <p className="mt-1 text-xs leading-5 text-slate-600">
                  Professional experience and credentials will be added from
                  the approved company profile.
                </p>
              </div>

              <div className="rounded-2xl bg-[var(--delux-cream)] p-5">
                <Sparkles
                  size={24}
                  className="text-[var(--delux-orange)]"
                />

                <p className="mt-3 text-sm font-black text-[var(--delux-blue)]">
                  Our Approach
                </p>

                <p className="mt-1 text-xs leading-5 text-slate-600">
                  Thoughtful planning focused on creating enjoyable
                  recreational environments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}