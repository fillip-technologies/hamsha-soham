import React from "react";
import { Zap, ShieldCheck, Cpu, Headphones, CheckCircle2, HeartHandshake } from "lucide-react";

export const AboutValues = () => {
  const valuesList = [
    {
      title: "Clinical Operational Excellence",
      desc: "Engineered to streamline doctor consultation speeds, eliminate optical inventory leakages, and automate IPD bed tracking.",
      icon: Zap,
      iconBg: "bg-orange-50 text-[#FF4D27] border-orange-200/80",
    },
    {
      title: "100% NABH & NABL Audit Preparedness",
      desc: "Pre-configured quality indicator metrics, clinical audit logs, medication error tracking, and automated reporting formats.",
      icon: ShieldCheck,
      iconBg: "bg-blue-50 text-blue-600 border-blue-200/80",
    },
    {
      title: "Seamless Hardware Interfacing",
      desc: "Direct RS232 & LAN serial connectivity with auto-refractors, tonometers, lab analyzers, and PACS imaging servers.",
      icon: Cpu,
      iconBg: "bg-amber-50 text-amber-600 border-amber-200/80",
    },
    {
      title: "24/7 Dedicated On-Call Support",
      desc: "Round-the-clock technical assistance, immediate remote desktop troubleshooting, and regular software updates.",
      icon: Headphones,
      iconBg: "bg-emerald-50 text-emerald-600 border-emerald-200/80",
    },
    {
      title: "Unmatched Data Security & Privacy",
      desc: "Role-based access controls, encrypted database storage, automated nightly backups, and strict patient confidentiality.",
      icon: HeartHandshake,
      iconBg: "bg-purple-50 text-purple-600 border-purple-200/80",
    },
    {
      title: "High Scalability & Customization",
      desc: "Modular design supporting single-doctor outpatient clinics up to multi-location tertiary care hospital networks.",
      icon: CheckCircle2,
      iconBg: "bg-sky-50 text-sky-600 border-sky-200/80",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#FAFCFF] border-t border-slate-200/80 select-none">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 text-white text-xs font-extrabold uppercase tracking-wider shadow-xs">
            <span>Guiding Principles</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-[#0B132B] tracking-tight uppercase">
            Our Core <span className="bg-gradient-to-r from-[#FF4D27] via-amber-500 to-sky-600 bg-clip-text text-transparent">Values</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto font-normal">
            The foundational standards driving our software engineering, client support, and product innovation.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {valuesList.map((val, idx) => {
            const IconComp = val.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between text-left group"
              >
                <div className="space-y-4">
                  <div className={`w-13 h-13 rounded-2xl ${val.iconBg} border flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform duration-300`}>
                    <IconComp className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-extrabold text-[#0B132B] group-hover:text-[#FF4D27] transition-colors leading-snug">
                    {val.title}
                  </h3>

                  <p className="text-sm text-slate-600 font-normal leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default AboutValues;
