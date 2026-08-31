import {
  ArrowRight,
  MessageCircle,
  Phone,
  Sparkles,
} from "lucide-react";

export default function QuoteCTA() {
  return (
    <section className="relative overflow-hidden bg-[var(--delux-green)] py-20">
      {/* Decorative circles */}
      <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-white/10" />

      <div className="absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-white/10" />

      <div className="container-delux relative">
        <div className="mx-auto max-w-4xl text-center text-white">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-white/15">
            <Sparkles size={26} />
          </div>

          <h2 className="text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
            Ready to Bring Your
            <span className="block text-[var(--delux-yellow)]">
              Playground to Life?
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-green-50 sm:text-lg">
            Whether you're planning a school playground, recreational space or
            children's event, let's create something exciting together.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="/get-a-quote"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-black uppercase tracking-wide text-[var(--delux-green-dark)] shadow-xl transition hover:-translate-y-1"
            >
              Get a Free Quote
              <ArrowRight size={18} />
            </a>

            <a
              href="https://wa.me/233558640938"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--delux-blue)] px-7 py-4 text-sm font-black uppercase tracking-wide text-white shadow-xl transition hover:-translate-y-1"
            >
              <MessageCircle size={18} />
              WhatsApp Us
            </a>
          </div>

          <div className="mt-7 flex justify-center">
            <a
              href="tel:+233558640938"
              className="flex items-center gap-2 text-sm font-bold text-white/90 hover:text-white"
            >
              <Phone size={17} />
              055 864 0938
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}