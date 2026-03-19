import React from "react";
import { Phone, Mail, Shield, Clock8 } from "lucide-react";

export default function AppointmentSection() {
  return (
    <section className="min-h-screen bg-slate-50 flex items-center justify-center p-6 py-12">
      <div className="max-w-6xl w-full bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row border border-slate-100">
        {/* Left Side: B2B Trust Panel */}
        <div className="w-full md:w-1/3 bg-slate-900 p-8 text-white flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-blue-400">
              Voxel Teleradiology
            </h2>
            <p className="text-slate-300 mb-8">
              Partner with us for sub-specialty expertise and rapid diagnostic
              reporting.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-blue-500/10 rounded-lg">
                  <Phone size={20} className="text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-400">B2B Priority Line</p>
                  <p className="font-semibold ">+91 9588894040 </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-2 bg-blue-500/10 rounded-lg">
                  <Mail size={20} className="text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Email Support</p>
                  <p className="font-semibold">voxelteleradiology@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-800">
            <div className="flex items-center gap-2 text-slate-400 text-sm mb-2">
              <Shield size={16} /> HIPAA Compliant Data Transfer
            </div>
            <div className="flex items-center gap-2 text-slate-400 text-sm">
              <Clock8 size={16} /> 2-Hour STAT TAT Available
            </div>
          </div>
        </div>

        {/* Right Side: Professional Form */}
        <div className="w-full md:w-2/3 p-8 lg:p-12">
          <h3 className="text-2xl font-bold text-slate-800 mb-2">
            Book a Consultation
          </h3>
          <p className="text-slate-500 mb-8">
            Fill out the details below and our team will contact you shortly.
          </p>

          <form action="https://formsubmit.co/voxelteleradiology@gmail.com"
  method="POST" className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Full Name */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-slate-700">
                Full Name
              </label>
              <input
              name="name"
                type="text"
                placeholder="John Doe"
                className="input-style"
                required
              />
            </div>

            {/* Facility Name */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-slate-700">
                Facility / Organization
              </label>
              <input
                type="text"
                name="facility"
                placeholder="City General Hospital"
                className="input-style"
                required
              />
            </div>

            {/* Work Email */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-slate-700">
                Work Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="j.doe@facility.com"
                className="input-style"
                required
              />
            </div>

            {/* Phone Number - Crucial for B2B */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-slate-700">
                Direct Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="+1 (555) 000-0000"
                className="input-style"
                required
              />
            </div>

            {/* Service Type */}
            <div className="flex flex-col gap-1.5 md:col-span-2">
              <label className="text-sm font-semibold text-slate-700">
                Primary Inquiry
              </label>
              <select name="type" className="input-style bg-white">
                <option>New Partnership Setup</option>
                <option>Emergency STAT Coverage</option>
                <option>Sub-specialty Overflow</option>
                <option>Second Opinion Services</option>
              </select>
            </div>

            <div className="md:col-span-2 mt-4">
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-[1.01] shadow-lg shadow-blue-200"
              >
                Confirm Appointment Request
              </button>
              <p className="text-center text-xs text-slate-400 mt-4">
                By submitting, you agree to our Terms of Service and Privacy
                Policy.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
