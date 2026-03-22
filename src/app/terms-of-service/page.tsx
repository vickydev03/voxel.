import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Read the Terms of Service for Voxel Teleradiology. Understand the terms and conditions governing the use of our teleradiology reporting services, website, and platform.",
  openGraph: {
    title: "Terms of Service | Voxel Teleradiology",
    description:
      "Terms and conditions for using Voxel Teleradiology services and platform.",
    url: "https://voxelteleradiology.com/terms-of-service",
  },
  alternates: {
    canonical: "https://voxelteleradiology.com/terms-of-service",
  },
  robots: {
    index: true,
    follow: true,
  },
};

function page() {
  return <div>page</div>;
}

export default page;