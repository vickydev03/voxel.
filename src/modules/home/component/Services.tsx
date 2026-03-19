"use client";

import React from "react";
import { motion } from "framer-motion"; // Note: standard import is usually framer-motion
import Image from "next/image";
import {
  ArrowRight,
  Activity,
  Scan,
  Zap,
  ShieldCheck,
  Microscope,
  Layers,
} from "lucide-react";
import Link from "next/link";

export const services = [
  {
    title: "CT Scan Reporting",
    description:
      "Comprehensive interpretation of contrast and non-contrast CT studies with structured reporting.",
    icon: <Scan className="w-6 h-6" />,
    image:"/image/ct scan.webp",
    demo:`${process.env.NEXT_PUBLIC_BASE_APP}/files/ct-scan.pdf`
  },
  {
    title: "MRI Reporting",
    description:
      "Detailed MRI analysis across neuro, MSK, and spine with expert sub-specialist review.",
    icon: <Layers className="w-6 h-6" />,
    image:
      "/image/mri.webp",
      demo:`${process.env.NEXT_PUBLIC_BASE_APP}/files/mri.pdf`
  },
  {
    title: "Digital X-Ray Reporting",
    description:
      "Accurate and rapid X-ray reporting for emergency and outpatient diagnostic evaluations.",
    icon: <Activity className="w-6 h-6" />,
    image:
      "/image/x ray.webp",
      demo:`${process.env.NEXT_PUBLIC_BASE_APP}/files/x-ray.pdf`
  },
  {
    title: "Ultrasound Reporting",
    description:
      "High-quality ultrasound interpretations covering abdominal, obstetric, and vascular studies.",
    icon: <Microscope className="w-6 h-6" />,
    image:
      "https://images.unsplash.com/photo-1581594549595-35f6edc7b762?auto=format&fit=crop&w=1200&q=80",
      demo:`${process.env.NEXT_PUBLIC_BASE_APP}/files/eeg.pdf`
  },
  {
  title: "TMT Reporting",
  description:
    "Expert interpretation of Treadmill Test (TMT) results to evaluate cardiac stress response and detect potential ischemic changes.",
  icon: <Zap className="w-6 h-6" />,
  image:
    "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1200&q=80",
    
  demo:`${process.env.NEXT_PUBLIC_BASE_APP}/files/tmt.pdf`
},
{
  title: "Mammography Reporting",
  description:
    "Specialized analysis of mammography scans to support early detection and accurate diagnosis of breast abnormalities.",
  icon: <ShieldCheck className="w-6 h-6" />,
  image:"https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
  demo:`${process.env.NEXT_PUBLIC_BASE_APP}/files/Mammography.pdf`
}
];

function ServicesSection() {
  return (
    <section className="w-full bg-[#fcfcfd] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-sm font-bold tracking-widest uppercase text-blue-600 mb-3">
              Specialized Solutions
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
              Our Radiology{" "}
              <span
                style={{
                  background: "linear-gradient(100deg, #01aed8, #ff4c4c)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Services
              </span>
            </h3>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-slate-500 text-lg max-w-md leading-relaxed"
          >
            Delivering sub-specialty expertise and rapid turnaround times to
            healthcare providers worldwide.
          </motion.p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white border border-slate-200 rounded-3xl overflow-hidden hover:border-blue-300 transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-60" />

                {/* Floating Icon Tag */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md p-3 rounded-2xl shadow-sm text-blue-600">
                  {service.icon}
                </div>
              </div>

              {/* Content Container */}
              <div className="p-8">
               <h4
  className="
    text-xl font-bold mb-3
    text-slate-900
    transition-all duration-300
    group-hover:bg-gradient-to-r
    group-hover:from-[#01aed8]
    group-hover:to-[#ff4c4c]
    group-hover:bg-clip-text
    group-hover:text-transparent
  "
>
  {service.title}
</h4>

                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="flex items-center  font-semibold text-sm cursor-pointer group/link">
                 <Link href={service.demo} target="_blank" rel="noopener noreferrer">
                      <span
                        className="capitalize"
                        style={{
                          background: "linear-gradient(100deg, #01aed8, #ff4c4c)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }}
                      >
                        view demo
                      </span>
                  </Link>
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
