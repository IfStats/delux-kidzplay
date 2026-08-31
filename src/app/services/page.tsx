import type { Metadata } from "next";
import SiteLayout from "@/components/layout/SiteLayout";
import ServicesHero from "@/components/services/ServicesHero";
import ServiceDetails from "@/components/services/ServiceDetails";
import HowWeWork from "@/components/services/HowWeWork";
import QuoteCTA from "@/components/home/QuoteCTA";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore Delux Kidzplay's playground equipment, school playground design, kids funfair and school recreational services in Ghana.",
};

export default function ServicesPage() {
  return (
    <SiteLayout>
      <ServicesHero />
      <ServiceDetails />
      <HowWeWork />
      <QuoteCTA />
    </SiteLayout>
  );
}