"use client";
import React from "react";

function JoinView() {
  return (
    <div className="flex py-4 md:py-12 items-center justify-center">
    <div className="w-full  md:w-2/3 p-8 lg:p-12 bg-white rounded-2xl shadow-xl border border-slate-100">
      {/* Header */}
      <h3 className="text-3xl font-bold text-slate-800 mb-2">
        Join Our Radiology Network
      </h3>
      <p className="text-slate-500 mb-8">
        Work with a high-volume teleradiology platform. Fill in your details and
        our team will contact you shortly.
      </p>

      <form
        action="https://formsubmit.co/voxelteleradiology@gmail.com"
        method="POST"
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* Full Name */}
        <div className="flex flex-col gap-1.5">
          <label className="label">Full Name</label>
          <input
            name="name"
            type="text"
            placeholder="Dr. John Doe"
            className="input-style"
            required
          />
        </div>

        {/* Qualification */}
        <div className="flex flex-col gap-1.5">
          <label className="label">Qualification</label>
          <input
            name="qualification"
            type="text"
            placeholder="MD / DNB Radiology"
            className="input-style"
            required
          />
        </div>

        {/* Experience */}
        <div className="flex flex-col gap-1.5">
          <label className="label">Years of Experience</label>
          <input
            name="experience"
            type="number"
            placeholder="5+"
            className="input-style"
            required
          />
        </div>

        {/* Specialization */}
        <div className="flex flex-col gap-1.5">
          <label className="label">Specialization</label>
          <select name="specialization" className="input-style bg-white">
            <option>General Radiology</option>
            <option>CT / MRI</option>
            <option>Dental (CBCT / OPG)</option>
            <option>Chest / Thoracic</option>
            <option>Neuro Radiology</option>
          </select>
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1.5">
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            placeholder="doctor@email.com"
            className="input-style"
            required
          />
        </div>

        {/* Phone */}
        <div className="flex flex-col gap-1.5">
          <label className="label">Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="+91 XXXXX XXXXX"
            className="input-style"
            required
          />
        </div>

        {/* Availability */}
        <div className="flex flex-col gap-1.5 md:col-span-2">
          <label className="label">Availability</label>
          <select name="availability" className="input-style bg-white">
            <option>Full Time</option>
            <option>Part Time</option>
            <option>Night Shift</option>
            <option>Flexible</option>
          </select>
        </div>

        {/* Submit */}
        <div className="md:col-span-2 mt-4">
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-90 text-white font-bold py-3 px-6 rounded-xl transition-all duration-200 shadow-lg"
          >
            Apply as Radiologist
          </button>

          <p className="text-center text-xs text-slate-400 mt-4">
            We respect your privacy. Your information will only be used for
            recruitment purposes.
          </p>
        </div>
      </form>
    </div>
    </div>
  );
}

export default JoinView;
