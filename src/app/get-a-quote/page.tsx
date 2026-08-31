import type { Metadata } from "next";
import SiteLayout from "@/components/layout/SiteLayout";
import QuoteForm from "@/components/forms/QuoteForm";

export const metadata: Metadata = {
  title: "Get a Quote",
  description:
    "Request a quote from Delux Kidzplay for playground equipment, school playground design, recreational programmes and children's events.",
};

export default function GetAQuotePage() {
  return (
    <SiteLayout>
      <section className="bg-[var(--delux-green)]">
        <div className="container-delux py-16 text-center sm:py-20">
          <span className="inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-bold text-white">
            Start Your Project
          </span>

          <h1 className="mt-5 text-5xl font-black leading-tight text-white sm:text-6xl">
            Let's Build Something
            <span className="block text-[var(--delux-yellow)]">
              Children Will Love.
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-green-50">
            Tell us about your requirements and the Delux Kidzplay team can
            help you take the next step.
          </p>
        </div>
      </section>

      <section className="bg-[var(--delux-cream)] py-16 sm:py-20">
        <div className="container-delux max-w-4xl">
          <QuoteForm />
        </div>
      </section>
    </SiteLayout>
  );
}