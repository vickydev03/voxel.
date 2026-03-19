"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Lock, ShieldCheck, Server, Eye } from "lucide-react";
import { easeOut } from "framer-motion";

/**
 * CANVAS: Security Mesh
 * Creates a minimalist moving grid that reacts to the mouse or drifts slowly,
 * giving a "secure network" vibe.
 */
const SecurityMesh = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let particles: {
      x: number;
      y: number;
      originX: number;
      originY: number;
    }[] = [];

    const spacing = 50;
    for (let x = 0; x < width; x += spacing) {
      for (let y = 0; y < height; y += spacing) {
        particles.push({ x, y, originX: x, originY: y });
      }
    }

    let time = 0;
    const animate = () => {
      time += 0.01;
      ctx.clearRect(0, 0, width, height);
      ctx.beginPath();
      ctx.strokeStyle = "rgba(1, 174, 216, 0.05)";
      ctx.lineWidth = 0.5;

      particles.forEach((p) => {
        // Subtle drift movement
        p.x = p.originX + Math.sin(time + p.originY) * 3;
        p.y = p.originY + Math.cos(time + p.originX) * 3;

        ctx.rect(p.x, p.y, 1, 1);
      });
      ctx.stroke();
      requestAnimationFrame(animate);
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    animate();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0"
    />
  );
};

const features = [
  {
    title: "End-to-End Encryption",
    description:
      "All imaging studies and reports are transmitted using secure encrypted protocols ensuring complete patient data confidentiality.",
    icon: Lock,
    animation: {
      hidden: { opacity: 0, x: -30, rotateY: 20 },
      show: {
        opacity: 1,
        x: 0,
        rotateY: 0,
        transition: { duration: 0.8, ease: easeOut },
      },
    },
  },
  {
    title: "Regulatory Compliance",
    description:
      "Processes aligned with global healthcare data protection standards and institutional compliance requirements.",
    icon: ShieldCheck,
    animation: {
      hidden: { opacity: 0, y: 30, rotateX: 20 },
      show: {
        opacity: 1,
        y: 0,
        rotateX: 0,
        transition: { duration: 0.8, ease: [0, 0, 0.2, 1] as const },
      },
    },
  },
  {
    title: "Secure Infrastructure",
    description:
      "Enterprise-grade servers, controlled access systems, and monitored environments to ensure operational integrity.",
    icon: Server,
    animation: {
      hidden: { opacity: 0, y: -30, rotateX: -20 },
      show: {
        opacity: 1,
        y: 0,
        rotateX: 0,
        transition: { duration: 0.8, ease: [0, 0, 0.2, 1] as const },
      },
    },
  },
  {
    title: "Confidential Reporting",
    description:
      "Strict access control policies and audit tracking to maintain patient privacy at every stage of reporting.",
    icon: Eye,
    animation: {
      hidden: { opacity: 0, x: 30, rotateY: -20 },
      show: {
        opacity: 1,
        x: 0,
        rotateY: 0,
        transition: { duration: 0.8, ease: [0, 0, 0.2, 1] as const },
      },
    },
  },
];

export default function SecuritySection() {
  return (
    <section className="relative w-full bg-white py-32 px-6 overflow-hidden text-black">
      <SecurityMesh />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header with dynamic gradient underline */}
        <div className="flex flex-col md:items-center text-start md:text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-4xl font-bold mb-6 tracking-tighter"
          >
            Security &{" "}
            <span
              style={{
                background: "linear-gradient(100deg, #01aed8, #ff4c4c)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Compliance
            </span>
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-[2px]"
            style={{ background: "linear-gradient(100deg, #01aed8, #ff4c4c)" }}
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-slate-400 mt-8 max-w-2xl text-lg font-light leading-relaxed"
          >
            Industrial-grade protection for sensitive medical data. We
            prioritize integrity and privacy through every byte of information.
          </motion.p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 perspective-1000">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={feature.animation}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{
                  scale: 1.02,
                  backgroundColor: "rgba(255,255,255,0.03)",
                }}
                className="group relative p-10 rounded-3xl border border-white/5 bg-white/[0.01] backdrop-blur-md transition-all duration-500"
              >
                {/* Corner Gradient Glow */}
                <div
                  className="absolute top-0 right-0 w-32 h-32 blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-700"
                  style={{
                    background: "linear-gradient(100deg, #01aed8, #ff4c4c)",
                  }}
                />

                <div className="flex gap-8 items-start relative z-10">
                  <div
                    className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-2xl transition-all duration-500 group-hover:rotate-[360deg]"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.1)",
                    }}
                  >
                    <Icon
                      className="w-7 h-7"
                      style={{ color: index % 2 === 0 ? "#01aed8" : "#ff4c4c" }}
                    />
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-black group-hover:text-blue-400 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed font-light">
                      {feature.description}
                    </p>
                  </div>
                </div>

                {/* Progress-style bottom accent */}
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/5 overflow-hidden">
                  <motion.div
                    initial={{ x: "-100%" }}
                    whileInView={{ x: "0%" }}
                    transition={{ duration: 1.5, delay: index * 0.2 }}
                    className="w-full h-full"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent, #01aed8, #ff4c4c, transparent)",
                    }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
