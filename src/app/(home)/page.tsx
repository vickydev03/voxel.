import type { Metadata } from "next";
import HomeView from "@/modules/home/view/HomeView";
import JsonLd, { medicalBusinessSchema } from "@/component/JsonLd";
import React from "react";

export const metadata: Metadata = {
  title:
    "Outsource Radiology Reporting India | 24/7 Teleradiology — Reports in 10 Minutes",
  description:
    "Voxel Teleradiology — India's fastest teleradiology service for diagnostic centers. Outsource X-ray, CT, MRI reporting to expert radiologists. 24/7 coverage with reports delivered within 10 minutes. Affordable, HIPAA-compliant, and trusted by 100+ centers.",
  keywords: [
    "Outsource radiology reporting India",
    "Teleradiology services for diagnostic centers",
    "Radiology reporting within 10 minutes",
    "Voxel Teleradiology",
    "remote radiology reporting services",
    "affordable teleradiology services India",
    "bulk X-ray reporting services",
    "night teleradiology services India",
    "emergency radiology reporting services",
    "hire radiologist online India",
  ],
  openGraph: {
    title:
      "Voxel Teleradiology | Outsource Radiology Reporting India — 10 Min Reports",
    description:
      "24/7 expert radiology reporting for diagnostic centers. X-ray, CT, MRI reports in 10 minutes. Affordable teleradiology services across India.",
    url: "https://voxelteleradiology.com",
    type: "website",
  },
  twitter: {
    title: "Voxel Teleradiology | Outsource Radiology Reporting India",
    description:
      "24/7 expert radiology reporting for diagnostic centers across India. Reports in 10 minutes.",
  },
  alternates: {
    canonical: "https://voxelteleradiology.com",
  },
};

function page() {
  return (
    <div className="h-full w-full">
      <JsonLd data={medicalBusinessSchema} />
      <HomeView />
    </div>
  );
}

export default page;
