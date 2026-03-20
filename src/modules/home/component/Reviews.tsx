"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Quote } from "lucide-react";
import { AnimatedGradientCanvas } from "./WorkflowSection";

const voxelPartners = [
  {
    name: "Dr. Ananya Mehta",
    designation: " Senior Physician",
    organization: "Sunrise Multispecialty Hospital",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80",
    testimonial:
      "Voxel Teleradiology has significantly improved our reporting turnaround time while maintaining exceptional diagnostic accuracy.",
  },
  {
    name: "Dr. Rahul Sharma",
    designation: "Medical Director",
    organization: "Metro Diagnostic Centre",
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80",
    testimonial:
      "Their structured workflow and secure reporting system have seamlessly integrated with our clinical operations.",
  },
  {
    name: "Dr. Priya Nair",
    designation: "Consultant Radiologist",
    organization: "CityCare Hospital",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=800&q=80",
    testimonial:
      "Voxel’s team delivers consistent quality reporting, especially during emergency and night-time studies.",
  },
  {
    name: "Dr. Arvind Kapoor",
    designation: "Head of Radiology Department",
    organization: "Advanced Diagnostic Institute",
    image:
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80",
    testimonial:
      "The level of professionalism and data security compliance makes Voxel a trusted reporting partner.",
  },
];

function Reviews() {
  return (
    <section className="w-full bg-white py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto relative min-h-[600px] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200/50">
        {/* The Background Canvas */}
        <div className="absolute inset-0 z-0">
          <AnimatedGradientCanvas />
          <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]" />
        </div>

        {/* Content Layer */}
        <div className="relative z-10 py-20 px-6 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className=" text-left md:text-center mb-16"
          >
            <h2 className="text-blue-600 font-bold tracking-[0.2em] uppercase text-xs mb-4">
              Testimonials
            </h2>
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-4xl font-bold tracking-tight mb-4 text-slate-900"
            >
              Trusted by Leading <br />
              <span
                style={{
                  background: "linear-gradient(100deg, #01aed8, #ff4c4c)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Medical Professional
              </span>
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100px" }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-[2px]  mx-auto mt-6"
              style={{
                background: "linear-gradient(100deg, #01aed8, #ff4c4c)",
              }}
            />
          </motion.div>

          {/* Infinite Horizontal Scroll */}
          <div className="w-full flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
            <motion.div
              className="flex gap-8 pr-8"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 40,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {/* Double the array to create a seamless loop */}
              {[...voxelPartners, ...voxelPartners].map((partner, idx) => (
                <div
                  key={idx}
                  className="w-[350px] md:w-[450px] flex-shrink-0 bg-white/70 backdrop-blur-xl border border-white/50 p-8 rounded-3xl shadow-xl shadow-blue-900/5 flex flex-col justify-between group hover:bg-white transition-colors duration-500"
                >
                  <div>
                    <Quote className="text-blue-500/20 w-12 h-12 mb-4 group-hover:text-blue-500/40 transition-colors" />
                    <p className="text-slate-700 text-lg leading-relaxed italic mb-8">
                      "{partner.testimonial}"
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="relative w-14 h-14 rounded-2xl overflow-hidden ring-4 ring-blue-50">
                      <Image
                        src={partner.image}
                        alt={partner.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-base">
                        {partner.name}
                      </h4>
                      <p className="text-blue-600 text-xs font-medium uppercase tracking-wider uppercase leading-tight">
                        {partner.designation}
                      </p>
                      <p className="text-slate-400 text-xs mt-1 leading-tight">
                        {partner.organization}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reviews;
