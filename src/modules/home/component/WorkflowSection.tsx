"use client";

import React, { useEffect, useRef } from "react";
import { circOut, motion } from "framer-motion";
import { UploadCloud, UserCheck, FileText, Send } from "lucide-react";

/**
 * CANVAS COMPONENT: Flowing Gradient Waves
 * Uses your specific colors (#01aed8, #ff4c4c) to create a subtle,
 * professional moving background.
 */
export const AnimatedGradientCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let tick = 0;
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const draw = () => {
      tick += 0.005;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Drawing two subtle "blobs" of your colors that drift
      const x1 = canvas.width * 0.5 + Math.cos(tick) * 200;
      const y1 = canvas.height * 0.5 + Math.sin(tick * 0.8) * 100;

      const grad = ctx.createRadialGradient(x1, y1, 0, x1, y1, 600);
      grad.addColorStop(0, "rgba(1, 174, 216, 0.15)"); // Cyan
      grad.addColorStop(1, "transparent");

      const x2 = canvas.width * 0.5 + Math.sin(tick * 0.7) * 250;
      const y2 = canvas.height * 0.5 + Math.cos(tick * 0.5) * 150;

      const grad2 = ctx.createRadialGradient(x2, y2, 0, x2, y2, 600);
      grad2.addColorStop(0, "rgba(255, 76, 76, 0.1)"); // Red
      grad2.addColorStop(1, "transparent");

      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = grad2;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      requestAnimationFrame(draw);
    };

    window.addEventListener("resize", resize);
    resize();
    draw();
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute w-full h-full inset-0 z-0 opacity-60"
    />
  );
};

const steps = [
  {
    title: "Secure Case Upload",
    description:
      "DICOM studies are securely transmitted via encrypted PACS integration.",
    icon: UploadCloud,
    // Animation: Mask Reveal (Unfolding from top)
    variants: {
      hidden: { clipPath: "inset(100% 0% 0% 0%)", opacity: 0 },
      show: {
        clipPath: "inset(0% 0% 0% 0%)",
        opacity: 1,
        transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as const},
      },
    },
  },
  {
    title: "Subspecialty Assignment",
    description:
      "Each case is routed to the appropriate specialist for review.",
    icon: UserCheck,
    // Animation: 3D Flip/Zoom
    variants: {
      hidden: { opacity: 0, scale: 0.5, rotateY: -45 },
      show: {
        opacity: 1,
        scale: 1,
        rotateY: 0,
        transition: { duration: 0.8, ease: [0, 0, 0.2, 1] as const, },
      },
    },
  },
  {
  title: "Verification and QA",
  description:
    "Every submission passes through a structured verification pipeline including validation, review, and internal quality assurance checks before approval.",
  icon: FileText,

  // Animation: Floating Drift
  variants: {
    hidden: { opacity: 0, y: 100 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, type: "spring" as const, bounce: 0.4 },
    },
  },
},
  {
    title: "Quality Review",
    description:
      "Structured reporting supported by internal quality assurance.",
    icon: FileText,
    // Animation: Floating Drift
    variants: {
      hidden: { opacity: 0, y: 100 },
      show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.9, type: "spring" as const, bounce: 0.4 },
      },
    },
  },
  {
    title: "Report Delivery",
    description: "Finalized reports delivered within predefined benchmarks.",
    icon: Send,
    // Animation: Horizontal Stretch
    variants: {
      hidden: { opacity: 0, scaleX: 0, originX: 0 },
      show: {
        opacity: 1,
        scaleX: 1,
        originX: 0,
        transition: { duration: 0.8, ease: circOut },
      },
    },
  },
];

export default function WorkflowSection() {
  return (
    <section className="relative w-full bg-[#fafafa] py-32 px-6 overflow-hidden">
      <AnimatedGradientCanvas/>

      <div className="relative z-10 max-w-7xl mx-auto flex items-center justify-center flex-col">
        {/* Minimalist Heading with the Gradient Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24 space-y-6"
        >
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-4xl font-bold tracking-tight mb-4 text-slate-900"
          >
            Our Reporting{" "}
            <span
              style={{
                background: "linear-gradient(100deg, #01aed8, #ff4c4c)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Workflow
            </span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-[2px]  mx-auto mt-6"
            style={{ background: "linear-gradient(100deg, #01aed8, #ff4c4c)" }}
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-slate-500 text-lg leading-relaxed"
          >
            A precision-engineered process ensuring data integrity and clinical
            excellence at every stage.
          </motion.p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                variants={step.variants}
                initial="hidden"
                style={{ perspective: 1000 }}
                
                whileInView="show"
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group relative bg-white border border-slate-100 p-8 rounded-[2rem] shadow-sm overflow-hidden"
              >
                {/* Hover Gradient Border Effect */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-1000"
                  style={{
                    background: "linear-gradient(100deg, #01aed8, #ff4c4c)",
                  }}
                />

                <div className="relative z-10">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110"
                    style={{
                      background:
                        "linear-gradient(100deg, #01aed822, #ff4c4c22)",
                    }}
                  >
                    <Icon
                      className="w-6 h-6"
                      style={{ color: index % 2 === 0 ? "#01aed8" : "#ff4c4c" }}
                    />
                  </div>

                  <h3 className="text-xl font-bold text-slate-800 mb-3 leading-tight">
                    {step.title}
                  </h3>

                  <p className="text-slate-500 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Bottom Accent Bar */}
                <div
                  className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-700"
                  style={{
                    background: "linear-gradient(100deg, #01aed8, #ff4c4c)",
                  }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
