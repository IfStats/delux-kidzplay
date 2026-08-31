import type { Metadata } from "next";
import SiteLayout from "@/components/layout/SiteLayout";
import GalleryHero from "@/components/gallery/GalleryHero";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import QuoteCTA from "@/components/home/QuoteCTA";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "View Delux Kidzplay playground installations, recreational spaces, equipment and children's entertainment events in Ghana.",
};

export default function GalleryPage() {
  return (
    <SiteLayout>
      <GalleryHero />
      <GalleryGrid />
      <QuoteCTA />
    </SiteLayout>
  );
}