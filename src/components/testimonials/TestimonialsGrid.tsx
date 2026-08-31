import { Quote, Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export default function TestimonialsGrid() {
  return (
    <section className="bg-[var(--delux-cream)] py-20">
      <div className="container-delux">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className="relative rounded-[30px] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div
                className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full text-white"
                style={{ background: testimonial.accent }}
              >
                <Quote size={20} />
              </div>

              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    size={16}
                    fill="currentColor"
                    className="text-[var(--delux-orange)]"
                  />
                ))}
              </div>

              <blockquote className="mt-6 min-h-[150px] text-base leading-7 text-slate-600">
                “{testimonial.quote}”
              </blockquote>

              <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5">
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-full text-sm font-black text-white"
                  style={{ background: testimonial.accent }}
                >
                  {testimonial.name.charAt(0)}
                </div>

                <div>
                  <p className="font-black text-[var(--delux-blue)]">
                    {testimonial.name}
                  </p>

                  <p className="text-xs text-slate-500">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}