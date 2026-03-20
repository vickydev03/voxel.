"use client";

import React, { useEffect, useRef } from "react";
import {
  circOut,
  motion,
  useInView,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { AnimatedGradientCanvas } from "./WorkflowSection";

const metrics = [
  {
    value: 24,
    suffix: "/7",
    label: "Specialist Support",
    subtext: "Round-the-clock clinical coverage",
    variants: {
      hidden: { opacity: 0, scale: 0.9, filter: "blur(10px)" },
      show: {
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        transition: { duration: 0.8, ease: [0, 0, 0.2, 1] as const },
      },
    },
  },
  {
    value: 99.8,
    suffix: "%",
    label: "Diagnostic Accuracy",
    subtext: "Rigorous quality assurance protocols",
    variants: {
      hidden: { opacity: 0, x: -30, scaleX: 0.8 },
      show: {
        opacity: 1,
        x: 0,
        scaleX: 1,
        transition: { duration: 0.7, ease: [0.23, 1, 0.32, 1] as const }, // Precise Cubic Bezier
      },
    },
  },
  {
    value: 150000,
    suffix: "+",
    label: "Monthly Cases",
    subtext: "Scalable high-volume workflow",
    variants: {
      hidden: { opacity: 0, y: 40 },
      show: {
        opacity: 1,
        y: 0,
        transition: { type: "spring" as const, stiffness: 100, damping: 15 }, // "Scalable" bouncy feel
      },
    },
  },
  {
    value: 15,
    suffix: "m",
    label: "Critical Turnaround",
    subtext: "Average time for urgent findings",
    variants: {
      hidden: { opacity: 0, x: -30, scaleX: 0.8 },
      show: {
        opacity: 1,
        x: 0,
        scaleX: 1,
        transition: { duration: 0.7, ease: [0.23, 1, 0.32, 1] as const }, // Precise Cubic Bezier
      },
    },
  },
];

const cardVariants = [
  // 1. Specialist Support: Smooth Fade + Subtle Scale (Stability)
  {
    hidden: { opacity: 0, scale: 0.95 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  },
  // 2. Diagnostic Accuracy: Horizontal Slide (Precision/Alignment)
  {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "circOut" } },
  },
  // 3. Monthly Interpretations: Vertical Pop (Growth/Scale)
  {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, type: "spring", bounce: 0.4 },
    },
  },
  // 4. Critical Turnaround: Rapid Wipe (Speed)
  {
    hidden: { opacity: 0, scaleX: 0, originX: 1 },
    show: {
      opacity: 1,
      scaleX: 1,
      originX: 1,
      transition: { duration: 0.5, ease: "anticipate" },
    },
  },
];

function AnimatedCounter({
  value,
  decimals = 0,
}: {
  value: number;
  decimals?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        (ref.current as HTMLElement).textContent = Intl.NumberFormat("en-US", {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals,
        }).format(Number(latest.toFixed(decimals)));
      }
    });
  }, [springValue, decimals]);

  return <span ref={ref}>0</span>;
}

export default function MetricsSection() {
  return (
    <section className="relative w-full bg-[#fafafa] py-32 px-6 overflow-hidden">
      {/* Subtle Background Element */}
      <AnimatedGradientCanvas />

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-blue-600 font-bold tracking-widest text-sm uppercase mb-4">
              Operational Excellence
            </h2>
            <motion.h3
              initial={{ opacity: 0 }}
              transition={{ delay: 0.3 }}
              whileInView={{ opacity: 1 }}
              className="text-4xl md:text-5xl font-semibold text-stone-900 leading-tight"
            >
              Clinical
              <span className="gradient-text"> Precision</span> <br />
              <span className="text-stone-400 font-light italic text-3xl md:text-4xl">
                at Global Scale.
              </span>
            </motion.h3>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-stone-500 text-lg max-w-sm"
          >
            Setting the benchmark for teleradiology through rapid integration
            and verified diagnostic outcomes.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              // 1. Use the label strings from your cardVariants object
              variants={metric.variants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              // 2. Keep hover logic clean
              whileHover={{
                y: -10,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              className="group relative bg-white border border-stone-100 p-8 rounded-[2rem] transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)] overflow-hidden"
            >
              {/* 3. Hover Background Tint (the linear gradient you added) */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700 pointer-events-none"
                style={{
                  background: "linear-gradient(100deg, #01aed8, #ff4c4c)",
                }}
              />

              {/* 4. Top Accent Line - Added a 'Scale' transition for extra polish */}
              <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-[#01aed8] to-[#ff4c4c] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />

              <div className="relative z-10">
                <div className="text-5xl font-bold mb-6 flex items-baseline tracking-tighter">
                  <span className="bg-gradient-to-br from-[#01aed8] to-[#ff4c4c] bg-clip-text text-transparent">
                    <AnimatedCounter
                      value={metric.value}
                      decimals={metric.value % 1 !== 0 ? 1 : 0}
                    />
                  </span>

                  <span className="text-stone-300 ml-1 text-2xl font-light group-hover:text-[#ff4c4c] transition-colors duration-300">
                    {metric.suffix}
                  </span>
                </div>

                <div>
                  <h4 className="text-stone-900 font-bold text-lg mb-2 tracking-tight">
                    {metric.label}
                  </h4>
                  <p className="text-stone-500 text-sm leading-relaxed font-medium">
                    {metric.subtext}
                  </p>
                </div>
              </div>

              {/* 5. Subtle Glow Positioning */}
              <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-gradient-to-br from-[#01aed8]/10 to-[#ff4c4c]/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
// test test test