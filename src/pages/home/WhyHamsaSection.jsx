import React from "react";
import {
  HeartPulse,
  TrendingUp,
  Layers,
  ShieldCheck,
  CircleDollarSign,
  Headphones,
  CheckCircle2,
} from "lucide-react";

export const WhyHamsaSection = () => {
  const cards = [
    {
      id: "healthcare-focused",
      title: "Healthcare Focused",
      description: "Built specifically around healthcare workflows.",
      details: "Engineered from the ground up to mirror real hospital, OPD, IPD, and surgical workflows rather than retrofitted generic ERP logic.",
      icon: HeartPulse,
      iconBg: "bg-rose-50 text-[#FF4D27] group-hover:bg-[#FF4D27] group-hover:text-white",
      borderColor: "hover:border-[#FF4D27]/40",
      accentGlow: "from-[#FF4D27]/10 to-transparent",
    },
    {
      id: "scalable",
      title: "Scalable",
      description: "From individual hospitals to multi-location organizations.",
      details: "Easily adapts to standalone specialty eye clinics or distributed multi-branch hospital chains with unified cloud architecture.",
      icon: TrendingUp,
      iconBg: "bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white",
      borderColor: "hover:border-blue-500/40",
      accentGlow: "from-blue-500/10 to-transparent",
    },
    {
      id: "integrated",
      title: "Integrated",
      description: "Connect clinical, administrative and operational functions.",
      details: "Bridges doctor EMRs, diagnostic lab machines, pharmacy inventory, and billing counters into a single synchronized data stream.",
      icon: Layers,
      iconBg: "bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white",
      borderColor: "hover:border-emerald-500/40",
      accentGlow: "from-emerald-500/10 to-transparent",
    },
    {
      id: "secure",
      title: "Secure",
      description: "Role-based access and controlled information management.",
      details: "Full encryption, granular role permissions, and tamper-proof audit trails ensuring strict NABH & ISO data governance.",
      icon: ShieldCheck,
      iconBg: "bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white",
      borderColor: "hover:border-indigo-500/40",
      accentGlow: "from-indigo-500/10 to-transparent",
    },
    {
      id: "cost-effective",
      title: "Cost Effective",
      description: "Solutions designed for different hospital sizes and budgets.",
      details: "Modular packages tailored for SMB clinics up to large enterprise hospitals with transparent ROI and zero hidden fees.",
      icon: CircleDollarSign,
      iconBg: "bg-amber-50 text-amber-600 group-hover:bg-amber-600 group-hover:text-white",
      borderColor: "hover:border-amber-500/40",
      accentGlow: "from-amber-500/10 to-transparent",
    },
    {
      id: "support",
      title: "Support",
      description: "Ongoing implementation and operational support.",
      details: "Dedicated 24/7 technical assistance, hands-on clinical staff onboarding, and continuous updates for seamless operations.",
      icon: Headphones,
      iconBg: "bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white",
      borderColor: "hover:border-purple-500/40",
      accentGlow: "from-purple-500/10 to-transparent",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#F4F8FD] relative overflow-hidden text-slate-900 select-none border-t border-slate-200/80">
      {/* Background Decorative Mesh Glows */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-[#0D62FF]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 -right-40 w-96 h-96 bg-[#FF4D27]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-5xl font-black text-[#0B132B] tracking-tight leading-[1.15]">
            Why <span className="bg-gradient-to-r from-[#FF4D27] via-orange-500 to-[#0D62FF] bg-clip-text text-transparent">Hamsa Soham?</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Purpose-built healthcare technology designed to empower clinical teams, simplify hospital administration, and deliver exceptional patient care.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className={`group relative bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden ${card.borderColor}`}
              >
                {/* Top Ambient Glow */}
                <div
                  className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${card.accentGlow} rounded-full blur-2xl pointer-events-none group-hover:scale-150 transition-transform duration-500`}
                />

                <div className="space-y-4 relative z-10">
                  {/* Card Icon */}
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-xs ${card.iconBg}`}
                  >
                    <Icon className="w-7 h-7 transition-transform group-hover:scale-110" />
                  </div>

                  {/* Title & Core Tagline */}
                  <div className="space-y-1.5">
                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#0B132B] tracking-tight">
                      {card.title}
                    </h3>
                    <p className="text-sm font-bold text-[#FF4D27]">
                      {card.description}
                    </p>
                  </div>

                  {/* Detailed Description */}
                  <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed pt-1">
                    {card.details}
                  </p>
                </div>

                {/* Bottom Value Indicator */}
                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-500 group-hover:text-slate-800 transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Enterprise Ready & Verified</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhyHamsaSection;
