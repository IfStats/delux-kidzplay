export const projectCategories = [
  "All",
  "School Playgrounds",
  "Playground Installations",
  "Recreational Spaces",
  "Funfairs & Events",
] as const;

export const projects = [
  {
    id: "project-001",
    title: "School Playground Installation",
    slug: "school-playground-installation",
    category: "School Playgrounds",
    location: "Accra, Ghana",
    description:
      "A playground project designed to create an engaging outdoor environment for children.",
    image: "/images/projects/project-1.jpg",
    images: [
      "/images/projects/project-1.jpg",
    ],
    featured: true,
  },
  {
    id: "project-002",
    title: "Playground Equipment Installation",
    slug: "playground-equipment-installation",
    category: "Playground Installations",
    location: "Accra, Ghana",
    description:
      "A playground equipment installation focused on active play and recreational enjoyment.",
    image: "/images/projects/project-2.jpg",
    images: [
      "/images/projects/project-2.jpg",
    ],
    featured: true,
  },
  {
    id: "project-003",
    title: "Children's Recreational Space",
    slug: "childrens-recreational-space",
    category: "Recreational Spaces",
    location: "Ghana",
    description:
      "A recreational environment designed to encourage children to play, explore and interact.",
    image: "/images/projects/project-3.jpg",
    images: [
      "/images/projects/project-3.jpg",
    ],
    featured: true,
  },
];

export type Project = (typeof projects)[number];
export type ProjectCategory = (typeof projectCategories)[number];