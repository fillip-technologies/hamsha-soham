import React from "react";
import {
  Building2,
  FileText,
  Zap,
  Activity,
  CheckCircle2,
  Lock,
} from "lucide-react";

export const EKshitizLiteFeatures = () => {
  const modularFeatures = [
    {
      title: "Fast Patient Billing & Registration",
      desc: "Instant OPD patient registration, automated consultation fee collection, and barcode receipt printing in under 1 minute.",
      icon: FileText,
      iconBg: "bg-emerald-50 text-emerald-600 border-emerald-200/60",
      glowColor: "group-hover:border-emerald-300",
    },
    {
      title: "Modular Module Activation",
      desc: "Plug-and-play architecture allowing nursing homes to enable OPD, Pharmacy, IPD, or LIS modules as they scale.",
      icon: Zap,
      iconBg: "bg-teal-50 text-teal-600 border-teal-200/60",
      glowColor: "group-hover:border-teal-300",
    },
    {
      title: "Electronic Health Records (EHR)",
      desc: "Structured doctor prescription sheets, medical history, ICD-10 diagnosis codes, and digital prescription printing.",
      icon: Activity,
      iconBg: "bg-cyan-50 text-cyan-600 border-cyan-200/60",
      glowColor: "group-hover:border-cyan-300",
    },
    {
      title: "Pharmacy & Retail POS",
      desc: "In-house pharmacy counter management with batch stock tracking, expiry alerts, and barcode prescription billing.",
      icon: Building2,
      iconBg: "bg-sky-50 text-sky-600 border-sky-200/60",
      glowColor: "group-hover:border-sky-300",
    },
    {
      title: "Rapid 30-Minute Deployment",
      desc: "Zero IT complexity with pre-configured hospital master templates getting your hospital operational in 30 minutes.",
      icon: CheckCircle2,
      iconBg: "bg-amber-50 text-amber-600 border-amber-200/60",
      glowColor: "group-hover:border-amber-300",
    },
    {
      title: "Secure Cloud Backup",
      desc: "Automatic daily encrypted backups ensuring your hospital data is safe, compliant, and accessible 24/7.",
      icon: Lock,
      iconBg: "bg-rose-50 text-rose-600 border-rose-200/60",
      glowColor: "group-hover:border-rose-300",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#FAFCFF] border-t border-slate-200/80 relative overflow-hidden select-none">
      {/* Background Soft Mesh Ambient Glows */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Clean Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <h2 className="text-3xl sm:text-5xl font-black text-[#0B132B] tracking-tight uppercase">
            Modular <span className="bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-600 bg-clip-text text-transparent">Features</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto font-normal">
            Essential modules built for fast patient management, electronic prescriptions, and hospital billing.
          </p>
        </div>

        {/* Ultra-Clean 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modularFeatures.map((item, idx) => {
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
                  <h3 className="text-xl font-extrabold text-[#0B132B] mb-3 group-hover:text-emerald-600 transition-colors">
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

export default EKshitizLiteFeatures;
