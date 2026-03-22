import React from "react";

interface JsonLdProps {
  data: Record<string, unknown>;
}

export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// ─── Pre-built Schema Objects ───────────────────────────────────────────────

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Voxel Teleradiology",
  url: "https://voxelteleradiology.com",
  logo: "https://voxelteleradiology.com/image/logo.png",
  description:
    "India's leading teleradiology service provider offering 24/7 remote radiology reporting for X-ray, CT, MRI, ECG, EEG, and more. Reports delivered within 10 minutes.",
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+91-9588894040",
      contactType: "sales",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    },
  ],
  sameAs: [
    "https://www.instagram.com/voxelteleradiology/",
  ],
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Voxel Teleradiology",
  url: "https://voxelteleradiology.com",
  description:
    "Outsource radiology reporting to India's fastest teleradiology service. 24/7 expert reporting for diagnostic centers with reports in 10 minutes.",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate:
        "https://voxelteleradiology.com/search?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

export const medicalBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "Voxel Teleradiology",
  url: "https://voxelteleradiology.com",
  description:
    "Professional teleradiology services for diagnostic centers across India. Expert radiology reporting within 10 minutes including X-ray, CT scan, MRI, ECG, EEG, and more.",
  medicalSpecialty: "Radiology",
  priceRange: "$$",
  openingHours: "Mo-Su 00:00-23:59",
  telephone: "+91-9588894040",
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
  },
  areaServed: {
    "@type": "Country",
    name: "India",
  },
};

export const teleradiologyServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Teleradiology",
  name: "Teleradiology Reporting Services",
  provider: {
    "@type": "Organization",
    name: "Voxel Teleradiology",
  },
  description:
    "24/7 remote radiology reporting services for diagnostic centers. Expert interpretation of X-ray, CT, MRI, ECG, EEG, TMT, PFT, OPG, CBCT, and Mammography with reports delivered within 10 minutes.",
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Radiology Reporting Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Digital X-Ray Reporting",
          description: "Accurate and rapid X-ray reporting for emergency and outpatient diagnostic evaluations.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "CT Scan Reporting",
          description: "Comprehensive interpretation of contrast and non-contrast CT studies with structured reporting.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "MRI Reporting",
          description: "Detailed MRI analysis across neuro, MSK, and spine with expert sub-specialist review.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "ECG Reporting",
          description: "Accurate ECG reporting for emergency and outpatient diagnostic evaluations.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Night & Emergency Reporting",
          description: "24/7 night teleradiology and emergency radiology reporting with STAT turnaround.",
        },
      },
    ],
  },
};

export const healthcareITServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Healthcare IT Solutions",
  name: "Healthcare IT Solutions for Clinics & Diagnostic Centers",
  provider: {
    "@type": "Organization",
    name: "Voxel Teleradiology",
  },
  description:
    "Comprehensive healthcare IT services including website development, WhatsApp API integration, social media management, PACS setup, and diagnostic lab software for clinics and diagnostic centers in India.",
  areaServed: {
    "@type": "Country",
    name: "India",
  },
};
