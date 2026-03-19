"use client";

import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.35,
      delayChildren: 0.2,
    },
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
    y: 80,
    filter: "blur(6px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

function OurPartner() {
  return (
    <section className="bg-white w-full py-20 px-4 overflow-hidden">
      <motion.div
        className="w-full max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        {/* Title */}
        <motion.h2
          variants={childVariants}
          className="text-3xl md:text-4xl gradient-text font-montserrat font-semibold text-left md:text-center mb-14"
        >
          Healthcare Institutions We Support
        </motion.h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* Card 1 */}
          <motion.div variants={childVariants}>
            <div className="overflow-hidden rounded-xl">
              <Image
                src="/image/img11.avif"
                alt="Trusted Partner Hospitals"
                width={600}
                height={500}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="w-full aspect-[4/3] object-cover rounded-xl transition-transform duration-700 hover:scale-105"
              />
            </div>

            <div className="flex flex-col gap-4 mt-6">
              <h4 className="text-xl md:text-2xl tracking-wide font-montserrat font-semibold">
                Trusted Partner Hospitals
              </h4>
              <p className="text-stone-500 text-[15px] leading-7">
                We combine advanced diagnostic infrastructure with clinical
                expertise to deliver precise, timely, and evidence-driven
                insights—empowering confident medical decisions.
              </p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div variants={childVariants}>
            <div className="overflow-hidden rounded-xl">
              <Image
                src="/image/img22.jpg"
                alt="Precision Diagnostic Centers"
                width={600}
                height={500}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="w-full aspect-[4/3] object-cover rounded-xl transition-transform duration-700 hover:scale-105"
              />
            </div>

            <div className="flex flex-col gap-4 mt-6">
              <h4 className="text-xl md:text-2xl tracking-wide font-montserrat font-semibold">
                Precision Diagnostic Centers
              </h4>
              <p className="text-stone-500 text-[15px] leading-7">
                Advanced imaging and laboratory services powered by cutting-edge
                technology and expert oversight to ensure dependable results.
              </p>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div variants={childVariants}>
            <div className="overflow-hidden rounded-xl">
              <Image
                src="/image/img33.jpg"
                alt="Subspecialty Radiologists"
                width={600}
                height={500}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="w-full aspect-[4/3] object-cover rounded-xl transition-transform duration-700 hover:scale-105"
              />
            </div>

            <div className="flex flex-col gap-4 mt-6">
              <h4 className="text-xl md:text-2xl tracking-wide font-montserrat font-semibold">
                Subspecialty Radiologists
              </h4>
              <p className="text-stone-500 text-[15px] leading-7">
                Deep subspecialty expertise delivering accurate, timely
                interpretations across advanced imaging modalities.
              </p>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}

export default OurPartner;
