import type { Metadata } from "next";
import SiteLayout from "@/components/layout/SiteLayout";
import ContactHero from "@/components/contact/ContactHero";
import ContactInformation from "@/components/contact/ContactInformation";
import ContactForm from "@/components/forms/ContactForm";
import QuoteCTA from "@/components/home/QuoteCTA";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Delux Kidzplay & Entertainment in Accra, Ghana for playground equipment, school playground design, recreational programmes and kids events.",
};

export default function ContactPage() {
  return (
    <SiteLayout>
      <ContactHero />

      <section className="bg-[var(--delux-cream)] py-20">
        <div className="container-delux">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <ContactInformation />
            <ContactForm />
          </div>
        </div>
      </section>

      <QuoteCTA />
    </SiteLayout>
  );
}