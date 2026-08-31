import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Client testimonial will be placed here once the approved testimonial is received.",
    name: "Client Name",
    role: "School / Organization",
    accent: "var(--delux-green)",
  },
  {
    quote:
      "Client testimonial will be placed here once the approved testimonial is received.",
    name: "Client Name",
    role: "School / Organization",
    accent: "var(--delux-orange)",
  },
  {
    quote:
      "Client testimonial will be placed here once the approved testimonial is received.",
    name: "Client Name",
    role: "School / Organization",
    accent: "var(--delux-red)",
  },
];

export default function TestimonialsPreview() {
  return (
    <section className="bg-white py-20">
      <div className="container-delux">
        <div className="section-title">
          <span className="section-eyebrow">Client Experiences</span>

          <h2>
            What Our <span>Clients Say</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            We value the relationships we build with schools, organizations
            and families. Here is what our clients have to say about working
            with Delux Kidzplay.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <article
              key={`testimonial-${index}`}
              className="relative rounded-[30px] bg-[var(--delux-cream)] p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Quote icon */}
              <div
                className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full text-white"
                style={{ background: testimonial.accent }}
              >
                <Quote size={20} />
              </div>

              {/* Stars */}
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

              <p className="mt-6 min-h-[130px] text-sm leading-7 text-slate-600">
                “{testimonial.quote}”
              </p>

              <div className="mt-6 flex items-center gap-3 border-t border-slate-200 pt-5">
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

        <div className="mt-10 text-center">
          <a
            href="/testimonials"
            className="font-black text-[var(--delux-green-dark)] hover:underline"
          >
            Read More Client Experiences →
          </a>
        </div>
      </div>
    </section>
  );
}