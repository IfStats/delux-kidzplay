import SiteLayout from "@/components/layout/SiteLayout";
import Hero from "@/components/home/Hero";
import ServicesPreview from "@/components/home/ServicesPreview";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import AboutPreview from "@/components/home/AboutPreview";
import TestimonialsPreview from "@/components/home/TestimonialsPreview";
import QuoteCTA from "@/components/home/QuoteCTA";

export default function Home() {
  return (
    <SiteLayout>
      <Hero />
      <ServicesPreview />
      <FeaturedProjects />
      <WhyChooseUs />
      <AboutPreview />
      <TestimonialsPreview />
      <QuoteCTA />
    </SiteLayout>
  );
}