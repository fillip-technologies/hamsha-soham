import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Sparkles,
  Eye,
  Building2,
  Layers,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Globe2,
  FileCheck,
} from "lucide-react";

// Portfolio Product Images
import hwaiImg from "../../assets/portfolio/hwai.png";
import eDrishtiImg from "../../assets/portfolio/e_Drishti_P_I.png";
import eDrishtiLiteImg from "../../assets/portfolio/e_Drishtilite_P_I.png";
import eKshitizImg from "../../assets/portfolio/e_Kshitiz.png";
import eKshitizLiteImg from "../../assets/portfolio/e_KshitizLite.png";

export const SolutionsGrid = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const solutionsList = [
    {
      id: "hwai",
      title: "HWAI Platform",
      sub: "Healthcare Intelligence & Analytics",
      desc: "Comprehensive predictive AI and intelligence ecosystem engineered for high-volume multispecialty hospitals, clinical audit compliance, and national health mission connectivity.",
      icon: Sparkles,
      image: hwaiImg,
      link: "/products/hwai",
      badge: "Enterprise AI & HIMS",
      gradient: "from-purple-600 via-indigo-600 to-purple-800",
      accentBg: "bg-purple-50 text-purple-600 border-purple-200",
      highlights: [
        "Enterprise Multispecialty",
        "NABH and NABL compliant model",
        "ABDM and NHA Integration",
      ],
      features: [
        "Predictive OPD Wait-Time & Bed Allocation",
        "TPA Insurance Claim Rejection Pre-Audit",
        "ABHA & ABDM M1, M2, M3 Milestone Integration",
        "Revenue Leakage & Clinical Governance Alert System",
      ],
      stats: [
        { label: "ABDM / NHA", value: "Certified" },
        { label: "NABH / NABL", value: "Compliant" },
        { label: "AI Forecast", value: "99.4%" },
      ],
    },
    {
      id: "e-drishti",
      title: "e_Drishti Ophthalmology HIMS",
      sub: "Super-Specialty Eye Care Platform",
      desc: "End-to-end ophthalmic hospital ecosystem connecting auto-refractor & tonometer diagnostic hardware directly to comprehensive multi-subspecialty EMR templates and optical inventory.",
      icon: Eye,
      image: eDrishtiImg,
      link: "/products/e-drishti",
      badge: "Eye Care Specialized",
      gradient: "from-[#FF4D27] via-amber-500 to-orange-600",
      accentBg: "bg-orange-50 text-[#FF4D27] border-orange-200",
      highlights: [
        "Enterprise Eye Hospital",
        "Registration to Inventory Management",
        "Comprehensive Eye EMR",
      ],
      features: [
        "Auto-Refractor & Keratometer Device Interfacing",
        "Slit-Lamp, Cataract & Retina Specialized EMR",
        "Optical Store Barcode POS & Central Lens Inventory",
        "OT Surgery Scheduling & IOL Power Calculation",
      ],
      stats: [
        { label: "Device Sync", value: "Instant" },
        { label: "Eye Subspecialties", value: "12+" },
        { label: "Paperless OPD", value: "100%" },
      ],
    },
    {
      id: "lite-products",
      title: "Lite Products Suite",
      sub: "Modular Hospital & Clinic Management",
      desc: "Fast, agile, and cost-effective digital healthcare editions engineered specifically for clinics, day-care centers, and emerging healthcare practices seeking rapid 1-day deployment.",
      icon: Layers,
      image: eDrishtiLiteImg,
      secondaryImage: eKshitizLiteImg,
      isLiteSuite: true,
      link: "/products/e-kshitiz-lite",
      badge: "Clinic & Modular Editions",
      gradient: "from-emerald-500 via-teal-600 to-cyan-600",
      accentBg: "bg-emerald-50 text-emerald-600 border-emerald-200",
      highlights: [
        "e_Kshitiz Lite (Workforce & Mid-Sized Hospital HIMS)",
        "e_Drishti Lite (Ophthalmology Clinic & Optical POS)",
      ],
      liteProducts: [
        {
          name: "e_Kshitiz Lite",
          tagline: "Mid-Sized Hospital & Daycare HIMS",
          desc: "Streamlined IPD/OPD billing, quick pharmacy dispensing, and basic bed management for 10-50 bed facilities.",
          link: "/products/e-kshitiz-lite",
          badge: "Hospital Lite",
          color: "border-blue-200 bg-blue-50/50 text-blue-800",
        },
        {
          name: "e_Drishti Lite",
          tagline: "Single-Center Eye Clinic Management",
          desc: "Fast optometry records, spectacle/lens billing, and appointment scheduling with zero complex server overhead.",
          link: "/products/e-drishti-lite",
          badge: "Eye Clinic Lite",
          color: "border-orange-200 bg-orange-50/50 text-orange-800",
        },
      ],
      features: [
        "Ultra-Fast 1-Day Cloud/Local Deployment",
        "Low System Hardware Resource Footprint",
        "Intuitive Single-Screen Patient Queuing & Billing",
        "Seamless Cloud Upgrade Path to Enterprise Editions",
      ],
      stats: [
        { label: "Deployment Time", value: "< 24 Hrs" },
        { label: "Resource Load", value: "Ultra-Light" },
        { label: "Cost Efficiency", value: "High" },
      ],
    },
    {
      id: "e-kshitiz",
      title: "e_Kshitiz Enterprise HIMS",
      sub: "Hospital Workforce & SMB Healthcare",
      desc: "Robust hospital information management platform tailored for mid-to-large medical centers and healthcare enterprises managing complex multi-departmental workflows.",
      icon: Building2,
      image: eKshitizImg,
      link: "/products/e-kshitiz",
      badge: "Workforce / SMB Healthcare",
      gradient: "from-blue-600 via-indigo-600 to-sky-600",
      accentBg: "bg-blue-50 text-blue-600 border-blue-200",
      highlights: [
        "Workforce / SMB Healthcare",
        "Multi-Department IPD / OPD Workflow",
        "Central Store, Pharmacy & Lab Integration",
      ],
      features: [
        "Hospital Staff, Nurse & Doctor Shift Scheduling",
        "Real-Time IPD Bed Allocation & Ward Census",
        "In-House Pharmacy POS with Expiry Alert Triggers",
        "NABH Quality Indicator Reports & Audit Logs",
      ],
      stats: [
        { label: "Workforce Ops", value: "Automated" },
        { label: "Billing Accuracy", value: "100%" },
        { label: "Uptime SLA", value: "99.9%" },
      ],
    },
  ];

  const activeSol = solutionsList[activeIdx];
  const ActiveIcon = activeSol.icon;

  return (
    <section className="py-16 sm:py-24 bg-[#FAFCFF] border-t border-slate-200/80 relative overflow-hidden select-none">
      {/* Background Soft Mesh Ambient Glows */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-purple-400/10 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-[#FF4D27]/10 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3.5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 text-white text-xs font-bold tracking-wide uppercase">
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            <span>Structured Product Solutions</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-[#0B132B] tracking-tight">
            Tailored Healthcare <span className="bg-gradient-to-r from-[#FF4D27] via-purple-600 to-blue-600 bg-clip-text text-transparent">Architecture</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto font-normal">
            Select a solution pillar below to inspect our specialized clinical workflows, compliance frameworks, and deployment models.
          </p>
        </div>

        {/* 1. TOP 4 INTERACTIVE PILLARS / TABS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-5xl mx-auto">
          {solutionsList.map((sol, idx) => {
            const Icon = sol.icon;
            const isSelected = activeIdx === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveIdx(idx)}
                className={`p-3.5 sm:p-4 rounded-2xl text-left transition-all duration-300 cursor-pointer border flex flex-col justify-between gap-3 ${
                  isSelected
                    ? "bg-[#0B132B] text-white shadow-xl border-[#0B132B] scale-[1.02]"
                    : "bg-white text-slate-700 hover:bg-slate-50 border-slate-200/90 shadow-xs"
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${isSelected ? "bg-white/20 text-white" : "bg-slate-100 text-slate-700"}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className={`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full ${isSelected ? "bg-white/15 text-white" : "bg-slate-100 text-slate-500"}`}>
                    0{idx + 1}
                  </span>
                </div>

                <div>
                  <div className={`text-sm sm:text-base font-black ${isSelected ? "text-white" : "text-[#0B132B]"}`}>
                    {sol.id === "hwai" ? "HWAI" : sol.id === "e-drishti" ? "e_Drishti" : sol.id === "lite-products" ? "Lite Products" : "e_Kshitiz"}
                  </div>
                  <div className={`text-[11px] truncate ${isSelected ? "text-slate-300" : "text-slate-500"}`}>
                    {sol.badge}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* 2. MAIN ACTIVE SOLUTION STAGE */}
        <div className="max-w-6xl mx-auto bg-white rounded-3xl border border-slate-200/90 shadow-2xl p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center text-left relative overflow-hidden">
          
          {/* Top Decorative Gradient Ribbon */}
          <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${activeSol.gradient}`} />

          {/* Left Column: Solution Details & User Structured Bullets */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Header with Icon & Subtitle */}
            <div className="flex items-center gap-3.5">
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

            {/* Core Structured Bullet Points (Mandatory Highlights) */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2.5">
              <div className="text-xs font-black uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                <FileCheck className="w-3.5 h-3.5 text-[#FF4D27]" />
                <span>Key Platform Pillars</span>
              </div>
              
              <div className="space-y-2">
                {activeSol.highlights.map((item, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-2.5 text-xs font-bold text-slate-900">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* If Lite Products: Show the 2 sub-products prominently */}
            {activeSol.isLiteSuite && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {activeSol.liteProducts.map((lp, lpIdx) => (
                  <Link
                    key={lpIdx}
                    to={lp.link}
                    className={`p-3.5 rounded-2xl border ${lp.color} hover:shadow-md transition-all group block space-y-1.5`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black">{lp.name}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                    <div className="text-[11px] font-semibold text-slate-700">{lp.tagline}</div>
                    <p className="text-[10px] text-slate-500 font-normal">{lp.desc}</p>
                  </Link>
                ))}
              </div>
            )}

            {/* Additional Features Checklist */}
            <div className="space-y-2 pt-1">
              <div className="text-xs font-extrabold uppercase tracking-wider text-slate-400">
                Functional Capabilities
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {activeSol.features.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-2 text-xs font-semibold text-slate-700 bg-white p-2 rounded-xl border border-slate-200/60 shadow-2xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF4D27] shrink-0 mt-1.5" />
                    <span className="leading-snug">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Metrics & Stats Bar */}
            <div className="grid grid-cols-3 gap-3 pt-1">
              {activeSol.stats.map((st, sIdx) => (
                <div key={sIdx} className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80 text-center">
                  <div className="text-sm font-black text-[#0B132B]">{st.value}</div>
                  <div className="text-[10px] font-bold text-slate-500">{st.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-[#FF4D27] to-[#FF7043] hover:from-[#E03A14] hover:to-[#FF4D27] text-white font-extrabold text-xs tracking-wide shadow-lg shadow-[#FF4D27]/30 transition-all duration-300 hover:scale-105 group cursor-pointer"
              >
                <span>Request Live Demo</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to={activeSol.link}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-[#0B132B] hover:bg-slate-800 text-white font-extrabold text-xs tracking-wide shadow-md transition-all duration-300 group cursor-pointer"
              >
                <span>Explore Full {activeSol.title} Details</span>
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
                <span className="text-emerald-400 font-mono">● Active</span>
              </div>

              {/* Product Preview Image Container */}
              <div className="rounded-2xl overflow-hidden bg-[#0A0D18] h-[300px] sm:h-[380px] flex items-center justify-center p-3 relative">
                <img
                  key={activeSol.id}
                  src={activeSol.image}
                  alt={activeSol.title}
                  className="w-full h-full object-contain transition-all duration-500 animate-in fade-in"
                />

                {/* Floating Metric Badge Chip */}
                <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-200 shadow-lg flex items-center gap-2 text-xs font-black text-slate-900">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>NABH & ABDM Ready</span>
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

