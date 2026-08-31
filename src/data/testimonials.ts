export const testimonials = [
  {
    id: "testimonial-001",
    quote:
      "Client testimonial will be placed here once the approved testimonial is received.",
    name: "Client Name",
    role: "School / Organization",
    accent: "var(--delux-green)",
  },
  {
    id: "testimonial-002",
    quote:
      "Client testimonial will be placed here once the approved testimonial is received.",
    name: "Client Name",
    role: "School / Organization",
    accent: "var(--delux-orange)",
  },
  {
    id: "testimonial-003",
    quote:
      "Client testimonial will be placed here once the approved testimonial is received.",
    name: "Client Name",
    role: "School / Organization",
    accent: "var(--delux-red)",
  },
];

export type Testimonial = (typeof testimonials)[number];