import type { Metadata } from "next";
import Navbar from "@/component/Navbar";
import HealthcareITView from "@/modules/home/view/HealthcareITView";
import JsonLd, { healthcareITServiceSchema } from "@/component/JsonLd";
import React from "react";

export const metadata: Metadata = {
  title:
    "Healthcare IT Solutions | PACS Setup, Website Development for Clinics India",
  description:
    "Voxel Teleradiology's Healthcare IT division offers website development for clinics & labs, WhatsApp API messaging, social media management, professional content shoots, diagnostic lab software, and PACS setup & integration across India.",
  keywords: [
    "healthcare IT solutions India",
    "PACS setup integration India",
    "website development clinics labs",
    "WhatsApp API healthcare",
    "social media management clinics",
    "diagnostic lab software India",
    "Voxel Teleradiology IT services",
    "digital marketing healthcare India",
  ],
  openGraph: {
    title: "Healthcare IT Solutions | PACS, Web Dev, WhatsApp API — Voxel",
    description:
      "Complete digital growth solutions for clinics & diagnostic centers: PACS setup, website development, WhatsApp API, social media & more.",
    url: "https://voxelteleradiology.com/services/healthcare-it",
  },
  twitter: {
    title: "Healthcare IT Solutions for Clinics — Voxel Teleradiology",
    description:
      "PACS setup, web development, WhatsApp API, and more for clinics and diagnostic centers in India.",
  },
  alternates: {
    canonical: "https://voxelteleradiology.com/services/healthcare-it",
  },
};

function page() {
  return (
    <div>
      <div className=" z-50 absolute w-full">
        <Navbar />
      </div>
      <JsonLd data={healthcareITServiceSchema} />
      <HealthcareITView />
    </div>
  );
}

export default page;
