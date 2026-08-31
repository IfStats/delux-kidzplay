import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[var(--delux-blue)] text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="text-2xl font-black">DELUX</div>
            <div className="text-xl font-black text-[var(--delux-yellow)]">
              kidzplay
            </div>

            <p className="mt-4 max-w-xs text-sm leading-6 text-blue-100">
              Bringing Your Playground to Life. Creating spaces where children
              can play, learn and grow.
            </p>
          </div>

          <div>
            <h3 className="font-bold">Quick Links</h3>

            <div className="mt-4 space-y-3 text-sm text-blue-100">
              <a className="block hover:text-white" href="/about">
                About Us
              </a>
              <a className="block hover:text-white" href="/services">
                Our Services
              </a>
              <a className="block hover:text-white" href="/projects">
                Projects
              </a>
              <a className="block hover:text-white" href="/gallery">
                Gallery
              </a>
              <a className="block hover:text-white" href="/contact">
                Contact
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold">Our Services</h3>

            <div className="mt-4 space-y-3 text-sm text-blue-100">
              <p>Playground Equipment Supply & Installation</p>
              <p>School Playground Design & Setup</p>
              <p>Kids Funfairs & Entertainment Events</p>
              <p>School-Based Recreational Programs</p>
            </div>
          </div>

          <div>
            <h3 className="font-bold">Contact Us</h3>

            <div className="mt-4 space-y-4 text-sm text-blue-100">
              <a
                href="tel:+233558640938"
                className="flex items-start gap-3 hover:text-white"
              >
                <Phone size={18} className="mt-0.5 shrink-0" />
                055 864 0938
              </a>

              <a
                href="mailto:deluxkidzplay@gmail.com"
                className="flex items-start gap-3 break-all hover:text-white"
              >
                <Mail size={18} className="mt-0.5 shrink-0" />
                deluxkidzplay@gmail.com
              </a>

              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0" />
                Paradise Residential Area, Dome Pillar 2, Accra, Ghana
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/15 pt-6 text-center text-sm text-blue-200">
          © {new Date().getFullYear()} Delux Kidz Play & Entertainment. All
          rights reserved.
        </div>
      </div>
    </footer>
  );
}