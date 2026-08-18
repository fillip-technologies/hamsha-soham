import React, { useState } from "react";
import {
  Building2,
  Zap,
  LayoutDashboard,
  Award,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import cardBg1 from "../../assets/card-bg-1.png";
import cardBg2 from "../../assets/card-bg-2.png";
import cardBg3 from "../../assets/card-bg-3.png";
import cardBg4 from "../../assets/card-bg-4.png";

export const FeaturesSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  const features = [
    {
      num: "01",
      icon: Building2,
      badge: "Multi-Branch Sync",
      title: "Business Consistency",
      description:
        "Create a central corporate account with multiple hospital branches. Provide a seamless, standardized experience across every location.",
      bgImg: cardBg1,
      iconBg: "bg-gradient-to-br from-[#FF4D27] to-[#FF7043] text-white shadow-lg shadow-[#FF4D27]/40",
      badgeColor: "bg-[#FF4D27]/90 text-white border-[#FF4D27]",
      borderColor: "hover:border-[#FF4D27]",
      linkColor: "text-[#FF6B4A]",
    },
    {
      num: "02",
      icon: Zap,
      badge: "Cost Savings",
      title: "Efficient Operations",
      description:
        "Simplify complex hospital workflows and boost operational efficiency, reaping direct benefits through cost savings and increased revenues.",
      bgImg: cardBg2,
      iconBg: "bg-gradient-to-br from-[#0284C7] to-[#38BDF8] text-white shadow-lg shadow-[#0284C7]/40",
      badgeColor: "bg-[#0284C7]/90 text-white border-[#0284C7]",
      borderColor: "hover:border-[#0284C7]",
      linkColor: "text-[#38BDF8]",
    },
    {
      num: "03",
      icon: LayoutDashboard,
      badge: "Unified Analytics",
      title: "Central Management",
      description:
        "View and analyze hospital operations centrally from a corporate setup. Central call center for managing all calls, leads, and appointments.",
      bgImg: cardBg3,
      iconBg: "bg-gradient-to-br from-[#10B981] to-[#34D399] text-white shadow-lg shadow-[#10B981]/40",
      badgeColor: "bg-[#10B981]/90 text-white border-[#10B981]",
      borderColor: "hover:border-[#10B981]",
      linkColor: "text-[#34D399]",
    },
    {
      num: "04",
      icon: Award,
      badge: "Value-Driven",
      title: "Value Based Solution",
      description:
        "Delivering value-based healthcare solutions across every operational aspect—cycle through our innovation products including HIMS, DMS, and Payroll.",
      bgImg: cardBg4,
      iconBg: "bg-gradient-to-br from-[#F59E0B] to-[#FBBF24] text-white shadow-lg shadow-[#F59E0B]/40",
      badgeColor: "bg-[#F59E0B]/90 text-white border-[#F59E0B]",
      borderColor: "hover:border-[#F59E0B]",
      linkColor: "text-[#FBBF24]",
    },
  ];

  const currentCard = features[activeStep];

  return (
    <section className="relative py-20 sm:py-28 bg-[#FAFAFC] select-none overflow-hidden border-b border-slate-200/80">
      {/* Decorative Glow Mesh */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#FF4D27]/6 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#0284C7]/6 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Side: Text Content */}
          <div className="lg:col-span-5 space-y-7 text-left">

            {/* Master Headline */}
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0B132B] tracking-tight leading-tight">
              Introducing <br />
              <span className="bg-gradient-to-r from-[#FF4D27] via-[#FF8000] to-[#0B132B] bg-clip-text text-transparent">
                Hamsa Soham Healthcare
              </span>
            </h2>

            {/* Dynamic Active Description */}
            <div className="space-y-3 min-h-[120px]">
              <h3 className="text-xl font-extrabold text-[#0B132B]">
                {currentCard.title}
              </h3>
              <p className="text-base text-slate-600 font-normal leading-relaxed">
                {currentCard.description}
              </p>
            </div>

            {/* Manual Step Controls */}
            <div className="pt-2 flex items-center gap-4">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                  className="w-11 h-11 rounded-full bg-white border border-slate-300 hover:border-[#FF4D27] hover:text-[#FF4D27] text-slate-800 flex items-center justify-center transition-all shadow-xs cursor-pointer disabled:opacity-40"
                  disabled={activeStep === 0}
                  aria-label="Previous feature"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  onClick={() => setActiveStep((prev) => Math.min(features.length - 1, prev + 1))}
                  className="w-11 h-11 rounded-full bg-white border border-slate-300 hover:border-[#FF4D27] hover:text-[#FF4D27] text-slate-800 flex items-center justify-center transition-all shadow-xs cursor-pointer disabled:opacity-40"
                  disabled={activeStep === features.length - 1}
                  aria-label="Next feature"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Progress Step Indicator Bars */}
              <div className="flex items-center gap-2 ml-2">
                {features.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveStep(idx)}
                    className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                      activeStep === idx
                        ? "w-8 bg-[#FF4D27]"
                        : "w-2.5 bg-slate-300 hover:bg-slate-400"
                    }`}
                  />
                ))}
              </div>
            </div>

          </div>

          {/* Right Side: 2-Card Conveyor Belt with manual step navigation */}
          <div className="lg:col-span-7 relative h-[420px] sm:h-[460px] overflow-hidden">
            <div className="relative w-full h-full">
              {features.map((card, idx) => {
                const Icon = card.icon;

                let diff = idx - activeStep;
                let positionStyle = "left-[105%] opacity-0 scale-90 pointer-events-none z-0";

                if (diff === 0) {
                  positionStyle = "left-0 opacity-100 scale-100 z-20 shadow-2xl border-slate-700";
                } else if (diff === 1) {
                  positionStyle = "left-[52%] opacity-90 scale-95 z-10 shadow-xl border-slate-800";
                } else if (diff < 0) {
                  positionStyle = "-left-[52%] opacity-0 scale-90 z-0";
                }

                return (
                  <div
                    key={card.num}
                    onClick={() => setActiveStep(idx)}
                    className={`absolute top-0 w-[92%] sm:w-[48%] rounded-3xl p-7 border transition-all duration-700 ease-out cursor-pointer overflow-hidden h-[380px] sm:h-[420px] flex flex-col justify-between text-left ${positionStyle}`}
                  >
                    {/* Custom Photographic Background Image */}
                    <img
                      src={card.bgImg}
                      alt={card.title}
                      className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 pointer-events-none -z-0"
                    />

                    {/* Dark Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/75 to-slate-900/50 pointer-events-none -z-0" />

                    {/* Card Content */}
                    <div className="relative z-10 space-y-3.5">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-black text-slate-300 tracking-wider">
                          {card.num}
                        </span>
                        <span className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider backdrop-blur-md shadow-sm ${card.badgeColor}`}>
                          {card.badge}
                        </span>
                      </div>

                      <div className={`w-12 h-12 rounded-2xl ${card.iconBg} flex items-center justify-center shadow-lg mb-3`}>
                        <Icon className="w-6 h-6" />
                      </div>

                      <h3 className="text-xl font-extrabold text-white leading-snug">
                        {card.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-200 font-normal leading-relaxed line-clamp-4">
                        {card.description}
                      </p>
                    </div>

                    {/* Footer Link */}
                    <div className={`relative z-10 pt-4 border-t border-white/20 flex items-center justify-between text-xs font-bold ${card.linkColor}`}>
                      <span>Explore Feature</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
