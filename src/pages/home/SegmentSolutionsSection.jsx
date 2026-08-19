import React from "react";
import { Link } from "react-router-dom";
import {
  Building2,
  Eye,
  Hospital,
  Activity,
  ArrowRight,
} from "lucide-react";

// Product images
import eKshitizImg from "../../assets/portfolio/e_Kshitiz.png";
import eKshitizLiteImg from "../../assets/portfolio/e_KshitizLite.png";
import eDrishtiImg from "../../assets/portfolio/e_Drishti_P_I.png";
import eDrishtiLiteImg from "../../assets/portfolio/e_Drishtilite_P_I.png";

export const SegmentSolutionsSection = () => {
  const cards = [
    {
      id: "ekshitiz",
      provider: "e_Kshitiz Enterprise",
      icon: Building2,
      productName: "e_Kshitiz",
      title: "Enterprise Hospital Management System",
      audience: "For multispeciality hospitals and healthcare groups.",
      link: "/products/e-kshitiz",
      rating: "4.9",
      badge: "Multispeciality Group",
      image: eKshitizImg,
      cardBg: "from-[#FF4D27] via-[#D83612] to-[#6A1200]",
    },
    {
      id: "edrishti",
      provider: "e_Drishti Suite",
      icon: Eye,
      productName: "e_Drishti",
      title: "Enterprise Eye Hospital Management System",
      audience: "Purpose-built for ophthalmology and eye-care organizations.",
      link: "/products/e-drishti",
      rating: "4.9",
      badge: "Ophthalmology Enterprise",
      image: eDrishtiImg,
      cardBg: "from-[#0284C7] via-[#0369A1] to-[#082F49]",
    },
    {
      id: "ekshitiz-lite",
      provider: "e_Kshitiz Lite",
      icon: Hospital,
      productName: "e_Kshitiz Lite",
      title: "Hospital Management for SMBs",
      audience: "Modular solution for smaller organizations and clinics.",
      link: "/products/e-kshitiz-lite",
      rating: "4.8",
      badge: "SMB & Nursing Homes",
      image: eKshitizLiteImg,
      cardBg: "from-[#059669] via-[#047857] to-[#064E3B]",
    },
    {
      id: "edrishti-lite",
      provider: "e_Drishti Lite",
      icon: Activity,
      productName: "e_Drishti Lite",
      title: "Eye-care solution for smaller organizations",
      audience: "Lightweight workflow for standalone eye clinics.",
      link: "/products/e-drishti-lite",
      rating: "4.8",
      badge: "Specialized Eye Clinics",
      image: eDrishtiLiteImg,
      cardBg: "from-[#7C3AED] via-[#6D28D9] to-[#4C1D95]",
    },
  ];

  return (
    <section className="relative py-12 sm:py-16 bg-[#F8FAFD] overflow-hidden select-none">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Main Gradient Banner Container */}
        <div className="relative rounded-[28px] sm:rounded-[36px] bg-gradient-to-r from-[#0D62FF] via-[#0284C7] to-[#10B981] p-6 sm:p-8 lg:p-10 shadow-2xl overflow-hidden">
          
          {/* Subtle Ambient Glows */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl pointer-events-none -z-0" />
          <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-emerald-400/10 rounded-full blur-3xl pointer-events-none -z-0" />

          {/* Main Grid Content: Left Hero Callout + Right Cards Track */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
            
            {/* Left Column: Intro Heading & CTA */}
            <div className="lg:col-span-3 flex flex-col justify-between space-y-6 text-white text-left py-2">
              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-tight drop-shadow-sm">
                  Healthcare Solutions for Every Organization
                </h2>
                <p className="text-sm sm:text-base text-white/90 font-normal leading-relaxed">
                  Tailored solutions for multispeciality hospital networks, specialized eye-care institutes, and agile SMB clinics.
                </p>
              </div>

              <div className="pt-2">
                <Link
                  to="/solutions"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-[#0D62FF] hover:bg-slate-50 font-black text-xs sm:text-sm shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all group w-full sm:w-auto justify-center"
                >
                  <span>Explore all solutions</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Right Column: 
                - On Phone (< md): Clean vertical stack (no horizontal scrolling / cutoff)
                - On Laptop / Desktop (md+): Smooth horizontal scroll track with sleek cards
            */}
            <div className="lg:col-span-9 overflow-hidden flex flex-col justify-center">
              
              {/* 1. Laptop / Desktop Track (md & lg screens): Smooth Horizontal Scroll with side-by-side cards */}
              <div className="hidden md:flex items-stretch gap-4 sm:gap-5 overflow-x-auto pb-3 pt-1 scroll-smooth no-scrollbar select-none">
                {cards.map((card) => {
                  const Icon = card.icon;
                  return (
                    <Link
                      key={`desktop-${card.id}`}
                      to={card.link}
                      className="bg-white rounded-2xl p-3.5 sm:p-4 shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between text-left group cursor-pointer border border-white/60 w-[280px] lg:w-[320px] xl:w-[350px] flex-shrink-0"
                    >
                      {/* Top Graphic Media Frame */}
                      <div
                        className={`rounded-xl h-32 sm:h-34 bg-gradient-to-br ${card.cardBg} p-2.5 flex items-center justify-center relative overflow-hidden group-hover:scale-[1.01] transition-transform duration-300`}
                      >
                        <img
                          src={card.image}
                          alt={card.productName}
                          className="w-full h-full object-contain drop-shadow-xl"
                        />
                        <div className="absolute top-2 right-2 bg-black/40 backdrop-blur-md px-2 py-0.5 rounded-md text-[10px] font-bold text-white border border-white/20">
                          {card.productName}
                        </div>
                      </div>

                      {/* Card Content Area */}
                      <div className="pt-3 pb-1 px-1 flex-1 flex flex-col justify-between space-y-2">
                        <div className="flex items-center gap-1.5 text-slate-500 text-[11px] font-bold">
                          <Icon className="w-3.5 h-3.5 text-[#0D62FF]" />
                          <span className="truncate">{card.provider}</span>
                        </div>

                        <div className="space-y-1">
                          <h3 className="text-sm sm:text-base font-extrabold text-slate-900 leading-snug group-hover:text-[#0D62FF] transition-colors">
                            {card.title}
                          </h3>
                          <p className="text-xs text-slate-500 font-normal leading-relaxed line-clamp-2">
                            {card.audience}
                          </p>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>

              {/* 2. Mobile Phone Screen (< md): Clean full-width non-scrolling vertical stack */}
              <div className="flex flex-col gap-4 md:hidden w-full">
                {cards.map((card) => {
                  const Icon = card.icon;
                  return (
                    <Link
                      key={`mobile-${card.id}`}
                      to={card.link}
                      className="bg-white rounded-2xl p-4 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col text-left group cursor-pointer border border-white/60 w-full"
                    >
                      <div
                        className={`rounded-xl h-36 bg-gradient-to-br ${card.cardBg} p-3 flex items-center justify-center relative overflow-hidden`}
                      >
                        <img
                          src={card.image}
                          alt={card.productName}
                          className="w-full h-full object-contain drop-shadow-xl"
                        />
                        <div className="absolute top-2 right-2 bg-black/40 backdrop-blur-md px-2 py-0.5 rounded-md text-[10px] font-bold text-white border border-white/20">
                          {card.productName}
                        </div>
                      </div>

                      <div className="pt-3.5 px-1 space-y-1.5">
                        <div className="flex items-center gap-1.5 text-slate-500 text-xs font-bold">
                          <Icon className="w-3.5 h-3.5 text-[#0D62FF]" />
                          <span>{card.provider}</span>
                        </div>
                        <h3 className="text-base font-extrabold text-slate-900 leading-snug">
                          {card.title}
                        </h3>
                        <p className="text-xs text-slate-500 font-normal leading-relaxed">
                          {card.audience}
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default SegmentSolutionsSection;
