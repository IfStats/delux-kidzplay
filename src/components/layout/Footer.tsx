import {
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Gallery", href: "/gallery" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
];

const services = [
  "Playground Equipment Supply & Installation",
  "School Playground Design & Setup",
  "Kids Funfairs & Entertainment Events",
  "School-Based Recreational Programs",
];

export default function Footer() {
  return (
    <footer className="bg-[var(--delux-blue)] text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="text-2xl font-black">DELUX</div>

            <div className="text-xl font-black text-[var(--delux-yellow)]">
              kidzplay
            </div>

            <p className="mt-4 max-w-xs text-sm leading-6 text-blue-100">
              Bringing Your Playground to Life. Creating spaces where children
              can play, learn and grow.
            </p>

            <a
              href="/get-a-quote"
              className="mt-6 inline-flex rounded-full bg-[var(--delux-red)] px-5 py-3 text-xs font-black uppercase tracking-wide text-white transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              Get a Quote
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold">Quick Links</h3>

            <div className="mt-4 space-y-3 text-sm text-blue-100">
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  className="block transition hover:text-white"
                  href={link.href}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold">Our Services</h3>

            <div className="mt-4 space-y-3 text-sm leading-6 text-blue-100">
              {services.map((service) => (
                <p key={service}>{service}</p>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold">Contact Us</h3>

            <div className="mt-4 space-y-4 text-sm text-blue-100">
              <a
                href="tel:+233558640938"
                className="flex items-start gap-3 transition hover:text-white"
              >
                <Phone size={18} className="mt-0.5 shrink-0" />
                <span>055 864 0938</span>
              </a>

              <a
                href="mailto:deluxkidzplay@gmail.com"
                className="flex items-start gap-3 break-all transition hover:text-white"
              >
                <Mail size={18} className="mt-0.5 shrink-0" />
                <span>deluxkidzplay@gmail.com</span>
              </a>

              <a
                href="https://wa.me/233558640938"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 transition hover:text-white"
              >
                <MessageCircle size={18} className="mt-0.5 shrink-0" />
                <span>Chat with us on WhatsApp</span>
              </a>

              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0" />

                <span>
                  Paradise Residential Area,
                  <br />
                  Dome Pillar 2,
                  <br />
                  Accra, Ghana
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-3 border-t border-white/15 pt-6 text-center text-sm text-blue-200 sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p>
            © {new Date().getFullYear()} Delux Kidzplay & Entertainment. All
            rights reserved.
          </p>

          <a
            href="/get-a-quote"
            className="font-bold transition hover:text-white"
          >
            Start Your Project →
          </a>
        </div>
      </div>
    </footer>
  );
}