import type { Metadata } from "next";
import Footer from "@/component/Footer";
import Navbar from "@/component/Navbar";
import AboutView from "@/modules/home/view/AboutView";
import React from "react";

export const metadata: Metadata = {
  title: "About Us | Remote Radiology Reporting Services India",
  description:
    "Learn about Voxel Teleradiology — India's trusted teleradiology partner. 50+ board-certified radiologists providing 24/7 remote radiology reporting with 99.9% clinical accuracy. Hire experienced radiologists online for your diagnostic center.",
  keywords: [
    "about Voxel Teleradiology",
    "remote radiology reporting services",
    "hire radiologist online India",
    "teleradiology company India",
    "board-certified radiologists India",
    "outsource radiology reporting India",
    "affordable teleradiology services India",
  ],
  openGraph: {
    title: "About Voxel Teleradiology | Remote Radiology Reporting India",
    description:
      "50+ sub-specialist radiologists. 24/7 coverage. 99.9% accuracy. Discover why 100+ diagnostic centers trust Voxel Teleradiology.",
    url: "https://voxelteleradiology.com/about-us",
  },
  twitter: {
    title: "About Voxel Teleradiology | Remote Radiology Reporting India",
    description:
      "50+ sub-specialist radiologists providing 24/7 remote radiology reporting across India.",
  },
  alternates: {
    canonical: "https://voxelteleradiology.com/about-us",
  },
};

function page() {
  return (
    <div>
      <div className=" z-50 absolute w-full">
        <Navbar />
      </div>
      <AboutView />
      <Footer />
    </div>
  );
}

export default page;
