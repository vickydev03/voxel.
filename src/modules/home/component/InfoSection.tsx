import {
  Stethoscope,
  Clock,
  ShieldCheck,
  Activity,
  Database,
} from "lucide-react";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import React, { useRef } from "react";

function InfoSection() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const headerText = useRef(null);

  // const yBackground = useTransform(
  //   scrollYProgress,
  //   [0, 1],
  //   ["20%", "-20%"]
  // );

  const yBackground = useTransform(scrollYProgress, [0, 1], ["100%", "-100%"]);

  const letters = ["Integrated", "Teleradiology", "Solutions"];

  const variants = {
    hidden: { opacity: 0, y: 20 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.5,
        ease: "easeOut" as const,
      },
    }),
  };

  const isInView = true;

  const services = [
    {
      title: "Subspecialty Expertise",
      description:
        "Board-certified radiologists across key imaging specialties, ensuring accurate and clinically relevant interpretations.",
      icon: Stethoscope,
      iconBg: "bg-blue-50",
      iconColor: "text-blue-600",
      textColor: "text-blue-700",
      variants: {
        hidden: { clipPath: "inset(100% 0% 0% 0%)", opacity: 0, y: 20 },
        show: {
          clipPath: "inset(0% 0% 0% 0%)",
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
        },
      },
    },
    {
      title: "24/7 Reporting Coverage",
      description:
        "Round-the-clock reporting support with defined turnaround benchmarks for routine and emergency cases.",
      icon: Clock,
      iconBg: "bg-emerald-50",
      iconColor: "text-emerald-600",
      textColor: "text-emerald-700",
      variants: {
        hidden: { clipPath: "inset(0% 100% 0% 0%)", opacity: 0, x: -20 },
        show: {
          clipPath: "inset(0% 0% 0% 0%)",
          opacity: 1,
          x: 0,
          transition: {
            duration: 0.8,
            delay: 0.1,
            ease: [0.16, 1, 0.3, 1] as const,
          },
        },
      },
    },
    {
      title: "Secure & Compliant Infrastructure",
      description:
        "Encrypted data transmission, standardized protocols, and strict quality assurance processes.",
      icon: ShieldCheck,
      iconBg: "bg-indigo-50",
      iconColor: "text-indigo-600",
      textColor: "text-indigo-700",
      variants: {
        hidden: { scale: 0.9, opacity: 0 },
        show: {
          scale: 1,
          opacity: 1,
          transition: {
            duration: 0.6,
            delay: 0.2,
            type: "spring" as const,
            stiffness: 100,
          },
        },
      },
    },
    {
      title: "Structured Reporting Workflow",
      description:
        "Standardized reporting systems designed to integrate seamlessly with hospital and imaging center operations.",
      icon: Activity,
      iconBg: "bg-cyan-50",
      iconColor: "text-cyan-600",
      textColor: "text-cyan-700",
      variants: {
        hidden: { clipPath: "inset(0% 0% 100% 0%)", opacity: 0, y: -20 },
        show: {
          clipPath: "inset(0% 0% 0% 0%)",
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.8,
            delay: 0.3,
            ease: [0.16, 1, 0.3, 1] as const,
          },
        },
      },
    },
    {
      title: "Scalable Network Support",
      description:
        "Flexible reporting capacity to support growing institutions, multi-location networks, and high-volume workflows.",
      icon: Database,
      iconBg: "bg-slate-100",
      iconColor: "text-slate-700",
      textColor: "text-slate-800",
      variants: {
        hidden: { clipPath: "inset(0% 0% 0% 100%)", opacity: 0, x: 20 },
        show: {
          clipPath: "inset(0% 0% 0% 0%)",
          opacity: 1,
          x: 0,
          transition: {
            duration: 0.8,
            delay: 0.4,
            ease: [0.16, 1, 0.3, 1] as const,
          },
        },
      },
    },
  ];
  return (
    <section ref={ref} className="relative w-full overflow-hidden bg-white">
      <motion.div style={{ y: yBackground }} className="absolute inset-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-0 py-20 flex flex-col gap-16 lg:gap-24 bordera-2 border-b-3 border-[#6666]">
        {/* Paragraph */}
        <div className="max-w-6xl">
          <h2 className="text-xl tracking-wide text-[#6a5f50] leading-7 font-normal font-outfit lg:leading-14 lg:text-4xl">
            Welcome to Voxel Teleradiology – Your Trusted Partner in 24x7
            Teleradiology Reporting At *Voxel Teleradiology, we are committed to
            providing round-the-clock, accurate, and reliable teleradiology
            reporting services to healthcare facilities worldwide. Our team of
            over 30 highly qualified specialists, including **MD Radiologists,
            Cardiologists, Neurologists, and Neuropsychiatrists*, is dedicated
            to delivering high-quality diagnostic reports with the utmost
            precision and efficiency.
          </h2>
        </div>

        {/* Heading */}
        <div className="flex items-center justify-center flex-col gap-4 text-left">
          <motion.h2
            ref={headerText}
            initial="hidden"
            animate={isInView ? "show" : ""}
            variants={variants}
            className="text-4xl flex flex-wrap justiafy-center gap-4 font-montserrat gradient-text font-semibold"
          >
            {letters.map((word, i) => (
              <motion.span key={`${word}-${i}`} variants={variants} custom={i}>
                {word}
              </motion.span>
            ))}
          </motion.h2>

          <p className="text-stone-600 text-md lg:text-lg">
            Seamless, secure, and precision-driven radiology reporting for
            modern healthcare providers.
          </p>
        </div>

        {/* Services */}
        <div className="flex flex-wrap gap-14 items-center justify-center">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                variants={service.variants}
                initial="hidden"
                whileInView="show"
                key={index}
                className="p-6 w-72 h-64 border rounded-xl bg-white shadow-sm"
              >
                <div
                  className={`p-3 inline-flex rounded-full mb-4 ${service.iconBg}`}
                >
                  <Icon className={`size-6 ${service.iconColor}`} />
                </div>

                <h3
                  className={`${service.textColor} text-lg font-semibold mb-2`}
                >
                  {service.title}
                </h3>

                <p className="text-sm text-gray-600">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default InfoSection;
