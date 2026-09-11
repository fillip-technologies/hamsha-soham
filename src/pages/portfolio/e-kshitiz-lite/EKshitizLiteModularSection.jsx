import React, { useState } from "react";
import {
  Layers,
  Sparkles,
  CheckCircle2,
  Plus,
  Sliders,
  Pill,
  Microscope,
  BedDouble,
  ShieldAlert,
  BarChart3,
  ArrowRight,
  ShieldCheck,
  Building2,
  ChevronRight,
  PackageCheck,
  Phone,
  Stethoscope,
} from "lucide-react";

export const EKshitizLiteModularSection = () => {
  const [activeTab, setActiveTab] = useState("all");

  const coreModules = [
    "OPD Patient Registration & Token Counter",
    "Doctor Consultation Desk & Digital Rx Printing",
    "Basic Diagnosis, Vitals & Chief Complaints",
    "Daily Billing Summary & Cash Reconciliation",
  ];

  const modularAddons = [
    {
      id: "pharmacy",
      title: "In-House Pharmacy & Retail POS",
      category: "clinical",
      badge: "High Demand",
      badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
      icon: Pill,
      iconColor: "text-emerald-600 bg-emerald-50 border-emerald-200",
      summary: "Complete chemist store management with batch inventory, expiry alerts, and barcode prescription billing.",
      features: [
        "Barcode billing synced with doctor prescriptions",
        "Batch number, MRP & expiry date tracking",
        "Automated re-order alerts on low stock",
        "Supplier purchase orders, GRN & GST tax invoices",
      ],
    },
    {
      id: "pathology",
      title: "Pathology & Laboratory (LIS)",
      category: "diagnostic",
      badge: "Diagnostic Add-on",
      badgeColor: "bg-teal-100 text-teal-800 border-teal-200",
      icon: Microscope,
      iconColor: "text-teal-600 bg-teal-50 border-teal-200",
      summary: "Digital lab workflow for sample collection, standardized test parameter entry, and automated report generation.",
      features: [
        "Pre-loaded templates for Biochemistry, Hematology & Urine",
        "Barcoded specimen collection & tube tracking",
        "Normal range comparison & abnormal value alerts",
        "Direct PDF report export & WhatsApp/SMS dispatch",
      ],
    },
    {
      id: "ipd",
      title: "IPD, Ward & Bed Management",
      category: "clinical",
      badge: "Hospital Care",
      badgeColor: "bg-[#FFF2EE] text-[#FF4D27] border-[#FF4D27]/30",
      icon: BedDouble,
      iconColor: "text-[#FF4D27] bg-orange-50 border-orange-200",
      summary: "Manage admissions, ward bed allocation, nurse charting, and final discharge clearance seamlessly.",
      features: [
        "Visual bed occupancy matrix (General, Semi-Private, ICU)",
        "Daily nurse vitals chart & medication administration",
        "Doctor round notes & surgical procedure recording",
        "Automated IPD interim billing & final discharge summary",
      ],
    },
    {
      id: "tpa",
      title: "TPA & Insurance Claims Desk",
      category: "finance",
      badge: "Billing Add-on",
      badgeColor: "bg-cyan-100 text-cyan-800 border-cyan-200",
      icon: ShieldAlert,
      iconColor: "text-cyan-600 bg-cyan-50 border-cyan-200",
      summary: "Streamlined pre-authorization and claims bundling for Ayushman Bharat, private TPAs, and corporate tie-ups.",
      features: [
        "Corporate / TPA tariff & package rate management",
        "Pre-auth documentation checklist & approval tracking",
        "Co-payment & non-medical expense separation",
        "Outstanding balance tracking & settlement auditing",
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
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-emerald-200/20 rounded-full blur-[120px] pointer-events-none -z-0" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-teal-200/20 rounded-full blur-[100px] pointer-events-none -z-0" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-extrabold uppercase tracking-widest shadow-xs">
            <Sliders className="w-3.5 h-3.5 text-emerald-600" />
            <span>Need-Based HIMS Architecture</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-[#0B132B] tracking-tight leading-tight">
            A Compact Edition of e_Kshitiz —{" "}
            <span className="bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-600 bg-clip-text text-transparent">
              Modules Provided As Per Your Need
            </span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto font-normal leading-relaxed">
            Avoid paying for heavy enterprise features your facility doesn't use. <strong className="text-slate-800 font-bold">e_Kshitiz Lite</strong> is a modular, small edition of our flagship HIMS. You activate only the exact departments you operate, and plug in more modules anytime.
          </p>
        </div>

        {/* 3-Step "How Need-Based Delivery Works" Ribbon */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto mb-16">
          <div className="bg-[#FAFCFF] p-6 rounded-2xl border border-slate-200/80 shadow-2xs hover:shadow-md transition-all">
            <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 font-black text-sm flex items-center justify-center mb-3">
              01
            </div>
            <h3 className="text-base font-extrabold text-[#0B132B] mb-1">
              Specify Facility Scale
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Whether you run a 10-bed clinic, a daycare surgical center, or a 50-bed nursing home, pick only relevant workflows.
            </p>
          </div>

          <div className="bg-[#FAFCFF] p-6 rounded-2xl border border-slate-200/80 shadow-2xs hover:shadow-md transition-all">
            <div className="w-9 h-9 rounded-xl bg-teal-100 text-teal-700 font-black text-sm flex items-center justify-center mb-3">
              02
            </div>
            <h3 className="text-base font-extrabold text-[#0B132B] mb-1">
              Deploy Clean Tailored Menus
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Doctors and receptionists only see the screens they need. Zero complex menus, zero confusion, and 100% staff adoption.
            </p>
          </div>

          <div className="bg-[#FAFCFF] p-6 rounded-2xl border border-slate-200/80 shadow-2xs hover:shadow-md transition-all">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#FF4D27] to-[#E03A14] text-white font-black text-sm flex items-center justify-center mb-3 shadow-xs">
              03
            </div>
            <h3 className="text-base font-extrabold text-[#0B132B] mb-1">
              Add Modules On Demand
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              When opening an in-house pharmacy, lab counter, or expanding beds, enable the corresponding module with zero downtime.
            </p>
          </div>
        </div>

        {/* The Dual Setup: Base Core + Modular Add-ons Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
          
          {/* Left: Always Included Core Base Foundation */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#062419] to-[#0D3B2E] text-white rounded-3xl p-8 sm:p-9 shadow-xl border border-emerald-900/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />
            
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-emerald-200 text-xs font-extrabold tracking-wide mb-5">
              <PackageCheck className="w-3.5 h-3.5 text-emerald-300" />
              Standard In Every Setup
            </div>

            <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white mb-3">
              e_Kshitiz Lite Core Base
            </h3>
            <p className="text-emerald-100/80 text-sm leading-relaxed mb-6">
              The lightweight OPD billing, patient registry, and digital prescription engine that powers every small hospital.
            </p>

            <div className="space-y-3 pt-2">
              {coreModules.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-100">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
              <div>
                <p className="text-[11px] uppercase tracking-wider text-emerald-300/70 font-bold">
                  Go-Live Speed
                </p>
                <p className="text-base font-extrabold text-white">
                  Same-Day Setup
                </p>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wider text-emerald-300/70 font-bold">
                  Scale Potential
                </p>
                <p className="text-base font-extrabold text-emerald-300">
                  Up to Enterprise HIMS
                </p>
              </div>
            </div>
          </div>

          {/* Right: On-Demand Modules Selected As Needed */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
              <div>
                <h3 className="text-xl font-black text-[#0B132B]">
                  Optional Modules — Activate When Needed
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
                  onClick={() => setActiveTab("diagnostic")}
                  className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
                    activeTab === "diagnostic"
                      ? "bg-white text-slate-900 shadow-xs font-bold"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Diagnostic
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
                    className="bg-[#FAFCFF] rounded-2xl p-5 border border-slate-200/90 hover:border-emerald-300 hover:shadow-lg hover:-translate-y-0.5 transition-all flex flex-col justify-between group"
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
                      <h4 className="text-base font-extrabold text-[#0B132B] mb-1.5 group-hover:text-emerald-700 transition-colors">
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
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs text-emerald-700 font-bold">
                      <span>Plug-in as Needed</span>
                      <Plus className="w-4 h-4 text-emerald-600 group-hover:rotate-90 transition-transform" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Enterprise Comparison Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-emerald-50 via-teal-50 to-cyan-50 border border-emerald-200/80 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="space-y-1.5 text-center md:text-left">
            <span className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-emerald-800">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              100% Upgradable to Full Enterprise e_Kshitiz HIMS
            </span>
            <h4 className="text-lg sm:text-xl font-extrabold text-[#0B132B]">
              Grow your bed count and specialties with zero software lock-in
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl">
              When your hospital expands into multi-department operations, seamless upgrade to the full enterprise e_Kshitiz suite ensures uninterrupted continuity.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="https://apps.hamsasoham.com/portal/index.xhtml"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-full bg-gradient-to-r from-[#FF4D27] to-[#E03A14] hover:from-[#FF6B4A] hover:to-[#FF4D27] text-white font-bold text-xs sm:text-sm shadow-md shadow-[#FF4D27]/25 transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Configure Hospital Plan</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="tel:+919153998385"
              className="px-4 py-3 rounded-full bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-semibold text-xs sm:text-sm transition-all flex items-center gap-2 shadow-2xs cursor-pointer"
            >
              <Phone className="w-4 h-4 text-emerald-600" />
              <span>Discuss Requirements</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default EKshitizLiteModularSection;
