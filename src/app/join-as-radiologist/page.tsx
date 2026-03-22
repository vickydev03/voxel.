import type { Metadata } from "next";
import JoinView from "@/component/JoinView";
import React from "react";

export const metadata: Metadata = {
  title: "Join as Radiologist | Remote Radiology Reporting Jobs India",
  description:
    "Join Voxel Teleradiology as a remote radiologist. Flexible working hours, competitive pay, and the opportunity to report X-ray, CT, MRI, ECG, and more from anywhere in India. Apply now for remote radiology reporting positions.",
  keywords: [
    "hire radiologist online India",
    "remote radiology reporting services",
    "radiologist jobs India",
    "teleradiology jobs",
    "join Voxel Teleradiology",
    "remote radiologist positions India",
    "part-time radiologist India",
    "freelance radiologist India",
  ],
  openGraph: {
    title: "Join as Radiologist | Remote Reporting Jobs — Voxel Teleradiology",
    description:
      "Flexible remote radiology positions. Report X-ray, CT, MRI from anywhere. Competitive compensation. Join India's fastest growing teleradiology team.",
    url: "https://voxelteleradiology.com/join-as-radiologist",
  },
  twitter: {
    title: "Join Voxel Teleradiology | Remote Radiologist Jobs India",
    description:
      "Remote radiology reporting positions with flexible hours and competitive pay. Apply now.",
  },
  alternates: {
    canonical: "https://voxelteleradiology.com/join-as-radiologist",
  },
};

function page() {
  return <JoinView />;
}

export default page;