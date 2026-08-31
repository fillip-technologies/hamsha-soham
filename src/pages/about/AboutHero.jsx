import React from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, Award, Eye, Building2, Sparkles, ArrowRight, Calendar, Activity, Phone } from "lucide-react";

// Portfolio Product Images
import eDrishtiImg from "../../assets/portfolio/e_Drishti_P_I.png";
import hwaiImg from "../../assets/portfolio/hwai.png";
import heroDashboardImg from "../../assets/hero-dashboard.jpeg";

export const AboutHero = () => {
  return (
    <section className="relative overflow-hidden pt-8 pb-14 sm:pt-12 sm:pb-20 bg-[#FAFBFD] text-slate-900 select-none font-sans">

      {/* Background Ambient Mesh Light Orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[450px] bg-gradient-to-b from-indigo-100/60 via-purple-50/30 to-transparent rounded-full blur-[140px] pointer-events-none -z-0" />
      <div className="absolute top-1/4 left-10 w-80 h-80 bg-[#FF4D27]/10 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-sky-400/10 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10 text-center space-y-6">

        {/* 1. TOP BRANDING & SHORTENED COMPACT HEADLINE */}
        <div className="max-w-3xl mx-auto space-y-3.5">

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#0B132B] tracking-tight leading-tight">
            Architecting Digital <span className="bg-gradient-to-r from-[#FF4D27] via-amber-500 to-[#5254F2] bg-clip-text text-transparent">Intelligence</span> for Hospitals
          </h1>

          <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed max-w-2xl mx-auto">
            Enterprise HIMS platforms, specialized ophthalmic EMR workflows, and predictive AI engines empowering 50+ hospital networks across India.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
            <a
              href="https://apps.hamsasoham.com/portal/index.xhtml"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#FF4D27] to-[#FF6B4A] hover:from-[#E03A14] hover:to-[#FF4D27] text-white font-extrabold text-xs uppercase tracking-wider flex items-center gap-2 shadow-md shadow-[#FF4D27]/30 hover:shadow-lg hover:-translate-y-0.5 transition-all cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule Live Demo</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="tel:+919153998385"
              className="px-5 py-3 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-slate-900 font-extrabold text-xs uppercase tracking-wider flex items-center gap-2 shadow-xs transition-all cursor-pointer"
            >
              <Phone className="w-4 h-4 text-[#FF4D27]" />
              <span>+91 9153998385</span>
            </a>
          </div>

        </div>

        {/* 2. 3D STACKED FLOATING CARD CAROUSEL SHOWCASE STAGE */}
        <div className="relative pt-4 max-w-6xl mx-auto flex items-center justify-center min-h-[380px] sm:min-h-[460px]">

          {/* Ribbon Vector Background */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none -z-0 opacity-40"
            viewBox="0 0 1200 450"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 380 C 300 450, 400 150, 600 280 C 800 410, 950 180, 1200 320"
              stroke="#5254F2"
              strokeWidth="90"
              strokeLinecap="round"
            />
          </svg>

          {/* Left Tilted Card (-10 deg tilt) */}
          <div className="hidden sm:block absolute left-[2%] lg:left-[6%] top-[45%] -translate-y-1/2 w-60 lg:w-68 h-72 rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-[#0A0D18] z-10 transform -rotate-10 transition-all duration-700 hover:rotate-0 hover:scale-105 p-3 text-left">
            <div className="relative w-full h-full flex flex-col justify-between">
              <div className="bg-white/95 backdrop-blur-md px-3 py-1 rounded-full border border-slate-200/80 shadow-md inline-flex items-center gap-1.5 text-[10px] font-extrabold text-slate-900 self-start">
                <Eye className="w-3.5 h-3.5 text-[#FF4D27]" />
                <span>e_Drishti Ophthalmology</span>
              </div>
              <img src={eDrishtiImg} alt="e_Drishti HIMS" className="w-full h-40 object-contain my-auto" />
              <div className="text-white text-[11px] font-bold truncate">Auto-Refractor Device Sync</div>
            </div>
          </div>

          {/* Center Elevated Master Dashboard Stage Card */}
          <div className="relative z-20 w-full max-w-[340px] sm:max-w-[540px] lg:max-w-[640px] bg-slate-900 rounded-[30px] p-2.5 shadow-2xl border-4 border-white ring-1 ring-slate-200 hover:scale-[1.01] transition-transform duration-500 text-left">

            {/* macOS Control Dots Header Bar */}
            <div className="flex items-center justify-between px-4 py-1.5 border-b border-slate-800 text-[10px] font-extrabold text-white">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              </div>
              <span className="text-slate-300">https://hamsasoham.com • Hospital Enterprise HIMS</span>
              <span className="text-emerald-400 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                Active
              </span>
            </div>

            {/* Dashboard Display */}
            <div className="rounded-2xl overflow-hidden bg-slate-950 relative">
              <img src={heroDashboardImg} alt="Hamsa Soham Dashboard" className="w-full h-auto object-cover" />
            </div>

          </div>

          {/* Right Tilted Card (+10 deg tilt) */}
          <div className="hidden sm:block absolute right-[2%] lg:right-[6%] top-[45%] -translate-y-1/2 w-60 lg:w-68 h-72 rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-[#0A0D18] z-10 transform rotate-10 transition-all duration-700 hover:rotate-0 hover:scale-105 p-3 text-left">
            <div className="relative w-full h-full flex flex-col justify-between">
              <div className="bg-white/95 backdrop-blur-md px-3 py-1 rounded-full border border-slate-200/80 shadow-md inline-flex items-center gap-1.5 text-[10px] font-extrabold text-slate-900 self-start">
                <Sparkles className="w-3.5 h-3.5 text-[#5254F2]" />
                <span>HWAI Healthcare Management</span>
              </div>
              <img src={hwaiImg} alt="HWAI Healthcare Management System" className="w-full h-40 object-contain my-auto" />
              <div className="text-white text-[11px] font-bold truncate">TPA Claim Pre-Auditing</div>
            </div>
          </div>

        </div>

        {/* 3. FLOATING METRICS RIBBON */}
        <div className="pt-4 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5 max-w-4xl mx-auto">

          <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-md flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#FF4D27] border border-orange-200 flex items-center justify-center shrink-0">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-lg font-black text-[#0B132B]">50+</div>
              <div className="text-[10px] text-slate-500 font-extrabold">Hospitals Deployed</div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-md flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 border border-amber-200 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-lg font-black text-[#0B132B]">100%</div>
              <div className="text-[10px] text-slate-500 font-extrabold">NABH Compliant</div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-md flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center shrink-0">
              <Activity className="w-5 h-5" />
            </div>
            <div>
              <div className="text-lg font-black text-[#0B132B]">99.99%</div>
              <div className="text-[10px] text-slate-500 font-extrabold">System Uptime</div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-md flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 border border-sky-200 flex items-center justify-center shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="text-lg font-black text-[#0B132B]">24 / 7</div>
              <div className="text-[10px] text-slate-500 font-extrabold">Dedicated Desk</div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutHero;
