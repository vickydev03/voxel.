"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Globe, 
  Smartphone, 
  Instagram, 
  Camera, 
  BarChart, 
  Database, 
  Cpu,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

const itServices = [
  {
    title: "Website Development",
    description: "Custom, high-performance websites tailored for clinics and diagnostic labs with appointment booking integrations.",
    icon: <Globe className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "WhatsApp API Solutions",
    description: "Automated report delivery, appointment reminders, and digital marketing via official WhatsApp Business API.",
    icon: <Smartphone className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Social Media Management",
    description: "Complete handling of your clinic's social profiles to build trust and engage with patients consistently.",
    icon: <Instagram className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Professional Content Shoot",
    description: "High-quality photography and cinematography of your facility, staff, and technology for brand building.",
    icon: <Camera className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Social Media Ads",
    description: "Targeted lead generation campaigns on Meta and Google to increase patient walk-ins and lab test volumes.",
    icon: <BarChart className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Diagnostic Lab Software",
    description: "Cloud-based LIMS and reporting software designed to streamline lab operations and inventory tracking.",
    icon: <Database className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "PACS Setup & Integration",
    description: "End-to-end implementation of Cloud PACS for seamless image storage, viewing, and remote reporting.",
    icon: <Cpu className="w-6 h-6" />,
    image: "https://plus.unsplash.com/premium_photo-1661402207553-28daf8ce1693?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

export default function HealthcareITView() {
  return (
    <main className="bg-[#fcfcfd] font-sans">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-6 overflow-hidden border-b border-slate-100">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-sm font-bold tracking-[0.3em] uppercase text-red-500 mb-6">
              Digital Growth
            </h1>
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter mb-8 leading-[0.9]">
              HEALTHCARE <span className="italic font-light">IT SOLUTIONS</span>
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
              We help diagnostic centers and clinics grow digitally through 
              advanced IT solutions and strategic digital marketing.
            </p>
          </motion.div>
        </div>
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-red-50/50 to-transparent z-0" />
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white border border-slate-200 rounded-[2.5rem] overflow-hidden hover:shadow-2xl hover:shadow-red-500/5 hover:-translate-y-2 transition-all duration-500"
              >
                <div className="relative h-60 w-full">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500" />
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md p-3 rounded-2xl text-red-500 shadow-xl border border-white/50">
                    {service.icon}
                  </div>
                </div>

                <div className="p-10">
                  <h4 className="text-2xl font-bold mb-4 text-slate-900 transition-colors group-hover:text-red-500">
                    {service.title}
                  </h4>
                  <p className="text-slate-500 text-sm leading-relaxed mb-8">
                    {service.description}
                  </p>
                  <div className="flex items-center font-bold text-xs tracking-widest uppercase cursor-pointer group/link text-red-500">
                    <span>Learn More</span>
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/link:translate-x-2" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration CTA */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div
          className="rounded-[3rem] p-12 flex flex-col md:flex-row items-center justify-between gap-12"
          style={{
            background: `linear-gradient(120deg, #ff4c4c 40%, #01aed8 40%)`,
          }}
        >
          <div className="text-white max-w-md">
            <h3 className="text-4xl font-black italic mb-6">
              DIGITIZE YOUR <br />
              PRACTICE TODAY.
            </h3>
            <p className="text-red-50 text-sm opacity-90 leading-relaxed">
              From PACS setup to automated WhatsApp marketing, we provide 
              end-to-end IT support to scale your diagnostic lab or clinic.
            </p>
          </div>
          <button className="bg-white text-slate-900 px-10 py-4 rounded-full font-bold hover:scale-105 transition-transform shadow-xl">
            <Link
                                    className="flex items-center gap-3"
                                    href="https://wa.me/919588894040?text=Hello%20Voxel%20Healthcare%20IT%20Team%2C%20I%20am%20interested%20in%20your%20solutions.%20Can%20you%20guide%20me%3F"
                                    target="_blank"
                                    rel="noopener noreferrer"
            >
              Request a Consultation
            </Link>
          </button>
        </div>
      </section>
    </main>
  );
}
