import React from "react";
import {
  Building2,
  Activity,
  FileText,
  ShieldCheck,
  Zap,
  Lock,
} from "lucide-react";

export const EKshitizFeatures = () => {
  const enterpriseFeatures = [
    {
      title: "Integrated IPD & OPD Management",
      desc: "Complete inpatient and outpatient registration, bed management, doctor round notes, and automated discharge summaries.",
      icon: Building2,
      iconBg: "bg-orange-50 text-[#FF4D27] border-orange-200/60",
      glowColor: "group-hover:border-orange-300",
    },
    {
      title: "LIS & RIS Diagnostics Interfacing",
      desc: "Direct integration with Laboratory Information Systems (LIS) and Radiology equipment for instant diagnostic report delivery.",
      icon: Activity,
      iconBg: "bg-sky-50 text-sky-600 border-sky-200/60",
      glowColor: "group-hover:border-sky-300",
    },
    {
      title: "Pharmacy & Central Store POS",
      desc: "Automated pharmacy inventory, batch expiry tracking, barcode billing, and central store stock replenishment.",
      icon: FileText,
      iconBg: "bg-emerald-50 text-emerald-600 border-emerald-200/60",
      glowColor: "group-hover:border-emerald-300",
    },
    {
      title: "NABH & NABL Audit Compliance",
      desc: "Built-in clinical quality indicators, infection control audit forms, and automated NABH compliance documentation.",
      icon: ShieldCheck,
      iconBg: "bg-amber-50 text-amber-600 border-amber-200/60",
      glowColor: "group-hover:border-amber-300",
    },
    {
      title: "OT & ICU Workflow Suite",
      desc: "Operation theatre scheduling, surgical checklist logs, ICU monitor vitals recording, and anesthesia notes.",
      icon: Zap,
      iconBg: "bg-indigo-50 text-indigo-600 border-indigo-200/60",
      glowColor: "group-hover:border-indigo-300",
    },
    {
      title: "Central Finance & Insurance Claims",
      desc: "Unified patient billing, TPA insurance claim tracking, corporate accounts, and automated ledger generation.",
      icon: Lock,
      iconBg: "bg-rose-50 text-rose-600 border-rose-200/60",
      glowColor: "group-hover:border-rose-300",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#FAFCFF] border-t border-slate-200/80 relative overflow-hidden select-none">
      {/* Background Soft Mesh Ambient Glows */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#FF4D27]/10 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Clean Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <h2 className="text-3xl sm:text-5xl font-black text-[#0B132B] tracking-tight uppercase">
            Enterprise <span className="bg-gradient-to-r from-[#FF4D27] via-orange-500 to-amber-500 bg-clip-text text-transparent">Features</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto font-normal">
            Everything your multispeciality hospital needs to centralize clinical, financial, and operational workflows.
          </p>
        </div>

        {/* Ultra-Clean 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {enterpriseFeatures.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className={`bg-white rounded-3xl p-8 sm:p-9 border border-slate-200/80 ${item.glowColor} transition-all duration-300 shadow-xs hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between group cursor-default relative overflow-hidden`}
              >
                <div>
                  {/* Round Soft Pastel Icon Avatar */}
                  <div className={`w-14 h-14 rounded-full ${item.iconBg} border flex items-center justify-center mb-6 shadow-xs group-hover:scale-110 transition-transform duration-300`}>
                    <IconComp className="w-6.5 h-6.5" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-extrabold text-[#0B132B] mb-3 group-hover:text-[#FF4D27] transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-600 font-normal leading-relaxed">
                    {item.desc}
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

export default EKshitizFeatures;
