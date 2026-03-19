import Footer from "@/component/Footer";
import Navbar from "@/component/Navbar";
import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className=" w-full relative">
      <main className="py-24 md:py-12">{children}</main>
      {/* <Footer /> */}
    </div>
  );
}

export default layout;
