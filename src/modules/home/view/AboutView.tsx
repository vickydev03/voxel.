import { Target, Users, Zap, ShieldCheck, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="pt-24 font-sans bg-white">
      {/* Hero Section: Blue & White Dominant */}
      <section className="px-6 py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold tracking-widest uppercase">
              Our Mission
            </div>
            <h1 className="text-6xl font-black tracking-tighter text-slate-900 mb-6 italic leading-[0.9]">
              PRECISION{" "}
              <span className="text-blue-500 underline decoration-red-500/30">
                INSIGHTS
              </span>{" "}
              <br />
              <span className="text-slate-400">WITHOUT BORDERS.</span>
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed mb-10 max-w-lg">
              Voxel Teleradiology provides 24×7 accurate and timely reporting
              for X-ray, CT, MRI, ECG, EEG, TMT, PFT, OPG, CBCT, and PET scans.
              We also offer Healthcare IT solutions including social media
              management, website development & SEO, WhatsApp API integration,
              and custom software for healthcare facilities—helping medical
              businesses grow with technology.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 flex items-center gap-2">
                        <Link
                        className="flex items-center gap-3"
                        href="https://wa.me/919588894040?text=I%20would%20like%20to%20partner%20with%20you."
                        target="_blank"
                        rel="noopener noreferrer"
>
  Partner With Us <ArrowRight size={18} />
</Link>
              </button>
              <button className="px-8 py-4 bg-white text-red-500 border-2 border-red-500 font-bold rounded-full hover:bg-red-50 transition-all">
                <Link
  href="https://www.instagram.com/voxelteleradiology/"
  className="flex items-center gap-3"
  target="_blank"
  rel="noopener noreferrer"
>
  Learn More <ArrowRight size={18} />
</Link>
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="relative h-[500px] rounded-[40px] overflow-hidden shadow-2xl z-10">
              <Image
                src="/image/img22.jpg"
                alt="Radiologist analying data"
                // width={600}
                // height={500}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="w-full aspect-[4/3] object-cover rounded-xl transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent"></div>
            </div>
            {/* Geometric Accents */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-red-500 rounded-full z-0 animate-pulse"></div>
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
          </div>
        </div>
      </section>

      {/* High-Impact Stats: Blue Dominant with Red Accents */}

      <section
        className="py-20 relative"
        style={{
          background: `linear-gradient(
      120deg, 
      rgba(1, 174, 216, 0.3) 0%,   /* soft blue */
      rgba(255, 76, 76, 0.3) 50%,  /* soft red */
      rgba(255, 255, 255, 0.8) 100% /* mostly white */
    )`,
        }}
      >
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12">
          {[
            { num: "24/7", label: "Global Coverage" },
            { num: "STAT", label: "Under 30 Mins" },
            { num: "50+", label: "Sub-Specialists" },
            { num: "99.9%", label: "Clinical Accuracy" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="border-l-2 border-white/20 pl-6 transition-transform hover:scale-105"
            >
              <div className="text-6xl md:text-7xl font-extrabold text-slate-900 mb-2">
                {stat.num}
              </div>
              <div className="text-xs md:text-sm uppercase tracking-wider font-semibold text-slate-700">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Core Values: Clean White Design */}
      <section className="py-32 px-6 max-w-7xl mx-auto bg-white">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold text-slate-900 tracking-tight">
              Clinical Excellence <br />
              <span className="text-blue-500 italic">Meets Modern Tech.</span>
            </h2>
          </div>
          <p className="text-slate-500 max-w-xs text-sm border-l-2 border-red-500 pl-4">
            Our infrastructure is built to handle high-volume diagnostic loads
            without compromising on single-patient accuracy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <ValueCard
            icon={<Target className="text-white" />}
            title="Precision Triage"
            desc="Every study is matched to a board-certified sub-specialist based on clinical indication."
          />
          <ValueCard
            icon={<Zap className="text-white" />}
            title="Rapid PACS Setup"
            desc="Our technical team ensures HIPAA-compliant integration with your local EMR within 5 min."

          />
          <ValueCard
            icon={<ShieldCheck className="text-white" />}
            title="Zero-Error Quality Assurance"
            desc="Every report undergoes strict quality assurance ensuring zero errors and accuracy"
          />
        </div>
      </section>

      {/* Final CTA: Professional White & Blue */}
      <section className="bg-slate-50 py-24 px-6 border-y border-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-8">
            Let&apos;s Optimize Your{" "}
            <span className="text-red-500">Facility&apos;s</span> Workflow
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="px-10 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-200">
              <Link
                href="https://wa.me/919588894040?text=Hello%2C%20I%20would%20like%20to%20schedule%20a%20demo."
                target="_blank"
                rel="noopener noreferrer"
              >
                Schedule a Demo
              </Link>
            </button>
            <button className="px-10 py-4 bg-white text-slate-900 border border-slate-200 font-bold rounded-xl hover:bg-slate-50 transition-all">
              <Link
                href="https://wa.me/919256862769?text=Hello"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact Sales
              </Link>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

function ValueCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="group relative">
      <div className="mb-6 p-5 bg-blue-600 w-fit rounded-2xl shadow-lg shadow-blue-200 group-hover:-translate-y-2 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
      <div className="mt-4 w-0 group-hover:w-12 h-1 bg-red-500 transition-all duration-300 rounded-full"></div>
    </div>
  );
}
