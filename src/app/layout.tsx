import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Delux Kidzplay | Bringing Your Playground to Life",
    template: "%s | Delux Kidzplay",
  },
  description:
    "Delux Kidzplay provides playground equipment, school playground design and setup, kids funfair entertainment, and recreational programs in Accra, Ghana.",
  keywords: [
    "playground equipment Ghana",
    "playground equipment Accra",
    "school playground design Ghana",
    "school playground setup Accra",
    "kids funfair Ghana",
    "children entertainment Ghana",
    "school recreational programs Ghana",
    "Delux Kidzplay",
  ],
  openGraph: {
    title: "Delux Kidzplay | Bringing Your Playground to Life",
    description:
      "Play, learn and grow with Delux Kidzplay. Playground equipment, school playgrounds, funfairs and recreational programs in Ghana.",
    type: "website",
    locale: "en_GH",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}