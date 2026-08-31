import type { Metadata } from "next";
import SiteLayout from "@/components/layout/SiteLayout";
import AboutHero from "@/components/about/AboutHero";
import CompanyStory from "@/components/about/CompanyStory";
import MissionValues from "@/components/about/MissionValues";
import Leadership from "@/components/about/Leadership";
import QuoteCTA from "@/components/home/QuoteCTA";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Delux Kidzplay & Entertainment, our approach to playgrounds and recreation, and our leadership in Accra, Ghana.",
};

export default function AboutPage() {
  return (
    <SiteLayout>
      <AboutHero />
      <CompanyStory />
      <MissionValues />
      <Leadership />
      <QuoteCTA />
    </SiteLayout>
  );
}