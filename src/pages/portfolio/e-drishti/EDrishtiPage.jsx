import React, { useState, useEffect } from "react";
import { EDrishtiHero } from "./EDrishtiHero";
import { EDrishtiFeatures } from "./EDrishtiFeatures";
import { RequestDemoModal } from "../../../components/common/RequestDemoModal";
import {
  Eye,
  FileText,
  Zap,
  ShieldCheck,
  Building2,
  Stethoscope,
  Activity,
  Layers,
  ArrowRight,
  Check,
  Sparkles,
  CheckCircle2,
  XCircle,
  Phone,
  BarChart3,
  Cpu,
} from "lucide-react";

export const EDrishtiPage = () => {
  const [activeRoleTab, setActiveRoleTab] = useState(0);
  const [isBottomDemoOpen, setIsBottomDemoOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const clinicalRoles = [
    {
      id: "ophthalmologist",
      title: "Ophthalmologist EMR",
      badge: "Clinical Suite",
      icon: Stethoscope,
      summary: "Structured EMR optimized for rapid eye consultations.",
      bullets: [
        "Interactive Refraction Charting (SPH, CYL, Axis, VA)",
        "Slit Lamp & Anterior Segment findings recording",
        "Tonometry (IOP), Fundus & OCT diagnostic attachment",
        "1-Click e-Prescribing with drug interaction warnings",
      ],
      stats: "70% Faster Consultation Speed",
    },
    {
      id: "optometry",
      title: "Optometry & Diagnostic Desk",
      badge: "Refraction & Acuity",
      icon: Eye,
      summary: "Direct auto-refractometer data import & visual acuity capture.",
      bullets: [
        "NIDEK, Topcon & Shin-Nippon Auto-Refractor sync",
        "Snellen & ETDRS vision acuity chart recording",
        "Pre-consultation screening & triage workflow",
        "Keratometry & Corneal Topography data capture",
      ],
      stats: "Zero Manual Data Entry Errors",
    },
    {
      id: "optical",
      title: "Optical Store & Barcode POS",
      badge: "POS & Stock Control",
      icon: FileText,
      summary: "Full retail optical inventory & automated Rx printing.",
      bullets: [
        "Frames, lenses, & contact lens stock tracking",
        "Barcode scanner integration for instant patient checkout",
        "Automated glass prescription printing for patients",
        "Re-order alerts & supplier invoice management",
      ],
      stats: "100% Inventory Audit Accuracy",
    },
    {
      id: "surgery",
      title: "Cataract & OT Surgical Suite",
      badge: "Phaco & OT Workflow",
      icon: Layers,
      summary: "Comprehensive surgery planning & intra-op documentation.",
      bullets: [
        "IOL Power Calculation (A-Scan) record storage",
        "Pre-operative anesthesia & surgical consent forms",
        "Intra-operative Phaco parameters & lens details log",
        "Post-operative follow-up schedule & drops regimen",
      ],
      stats: "NABH Surgical Safety Compliant",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans">
      {/* 1. Light Medical Hero Section */}
      <EDrishtiHero />

      {/* 2. Interactive Clinical Workspace Tour */}
      <section className="py-20 sm:py-28 bg-white border-t border-slate-200/80">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
            <span className="px-4 py-1.5 rounded-full bg-sky-100 text-sky-800 text-xs font-extrabold tracking-wider uppercase">
              Role-Based Experience
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#0B132B] tracking-tight">
              Interactive Clinical <br />
              <span className="bg-gradient-to-r from-sky-600 to-cyan-600 bg-clip-text text-transparent">
                Workspace Tour
              </span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Explore how e_Drishti optimizes workflows for every team member in your eye hospital.
            </p>
          </div>

          {/* Segmented Pill Navigation Bar */}
          <div className="bg-[#F1F5F9] p-1.5 rounded-2xl sm:rounded-full border border-slate-200 shadow-xs max-w-4xl mx-auto mb-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
              {clinicalRoles.map((role, idx) => {
                const RoleIcon = role.icon;
                const isActive = activeRoleTab === idx;
                return (
                  <button
                    key={role.id}
                    onClick={() => setActiveRoleTab(idx)}
                    className={`px-4 py-3 rounded-xl sm:rounded-full text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "bg-white text-slate-900 shadow-md border border-slate-200/90"
                        : "text-slate-600 hover:text-slate-900 hover:bg-white/50 font-semibold"
                    }`}
                  >
                    <RoleIcon className={`w-4 h-4 shrink-0 ${isActive ? "text-sky-600" : "text-slate-400"}`} />
                    <span className="truncate">{role.title}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Workspace Showcase Card */}
          {(() => {
            const current = clinicalRoles[activeRoleTab];
            const RoleIcon = current.icon;
            return (
              <div className="bg-gradient-to-br from-white via-sky-50/40 to-slate-50 rounded-3xl p-8 sm:p-12 text-slate-900 border border-sky-200/80 shadow-xl relative overflow-hidden max-w-5xl mx-auto">
                {/* Radial Glow Mesh Background */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-sky-400/10 rounded-full blur-3xl pointer-events-none" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                  
                  {/* Left Column: Details */}
                  <div className="lg:col-span-7 space-y-6 text-left">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-sky-600 text-white flex items-center justify-center shadow-md shadow-sky-500/20">
                        <RoleIcon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-[11px] font-extrabold uppercase tracking-wider">
                          {current.badge}
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-black text-[#0B132B] pt-1">
                          {current.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-slate-600 text-base leading-relaxed font-normal">
                      {current.summary}
                    </p>

                    <ul className="space-y-3">
                      {current.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-3 text-sm text-slate-700 font-medium">
                          <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-300">
                            <Check className="w-3.5 h-3.5" />
                          </div>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right Column: Key Impact Highlight Card */}
                  <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl border border-sky-200/90 shadow-md text-center space-y-4 relative overflow-hidden">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sky-500 via-cyan-500 to-sky-600 text-white flex items-center justify-center mx-auto shadow-md">
                      <BarChart3 className="w-7 h-7" />
                    </div>

                    <div className="space-y-1">
                      <div className="text-[11px] font-extrabold uppercase tracking-wider text-sky-700">
                        Key Clinical Impact
                      </div>
                      <div className="text-2xl sm:text-3xl font-black text-[#0B132B]">
                        {current.stats}
                      </div>
                    </div>

                    <p className="text-xs text-slate-500 font-medium leading-relaxed pt-1 border-t border-slate-100">
                      Validated across multispeciality eye hospitals & LASIK centers.
                    </p>
                  </div>

                </div>
              </div>
            );
          })()}

        </div>
      </section>

      {/* 3. Product Features Section (Separate Component) */}
      <EDrishtiFeatures />

      {/* 4. Paper vs e_Drishti Comparison Matrix */}
      <section className="py-20 sm:py-28 bg-white border-t border-slate-200/80">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-5xl font-black text-[#0B132B] tracking-tight">
              Paper Files vs <span className="text-sky-600">e_Drishti HIMS</span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Why leading eye care networks are replacing manual paper charts with e_Drishti.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Traditional Paper Workflow */}
            <div className="bg-rose-50/50 rounded-3xl p-8 border border-rose-200/70 space-y-6">
              <div className="flex items-center gap-3 text-rose-700">
                <XCircle className="w-6 h-6" />
                <h3 className="text-xl font-extrabold">Traditional Paper / Manual Setup</h3>
              </div>
              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-rose-500" />
                  Lost paper vision charts & misplaced refraction history
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-rose-500" />
                  Manual re-entry of Auto-Refractor data (high error risk)
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-rose-500" />
                  Unrecorded optical stock leakage & frame inventory errors
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-rose-500" />
                  Slow manual NABH audit compilation taking weeks
                </li>
              </ul>
            </div>

            {/* e_Drishti HIMS Workflow */}
            <div className="bg-sky-50/70 rounded-3xl p-8 border border-sky-300/80 shadow-md space-y-6">
              <div className="flex items-center gap-3 text-sky-800">
                <CheckCircle2 className="w-6 h-6 text-sky-600" />
                <h3 className="text-xl font-extrabold">With e_Drishti HIMS</h3>
              </div>
              <ul className="space-y-3 text-sm text-slate-800 font-medium">
                <li className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-sky-600" />
                  100% digital patient refraction chart history across all visits
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-sky-600" />
                  Instant auto-refractometer data import in 1 click
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-sky-600" />
                  Automated optical barcode POS & stock re-order alerts
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-sky-600" />
                  1-Click automated NABH & NABL audit report generation
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* 5. Bottom Call-To-Action Glass Banner */}
      <section className="py-10 sm:py-14 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-950 via-slate-900 to-slate-950 pointer-events-none" />
        
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10 text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Schedule Your Personalized{" "}
            <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-[#FF4D27] bg-clip-text text-transparent">
              e_Drishti Live Demo
            </span>
          </h2>

          <p className="text-slate-300 text-base max-w-2xl mx-auto">
            Discover how e_Drishti streamlines doctor consultations, optical POS, and OT cataract management.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => setIsBottomDemoOpen(true)}
              className="px-7 py-3.5 rounded-full bg-gradient-to-r from-sky-600 via-cyan-600 to-sky-700 hover:from-sky-500 hover:to-cyan-500 text-white font-bold text-sm sm:text-base shadow-xl shadow-sky-500/30 transition-all flex items-center gap-2.5 cursor-pointer"
            >
              <span>Request Live Demo</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <a
              href="tel:+919153998385"
              className="px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-sm sm:text-base transition-all flex items-center gap-2.5 cursor-pointer"
            >
              <Phone className="w-4.5 h-4.5 text-sky-400" />
              <span>Call Specialist: +91 9153998385</span>
            </a>
          </div>
        </div>

        <RequestDemoModal
          isOpen={isBottomDemoOpen}
          onClose={() => setIsBottomDemoOpen(false)}
          defaultProduct="e_Drishti"
        />
      </section>
    </div>
  );
};

export default EDrishtiPage;
