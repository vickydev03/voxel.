import type { Metadata } from "next";
import Navbar from "@/component/Navbar";
import ServicesView from "@/modules/home/view/ServiceView";
import JsonLd, { teleradiologyServiceSchema } from "@/component/JsonLd";
import React from "react";

export const metadata: Metadata = {
  title:
    "Teleradiology Services India | X-Ray, CT, MRI Reporting Within 10 Minutes",
  description:
    "Voxel Teleradiology provides 24/7 expert teleradiology reporting services for diagnostic centers across India. X-ray, CT scan, MRI, ECG, EEG, Mammography, OPG, CBCT, PFT & TMT reporting within 10 minutes. Night teleradiology, emergency reporting & bulk X-ray reporting available. Affordable & HIPAA-compliant.",
  keywords: [
    "teleradiology services for diagnostic centers",
    "radiology reporting within 10 minutes",
    "night teleradiology services India",
    "emergency radiology reporting services",
    "bulk X-ray reporting services",
    "outsource radiology reporting India",
    "affordable teleradiology services India",
    "CT scan reporting services",
    "MRI reporting services India",
    "ECG reporting online",
    "remote radiology reporting services",
    "Voxel Teleradiology",
    "X-ray reporting services India",
    "Mammography reporting",
    "CBCT reporting services",
    "teleradiology company India",
  ],
  openGraph: {
    title:
      "Teleradiology Services | X-Ray, CT, MRI Reporting in 10 Min — Voxel",
    description:
      "24/7 expert radiology reporting: X-ray, CT, MRI, ECG & more. Reports in 10 min. Night & emergency coverage. Trusted by 100+ diagnostic centers.",
    url: "https://voxelteleradiology.com/services/teleradiology",
  },
  twitter: {
    title: "Teleradiology Services India | Reports in 10 Minutes",
    description:
      "24/7 X-ray, CT, MRI reporting for diagnostic centers. Emergency & night coverage. Reports in 10 minutes.",
  },
  alternates: {
    canonical: "https://voxelteleradiology.com/services/teleradiology",
  },
};

function page() {
  return (
    <div>
      <div className=" z-50 absolute w-full">
        <Navbar />
      </div>
      <JsonLd data={teleradiologyServiceSchema} />
      <ServicesView />
    </div>
  );
}

export default page;
