import type { Metadata } from "next";
import AppointmentSection from "@/modules/home/component/Appointment";
import React from "react";

export const metadata: Metadata = {
  title: "Contact Us | Hire Radiologist Online India",
  description:
    "Get in touch with Voxel Teleradiology. Request a demo, schedule a consultation, or outsource radiology reporting for your diagnostic center. 24/7 support available. Affordable teleradiology services across India.",
  keywords: [
    "contact Voxel Teleradiology",
    "hire radiologist online India",
    "outsource radiology reporting India",
    "teleradiology consultation",
    "radiology reporting demo",
    "affordable teleradiology services India",
    "remote radiology reporting services",
  ],
  openGraph: {
    title: "Contact Voxel Teleradiology | Get Started Today",
    description:
      "Request a demo or consultation. Outsource radiology reporting for your diagnostic center with 24/7 expert support.",
    url: "https://voxelteleradiology.com/contact-us",
  },
  twitter: {
    title: "Contact Voxel Teleradiology",
    description:
      "Get in touch for teleradiology services, consultations, and demo requests.",
  },
  alternates: {
    canonical: "https://voxelteleradiology.com/contact-us",
  },
};

function page() {
  return (
    <div>
      <AppointmentSection />
    </div>
  );
}

export default page;