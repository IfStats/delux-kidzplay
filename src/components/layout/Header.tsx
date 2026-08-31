"use client";

import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import Logo from "@/components/brand/Logo";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Gallery", href: "/gallery" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Contact strip */}
      <div
        className="text-white"
        style={{ background: "var(--delux-green)" }}
      >
        <div className="container-delux flex min-h-9 items-center justify-between gap-4 text-xs font-semibold">
          <div className="flex items-center gap-5">
            <a
              href="tel:+233558640938"
              className="flex items-center gap-2"
            >
              <Phone size={14} />
              055 864 0938
            </a>

            <a
              href="mailto:deluxkidzplay@gmail.com"
              className="hidden sm:block"
            >
              deluxkidzplay@gmail.com
            </a>
          </div>

          {/* Social media placeholders.
              We'll connect the actual accounts when the client provides them. */}
          <div className="hidden items-center gap-2 md:flex">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/15 text-[10px] font-black">
              f
            </span>

            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/15 text-[10px] font-black">
              ig
            </span>

            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/15 text-[10px] font-black">
              ▶
            </span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container-delux">
        <div className="flex min-h-[82px] items-center justify-between gap-6">
          <a href="/" aria-label="Delux Kidzplay home">
            <Logo />
          </a>

          <nav className="hidden items-center gap-6 lg:flex">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-bold text-slate-700 transition hover:text-[var(--delux-green)]"
              >
                {item.label}
              </a>
            ))}

            <a
              href="/get-a-quote"
              className="rounded-full bg-[var(--delux-red)] px-6 py-3 text-xs font-black uppercase tracking-wide text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              Get a Quote
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            className="rounded-xl p-2 transition hover:bg-[var(--delux-green-light)] lg:hidden"
            style={{ color: "var(--delux-blue)" }}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile navigation */}
        {open && (
          <nav className="border-t border-slate-100 pb-4 lg:hidden">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 font-bold text-slate-700 transition hover:bg-[var(--delux-green-light)] hover:text-[var(--delux-green-dark)]"
              >
                {item.label}
              </a>
            ))}

            <a
              href="/get-a-quote"
              onClick={() => setOpen(false)}
              className="mt-2 block rounded-full bg-[var(--delux-red)] px-5 py-3 text-center font-black uppercase text-white"
            >
              Get a Quote
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}