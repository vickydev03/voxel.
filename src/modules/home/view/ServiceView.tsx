"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  ArrowRight,
  Activity,
  Scan,
  Zap,
  ShieldCheck,
  Microscope,
  Layers,
  Globe,
  Database,
  Clock,
  ClipboardCheck,
} from "lucide-react";
import Link from "next/link";

// Service Data (Enhanced)
export const services = [
  {
    title: "Digital X-Ray Reporting",
    description:
      "Accurate and rapid X-ray reporting for emergency and outpatient diagnostic evaluations.",
    icon: <Activity className="w-6 h-6" />,
    image: "/image/x ray.webp",
    demo: `${process.env.NEXT_PUBLIC_BASE_APP}/files/x-ray.pdf`,
  },
  {
    title: "CT Scan Reporting",
    description:
      "Comprehensive interpretation of contrast and non-contrast CT studies with structured reporting.",
    icon: <Scan className="w-6 h-6" />,
    image: "/image/ct scan.webp",
    demo: `${process.env.NEXT_PUBLIC_BASE_APP}/files/ct-scan.pdf`,
  },
  {
    title: "MRI Reporting",
    description:
      "Detailed MRI analysis across neuro, MSK, and spine with expert sub-specialist review.",
    icon: <Layers className="w-6 h-6" />,
    image: "/image/mri.webp",
    demo: `${process.env.NEXT_PUBLIC_BASE_APP}/files/mri.pdf`,
  },

  {
    title: "Mammography Reporting",
    description:
      "Accurate and rapid Mammography reporting for emergency and outpatient diagnostic evaluations.",
    icon: <Activity className="w-6 h-6" />,
    image: "/image/Mammography.webp",
    demo: `${process.env.NEXT_PUBLIC_BASE_APP}/files/Mammography.pdf`,
  },
  {
    title: "ECG Reporting",
    description:
      "Accurate and rapid ECG reporting for emergency and outpatient diagnostic evaluations.",
    icon: <Activity className="w-6 h-6" />,
    image: "/image/ecg.webp",
    demo: `${process.env.NEXT_PUBLIC_BASE_APP}/files/ecg.pdf`,
  },
  {
    title: "EEG Reporting",
    description:
      "Accurate and rapid EEG reporting for emergency and outpatient diagnostic evaluations.",
    icon: <Activity className="w-6 h-6" />,
    image: "/image/eeg.webp",
    demo: `${process.env.NEXT_PUBLIC_BASE_APP}/files/eeg.pdf`,
  },

  {
    title: "OPG Reporting",
    description:
      "Accurate and rapid OPG reporting for emergency and outpatient diagnostic evaluations.",
    icon: <Activity className="w-6 h-6" />,
    image: "/image/opg.webp",
    demo: `${process.env.NEXT_PUBLIC_BASE_APP}/files/opg.pdf`,
  },
  {
  title: "CBCT Reporting",
  description:
    "High-resolution CBCT reporting for detailed 3D imaging, enabling precise diagnosis in dental and maxillofacial cases.",
  icon: <Activity className="w-6 h-6" />,
  image: "https://images.unsplash.com/photo-1600170311833-c2cf5280ce49?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  demo: `${process.env.NEXT_PUBLIC_BASE_APP}/files/cbct.pdf`,
},
{
  title: "PFT Reporting",
  description:
    "Comprehensive Pulmonary Function Test (PFT) reporting for accurate assessment of lung capacity and respiratory conditions.",
  icon: <Activity className="w-6 h-6" />,
  image: "/image/pft.webp",
  demo: `${process.env.NEXT_PUBLIC_BASE_APP}/files/pft.pdf`,
},

  {
    title: "TMT Reporting",
    description:
      "Accurate and rapid TMT reporting for emergency and outpatient diagnostic evaluations.",
    icon: <Activity className="w-6 h-6" />,
    image: "/image/tmt.webp",
    demo: `${process.env.NEXT_PUBLIC_BASE_APP}/files/tmt.pdf`,
  },
];

const steps = [
  {
    title: "Image Upload",
    desc: "Secure DICOM transmission via encrypted PACS gateway.",
    icon: <Globe size={20} />,
  },
  {
    title: "Triage",
    desc: "Automated routing to the appropriate sub-specialist.",
    icon: <Database size={20} />,
  },
  {
    title: "Interpretation",
    desc: "Expert analysis by board-certified radiologists.",
    icon: <Microscope size={20} />,
  },
  {
    title: "Final Report",
    desc: "Structured digital report delivered to your EMR.",
    icon: <ClipboardCheck size={20} />,
  },
];

