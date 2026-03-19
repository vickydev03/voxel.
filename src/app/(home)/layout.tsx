import Footer from "@/component/Footer";
import Navbar from "@/component/Navbar";
import React from "react";

function Rootayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex relative flex-col bg-hero ">
      <div className=" z-50 absolute w-full">
          <Navbar />
        </div>
      {children}
      <Footer/>
    </div>
  );
}

export default Rootayout;
