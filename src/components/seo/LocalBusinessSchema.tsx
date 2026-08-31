export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Delux Kidzplay & Entertainment",
    description:
      "Playground equipment supply and installation, school playground design, children's entertainment and school recreational programmes.",
    url: "https://deluxkidzplay.com",
    telephone: "+233558640938",
    email: "deluxkidzplay@gmail.com",

    address: {
      "@type": "PostalAddress",
      streetAddress: "Paradise Residential Area, Dome Pillar 2",
      addressLocality: "Accra",
      addressCountry: "GH",
    },

    areaServed: {
      "@type": "Country",
      name: "Ghana",
    },

    serviceType: [
      "Playground Equipment Supply & Installation",
      "School Playground Design & Setup",
      "Kids Funfairs & Entertainment Events",
      "School-Based Recreational Programs",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}