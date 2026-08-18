import React from "react";
import {
  Zap,
  Eye,
  FileText,
  Monitor,
  CheckCircle2,
  Lock,
} from "lucide-react";

export const EDrishtiLiteFeatures = () => {
  const liteFeatures = [
    {
      title: "Fast Consultation Worksheets",
      desc: "Streamlined single-screen consultation sheet for optometrists and eye doctors to complete refraction charts and prescriptions in under 2 minutes.",
      icon: Eye,
      iconBg: "bg-purple-50 text-purple-600 border-purple-200/60",
      glowColor: "group-hover:border-purple-300",
    },
    {
      title: "Diagnostic Device Integration",
      desc: "Direct auto-refractor & tonometer data sync eliminating manual entry errors during patient eye examinations.",
      icon: Zap,
      iconBg: "bg-indigo-50 text-indigo-600 border-indigo-200/60",
      glowColor: "group-hover:border-indigo-300",
    },
    {
      title: "Optical Inventory & Prescription POS",
      desc: "Integrated optical store module for frame barcode billing, spectacle lens prescription printing, and inventory stock alerts.",
      icon: FileText,
      iconBg: "bg-sky-50 text-sky-600 border-sky-200/60",
      glowColor: "group-hover:border-sky-300",
    },
    {
      title: "Cross-Platform Access",
      desc: "Runs smoothly on all clinic devices — Windows PCs, Android tablets, iPads, and Mac computers.",
      icon: Monitor,
      iconBg: "bg-[#FFF5F2] text-[#FF4D27] border-[#FF4D27]/30",
      glowColor: "group-hover:border-[#FF4D27]/40",
    },
    {
      title: "Rapid 15-Minute Setup",
      desc: "Pre-configured clinic settings and master data allowing eye clinics to go live on day 1 without setup delays.",
      icon: CheckCircle2,
      iconBg: "bg-emerald-50 text-emerald-600 border-emerald-200/60",
      glowColor: "group-hover:border-emerald-300",
    },
    {
      title: "Secure Cloud Backup & Access Controls",
      desc: "Automated encryption, daily cloud backups, and granular staff permission controls for clinic peace of mind.",
      icon: Lock,
      iconBg: "bg-amber-50 text-amber-600 border-amber-200/60",
      glowColor: "group-hover:border-amber-300",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#FAFCFF] border-t border-slate-200/80 relative overflow-hidden select-none">
      {/* Background Soft Mesh Ambient Glows */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky-400/10 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Clean Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <h2 className="text-3xl sm:text-5xl font-black text-[#0B132B] tracking-tight uppercase">
            Clinic <span className="bg-gradient-to-r from-purple-600 via-indigo-500 to-sky-600 bg-clip-text text-transparent">Features</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto font-normal">
            Everything your eye clinic needs to manage patient consults, optical inventory, and billing seamlessly.
          </p>
        </div>

        {/* Ultra-Clean 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {liteFeatures.map((item, idx) => {
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
                  <h3 className="text-xl font-extrabold text-[#0B132B] mb-3 group-hover:text-purple-600 transition-colors">
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

export default EDrishtiLiteFeatures;
