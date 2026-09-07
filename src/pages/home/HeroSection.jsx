import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Phone,
} from "lucide-react";
import heroDashboardImg from "../../assets/Hamsa-soham-hero.png";
import { AnimatedCounter } from "../../components/common/AnimatedCounter";

export const HeroSection = () => {

  // Clean URL hash if any exists
  useEffect(() => {
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
    }
  }, []);

  return (
    <section className="relative overflow-hidden pt-12 pb-20 sm:pt-20 sm:pb-28 bg-[#F6F9FD] text-slate-900 select-none border-b border-slate-200/80">
      
      {/* Background Radial Glow Meshes */}
      <div className="absolute top-0 right-0 w-[650px] h-[650px] bg-gradient-to-br from-indigo-400/15 via-blue-300/10 to-transparent rounded-full blur-[140px] pointer-events-none -z-0" />
      <div className="absolute bottom-0 left-0 w-[550px] h-[550px] bg-gradient-to-tr from-[#FF4D27]/10 via-amber-300/10 to-transparent rounded-full blur-[140px] pointer-events-none -z-0" />
      
      {/* Subtle Geometric Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0284c70a_1px,transparent_1px),linear-gradient(to_bottom,#0284c70a_1px,transparent_1px)] bg-[size:44px_44px] pointer-events-none -z-0" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 w-full">
        
        {/* 2-Column Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Description & CTAs (5-6 Columns) */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            {/* Master Headline */}
            <h1 className="text-2xl sm:text-4xl lg:text-[42px] xl:text-[48px] font-black tracking-tight leading-[1.2] sm:leading-[1.15]">
              <span className="block text-[#0B132B]">
                Complete Healthcare
              </span>
              <span className="bg-gradient-to-r from-[#FF4D27] via-amber-500 to-[#5254F2] bg-clip-text text-transparent block">
                Information Management Solutions
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-xl">
              Digitize your hospital operations with an integrated, secure and scalable Healthcare IT platform designed for hospitals, eye-care organizations and healthcare groups.
            </p>

            {/* Core Metrics Data (No Background, Clean Inline with Animated Counters) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-1 max-w-xl">
              <div className="text-left space-y-0.5">
                <div className="text-2xl sm:text-3xl font-black text-[#0B132B] tracking-tight">
                  <AnimatedCounter end={50} duration={2000} suffix="+" />
                </div>
                <div className="text-xs text-slate-500 font-medium leading-tight">Multispeciality Hospitals</div>
              </div>
              <div className="text-left space-y-0.5">
                <div className="text-2xl sm:text-3xl font-black text-[#FF4D27] tracking-tight">
                  <AnimatedCounter end={100} duration={1800} suffix="%" />
                </div>
                <div className="text-xs text-slate-500 font-medium leading-tight">NABH & NABL Compliant</div>
              </div>
              <div className="text-left space-y-0.5">
                <div className="text-2xl sm:text-3xl font-black text-[#0B132B] tracking-tight">
                  <AnimatedCounter end={99.99} decimals={2} duration={2200} suffix="%" />
                </div>
                <div className="text-xs text-slate-500 font-medium leading-tight">Operational Uptime</div>
              </div>
              <div className="text-left space-y-0.5">
                <div className="text-2xl sm:text-3xl font-black text-[#FF4D27] tracking-tight">24 / 7</div>
                <div className="text-xs text-slate-500 font-medium leading-tight">Round-the-clock Support</div>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <a
                href="https://apps.hamsasoham.com/portal/index.xhtml"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-full bg-gradient-to-r from-[#FF4D27] to-[#FF6B4A] hover:from-[#E03A14] hover:to-[#FF4D27] text-white font-bold text-base flex items-center gap-2.5 shadow-lg shadow-[#FF4D27]/25 hover:shadow-xl hover:shadow-[#FF4D27]/35 hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                <span>Request Live Demo</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="tel:+919153998385"
                className="px-6 py-3.5 rounded-full bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-semibold text-base flex items-center gap-2 shadow-xs hover:border-orange-300 transition-all cursor-pointer"
              >
                <Phone className="w-4.5 h-4.5 text-[#FF4D27]" />
                <span>+91 9153998385</span>
              </a>
            </div>



          </div>

          {/* Right Column: Desktop Monitor Frame & Stand Showcase */}
          <div className="lg:col-span-6 relative flex flex-col items-center justify-center group">
            
            {/* Ambient Background Glow Behind Monitor */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 via-sky-400/15 to-[#FF4D27]/15 rounded-3xl blur-3xl -z-10 transform scale-105" />

            {/* Decorative Background Petal/Leaf Accents (Matching Reference Mockup) */}
            {/* Top Right Petals */}
            <div className="absolute -top-6 -right-4 sm:-top-8 sm:-right-6 w-16 sm:w-20 h-24 sm:h-28 bg-sky-200/80 rounded-[40px_0_40px_0] transform rotate-12 pointer-events-none -z-10 shadow-xs" />
            <div className="absolute top-10 -right-6 sm:top-14 sm:-right-8 w-14 sm:w-16 h-20 sm:h-24 bg-amber-300/80 rounded-[0_35px_0_35px] transform -rotate-12 pointer-events-none -z-10 shadow-xs" />

            {/* Bottom Left Petals */}
            <div className="absolute bottom-16 -left-6 sm:bottom-20 sm:-left-8 w-16 sm:w-20 h-22 sm:h-28 bg-sky-200/80 rounded-[0_40px_0_40px] transform -rotate-12 pointer-events-none -z-10 shadow-xs" />
            <div className="absolute -bottom-2 -left-3 sm:-bottom-4 sm:-left-5 w-12 sm:w-16 h-16 sm:h-20 bg-white border border-slate-200 rounded-[35px_0_35px_0] transform rotate-45 pointer-events-none -z-10 shadow-sm" />

            {/* Monitor Screen Frame */}
            <div className="w-full relative rounded-2xl sm:rounded-3xl bg-white p-2.5 sm:p-3.5 border-2 sm:border-[3px] border-slate-200/90 shadow-2xl transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-2xl">
              
              {/* Screen Inner Bezel */}
              <div className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-slate-950 border border-slate-200/60 shadow-inner">
                <img
                  src={heroDashboardImg}
                  alt="Hamsa Soham Complete Healthcare Information Management System Dashboard"
                  className="w-full h-auto object-cover transform group-hover:scale-[1.01] transition-transform duration-500"
                />
              </div>

            </div>

            {/* Monitor Angled Neck Stand */}
            <div className="w-16 sm:w-24 h-12 sm:h-16 mx-auto bg-gradient-to-b from-slate-200 via-slate-100 to-slate-300 border-x border-slate-300 -mt-1 [clip-path:polygon(20%_0%,80%_0%,100%_100%,0%_100%)] shadow-inner transition-transform duration-500 group-hover:-translate-y-0.5" />

            {/* Monitor Flat Horizontal Base */}
            <div className="w-48 sm:w-68 h-3 sm:h-4 mx-auto bg-gradient-to-b from-white to-slate-100 border border-slate-300/90 rounded-full shadow-lg -mt-0.5 transition-transform duration-500" />

          </div>

        </div>

      </div>
    </section>
  );
};

export default HeroSection;

