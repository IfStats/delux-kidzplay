import {
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

const contactItems = [
  {
    title: "Call Us",
    value: "055 864 0938",
    href: "tel:+233558640938",
    icon: Phone,
    color: "var(--delux-green)",
  },
  {
    title: "Email Us",
    value: "deluxkidzplay@gmail.com",
    href: "mailto:deluxkidzplay@gmail.com",
    icon: Mail,
    color: "var(--delux-red)",
  },
  {
    title: "WhatsApp",
    value: "Chat with Delux Kidzplay",
    href: "https://wa.me/233558640938",
    icon: MessageCircle,
    color: "var(--delux-orange)",
  },
];

export default function ContactInformation() {
  return (
    <div>
      <span className="section-eyebrow">Contact Information</span>

      <h2 className="mt-2 text-4xl font-black leading-tight text-[var(--delux-blue)]">
        We'd Love to
        <span className="block text-[var(--delux-green)]">
          Hear From You.
        </span>
      </h2>

      <p className="mt-5 leading-7 text-slate-600">
        Reach out to discuss your playground, recreational or children's
        entertainment requirements.
      </p>

      <div className="mt-8 space-y-4">
        {contactItems.map((item) => {
          const Icon = item.icon;

          return (
            <a
              key={item.title}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={
                item.href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              className="flex items-center gap-4 rounded-2xl bg-[var(--delux-cream)] p-4 transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-white"
                style={{ background: item.color }}
              >
                <Icon size={22} />
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
                  {item.title}
                </p>

                <p className="mt-1 text-sm font-black text-[var(--delux-blue)]">
                  {item.value}
                </p>
              </div>
            </a>
          );
        })}
      </div>

      <div className="mt-8 flex gap-4 rounded-3xl bg-[var(--delux-green-light)] p-6">
        <MapPin
          size={24}
          className="mt-1 shrink-0 text-[var(--delux-green)]"
        />

        <div>
          <p className="font-black text-[var(--delux-blue)]">
            Our Location
          </p>

          <p className="mt-1 text-sm leading-6 text-slate-600">
            Paradise Residential Area,
            <br />
            Dome Pillar 2, Accra, Ghana
          </p>
        </div>
      </div>
    </div>
  );
}