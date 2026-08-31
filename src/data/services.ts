import {
  Building2,
  GraduationCap,
  PartyPopper,
  Trees,
} from "lucide-react";

export const services = [
  {
    id: "playground-equipment",
    title: "Playground Equipment Supply & Installation",
    shortTitle: "Equipment Supply & Installation",
    description:
      "Quality playground equipment supplied and professionally installed to create exciting recreational spaces for children.",
    fullDescription:
      "From selecting suitable equipment to professional installation, Delux Kidzplay helps transform available spaces into engaging playground environments.",
    features: [
      "Playground equipment sourcing",
      "Equipment selection and planning",
      "Professional installation",
      "Site-specific recommendations",
      "Quality-focused recreational solutions",
    ],
    icon: Trees,
    color: "var(--delux-green)",
    light: "var(--delux-green-light)",
  },

  {
    id: "school-playground",
    title: "School Playground Design & Setup",
    shortTitle: "School Playground Design",
    description:
      "Thoughtfully planned playground environments designed around the available space, children's needs and the school's requirements.",
    fullDescription:
      "We work with schools to plan and create recreational environments that make better use of outdoor spaces while encouraging active play and development.",
    features: [
      "Site assessment and planning",
      "Playground layout and design",
      "Equipment recommendations",
      "Installation and setup",
      "Recreational space planning",
    ],
    icon: GraduationCap,
    color: "var(--delux-red)",
    light: "#fff0f0",
  },

  {
    id: "kids-funfairs",
    title: "Kids Funfairs & Entertainment Events",
    shortTitle: "Kids Funfairs & Events",
    description:
      "Fun-filled experiences, games and entertainment designed to make children's events exciting and memorable.",
    fullDescription:
      "Delux Kidzplay provides children's entertainment and recreational experiences for funfairs, celebrations and other events.",
    features: [
      "Children's funfair planning",
      "Games and recreational activities",
      "Entertainment coordination",
      "Event setup support",
      "Fun and engaging experiences",
    ],
    icon: PartyPopper,
    color: "var(--delux-orange)",
    light: "#fff7e5",
  },

  {
    id: "school-recreation",
    title: "School-Based Recreational Programs",
    shortTitle: "School Recreational Programs",
    description:
      "Engaging recreational activities designed to encourage physical activity, creativity, confidence and social development.",
    fullDescription:
      "Our school-based recreational programmes provide children with opportunities to participate in enjoyable activities that complement their learning environment.",
    features: [
      "Structured recreational activities",
      "Physical play and movement",
      "Creative activities",
      "Group participation",
      "Child-friendly recreational experiences",
    ],
    icon: Building2,
    color: "var(--delux-blue)",
    light: "var(--delux-blue-light)",
  },
];

export type Service = (typeof services)[number];