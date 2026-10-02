export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://airacode.com/#organization",
        "name": "AIRACODE",
        "legalName": "AIRACODE Technologies",
        "url": "https://airacode.com",
        "logo": "https://airacode.com/logo.png",
        "image": "https://airacode.com/og-image.png",
        "description":
          "AIRACODE is an agile software development startup and AI engineering studio. We digitalize businesses, modernize legacy systems, and build scalable digital products with state-of-the-art AI technology in 2–4 week sprints.",
        "email": "contact@airacode.com",
        "founder": {
          "@type": "Person",
          "name": "AIRACODE Founders"
        },
        "sameAs": [
          "https://github.com/airacode",
          "https://x.com/airacode",
          "https://linkedin.com/company/airacode"
        ],
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "email": "contact@airacode.com",
            "availableLanguage": ["English"]
          }
        ]
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://airacode.com/#service",
        "name": "AIRACODE Software & AI Engineering Studio",
        "parentOrganization": {
          "@id": "https://airacode.com/#organization"
        },
        "url": "https://airacode.com",
        "priceRange": "25069",
        "image": "https://airacode.com/og-image.png"
      },
      {
        "@type": "WebSite",
        "@id": "https://airacode.com/#website",
        "url": "https://airacode.com",
        "name": "AIRACODE",
        "publisher": {
          "@id": "https://airacode.com/#organization"
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
