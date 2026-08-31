import { Heart, Sparkles } from "lucide-react";

export default function CompanyStory() {
  return (
    <section className="bg-white py-20">
      <div className="container-delux">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-[38px] bg-[var(--delux-green-light)] p-3 shadow-xl">
              <div className="flex aspect-[4/3] items-center justify-center rounded-[30px] bg-white">
                <div className="text-center">
                  <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-[var(--delux-green)] text-white">
                    <Heart size={34} />
                  </div>

                  <p className="font-black text-[var(--delux-blue)]">
                    Delux Kidzplay
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    Company photograph
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 -right-3 rounded-3xl bg-[var(--delux-orange)] px-6 py-4 text-white shadow-xl">
              <p className="text-lg font-black">Play</p>
              <p className="text-xs font-bold">Learn • Grow</p>
            </div>
          </div>

          {/* Story */}
          <div>
            <span className="section-eyebrow">Our Story</span>

            <h2 className="mt-2 text-4xl font-black leading-tight text-[var(--delux-blue)] sm:text-5xl">
              Bringing Your
              <span className="block text-[var(--delux-green)]">
                Playground to Life.
              </span>
            </h2>

            <p className="mt-6 leading-7 text-slate-600">
              Delux Kidzplay & Entertainment creates playground and
              recreational experiences designed to make children's spaces more
              engaging, active and enjoyable.
            </p>

            <p className="mt-4 leading-7 text-slate-600">
              Our work spans playground equipment supply and installation,
              school playground design, children's entertainment events and
              school-based recreational programmes.
            </p>

            <div className="mt-7 rounded-3xl bg-[var(--delux-green-light)] p-6">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--delux-green)] text-white">
                  <Sparkles size={23} />
                </div>

                <div>
                  <h3 className="font-black text-[var(--delux-blue)]">
                    Our Philosophy
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    We believe play is an important part of childhood. Our
                    goal is to create environments that encourage children to
                    play, learn, explore and grow.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}