import { ArrowRight, MessageCircleHeart } from "lucide-react";

export default function TestimonialCTA() {
  return (
    <section className="bg-white py-16">
      <div className="container-delux">
        <div className="relative overflow-hidden rounded-[36px] bg-[var(--delux-blue)] px-7 py-12 text-center sm:px-12">
          <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-[var(--delux-green)]/20" />

          <div className="absolute -bottom-16 -right-10 h-40 w-40 rounded-full bg-[var(--delux-orange)]/20" />

          <div className="relative">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--delux-green)] text-white">
              <MessageCircleHeart size={27} />
            </div>

            <h2 className="mt-6 text-3xl font-black text-white sm:text-4xl">
              Ready to Create Your
              <span className="block text-[var(--delux-yellow)]">
                Own Success Story?
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-xl leading-7 text-blue-100">
              Let's talk about your playground, recreational space or
              children's event.
            </p>

            <a
              href="/get-a-quote"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-[var(--delux-green)] px-7 py-4 text-sm font-black uppercase tracking-wide text-white shadow-lg transition hover:-translate-y-1"
            >
              Start Your Project
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}