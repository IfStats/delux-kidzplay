import type { Metadata } from "next";

import "./globals.css";

import LocalBusinessSchema from "@/components/seo/LocalBusinessSchema";

export const metadata: Metadata = {
  metadataBase: new URL("https://deluxkidzplay.com"),

  title: {
    default: "Delux Kidzplay | Playground Equipment & Kids Recreation in Ghana",
    template: "%s | Delux Kidzplay",
  },

  description:
    "Delux Kidzplay provides playground equipment supply and installation, school playground design, kids funfair entertainment and school recreational programmes in Accra, Ghana.",

  keywords: [
    "playground equipment Ghana",
    "playground equipment Accra",
    "school playground design Accra",
    "playground installation Ghana",
    "kids funfair Ghana",
    "children entertainment Ghana",
    "school recreational programs Ghana",
    "kids playground Accra",
    "Delux Kidzplay",
  ],

  authors: [
    {
      name: "Delux Kidzplay & Entertainment",
    },
  ],

  creator: "Delux Kidzplay & Entertainment",
  publisher: "Delux Kidzplay & Entertainment",

  alternates: {
    canonical: "https://deluxkidzplay.com",
  },

  openGraph: {
    type: "website",
    locale: "en_GH",
    url: "https://deluxkidzplay.com",
    siteName: "Delux Kidzplay",
    title: "Delux Kidzplay | Bringing Your Playground to Life",
    description:
      "Playground equipment, school playground design, children's entertainment and recreational programmes in Ghana.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Delux Kidzplay | Bringing Your Playground to Life",
    description:
      "Playground equipment, school playground design, children's entertainment and recreational programmes in Ghana.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  category: "business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GH">
      <body>
        <LocalBusinessSchema />
        {children}
      </body>
    </html>
  );
}