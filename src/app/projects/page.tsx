import type { Metadata } from "next";
import SiteLayout from "@/components/layout/SiteLayout";
import ProjectsHero from "@/components/projects/ProjectsHero";
import ProjectGrid from "@/components/projects/ProjectGrid";
import QuoteCTA from "@/components/home/QuoteCTA";

export const metadata: Metadata = {
  title: "Our Projects",
  description:
    "Explore Delux Kidzplay playground installations, recreational spaces, school projects and children's events in Ghana.",
};

export default function ProjectsPage() {
  return (
    <SiteLayout>
      <ProjectsHero />
      <ProjectGrid />
      <QuoteCTA />
    </SiteLayout>
  );
}