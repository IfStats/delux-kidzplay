export const galleryCategories = [
  "All",
  "Playgrounds",
  "Equipment",
  "Schools",
  "Funfairs",
  "Recreation",
] as const;

export const gallery = [
  {
    id: "gallery-001",
    title: "Playground Installation",
    category: "Playgrounds",
    image: "/images/gallery/gallery-1.jpg",
    alt: "Delux Kidzplay playground installation",
  },
  {
    id: "gallery-002",
    title: "Playground Equipment",
    category: "Equipment",
    image: "/images/gallery/gallery-2.jpg",
    alt: "Playground equipment supplied by Delux Kidzplay",
  },
  {
    id: "gallery-003",
    title: "School Recreation",
    category: "Schools",
    image: "/images/gallery/gallery-3.jpg",
    alt: "School recreational facility by Delux Kidzplay",
  },
  {
    id: "gallery-004",
    title: "Kids Funfair",
    category: "Funfairs",
    image: "/images/gallery/gallery-4.jpg",
    alt: "Kids funfair entertainment event",
  },
  {
    id: "gallery-005",
    title: "Recreational Space",
    category: "Recreation",
    image: "/images/gallery/gallery-5.jpg",
    alt: "Children's recreational space by Delux Kidzplay",
  },
  {
    id: "gallery-006",
    title: "Playground Equipment",
    category: "Equipment",
    image: "/images/gallery/gallery-6.jpg",
    alt: "Delux Kidzplay playground equipment",
  },
];

export type GalleryItem = (typeof gallery)[number];