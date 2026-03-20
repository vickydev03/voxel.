import React from "react";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
  Shield,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Column 1: Brand & Bio */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">V</span>
            </div>
            <span className="text-white text-2xl font-bold tracking-tight">
              Voxel <span className="text-blue-400">Teleradiology</span>
            </span>
          </div>
          <p className="text-sm leading-relaxed text-slate-400">
            Advanced teleradiology solutions providing sub-specialty expertise
            to hospitals and clinics worldwide. 24/7 diagnostic excellence.
          </p>
          <div className="flex gap-4">
            <Link href="https://www.linkedin.com/posts/voxel-teleradiology-001703370_radiologisthiring-xrayreporting-teleradiology-activity-7399829720026161152-pHj2" className="hover:text-blue-400 transition-colors">
              <Linkedin size={20} />
            </Link>
            <Link href="https://www.facebook.com/p/Voxel-Teleradiology-100085254052240/" className="hover:text-blue-400 transition-colors">
              <Facebook size={20} />
            </Link>
            <Link href="https://www.instagram.com/voxelteleradiology/" className="hover:text-blue-400 transition-colors">
              <Instagram size={20} />
            </Link>
          </div>  
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="text-white font-bold mb-6">Our Services</h4>
          <ul className="space-y-4 text-sm">
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Emergency STAT Reporting
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Sub-Specialty Over-reads
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Night/Weekend Coverage
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Clinical Consultation
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                AI-Enhanced Diagnostics
              </a>
            </li>
            <li>
              <Link href="/services/teleradiology/healthcare-it/" className="hover:text-white transition-colors">
                It Solution
              </Link>
            </li>

          </ul>
        </div>

        {/* Column 3: Corporate */}
        <div>
          <h4 className="text-white font-bold mb-6">Company</h4>
          <ul className="space-y-4 text-sm">
            <li>
              <Link href="/about-us" className="hover:text-white transition-colors">
                About Voxel
              </Link>
            </li>
            <li>
              <Link href="/join-as-radiologist" className="hover:text-white transition-colors">
                Join Our Radiologist Network
              </Link>
            </li>
            <li>
              <Link href="/case-studies" className="hover:text-white transition-colors">
                Case Studies
              </Link>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Compliance & HIPAA
              </a>
            </li>
            <li>
              <Link href="/contact-us" className="hover:text-white transition-colors">
                Contact Support
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Contact Info */}
        <div className="space-y-4">
          <h4 className="text-white font-bold mb-6">Headquarters</h4>
          <div className="flex items-start gap-3 text-sm">
            <MapPin size={18} className="text-blue-400 shrink-0" />
            <span>
              101,Pal Balaji Road,Jodhpur
              <br />
              Rajasthan, India
            </span>
          </div>
         <div className="flex items-center gap-3 text-sm">
  <Phone size={18} className="text-blue-400 shrink-0" />
  <span className="text-neutral-400">Office:</span>
  <a href="tel:+919256862769" className="hover:text-blue-400 transition">
    +91 9256862769
  </a>
</div>

<div className="flex items-center gap-3 text-sm">
  <Phone size={18} className="text-blue-400 shrink-0" />
  <span className="text-neutral-400">Management:</span>
  <a href="tel:+919588894040" className="hover:text-blue-400 transition">
    +91 9588894040
  </a>
</div>
          <div className="flex items-center gap-3 text-sm">
            <Mail size={18} className="text-blue-400 shrink-0" />
            <span>voxelteleradiology@gmail.com</span>
          </div>
          <div className="mt-6 pt-4 border-t border-slate-800">
            <div className="flex items-center gap-2 text-xs text-green-400 bg-green-400/5 px-3 py-2 rounded-md border border-green-400/20">
              <Shield size={14} /> System Status: Online & Secure
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
        <p>© {currentYear} Atherous. All rights reserved.</p>
        <div className="flex gap-6 uppercase tracking-widest font-semibold">
          <Link href="/privacy-policy" className="hover:text-white">
            Privacy Policy
          </Link>
          <Link href="/terms-of-service" className="hover:text-white">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
