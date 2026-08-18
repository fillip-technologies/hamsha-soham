import React from "react";
import {
  ShieldCheck,
  Monitor,
  Users,
  Zap,
  Building2,
  Lock,
} from "lucide-react";

export const EDrishtiFeatures = () => {
  const productFeatures = [
    {
      title: "Secure Framework Backend",
      desc: "Developed on Java 8, JSF 2.2, Primefaces 7, and MSSQL Database for a highly secure, scalable, and reliable enterprise application.",
      icon: ShieldCheck,
      iconBg: "bg-orange-50 text-[#FF4D27] border-orange-200/60",
      glowColor: "group-hover:border-orange-300",
    },
    {
      title: "Platform Independent",
      desc: "Capable of running smoothly on any operating system including Windows, Android, Linux, or Apple Mac devices.",
      icon: Monitor,
      iconBg: "bg-sky-50 text-sky-600 border-sky-200/60",
      glowColor: "group-hover:border-sky-300",
    },
    {
      title: "Outreach Application",
      desc: "Prebuilt mobile outreach app to capture demographic and EMR data on the go in remote vision screening camps.",
      icon: Users,
      iconBg: "bg-emerald-50 text-emerald-600 border-emerald-200/60",
      glowColor: "group-hover:border-emerald-300",
    },
    {
      title: "Ready to Use",
      desc: "Fast server deployment setup allowing eye clinics and hospital networks to go live within just 1 hour.",
      icon: Zap,
      iconBg: "bg-amber-50 text-amber-600 border-amber-200/60",
      glowColor: "group-hover:border-amber-300",
    },
    {
      title: "Great for Clients",
      desc: "Multi-branch support enabling enterprise hospital chains to manage multi-location operations centrally.",
      icon: Building2,
      iconBg: "bg-indigo-50 text-indigo-600 border-indigo-200/60",
      glowColor: "group-hover:border-indigo-300",
    },
    {
      title: "Role Based Management",
      desc: "Granular access control policies securing clinical records, optical sales, surgical notes, and audit logs.",
      icon: Lock,
      iconBg: "bg-rose-50 text-rose-600 border-rose-200/60",
      glowColor: "group-hover:border-rose-300",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#FAFCFF] border-t border-slate-200/80 relative overflow-hidden select-none">
      {/* Background Soft Mesh Ambient Glows */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-sky-400/10 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FF4D27]/10 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Clean Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <h2 className="text-3xl sm:text-5xl font-black text-[#0B132B] tracking-tight uppercase">
            Product <span className="bg-gradient-to-r from-[#FF4D27] via-amber-500 to-sky-600 bg-clip-text text-transparent">Features</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto font-normal">
            Built on a robust, enterprise-grade architecture for maximum security, speed, and cross-platform flexibility.
          </p>
        </div>

        {/* Ultra-Clean 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productFeatures.map((item, idx) => {
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
                  <h3 className="text-xl font-extrabold text-[#0B132B] mb-3 group-hover:text-sky-600 transition-colors">
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

export default EDrishtiFeatures;
