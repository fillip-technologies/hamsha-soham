import React from "react";
import { Building2, ShieldCheck, Activity, Clock, Award, Users } from "lucide-react";

export const AboutStats = () => {
  const statsList = [
    {
      num: "50+",
      label: "Hospitals & Eye Clinics",
      desc: "Deploys across India",
      icon: Building2,
      color: "text-[#FF4D27]",
      bg: "bg-orange-50 border-orange-200",
    },
    {
      num: "100%",
      label: "NABH & NABL Audit Ready",
      desc: "Pre-configured templates",
      icon: ShieldCheck,
      color: "text-[#FF4D27]",
      bg: "bg-amber-50 border-amber-200",
    },
    {
      num: "99.99%",
      label: "System Uptime",
      desc: "Cloud & local failover",
      icon: Activity,
      color: "text-emerald-600",
      bg: "bg-emerald-50 border-emerald-200",
    },
    {
      num: "24 / 7",
      label: "Dedicated Technical Support",
      desc: "Round-the-clock desk",
      icon: Clock,
      color: "text-sky-600",
      bg: "bg-sky-50 border-sky-200",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-t border-slate-200/80 select-none">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 text-center space-y-12">
        
        <div className="max-w-2xl mx-auto space-y-3">
          <h2 className="text-3xl sm:text-4xl font-black text-[#0B132B] tracking-tight uppercase">
            Proven Scale & <span className="bg-gradient-to-r from-[#FF4D27] via-amber-500 to-sky-600 bg-clip-text text-transparent">Reliability</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Quantifiable impact delivered across healthcare institutions nationwide.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsList.map((stat, idx) => {
            const IconComp = stat.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50/80 rounded-3xl p-8 border border-slate-200/80 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center text-center space-y-3 group"
              >
                <div className={`w-14 h-14 rounded-2xl ${stat.bg} border flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <IconComp className={`w-7 h-7 ${stat.color}`} />
                </div>
                <div className={`text-4xl font-black ${stat.color} tracking-tight`}>
                  {stat.num}
                </div>
                <div>
                  <div className="text-base font-extrabold text-[#0B132B]">{stat.label}</div>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">{stat.desc}</div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default AboutStats;
