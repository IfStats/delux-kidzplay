import type { Metadata } from "next";
import SiteLayout from "@/components/layout/SiteLayout";
import TestimonialsHero from "@/components/testimonials/TestimonialsHero";
import TestimonialsGrid from "@/components/testimonials/TestimonialsGrid";
import TestimonialCTA from "@/components/testimonials/TestimonialCTA";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Read testimonials and client experiences from Delux Kidzplay playground, recreation and children's entertainment projects in Ghana.",
};

export default function TestimonialsPage() {
  return (
    <SiteLayout>
      <TestimonialsHero />
      <TestimonialsGrid />
      <TestimonialCTA />
    </SiteLayout>
  );
}