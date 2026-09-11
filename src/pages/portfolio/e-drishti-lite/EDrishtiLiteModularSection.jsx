import React, { useState } from "react";
import {
  Layers,
  Sparkles,
  CheckCircle2,
  Plus,
  Sliders,
  Glasses,
  Zap,
  BedDouble,
  BarChart3,
  ArrowRight,
  ShieldCheck,
  Stethoscope,
  ChevronRight,
  PackageCheck,
  Phone,
} from "lucide-react";

export const EDrishtiLiteModularSection = () => {
  const [activeTab, setActiveTab] = useState("all");

  const coreModules = [
    "OPD Quick Registration & Patient Search",
    "Digital Refraction Charting (SPH, CYL, Axis, VA)",
    "1-Click Spectacle & Eyedrop Rx Printing",
    "Daily Queue & Patient Visit History",
  ];

  const modularAddons = [
    {
      id: "optical",
      title: "Optical Store POS & Inventory",
      category: "optical",
      badge: "Most Popular Add-on",
      badgeColor: "bg-purple-100 text-purple-800 border-purple-200",
      icon: Glasses,
      iconColor: "text-purple-600 bg-purple-50 border-purple-200",
      summary: "Full retail optical counter for frame barcoding, lens power stock, and automated prescription sync.",
      features: [
        "Barcode label printing for frames & sunglasses",
        "Spectacle lens power matrix (SPH/CYL/Index)",
        "Automated stock decrement on sale",
        "Supplier purchase, GRN & pending delivery tracking",
      ],
    },
    {
      id: "diagnostic",
      title: "Diagnostic Device Integration",
      category: "clinical",
      badge: "Hardware Sync",
      badgeColor: "bg-indigo-100 text-indigo-800 border-indigo-200",
      icon: Zap,
      iconColor: "text-indigo-600 bg-indigo-50 border-indigo-200",
      summary: "Direct auto-refractor and tonometer data fetch eliminating manual keyboard entry errors.",
      features: [
        "Auto-Refractor (AR) readings direct capture",
        "Non-Contact Tonometer (IOP) data sync",
        "Lensmeter reading auto-population",
        "Slit lamp & anterior segment image attachments",
      ],
    },
    {
      id: "daycare",
      title: "Daycare & Minor OT Records",
      category: "clinical",
      badge: "Surgical Add-on",
      badgeColor: "bg-[#FFF2EE] text-[#FF4D27] border-[#FF4D27]/30",
      icon: BedDouble,
      iconColor: "text-[#FF4D27] bg-orange-50 border-orange-200",
      summary: "Lightweight procedure charting for cataract pre-op, minor eye surgeries, and post-op follow-up.",
      features: [
        "Pre-operative clinical checklist & vitals",
        "Surgical consent digital form archiving",
        "IOL power calculation & lens selection record",
        "Post-op visit schedule and drop regimen alerts",
      ],
    },
    {
      id: "accounts",
      title: "Daily Accounts & Revenue MIS",
      category: "finance",
      badge: "Management Add-on",
      badgeColor: "bg-sky-100 text-sky-800 border-sky-200",
      icon: BarChart3,
      iconColor: "text-sky-600 bg-sky-50 border-sky-200",
      summary: "Instant daily cash reconciliation, doctor consultation revenue sharing, and expense tracking.",
      features: [
        "Daily cash counter drawer closing summary",
        "Visiting doctor revenue sharing split calculations",
        "Optical vs OPD consultation earnings breakdown",
        "Exportable GST billing & collection reports",
      ],
    },
  ];

  const filteredAddons =
    activeTab === "all"
      ? modularAddons
      : modularAddons.filter((item) => item.category === activeTab);

  return (
    <section className="py-20 sm:py-28 bg-white border-t border-slate-200/80 relative overflow-hidden select-none">
      {/* Background Subtle Gradient Accents */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-purple-200/20 rounded-full blur-[120px] pointer-events-none -z-0" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-sky-200/20 rounded-full blur-[100px] pointer-events-none -z-0" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-purple-800 text-xs font-extrabold uppercase tracking-widest shadow-xs">
            <Sliders className="w-3.5 h-3.5 text-purple-600" />
            <span>Tailored Modular Architecture</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-[#0B132B] tracking-tight leading-tight">
            A Compact Edition of e_Drishti —{" "}
            <span className="bg-gradient-to-r from-purple-600 via-indigo-500 to-sky-600 bg-clip-text text-transparent">
              Modules Provided As Per Your Need
            </span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto font-normal leading-relaxed">
            Unlike heavy enterprise software that charges you for unused features, <strong className="text-slate-800 font-bold">e_Drishti Lite</strong> is a small, flexible version of our full suite. You choose strictly the modules your clinic requires today, and activate more as you expand.
          </p>
        </div>

        {/* 3-Step "How Need-Based Delivery Works" Ribbon */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto mb-16">
          <div className="bg-[#FAFCFF] p-6 rounded-2xl border border-slate-200/80 shadow-2xs hover:shadow-md transition-all">
            <div className="w-9 h-9 rounded-xl bg-purple-100 text-purple-700 font-black text-sm flex items-center justify-center mb-3">
              01
            </div>
            <h3 className="text-base font-extrabold text-[#0B132B] mb-1">
              Select Your Clinical Scope
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Tell us whether you operate an independent optometry clinic, an eye hospital OPD, or an optical showroom.
            </p>
          </div>

          <div className="bg-[#FAFCFF] p-6 rounded-2xl border border-slate-200/80 shadow-2xs hover:shadow-md transition-all">
            <div className="w-9 h-9 rounded-xl bg-indigo-100 text-indigo-700 font-black text-sm flex items-center justify-center mb-3">
              02
            </div>
            <h3 className="text-base font-extrabold text-[#0B132B] mb-1">
              We Activate Only Needed Modules
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Your instance is delivered clean and pre-configured with zero clutter, zero unwanted menus, and lower pricing.
            </p>
          </div>

          <div className="bg-[#FAFCFF] p-6 rounded-2xl border border-slate-200/80 shadow-2xs hover:shadow-md transition-all">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#FF4D27] to-[#E03A14] text-white font-black text-sm flex items-center justify-center mb-3 shadow-xs">
              03
            </div>
            <h3 className="text-base font-extrabold text-[#0B132B] mb-1">
              Plug In More As You Grow
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Add Optical POS, Device Sync, or Daycare OT anytime with 1-click modular activation—your patient data never changes.
            </p>
          </div>
        </div>

        {/* The Dual Setup: Base Core + Modular Add-ons Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
          
          {/* Left: Always Included Core Base Foundation */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#0B132B] to-[#172554] text-white rounded-3xl p-8 sm:p-9 shadow-xl border border-slate-800 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />
            
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-purple-200 text-xs font-extrabold tracking-wide mb-5">
              <PackageCheck className="w-3.5 h-3.5 text-purple-300" />
              Standard In Every Setup
            </div>

            <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white mb-3">
              e_Drishti Lite Core Base
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              The foundational ophthalmic EMR and consultation engine that powers every clinic setup.
            </p>

            <div className="space-y-3 pt-2">
              {coreModules.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs"
                >
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-100">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
              <div>
                <p className="text-[11px] uppercase tracking-wider text-slate-400 font-bold">
                  Setup Time
                </p>
                <p className="text-base font-extrabold text-white">
                  Under 15 Minutes
                </p>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wider text-slate-400 font-bold">
                  Data Upgrade Path
                </p>
                <p className="text-base font-extrabold text-purple-300">
                  100% Retained
                </p>
              </div>
            </div>
          </div>

          {/* Right: On-Demand Modules Selected As Needed */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
              <div>
                <h3 className="text-xl font-black text-[#0B132B]">
                  Optional Modules — Pick What You Need
                </h3>
                <p className="text-xs sm:text-sm text-slate-500">
                  Select and combine any of these modules to match your clinical operations.
                </p>
              </div>

              {/* Filter Tabs */}
              <div className="flex items-center gap-1.5 p-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold">
                <button
                  onClick={() => setActiveTab("all")}
                  className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
                    activeTab === "all"
                      ? "bg-white text-slate-900 shadow-xs font-bold"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  All (4)
                </button>
                <button
                  onClick={() => setActiveTab("optical")}
                  className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
                    activeTab === "optical"
                      ? "bg-white text-slate-900 shadow-xs font-bold"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Optical
                </button>
                <button
                  onClick={() => setActiveTab("clinical")}
                  className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
                    activeTab === "clinical"
                      ? "bg-white text-slate-900 shadow-xs font-bold"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Clinical
                </button>
                <button
                  onClick={() => setActiveTab("finance")}
                  className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
                    activeTab === "finance"
                      ? "bg-white text-slate-900 shadow-xs font-bold"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Finance
                </button>
              </div>
            </div>

            {/* Modular Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {filteredAddons.map((addon) => {
                const IconComp = addon.icon;
                return (
                  <div
                    key={addon.id}
                    className="bg-[#FAFCFF] rounded-2xl p-5 border border-slate-200/90 hover:border-purple-300 hover:shadow-lg hover:-translate-y-0.5 transition-all flex flex-col justify-between group"
                  >
                    <div>
                      {/* Top Row: Icon + Badge */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <div
                          className={`w-10 h-10 rounded-xl flex items-center justify-center border ${addon.iconColor} group-hover:scale-110 transition-transform`}
                        >
                          <IconComp className="w-5 h-5" />
                        </div>
                        <span
                          className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-md border ${addon.badgeColor}`}
                        >
                          {addon.badge}
                        </span>
                      </div>

                      {/* Title & Summary */}
                      <h4 className="text-base font-extrabold text-[#0B132B] mb-1.5 group-hover:text-purple-700 transition-colors">
                        {addon.title}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed mb-3">
                        {addon.summary}
                      </p>

                      {/* Feature Bullets */}
                      <ul className="space-y-1.5 pt-2 border-t border-slate-200/60">
                        {addon.features.map((feat, fIdx) => (
                          <li
                            key={fIdx}
                            className="flex items-center gap-2 text-[11px] font-medium text-slate-700"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs text-purple-700 font-bold">
                      <span>Plug-in as Needed</span>
                      <Plus className="w-4 h-4 text-purple-600 group-hover:rotate-90 transition-transform" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Enterprise Comparison Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-purple-50 via-indigo-50 to-sky-50 border border-purple-200/80 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="space-y-1.5 text-center md:text-left">
            <span className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-purple-800">
              <ShieldCheck className="w-4 h-4 text-purple-600" />
              100% Upgradable to Full Enterprise e_Drishti
            </span>
            <h4 className="text-lg sm:text-xl font-extrabold text-[#0B132B]">
              Start with e_Drishti Lite today, upgrade to full 24 modules whenever ready
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl">
              All master data, patient consultation records, and optical inventory carry over effortlessly without manual migration or downtime.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="https://apps.hamsasoham.com/portal/index.xhtml"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-full bg-gradient-to-r from-[#FF4D27] to-[#E03A14] hover:from-[#FF6B4A] hover:to-[#FF4D27] text-white font-bold text-xs sm:text-sm shadow-md shadow-[#FF4D27]/25 transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Build Custom Package</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="tel:+919153998385"
              className="px-4 py-3 rounded-full bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-semibold text-xs sm:text-sm transition-all flex items-center gap-2 shadow-2xs cursor-pointer"
            >
              <Phone className="w-4 h-4 text-purple-600" />
              <span>Discuss Requirements</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default EDrishtiLiteModularSection;
