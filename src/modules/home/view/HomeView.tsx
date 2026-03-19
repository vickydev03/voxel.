"use client";
import React from "react";
import Hero from "../component/Hero";
import InfoSection from "../component/InfoSection";
import OurPartner from "../component/OurPartner";
import WorkflowSection from "../component/WorkflowSection";
import SecuritySection from "../component/SecuritySection";
import MetricsSection from "../component/MatrixSection";
import ServicesSection from "../component/Services";
import Reviews from "../component/Reviews";
import AppointmentSection from "../component/Appointment";

function HomeView() {
  return (
    <div className="w-full h-full">
      <Hero />
      <InfoSection />
      <OurPartner/>
      <WorkflowSection/>
      <SecuritySection/>
      <MetricsSection/>
      <ServicesSection/>
      <Reviews/>
      <AppointmentSection/>
    </div>
  );
}

export default HomeView;
