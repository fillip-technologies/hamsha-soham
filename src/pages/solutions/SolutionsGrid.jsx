import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Eye,
  Building2,
  Sparkles,
  Users,
  Activity,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";

// Portfolio Product Images
import eDrishtiImg from "../../assets/portfolio/e_Drishti_P_I.png";
import eDrishtiLiteImg from "../../assets/portfolio/e_Drishtilite_P_I.png";
import eKshitizImg from "../../assets/portfolio/e_Kshitiz.png";
import hwaiImg from "../../assets/portfolio/hwai.png";
import heroDashImg from "../../assets/hero-dashboard.png";

export const SolutionsGrid = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const solutionsList = [
    {
      id: "ophthalmology",
      title: "Ophthalmology & Eye Care HIMS",
      sub: "e_Drishti & e_Drishti Lite",
      desc: "Specialized software suite for eye hospitals featuring auto-refractor device sync, optical inventory POS, refractive surgery templates, and mobile camp outreach.",
      icon: Eye,
      image: eDrishtiImg,
      link: "/products/e-drishti",
      badge: "Eye Care Specialized",
      gradient: "from-[#FF4D27] to-amber-500",
      accentBg: "bg-orange-50 text-[#FF4D27] border-orange-200",
      features: [
        "Auto-Refractor & Tonometer Device Interfacing",
        "Refractive & Cataract Clinical EMR Templates",
        "Spectacle Lens Barcode Billing & Inventory POS",
        "Offline Mobile Eye Camp Screening Outreach",
      ],
      stats: [
        { label: "Refractive EMR", value: "Built-in" },
        { label: "Device Interfacing", value: "Instant" },
        { label: "NABH Auditing", value: "Compliant" },
      ],
    },
    {
      id: "multispeciality",
      title: "Enterprise Multispeciality HIMS",
      sub: "e_Kshitiz & e_Kshitiz Lite",
      desc: "Full-scale hospital management system for IPD/OPD registration, bed management, pharmacy POS, central store, operation theatre, and NABH audit compliance.",
      icon: Building2,
      image: eKshitizImg,
      link: "/products/e-kshitiz",
      badge: "Multispeciality Hospital",
      gradient: "from-blue-600 to-indigo-600",
      accentBg: "bg-blue-50 text-blue-600 border-blue-200",
      features: [
        "IPD/OPD Registration & Bed Management",
        "Central Store & In-House Pharmacy POS",
        "Operation Theatre & Anesthesia Scheduling",
        "100% NABH Quality Indicator Reporting",
      ],
      stats: [
        { label: "Bed Allocation", value: "Real-time" },
        { label: "NABH Ready", value: "100%" },
        { label: "Support", value: "24/7" },
      ],
    },
    {
      id: "ai-analytics",
      title: "Healthcare Predictive AI & Analytics",
      sub: "HWAI Platform",
      desc: "Operational intelligence engine forecasting patient wait times, detecting revenue cycle leakage, pre-auditing TPA claims, and generating C-suite dashboards.",
      icon: Sparkles,
      image: hwaiImg,
      link: "/products/hwai",
      badge: "Predictive AI Engine",
      gradient: "from-purple-600 to-indigo-600",
      accentBg: "bg-purple-50 text-purple-600 border-purple-200",
      features: [
        "TPA Insurance Claim Pre-Auditing & Risk Scoring",
        "Revenue Cycle Leakage Detection & Alerts",
        "Patient Queue & OPD Wait-Time Prediction",
        "Real-Time C-Suite Executive Dashboards",
      ],
      stats: [
        { label: "Claim Rejection", value: "-45%" },
        { label: "Wait Reduction", value: "30 Mins" },
        { label: "Accuracy", value: "99.8%" },
      ],
    },
    {
      id: "tele-camp",
      title: "Remote Tele-Ophthalmology & Camps",
      sub: "Mobile Camp Module",
      desc: "Offline-capable mobile outreach software to capture patient demographics, vision screening charts, and preliminary EMR data in remote eye camps.",
      icon: Users,
      image: eDrishtiLiteImg,
      link: "/products/e-drishti",
      badge: "Mobile & Offline",
      features: [
        "Offline-Capable Mobile Vision Screening",
        "Remote Patient Registration & Optometry",
        "Automatic Cloud Server Data Synchronization",
        "Base Hospital Tele-Consult Referral Queue",
      ],
      stats: [
        { label: "Offline Mode", value: "Enabled" },
        { label: "Cloud Sync", value: "Auto" },
        { label: "Outreach", value: "Mobile" },
      ],
    },
    {
      id: "diagnostics",
      title: "Diagnostic LIS & RIS Device Interfacing",
      sub: "Lab & Imaging Interfacing",
      desc: "Direct auto-refractor, tonometer, lab analyzer, and radiology equipment interfacing to eliminate manual data entry errors during patient consults.",
      icon: Activity,
      image: heroDashImg,
      link: "/products/e-kshitiz",
      badge: "Hardware Interfacing",
      gradient: "from-sky-500 to-cyan-600",
      accentBg: "bg-sky-50 text-sky-600 border-sky-200",
      features: [
        "Auto-Refractor & Keratometer Result Auto-Fetch",
        "Lab Equipment Analyzer Serial Interfacing",
        "PACS & DICOM Radiology Imaging Viewing",
        "Zero Manual Data Entry Clerical Errors",
      ],
      stats: [
        { label: "Device Fetch", value: "< 1 Sec" },
        { label: "Entry Errors", value: "0%" },
        { label: "Compatibility", value: "Universal" },
      ],
    },
  ];

  const activeSol = solutionsList[activeIdx];
  const ActiveIcon = activeSol.icon;

  return (
    <section className="py-20 sm:py-28 bg-[#FAFCFF] border-t border-slate-200/80 relative overflow-hidden select-none">
      {/* Background Soft Mesh Ambient Glows */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-sky-400/10 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-[#FF4D27]/10 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3.5">
          <h2 className="text-3xl sm:text-5xl font-black text-[#0B132B] tracking-tight uppercase">
            Tailored Healthcare <span className="bg-gradient-to-r from-[#FF4D27] via-amber-500 to-sky-600 bg-clip-text text-transparent">Solutions</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto font-normal">
            Select a solution module below to explore specialized clinical workflows and software capabilities.
          </p>
        </div>

        {/* 1. TOP INTERACTIVE CATEGORY TABS / PILLS */}
        <div className="flex flex-wrap items-center justify-center gap-3 max-w-6xl mx-auto px-4 sm:px-6 py-2">
          {solutionsList.map((sol, idx) => {
            const Icon = sol.icon;
            const isSelected = activeIdx === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveIdx(idx)}
                className={`px-5 py-3 rounded-2xl text-xs font-extrabold flex items-center gap-2.5 transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? "bg-[#0B132B] text-white shadow-xl border border-[#0B132B]"
                    : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 shadow-xs"
                }`}
              >
                <div className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 ${isSelected ? "bg-white/20 text-white" : "bg-slate-100 text-slate-700"}`}>
                  <Icon className="w-3.5 h-3.5" />
                </div>
                <span className="whitespace-nowrap">{sol.badge}</span>
              </button>
            );
          })}
        </div>

        {/* 2. MAIN DUAL-COLUMN FEATURE STAGE */}
        <div className="max-w-6xl mx-auto bg-white rounded-3xl border border-slate-200/90 shadow-2xl p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center text-left relative overflow-hidden">
          
          {/* Top Decorative Gradient Ribbon */}
          <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${activeSol.gradient}`} />

          {/* Left Column: Solution Information & Checklist */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="flex items-center gap-3">
              <div className={`w-14 h-14 rounded-2xl ${activeSol.accentBg} flex items-center justify-center shrink-0 shadow-xs`}>
                <ActiveIcon className="w-7 h-7" />
              </div>

              <div>
                <span className="text-xs font-black uppercase tracking-wider text-[#FF4D27]">
                  {activeSol.sub}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-[#0B132B] tracking-tight">
                  {activeSol.title}
                </h3>
              </div>
            </div>

            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
              {activeSol.desc}
            </p>

            {/* Checklist */}
            <div className="space-y-2.5 pt-2">
              <div className="text-xs font-extrabold uppercase tracking-wider text-slate-400">
                Key Technical Capabilities
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {activeSol.features.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-2 text-xs font-bold text-slate-800 bg-slate-50 p-2.5 rounded-xl border border-slate-200/70">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="leading-snug">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              {activeSol.stats.map((st, sIdx) => (
                <div key={sIdx} className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80 text-center">
                  <div className="text-sm font-black text-[#0B132B]">{st.value}</div>
                  <div className="text-[10px] font-bold text-slate-500">{st.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <Link
                to={activeSol.link}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl bg-[#0B132B] hover:bg-[#FF4D27] text-white font-extrabold text-xs tracking-wide shadow-lg transition-all duration-300 group"
              >
                <span>Explore {activeSol.sub} Details</span>
                <ArrowRight className="w-4 h-4 text-amber-400 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

          </div>

          {/* Right Column: High-Res Interactive Software Browser Display */}
          <div className="lg:col-span-6 relative">
            <div className="rounded-3xl bg-[#070913] p-3 border border-slate-800 shadow-2xl space-y-2">
              
              {/* Browser Dot Header Bar */}
              <div className="flex items-center justify-between px-3 py-1.5 border-b border-slate-800 text-[10px] text-slate-400 font-bold">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                </div>
                <span>hamsasoham.com / {activeSol.id}</span>
                <span className="text-emerald-400">Live</span>
              </div>

              {/* Product Preview Image Container */}
              <div className="rounded-2xl overflow-hidden bg-[#0A0D18] h-[280px] sm:h-[340px] flex items-center justify-center p-3 relative">
                <img
                  key={activeSol.id}
                  src={activeSol.image}
                  alt={activeSol.title}
                  className="w-full h-full object-contain transition-all duration-500 animate-in fade-in"
                />

                {/* Floating Metric Badge Chip */}
                <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-200 shadow-lg flex items-center gap-2 text-xs font-black text-slate-900">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>100% NABH Certified</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default SolutionsGrid;
