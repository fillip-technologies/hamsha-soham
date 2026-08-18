import React, { useState, useEffect } from "react";
import { Eye, Building2, Activity, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

// Portfolio Product Images from src/assets/portfolio/
import eDrishtiImg from "../../assets/portfolio/e_Drishti_P_I.png";
import eDrishtiLiteImg from "../../assets/portfolio/e_Drishtilite_P_I.png";
import eKshitizImg from "../../assets/portfolio/e_Kshitiz.png";
import eKshitizLiteImg from "../../assets/portfolio/e_KshitizLite.png";
import hwaiImg from "../../assets/portfolio/hwai.png";

export const SolutionsHero = () => {
  // 5 Portfolio Products
  const products = [
    {
      id: "e-drishti",
      title: "e_Drishti Ophthalmology HIMS",
      tagline: "Specialized Eye Care & Auto-Refractor Sync",
      image: eDrishtiImg,
      link: "/products/e-drishti",
      badge: "Eye Care HIMS",
    },
    {
      id: "e-drishti-lite",
      title: "e_Drishti Lite",
      tagline: "Lightweight Eye Clinic & Optical POS",
      image: eDrishtiLiteImg,
      link: "/products/e-drishti-lite",
      badge: "Eye Clinic POS",
    },
    {
      id: "e-kshitiz",
      title: "e_Kshitiz Enterprise HIMS",
      tagline: "Full-Scale IPD/OPD & Bed Management",
      image: eKshitizImg,
      link: "/products/e-kshitiz",
      badge: "Enterprise HIMS",
    },
    {
      id: "e-kshitiz-lite",
      title: "e_Kshitiz Lite",
      tagline: "Essential Hospital Operations Software",
      image: eKshitizLiteImg,
      link: "/products/e-kshitiz-lite",
      badge: "Hospital Operations",
    },
    {
      id: "hwai",
      title: "HWAI AI Platform",
      tagline: "Healthcare Operational Predictive Analytics",
      image: hwaiImg,
      link: "/products/hwai",
      badge: "Predictive AI Engine",
    },
  ];

  const [activeOffset, setActiveOffset] = useState(0);

  // Auto rotate all cards across the stage every 3.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveOffset((prev) => (prev + 1) % products.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [products.length]);

  // Map 5 cards to their current positions on stage
  const getItem = (posIndex) => {
    const idx = (posIndex + activeOffset) % products.length;
    return products[idx];
  };

  const farLeftItem = getItem(0);
  const leftItem = getItem(1);
  const centerItem = getItem(2); // Center Smartphone Active Item
  const rightItem = getItem(3);
  const farRightItem = getItem(4);

  return (
    <section className="relative overflow-hidden pt-12 pb-24 sm:pt-16 sm:pb-32 bg-[#F9FAFC] text-slate-900 select-none font-sans">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[450px] bg-gradient-to-b from-indigo-100/40 via-purple-50/20 to-transparent rounded-full blur-[140px] pointer-events-none -z-0" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10 w-full text-center space-y-6">
        
        {/* Main Title & Subtitle */}
        <div className="space-y-3.5 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-[#0B132B] tracking-tight leading-[1.10]">
            Healthcare Solutions <br />
            for Modern{" "}
            <span className="inline-flex items-center gap-2.5 text-[#5254F2]">
              <svg
                className="w-9 h-9 sm:w-14 sm:h-14 text-[#5254F2] inline stroke-[#5254F2]"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>Hospitals</span>
            </span>
          </h1>

          <p className="text-slate-500 text-sm sm:text-base max-w-md mx-auto font-normal leading-relaxed">
            One platform to centralize your eye clinic, multispeciality hospital, and AI operations.
          </p>
        </div>

        {/* Dynamic Curved Ribbon Loop & FULL ROTATING CAROUSEL STAGE */}
        <div className="relative pt-10 sm:pt-14 pb-8 max-w-6xl mx-auto flex items-center justify-center min-h-[500px] sm:min-h-[600px]">
          
          {/* Prominent Thick Blue Ribbon Loop Vector Background */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none -z-0"
            viewBox="0 0 1200 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-50 450 C 120 540, 180 180, 380 320 C 580 460, 680 140, 880 380 C 1020 520, 1150 360, 1250 280"
              stroke="#5254F2"
              strokeWidth="110"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          {/* POSITION 0: Far Left Peek Card */}
          <div className="hidden lg:block absolute left-[-45px] top-[48%] -translate-y-1/2 w-44 h-64 rounded-[26px] overflow-hidden shadow-xl border-4 border-white bg-[#0A0D18] transform -rotate-12 pointer-events-none opacity-85 transition-all duration-700 p-2">
            <div className="relative w-full h-full flex items-center justify-center">
              <img src={farLeftItem.image} alt={farLeftItem.title} className="w-full h-full object-contain" />
            </div>
          </div>

          {/* POSITION 1: Left Tilted Photo Card (-6 deg tilt) */}
          <div className="hidden sm:block absolute left-[3%] lg:left-[8%] top-[48%] -translate-y-1/2 w-64 sm:w-72 lg:w-80 h-76 sm:h-84 lg:h-92 rounded-[32px] overflow-hidden shadow-2xl border-4 border-white bg-[#0A0D18] z-10 transform -rotate-6 transition-all duration-700 hover:rotate-0 hover:scale-105 p-3">
            <Link to={leftItem.link} className="relative w-full h-full block group flex items-center justify-center">
              <img
                key={leftItem.id}
                src={leftItem.image}
                alt={leftItem.title}
                className="w-full h-full object-contain transition-opacity duration-500"
              />
              <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3.5 py-1 rounded-full border border-slate-200/80 shadow-md flex items-center gap-1.5 text-[11px] font-extrabold text-slate-900 z-20">
                <Eye className="w-3.5 h-3.5 text-[#5254F2]" />
                <span>{leftItem.badge}</span>
              </div>
            </Link>
          </div>

          {/* POSITION 2: CENTER SMARTPHONE HERO CARD (Exact Match to Design Screenshot) */}
          <div className="relative z-20 w-[285px] sm:w-[325px] lg:w-[355px] bg-[#0A0D1B] rounded-[44px] sm:rounded-[48px] p-2 sm:p-2.5 shadow-2xl border border-slate-700/80 ring-1 ring-slate-800 hover:scale-[1.01] transition-all duration-700 text-left">
            
            {/* iPhone App Screen Container */}
            <div className="bg-[#FAFBFD] rounded-[36px] sm:rounded-[40px] p-4 sm:p-5 space-y-4 font-sans text-slate-900 overflow-hidden shadow-inner min-h-[460px] flex flex-col justify-between">
              
              <div className="space-y-4">
                {/* App Brand Header */}
                <div className="flex items-center justify-between">
                  <span className="text-xl font-black tracking-tight text-[#5254F2]">Hamsa Soham</span>
                  <span className="w-7 h-7 rounded-full bg-indigo-50 flex items-center justify-center text-xs text-[#5254F2] font-bold border border-indigo-100 shadow-xs">
                    <Activity className="w-4 h-4" />
                  </span>
                </div>

                {/* Title */}
                <div className="space-y-0.5">
                  <h3 className="text-xl font-black text-slate-900 tracking-tight">My Solutions</h3>
                </div>

                {/* Dashed Border Card (Exact Match to Screenshot) */}
                <Link
                  to={centerItem.link}
                  className="block p-4 rounded-2xl border border-dashed border-indigo-200 bg-indigo-50/40 space-y-1 hover:bg-indigo-50 transition-colors"
                >
                  <div className="text-xs font-extrabold text-slate-900 flex items-center justify-between">
                    <span>Schedule Live Demo</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#5254F2]" />
                  </div>
                  <p className="text-[11px] text-slate-500 font-normal leading-relaxed">
                    Walkthrough of e_Drishti or e_Kshitiz HIMS.
                  </p>
                </Link>

                {/* Main Feature Image Card (Exact Match to Screenshot) */}
                <div className="rounded-2xl overflow-hidden border border-slate-200/80 shadow-md bg-white space-y-2 pb-3 group">
                  <Link to={centerItem.link} className="block">
                    <div className="w-full h-40 sm:h-44 bg-[#0A0D18] flex items-center justify-center p-2 overflow-hidden">
                      <img
                        key={centerItem.id}
                        src={centerItem.image}
                        alt={centerItem.title}
                        className="w-full h-full object-contain transition-all duration-500 animate-in fade-in"
                      />
                    </div>

                    <div className="px-3.5 pt-2 flex items-start justify-between">
                      <div className="space-y-0.5">
                        <div className="text-xs font-extrabold text-slate-900 tracking-tight">{centerItem.title}</div>
                        <div className="text-[10px] text-slate-400 font-medium">{centerItem.badge}</div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-[#5254F2] shrink-0 mt-0.5 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </Link>
                </div>
              </div>

              {/* Stage Navigation Indicators */}
              <div className="flex items-center justify-center gap-1.5 pt-1">
                {products.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveOffset((idx - 2 + products.length) % products.length)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      (activeOffset + 2) % products.length === idx
                        ? "w-6 bg-[#5254F2]"
                        : "w-1.5 bg-slate-300 hover:bg-slate-400"
                    }`}
                  />
                ))}
              </div>

            </div>
          </div>

          {/* POSITION 3: Right Tilted Photo Card (+6 deg tilt) */}
          <div className="hidden sm:block absolute right-[2%] lg:right-[8%] top-[48%] -translate-y-1/2 w-64 sm:w-72 lg:w-80 h-76 sm:h-84 lg:h-92 rounded-[32px] overflow-hidden shadow-2xl border-4 border-white bg-[#0A0D18] z-10 transform rotate-6 transition-all duration-700 hover:rotate-0 hover:scale-105 p-3">
            <Link to={rightItem.link} className="relative w-full h-full block group flex items-center justify-center">
              <img
                key={rightItem.id}
                src={rightItem.image}
                alt={rightItem.title}
                className="w-full h-full object-contain transition-opacity duration-500"
              />
              <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md px-3.5 py-1 rounded-full border border-slate-200/80 shadow-md flex items-center gap-1.5 text-[11px] font-extrabold text-slate-900 z-20">
                <Building2 className="w-3.5 h-3.5 text-[#5254F2]" />
                <span>{rightItem.badge}</span>
              </div>
            </Link>
          </div>

          {/* POSITION 4: Far Right Peek Card */}
          <div className="hidden lg:block absolute right-[-45px] top-[48%] -translate-y-1/2 w-44 h-64 rounded-[26px] overflow-hidden shadow-xl border-4 border-white bg-[#0A0D18] transform rotate-12 pointer-events-none opacity-85 transition-all duration-700 p-2">
            <div className="relative w-full h-full flex items-center justify-center">
              <img src={farRightItem.image} alt={farRightItem.title} className="w-full h-full object-contain" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default SolutionsHero;
