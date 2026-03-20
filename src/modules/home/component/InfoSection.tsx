"use client";

import {
  Stethoscope,
  Clock,
  ShieldCheck,
  Activity,
  Database,
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useEffect, useRef } from "react";

/* ─────────────────────────────────────────────
   CANVAS — same component as WorkflowSection
───────────────────────────────────────────── */
export const AnimatedGradientCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let tick = 0;
    let animFrameId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const draw = () => {
      tick += 0.005;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const x1 = canvas.width * 0.5 + Math.cos(tick) * 200;
      const y1 = canvas.height * 0.5 + Math.sin(tick * 0.8) * 100;
      const grad = ctx.createRadialGradient(x1, y1, 0, x1, y1, 600);
      grad.addColorStop(0, "rgba(1, 174, 216, 0.15)");
      grad.addColorStop(1, "transparent");

      const x2 = canvas.width * 0.5 + Math.sin(tick * 0.7) * 250;
      const y2 = canvas.height * 0.5 + Math.cos(tick * 0.5) * 150;
      const grad2 = ctx.createRadialGradient(x2, y2, 0, x2, y2, 600);
      grad2.addColorStop(0, "rgba(255, 76, 76, 0.10)");
      grad2.addColorStop(1, "transparent");

      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = grad2;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      animFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener("resize", resize);
    resize();
    draw();
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute w-full h-full inset-0 z-0 opacity-60"
    />
  );
};

/* ─────────────────────────────────────────────
   SERVICES DATA
───────────────────────────────────────────── */
const services = [
  {
    title: "Subspecialty Expertise",
    description:
      "Board-certified radiologists across key imaging specialties, ensuring accurate and clinically relevant interpretations.",
    icon: Stethoscope,
    variants: {
      hidden: { clipPath: "inset(100% 0% 0% 0%)", opacity: 0 },
      show: {
        clipPath: "inset(0% 0% 0% 0%)",
        opacity: 1,
        transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as const },
      },
    },
  },
  {
    title: "24/7 Reporting Coverage",
    description:
      "Round-the-clock reporting support with defined turnaround benchmarks for routine and emergency cases.",
    icon: Clock,
    variants: {
      hidden: { opacity: 0, scale: 0.5, rotateY: -45 },
      show: {
        opacity: 1,
        scale: 1,
        rotateY: 0,
        transition: { duration: 0.8, ease: [0, 0, 0.2, 1] as const },
      },
    },
  },
  {
    title: "Secure & Compliant Infrastructure",
    description:
      "Encrypted data transmission, standardized protocols, and strict quality assurance processes.",
    icon: ShieldCheck,
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
    title: "Structured Reporting Workflow",
    description:
      "Standardized reporting systems designed to integrate seamlessly with hospital and imaging center operations.",
    icon: Activity,
    variants: {
      hidden: { opacity: 0, y: 100 },
      show: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.9,
          type: "spring" as const,
          bounce: 0.4,
          delay: 0.1,
        },
      },
    },
  },
  {
    title: "Scalable Network Support",
    description:
      "Flexible reporting capacity to support growing institutions, multi-location networks, and high-volume workflows.",
    icon: Database,
    variants: {
      hidden: { opacity: 0, scaleX: 0 },
      show: {
        opacity: 1,
        scaleX: 1,
        transition: { duration: 0.8, ease: "circOut" as const },
      },
    },
  },
];

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */
function InfoSection() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacitySection = useTransform(
    scrollYProgress,
    [0, 0.05, 0.92, 1],
    [0, 1, 1, 0]
  );

  return (
    <section
      ref={ref}
      className="relative w-full bg-[#fafafa] py-32 px-6 overflow-hidden"
    >
      {/* Same animated canvas as WorkflowSection */}
      <AnimatedGradientCanvas />

      <motion.div
        style={{ opacity: opacitySection }}
        className="relative z-10 max-w-7xl mx-auto flex items-center justify-center flex-col"
      >
        {/* ── HEADING — same pattern as WorkflowSection ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-6"
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            viewport={{ once: true }}
            className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400"
          >
            About Us
          </motion.p>

          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="text-4xl font-bold tracking-tight text-slate-900"
          >
            Integrated{" "}
            <span
              style={{
                background: "linear-gradient(100deg, #01aed8, #ff4c4c)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Teleradiology
            </span>{" "}
            Solutions
          </motion.h2>

          {/* Animated gradient underline — same as WorkflowSection */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="h-[2px] mx-auto"
            style={{ background: "linear-gradient(100deg, #01aed8, #ff4c4c)" }}
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="text-slate-500 text-lg leading-relaxed max-w-2xl mx-auto"
          >
            Seamless, secure, and precision-driven radiology reporting for
            modern healthcare providers.
          </motion.p>
        </motion.div>

        {/* ── INTRO PARAGRAPH ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="max-w-4xl text-center mb-20"
        >
          <p className="text-slate-500 text-lg leading-relaxed">
            Welcome to{" "}
            <span
              className="font-semibold"
              style={{
                background: "linear-gradient(100deg, #01aed8, #ff4c4c)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Voxel Teleradiology
            </span>{" "}
            – Your Trusted Partner in 24×7 Teleradiology Reporting. We are
            committed to providing round-the-clock, accurate, and reliable
            teleradiology reporting services to healthcare facilities worldwide.
            Our team of over{" "}
            <span className="font-semibold text-slate-700">
              30 highly qualified specialists
            </span>
            , including{" "}
            <span className="font-semibold text-slate-700">
              MD Radiologists, Cardiologists, and Neurologists
            </span>
            , is dedicated to delivering high-quality diagnostic reports with
            the utmost precision and efficiency.
          </p>
        </motion.div>

        {/* ── SERVICES GRID — exact card style as WorkflowSection ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={service.variants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                style={{ perspective: 1000 }}
                whileHover={{ y: -8 }}
                className="group relative bg-white border border-slate-100 p-8 rounded-[2rem] shadow-sm overflow-hidden"
              >
                {/* Hover gradient bg overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-1000"
                  style={{
                    background: "linear-gradient(100deg, #01aed8, #ff4c4c)",
                  }}
                />

                <div className="relative z-10">
                  {/* Icon with gradient bg tint — same as WorkflowSection */}
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110"
                    style={{
                      background:
                        "linear-gradient(100deg, #01aed822, #ff4c4c22)",
                    }}
                  >
                    <Icon
                      className="w-6 h-6"
                      style={{
                        color: index % 2 === 0 ? "#01aed8" : "#ff4c4c",
                      }}
                    />
                  </div>

                  <h3 className="text-xl font-bold text-slate-800 mb-3 leading-tight">
                    {service.title}
                  </h3>

                  <p className="text-slate-500 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Bottom accent bar — same as WorkflowSection */}
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
      </motion.div>
    </section>
  );
}

export default InfoSection;