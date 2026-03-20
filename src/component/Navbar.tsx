"use client";
import { Button } from "@/components/ui/button";
import { Menu, Phone, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);
  const items = [
    {
      label: "Services",
      href: "/services",
    },
    {
      label: "About us",
      href: "/about-us",
    },
    {
      label: "Contact us",
      href: "/contact-us",
    },
    {
      label: "Demo's",
      href: "/services/teleradiology",
    },
    {
      label: "It Solution",
      href: "/services/healthcare-it",
    },
  ];
  return (
    <div className="w-[90%] mx-auto relative ">
      <motion.div
        initial={{ y: "-200px" }}
        animate={{ opacity: 1, y: "0px" }}
        className="
  bg-black/3 relative z-50 backdrop-blur-xl
  mt-10 border border-white/10
  py-0 rounded-[60px] mx-auto w-[90%] md:w-[80%] 
  px-6 flex items-center justify-between
  shadow-xs shadow-black/10a
"
      >
        <div className="logo">
           <Link href={"/"}>
              <Image
                src={"/image/logo.jpg"}
                className="size-14"
                alt="img"
                height={100}
                width={100}
          />
          </Link>
        </div>
        <div className=" hidden md:flex items-center gap-12">
          {items.map((e, i) => (
            <div
              key={i}
              className="font-open-sauce capitalize text-[#656565] text-sm"
            >
              <Link href={e.href}>{e.label}</Link>
            </div>
          ))}
        </div>
        <div className="hidden md:block">
          <a href="tel:+18008693572" className="no-underline">
            <button className="flex items-center gradient-color-2 gap-2 px-6 py-2 rounded-full bg-black text-white font-medium transition-all duration-300 hover:bg-slate-800 hover:shadow-lg active:scale-95 cursor-pointer shadow-md">
              <Phone size={16} className="fill-white" />
              <span className="text-sm tracking-tight ">Call Now</span>
            </button>
          </a>
        </div>
        <div className="block md:hidden">
          <Button
            className=" cursor-pointer rounded-full gradient-color-2 "
            onClick={() => setOpen((e) => !e)}
          >
            {open ? (
              <X className="size-4 text-white" />
            ) : (
              <Menu className="size-4 text-white" />
            )}
          </Button>
        </div>
      </motion.div>

      {
        <div className="absolute top-[calc(100%-30px)]  w-full ">
          <div className=" flex justify-center">
            <AnimatePresence mode="wait">
              {open && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{
                    duration: 0.35,
                    ease: "easeInOut",
                  }}
                  className=" w-full max-w-[90%] pl-[1rem] bg-[#E8EFF4] m rounded-[30px] shadow-lg overflow-hidden"
                >
                  <ul className="flex flex-col gap-2  mx-auto pt-[30px]">
                    {items.map((e, i) => (
                      <li
                        key={i}
                        className="py-2 text-sm capitalize border-b border-dashed border-[#82828299] last:border-none"
                      >
                        <Link href={e.href}>{e.label}</Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      }
    </div>
  );
}

export default Navbar;
