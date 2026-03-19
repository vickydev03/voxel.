import Footer from "@/component/Footer";
import Navbar from "@/component/Navbar";
import AboutView from "@/modules/home/view/AboutView";
import React from "react";

function page() {
  return (
    <div>
      <div className=" z-50 absolute w-full">
          <Navbar />
        </div>
      <AboutView />
      <Footer/>
    </div>
  );
}

export default page;
