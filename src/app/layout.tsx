import type { Metadata } from "next";
import {
  Playfair_Display,
  Outfit,
  Montserrat,
  Inter,
} from "next/font/google";
import "./globals.css";
import JsonLd, { organizationSchema, websiteSchema } from "@/component/JsonLd";
import { GoogleAnalytics } from '@next/third-parties/google'
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});
const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  weight: ["400", "500"],
  subsets: ["cyrillic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://voxelteleradiology.com"),
  icons: {
    icon: "/image/favicon.ico",
  },
  title: {
    default:
      "Voxel Teleradiology | Outsource Radiology Reporting India — Reports in 10 Minutes",
    template: "%s | Voxel Teleradiology",
  },
  description:
    "India's fastest teleradiology service. Outsource radiology reporting with expert radiologists. 24/7 X-ray, CT, MRI reporting within 10 minutes for diagnostic centers. Affordable, HIPAA-compliant remote radiology.",
  keywords: [
    "Outsource radiology reporting India",
    "Teleradiology services for diagnostic centers",
    "Radiology reporting within 10 minutes",
    "Night teleradiology services India",
    "Emergency radiology reporting services",
    "Affordable teleradiology services India",
    "Hire radiologist online India",
    "Remote radiology reporting services",
    "Bulk X-ray reporting services",
    "Voxel Teleradiology",
    "teleradiology India",
    "remote radiology India",
    "online radiology reporting",
    "CT scan reporting services",
    "MRI reporting services India",
  ],
  authors: [{ name: "Voxel Teleradiology" }],
  creator: "Voxel Teleradiology",
  publisher: "Voxel Teleradiology",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://voxelteleradiology.com",
    siteName: "Voxel Teleradiology",
    title:
      "Voxel Teleradiology | Outsource Radiology Reporting India — Reports in 10 Minutes",
    description:
      "India's fastest teleradiology service. 24/7 expert X-ray, CT, MRI reporting within 10 minutes for diagnostic centers. Affordable & HIPAA-compliant.",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Voxel Teleradiology — Outsource Radiology Reporting India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Voxel Teleradiology | Outsource Radiology Reporting India",
    description:
      "24/7 expert radiology reporting within 10 minutes for diagnostic centers across India. Affordable teleradiology services.",
    images: ["/og-image.webp"],
  },
  alternates: {
    canonical: "https://voxelteleradiology.com",
  },
  // Uncomment after adding your Google Search Console verification code:
  // verification: {
  //   google: "YOUR_GOOGLE_VERIFICATION_CODE",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/images/hero-bg.jpg"
          as="image"
          fetchPriority="high"
        />
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
      </head>
      <body
        className={`${inter.className} ${playfair.variable} ${outfit.variable} ${montserrat.variable} antialiased relative`}
      >
        
        {children}
      </body>
      <GoogleAnalytics gaId="G-KR8J5MJW0D" />
    </html>
  );
}
