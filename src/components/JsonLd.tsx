export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://airacode.online/#organization",
        "name": "AIRACODE",
        "legalName": "AIRACODE Technologies",
        "url": "https://airacode.online",
        "logo": "https://airacode.online/logo-icon.png",
        "image": "https://airacode.online/logo-icon.png",
        "description":
          "AIRACODE is an agile software development startup and AI engineering studio. We digitalize businesses, modernize legacy systems, and build scalable digital products with state-of-the-art AI technology in 2–4 week sprints.",
        "email": "contact@airacode.online",
        "founder": {
          "@type": "Person",
          "name": "AIRACODE Founders"
        },
        "sameAs": [
          "https://github.com/AiraCode-Techonologies",
          "https://x.com/airacode",
          "https://linkedin.com/company/airacode"
        ],
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "email": "contact@airacode.online",
            "availableLanguage": ["English"]
          }
        ]
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://airacode.online/#service",
        "name": "AIRACODE Software & AI Engineering Studio",
        "parentOrganization": {
          "@id": "https://airacode.online/#organization"
        },
        "url": "https://airacode.online",
        "priceRange": "25069",
        "image": "https://airacode.online/logo-icon.png"
      },
      {
        "@type": "WebSite",
        "@id": "https://airacode.online/#website",
        "url": "https://airacode.online",
        "name": "AIRACODE",
        "publisher": {
          "@id": "https://airacode.online/#organization"
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
