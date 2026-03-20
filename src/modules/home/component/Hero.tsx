import { Button } from "@/components/ui/button";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";

function Hero() {
  const text = "";
  const letters = [
    "“Accuracy ",
    "You ",
    "Trust",
    ",",
    "Speed",
    "You",
    // "Need",
  ];
  console.log(letters, 55);

  const variants = {
    hidden: { opacity: 0, y: 20 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.08,
        duration: 0.5,
        ease: "easeOut" as const,
      },
    }),
  };
  const imgRef = React.useRef<HTMLDivElement | null>(null);
  const isImageInView = useInView(imgRef, {
    once: true,
    margin: "100px 0px 0px 0px",
  });
  const heroRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  return (
    <section className="h-full w-full py-24 min-h-scsreen ">
      <div
        ref={heroRef}
        className="flex items-center h-full pt-18 w-full justify-center mx-auto gap-12  flex-col lg:gap-16"
      >
        <div className="w-full max-w-3xl flex flex-col gap-4 lg:gap-6">
          <div className="flex flex-col px-2 a-mt-50 gap-2  mx-auto text-center max-w-2xl items-center justify-center">
            <motion.p
              initial={{ y: "-5px", opacity: 0.1 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
              className="text-sky-700 tracking-wider text-xs md:text-lg"
            >
              "Quality Reports Minimal Time"
            </motion.p>
            <motion.h1
              initial="hidden"
              animate={"show"}
              variants={variants}
              viewport={{ once: true }}
              className=" text-2xl font-montserrat tracking-wider md:text-3xl lg:text-5xl font-medium md:leading-15 flex gap-2 bg-gradients lg:gap-4 flex-wrap text-center items-center justify-center"
            >
              {letters.map((word, i) => (
                <motion.span
                  className={`${word == "Insights" && "gradient-text font-semibold "}`}
                  key={`${word}-${i}`}
                  variants={variants}
                  custom={i}
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>
          </div>
          <motion.div
            initial={{ y: "50px", opacity: 0.1 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center justify-center"
          >
            <Button className="rounded-full max-w-36 lg:max-w-48 py-5 lg:py-6 w-full cursor-pointer text-md tracking-widest gradient-color">
              <Link
                      href="https://wa.me/919588894040?text=I%20would%20like%20to%20partner%20with%20you."
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                    Contact Now
              </Link>
            </Button>
          </motion.div>
        </div>
        <div className="max-w-7xl w-full md:h-128 px-4">
          <div className=" w-full h-full">
            <motion.div
              style={{ y: imageY }}
              ref={imgRef}
              initial={{ filter: "blur(15px)", opacity: 0 }}
              animate={isImageInView ? { filter: "blur(0px)", opacity: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.6, ease: "circInOut" }}
              className=" relative w-full h-full"
            >
              <Image
                className="w-full rounded-[30px] object-center h-[14rem] object-cover md:
              md:object-cover md:h-full "
                quality={75}
                sizes="100vw"
                src={"/image/home page.webp"}
                alt="456"
                height={100}
                width={100}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
