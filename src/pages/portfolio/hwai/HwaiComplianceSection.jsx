import React, { useState, useRef } from "react";
import {
  Activity,
  CheckCircle2,
  Cpu,
  Stethoscope,
  Pill,
  UserCheck,
  CreditCard,
  FolderCheck,
  Server,
} from "lucide-react";

export const HwaiComplianceSection = () => {
  const sectionRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState("ALL");

  // Performance-optimized direct DOM mouse tracking (Zero React re-renders for smooth 120fps)
  const handleMouseMove = (e) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const ratioX = ((x / rect.width) - 0.5) * 2;
    const ratioY = ((y / rect.height) - 0.5) * 2;

    sectionRef.current.style.setProperty("--mouse-x", `${x}px`);
    sectionRef.current.style.setProperty("--mouse-y", `${y}px`);
    sectionRef.current.style.setProperty("--ratio-x", ratioX.toFixed(3));
    sectionRef.current.style.setProperty("--ratio-y", ratioY.toFixed(3));
  };

  const handleMouseEnter = () => {
    if (!sectionRef.current) return;
    sectionRef.current.style.setProperty("--mouse-opacity", "1");
  };

  const handleMouseLeave = () => {
    if (!sectionRef.current) return;
    sectionRef.current.style.setProperty("--mouse-opacity", "0");
    sectionRef.current.style.setProperty("--ratio-x", "0");
    sectionRef.current.style.setProperty("--ratio-y", "0");
  };

  // NABH 8 Core Chapters for HIS/EMR Systems
  const nabhChapters = [
    {
      code: "AAC",
      title: "Access, Assessment & Continuity of Care",
      icon: Stethoscope,
      category: "CLINICAL",
      desc: "Standardized patient intake, instant ABHA digital triage, emergency triage coding, and automated clinical discharge summaries for care continuity.",
      oeCount: "Core & Commitment Standards",
    },
    {
      code: "COP",
      title: "Care of Patients",
      icon: Activity,
      category: "CLINICAL",
      desc: "Structured IPD flowsheets, ICU vital monitoring, 3-stage WHO OT Surgical Safety Checklists, and evidence-based clinical decision support.",
      oeCount: "Core & Excellence Standards",
    },
    {
      code: "MOM",
      title: "Management of Medication",
      icon: Pill,
      category: "CLINICAL",
      desc: "e-Prescriptions with automated drug-drug interaction alerts, high-risk medication double-verification, and zero-error pharmacy stock sync.",
      oeCount: "Core Safety Mandate",
    },
    {
      code: "DIS",
      title: "Digital Infrastructure",
      icon: Server,
      category: "INFRASTRUCTURE",
      desc: "Enterprise high-availability cloud, 99.99% uptime SLA, FHIR R4 interoperability, end-to-end data encryption, and disaster recovery.",
      oeCount: "Commitment & Excellence",
    },
    {
      code: "DOM",
      title: "Digital Operations Management",
      icon: Cpu,
      category: "INFRASTRUCTURE",
      desc: "Role-Based Access Control (RBAC), multi-factor authentication, automated system health telemetry, and IT incident logs.",
      oeCount: "Commitment Level",
    },
    {
      code: "FPM",
      title: "Finance & Procurement Management",
      icon: CreditCard,
      category: "ADMINISTRATIVE",
      desc: "Transparent itemized patient billing, direct PM-JAY TMS pre-authorization & settlement, TPA claims automation, and inventory audits.",
      oeCount: "Achievement Standard",
    },
    {
      code: "HRM",
      title: "Human Resource Management",
      icon: UserCheck,
      category: "ADMINISTRATIVE",
      desc: "Digital practitioner credentialing, clinical privileging matrix, biometric duty rosters, and mandatory staff training logs.",
      oeCount: "Commitment Standard",
    },
    {
      code: "IMS",
      title: "Information Management System",
      icon: FolderCheck,
      category: "ADMINISTRATIVE",
      desc: "Immutable 21 CFR Part 11 cryptographic audit trails, doctor digital signatures, confidential EMR access controls, and statutory reporting.",
      oeCount: "Excellence Tier",
    },
  ];

  // NABH Objective Elements (OEs) 4-Tier Maturity Model
  const oeTiers = [
    {
      tier: "CORE",
      tag: "Mandatory Baseline",
      accent: "from-amber-600 to-amber-700",
      bg: "bg-amber-50 border-amber-200/80",
      text: "text-amber-900",
      desc: "Non-negotiable patient safety safeguards: unique UHID/ABHA tracking, verified e-prescriptions, and emergency alerts.",
    },
    {
      tier: "COMMITMENT",
      tag: "Workflow Integrity",
      accent: "from-orange-500 to-amber-600",
      bg: "bg-orange-50 border-orange-200/80",
      text: "text-orange-900",
      desc: "Departmental integration: zero duplicate entry, automated lab sample barcoding, and digital nursing handovers (ISBAR).",
    },
    {
      tier: "ACHIEVEMENT",
      tag: "Quality Metrics",
      accent: "from-amber-700 to-orange-600",
      bg: "bg-amber-50/80 border-amber-300/80",
      text: "text-amber-950",
      desc: "Live clinical quality telemetry: real-time tracking of 60+ NABH quality indicators (CQI) and NABL ISO 15189 LIS rules.",
    },
    {
      tier: "EXCELLENCE",
      tag: "Advanced Digital Care",
      accent: "from-amber-500 via-orange-500 to-amber-600",
      bg: "bg-gradient-to-br from-amber-100/60 to-orange-50/60 border-amber-300",
      text: "text-amber-950",
      desc: "AI clinical decision support, predictive patient risk scoring, closed-loop medication management, and national ABDM sync.",
    },
  ];

  const filteredChapters =
    activeCategory === "ALL"
      ? nabhChapters
      : nabhChapters.filter((c) => c.category === activeCategory);

  return (
    <section
      id="nabh-nabl-compliance"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="py-20 sm:py-28 bg-[#FAFCFF] border-t border-slate-200/80 scroll-mt-24 relative overflow-hidden select-none transition-colors duration-500"
      style={{
        "--mouse-x": "50%",
        "--mouse-y": "50%",
        "--mouse-opacity": "0",
        "--ratio-x": "0",
        "--ratio-y": "0",
      }}
    >
      {/* 1. Full Background Atmospheric Darkening Wash on Hover */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500 -z-0 bg-[#0B132B]/[0.06]"
        style={{
          opacity: "var(--mouse-opacity, 0)",
        }}
      />

      {/* 2. Dark Outer Vignette */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500 -z-0"
        style={{
          opacity: "var(--mouse-opacity, 0)",
          background: "radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), transparent 40%, rgba(11, 19, 43, 0.14) 100%)",
        }}
      />

      {/* 3. Deep Dark Shadow Halo + Vivid Amber/Flame Spotlight Core */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-400 -z-0"
        style={{
          opacity: "var(--mouse-opacity, 0)",
          background: `
            radial-gradient(320px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(217, 119, 6, 0.28) 0%, rgba(255, 77, 39, 0.22) 45%, transparent 80%),
            radial-gradient(650px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(15, 23, 42, 0.22) 0%, rgba(30, 41, 59, 0.14) 50%, transparent 80%)
          `,
        }}
      />

      {/* 4. Parallax Background Deep Mesh Glows */}
      <div
        className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-amber-400/20 rounded-full blur-[140px] pointer-events-none -z-0 transition-transform duration-700 ease-out"
        style={{
          transform: "translate3d(calc(var(--ratio-x, 0) * 35px), calc(var(--ratio-y, 0) * 35px), 0)",
        }}
      />
      <div
        className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-orange-400/20 rounded-full blur-[140px] pointer-events-none -z-0 transition-transform duration-700 ease-out"
        style={{
          transform: "translate3d(calc(var(--ratio-x, 0) * -35px), calc(var(--ratio-y, 0) * -35px), 0)",
        }}
      />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">

        {/* Section Master Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <h2 className="text-3xl sm:text-5xl font-black text-[#0B132B] tracking-tight leading-[1.15]">
            NABH-Certified Hospital Management &{" "}
            <span className="bg-gradient-to-r from-amber-600 via-orange-500 to-amber-500 bg-clip-text text-transparent">
              Clinical Quality System
            </span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto font-normal leading-relaxed">
            Aligned with National Accreditation Board for Hospitals & Healthcare Providers (NABH) standards for HIS & EMR software—covering 42 standards across 8 core chapters and 4 objective element maturity tiers.
          </p>
        </div>

        {/* ── 8 NABH Core Chapters Section ── */}
        <div className="mb-16">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div>
              <h3 className="text-2xl font-black text-[#0B132B]">
                8 Core NABH Chapters for HIS/EMR Systems
              </h3>
              <p className="text-slate-500 text-sm mt-1">
                Full-spectrum compliance built into daily clinical & administrative workflows
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2 p-1.5 bg-slate-200/60 rounded-2xl border border-slate-300/50">
              {["ALL", "CLINICAL", "INFRASTRUCTURE", "ADMINISTRATIVE"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    activeCategory === cat
                      ? "bg-white text-amber-700 shadow-sm border border-slate-200"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {cat === "ALL" ? "All 8 Chapters" : cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredChapters.map((chap) => {
              const IconComp = chap.icon;
              return (
                <div
                  key={chap.code}
                  className="bg-white rounded-3xl p-6 border border-slate-200/90 hover:border-amber-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-600 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-11 h-11 rounded-2xl bg-amber-50 border border-amber-200/80 text-amber-600 flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
                        <IconComp className="w-5.5 h-5.5" />
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-slate-100 font-mono text-xs font-black text-slate-800 border border-slate-200">
                        {chap.code}
                      </span>
                    </div>

                    <h4 className="text-base font-black text-[#0B132B] mb-2 group-hover:text-amber-600 transition-colors leading-snug">
                      {chap.title}
                    </h4>

                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {chap.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px]">
                    <span className="font-bold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200/60">
                      {chap.oeCount}
                    </span>
                    <span className="font-medium text-slate-400 uppercase tracking-wider text-[10px]">
                      {chap.category}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── NABH Objective Elements (OEs) Maturity Framework ── */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-sm">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-black uppercase tracking-widest text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              NABH Objective Elements (OEs) Hierarchy
            </span>
            <h3 className="text-2xl font-black text-[#0B132B] mt-2">
              4 Levels of Objective Elements (OEs) Compliance
            </h3>
            <p className="text-slate-600 text-sm mt-1">
              NABH categorizes software requirements into 4 progressive tiers. HWAI covers all 4 tiers out of the box.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {oeTiers.map((t, idx) => (
              <div
                key={t.tier}
                className={`rounded-2xl p-6 border ${t.bg} relative flex flex-col justify-between group hover:shadow-md transition-all`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-black px-2.5 py-1 rounded-lg bg-white/80 border border-slate-200/80 shadow-2xs text-slate-900">
                      TIER 0{idx + 1}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                      {t.tag}
                    </span>
                  </div>

                  <h4 className={`text-lg font-black mb-2 ${t.text}`}>
                    {t.tier}
                  </h4>

                  <p className="text-xs text-slate-700 leading-relaxed font-normal">
                    {t.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center gap-1.5 text-xs font-bold text-amber-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <span>Fully Pre-Configured</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default HwaiComplianceSection;
