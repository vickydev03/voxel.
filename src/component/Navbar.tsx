"use client";
import { Button } from "@/components/ui/button";
import { Menu, Phone } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Navbar() {
  const items = [
    {
      label: "Services",
      href: "/services",
      subItems: [
        { label: "Teleradiology", href: "/services/teleradiology" },
        { label: "Healthcare IT", href: "/services/healthcare-it" },
      ]
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
      href: "",
    },
  ];
  return (
    <motion.div
      initial={{ y: "-200px" }}
      animate={{ opacity: 1, y: "0px" }}
      className="
  bg-black/3 backdrop-blur-xl
  mt-10 border border-white/10
  py-0 rounded-[60px] mx-auto w-[90%] md:w-[80%] 
  px-6 flex items-center justify-between
  shadow-xs shadow-black/10a
"
    >
      <div className="logo">
        {/* <h3 className="text-primary italic font-open-sauce">Vicky Akku</h3> */}
        <Image
          src={"/image/logo.jpg"}
          className="size-14"
          alt="img"
          height={100}
          width={100}
        />
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
        <Button className=" cursor-pointer rounded-full gradient-color-2 ">
          <Menu className="size-4 text-white " />
        </Button>
      </div>
    </motion.div>
  );
}

export default Navbar;
