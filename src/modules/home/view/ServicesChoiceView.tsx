"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Stethoscope, Cpu } from "lucide-react";

export default function ServicesChoiceView() {
  const options = [
    {
      title: "Teleradiology Services",
      description: "Expert remote interpretation for CT, MRI, X-Ray, and Ultrasound by board-certified radiologists.",
      href: "/services/teleradiology",
      icon: <Stethoscope className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
      gradient: "from-blue-600 to-blue-400"
    },
    {
      title: "Healthcare IT Solutions",
      description: "Advanced digital growth tools: Web dev, WhatsApp API, Social Media, and PACS integration.",
      href: "/services/healthcare-it",
      icon: <Cpu className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
      gradient: "from-red-500 to-orange-400"
    }
  ];

  return (
    <main className="bg-[#fcfcfd] min-h-screen font-sans">
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-sm font-bold tracking-[0.3em] uppercase text-blue-600 mb-6">
              Our Expertise
            </h1>
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter mb-8 leading-[0.9]">
              CHOOSE YOUR <span className="italic font-light">SOLUTION</span>
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
              Voxel offers specialized services to enhance clinical accuracy and 
              accelerate your center's digital growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {options.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="group relative"
              >
                <Link href={option.href}>
                  <div className="relative h-[500px] w-full rounded-[3rem] overflow-hidden shadow-2xl transition-all duration-500 group-hover:-translate-y-4 group-hover:shadow-blue-500/10">
                    <Image
                      src={option.image}
                      alt={option.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                    
                    <div className="absolute inset-0 p-12 flex flex-col justify-end text-white">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${option.gradient} flex items-center justify-center mb-6 shadow-xl`}>
                        {option.icon}
                      </div>
                      <h3 className="text-4xl font-bold mb-4">{option.title}</h3>
                      <p className="text-slate-200 text-lg mb-8 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                        {option.description}
                      </p>
                      <div className="flex items-center gap-3 font-bold tracking-widest uppercase text-sm">
                        Explore Now <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-blue-50/50 blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-red-50/50 blur-3xl -z-10" />
      </section>
    </main>
  );
}