export default function ServicesView() {
  return (
    <main className="bg-[#fcfcfd] font-sans">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-10 px-6 overflow-hidden border-b border-slate-100">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-sm font-bold tracking-[0.3em] uppercase text-blue-600 mb-6">
              Clinical Excellence
            </h1>
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter mb-8 leading-[0.9]">
              Teleradiology and IT{" "}
              <span className="italic font-light">SPECIALTIES</span>
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
              Voxel Teleradiology provides a full spectrum of interpretive
              services, utilizing sub-specialty expertise to deliver precision
              at scale.
            </p>
          </motion.div>
        </div>
        {/* Subtle Background Accent */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50/50 to-transparent z-0" />
      </section>

      {/* 2. THE CORE SERVICES GRID */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white border border-slate-200 rounded-[2rem] overflow-hidden hover:shadow-2xl hover:shadow-blue-500/5 hover:-translate-y-2 transition-all duration-500"
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-500" />
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md p-3 rounded-2xl text-blue-600 shadow-xl border border-white/50">
                    {service.icon}
                  </div>
                </div>

                <div className="p-10">
                  <h4 className="text-2xl font-bold mb-4 text-slate-900 transition-colors group-hover:text-blue-600">
                    {service.title}
                  </h4>
                  <p className="text-slate-500 text-sm leading-relaxed mb-8">
                    {service.description}
                  </p>
                  <div className="flex items-center font-bold text-xs tracking-widest uppercase cursor-pointer group/link">
                    <Link
                      href={service.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span
                        className="capitalize"
                        style={{
                          background:
                            "linear-gradient(100deg, #01aed8, #ff4c4c)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }}
                      >
                        view demo
                      </span>
                    </Link>
                    <ArrowRight className="ml-2 w-4 h-4 text-red-500 transition-transform group-hover/link:translate-x-2" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. WORKFLOW PROCESS (The "Professional" touch) */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-4">The Workflow.</h2>
            <p className="text-slate-400">
              Our four-stage process ensures zero clinical friction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {steps.map((step, i) => (
              <div key={i} className="relative">
                <div className="text-blue-500 mb-6">{step.icon}</div>
                <h5 className="font-bold text-lg mb-2">{step.title}</h5>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {step.desc}
                </p>
                {i !== 3 && (
                  <div className="hidden md:block absolute top-2 -right-6 text-slate-800 tracking-[10px]">
                    ----&gt;
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. TECHNICAL INFRASTRUCTURE SECTION */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div
          className="rounded-[3rem] p-12 flex flex-col md:flex-row items-center justify-between gap-12"
          style={{
            background: `linear-gradient(120deg, #01aed8 40%, #ff4c4c 40%)`,
          }}
        >
          <div className="text-white max-w-md">
            <div className="flex items-center gap-2 mb-4 opacity-80">
              <Clock size={18} />
              <span className="text-xs font-bold tracking-widest uppercase">
                STAT Turnaround
              </span>
            </div>
            <h3 className="text-4xl font-black italic mb-6">
              RAPID RESPONSE. <br />
              ZERO DELAY.
            </h3>
            <p className="text-blue-50 text-sm opacity-90 leading-relaxed">
              Our infrastructure is optimized for emergency cases. We guarantee
              a report within 60 minutes for all critical findings.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-[2rem] text-white w-full md:w-auto min-w-[300px]">
            <ul className="space-y-4 font-bold text-sm">
              <li className="flex items-center gap-3">
                <ShieldCheck size={18} className="text-blue-300" /> HIPAA
                Compliant
              </li>
              <li className="flex items-center gap-3">
                <ShieldCheck size={18} className="text-blue-300" /> DICOM 3.0
                Standard
              </li>
              <li className="flex items-center gap-3">
                <ShieldCheck size={18} className="text-blue-300" /> TLS 1.3
                Encryption
              </li>
              <li className="flex items-center gap-3">
                <ShieldCheck size={18} className="text-blue-300" /> 24/7 Tech
                Support
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 5. MINIMAL CTA */}
      <section className="py-24 px-6 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">
          Ready to integrate Voxel?
        </h2>
        <button className="bg-black text-white px-10 py-4 rounded-full font-bold hover:scale-105 transition-transform shadow-xl">
          <Link
            href="https://wa.me/919588894040?text=Hello"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Started
          </Link>
        </button>
      </section>
    </main>
  );
}
