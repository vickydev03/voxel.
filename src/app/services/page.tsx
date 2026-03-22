import type { Metadata } from "next";
import Navbar from "@/component/Navbar";
import ServicesChoiceView from "@/modules/home/view/ServicesChoiceView";
import React from "react";

export const metadata: Metadata = {
  title: "Our Services | Affordable Teleradiology & Healthcare IT Solutions India",
  description:
    "Explore Voxel Teleradiology's comprehensive services: expert teleradiology reporting (X-ray, CT, MRI) within 10 minutes and advanced Healthcare IT solutions including PACS setup, website development, and WhatsApp API for clinics and diagnostic centers in India.",
  keywords: [
    "teleradiology services for diagnostic centers",
    "affordable teleradiology services India",
    "healthcare IT solutions",
    "PACS setup India",
    "radiology reporting within 10 minutes",
    "outsource radiology reporting India",
    "remote radiology reporting services",
    "Voxel Teleradiology services",
  ],
  openGraph: {
    title: "Services | Teleradiology & Healthcare IT — Voxel Teleradiology",
    description:
      "Expert teleradiology reporting and healthcare IT solutions for diagnostic centers. Affordable, fast, and reliable services across India.",
    url: "https://voxelteleradiology.com/services",
  },
  twitter: {
    title: "Services | Teleradiology & Healthcare IT — Voxel Teleradiology",
    description:
      "Expert teleradiology reporting and healthcare IT solutions for diagnostic centers in India.",
  },
  alternates: {
    canonical: "https://voxelteleradiology.com/services",
  },
};

function page() {
  return (
    <div className="">
      <div className=" z-50 absolute w-full">
        <Navbar />
      </div>
      <ServicesChoiceView />
    </div>
  );
}

export default page;