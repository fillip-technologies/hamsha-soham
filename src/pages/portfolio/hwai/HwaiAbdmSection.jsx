import React from "react";
import {
  QrCode,
  FileCheck,
  CheckCircle2,
  Database,
  Network,
  Zap,
  ArrowRight,
} from "lucide-react";

const milestones = [
  {
    num: "01",
    step: "M1",
    label: "NHA Milestone 1",
    icon: QrCode,
    title: "ABHA Health ID & OPD Triage",
    subtitle: "Scan & Share in under 15 seconds",
    desc: "Generate 14-digit ABHA Health IDs via Aadhaar OTP or Mobile. Enable counterless OPD check-ins with official ABDM Scan & Share QR — patient demographics auto-populate instantly.",
    bullets: [
      "Aadhaar OTP & Mobile ABHA ID generation",
      "QR Scan & Share token in < 15 seconds",
      "Auto demographic sync, zero manual entry",
      "Batch ABHA enrollment for large hospitals",
    ],
    stat: "< 15 Sec",
    statDesc: "OPD Check-in",
    accentColor: "#D97706",
    iconBg: "from-amber-500 to-orange-500",
    pillBg: "bg-amber-50 text-amber-800 border-amber-200",
    numColor: "text-amber-100",
    topBar: "from-amber-500 to-orange-400",
    hoverBorder: "hover:border-amber-300",
    hoverShadow: "hover:shadow-amber-100",
  },
  {
    num: "02",
    step: "M2",
    label: "NHA Milestone 2",
    icon: FileCheck,
    title: "FHIR R4 Clinical Records",
    subtitle: "HFR & HPR Registry Sync",
    desc: "Auto-generate FHIR R4 standardized prescriptions, lab reports, and discharge summaries. Seamless sync with Health Facility Registry (HFR) and Healthcare Professionals Registry (HPR).",
    bullets: [
      "FHIR R4-structured clinical documents",
      "Doctor HPR e-prescription certification",
      "LIS reports & discharge in FHIR format",
      "Automated HFR facility profile renewal",
    ],
    stat: "FHIR R4",
    statDesc: "Global Schema",
    accentColor: "#EA580C",
    iconBg: "from-orange-500 to-amber-600",
    pillBg: "bg-orange-50 text-orange-800 border-orange-200",
    numColor: "text-orange-100",
    topBar: "from-orange-500 to-amber-500",
    hoverBorder: "hover:border-orange-300",
    hoverShadow: "hover:shadow-orange-100",
  },
  {
    num: "03",
    step: "M3",
    label: "NHA Milestone 3",
    icon: Network,
    title: "Longitudinal Health Exchange",
    subtitle: "Consent-driven HIP & HIU",
    desc: "Full bi-directional ABDM interoperability as both Health Information Provider (HIP) and Health Information User (HIU). Patients control granular consent for cross-hospital record access.",
    bullets: [
      "Consent flow via ABDM Consent Manager",
      "Cross-hospital patient timeline for doctors",
      "End-to-end FHIR encrypted transmission",
      "Time-bound, revocable patient consent",
    ],
    stat: "E2E AES-256",
    statDesc: "Encryption",
    accentColor: "#B45309",
    iconBg: "from-amber-600 to-yellow-500",
    pillBg: "bg-amber-50 text-amber-900 border-amber-200",
    numColor: "text-amber-100",
    topBar: "from-amber-600 to-orange-500",
    hoverBorder: "hover:border-amber-400",
    hoverShadow: "hover:shadow-amber-100",
  },
  {
    num: "04",
    step: "TMS",
    label: "NHA PM-JAY Certified",
    icon: Database,
    title: "PM-JAY & State Scheme TMS",
    subtitle: "Zero duplicate entry with NHA",
    desc: "Automated PM-JAY beneficiary golden card verification and API-direct pre-authorization and claims into the NHA Transaction Management System. Eliminates all duplicate HIMS-TMS data entry.",
    bullets: [
      "Beneficiary e-KYC & package auto-mapping",
      "Zero duplication between HIMS and TMS",
      "Real-time claim tracking & settlement",
      "State Ayushman-linked scheme API support",
    ],
    stat: "< 1.8%",
    statDesc: "Claim Rejection",
    accentColor: "#C2410C",
    iconBg: "from-orange-600 to-amber-500",
    pillBg: "bg-orange-50 text-orange-900 border-orange-200",
    numColor: "text-orange-100",
    topBar: "from-orange-600 to-amber-500",
    hoverBorder: "hover:border-orange-300",
    hoverShadow: "hover:shadow-orange-100",
  },
];



export const HwaiAbdmSection = () => {
  return (
    <section
      id="abdm-nha-integration"
      className="py-20 sm:py-28 bg-[#F8FAFC] border-t border-slate-200/80 scroll-mt-24 relative overflow-hidden select-none"
    >
      {/* Soft ambient glows */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-amber-400/8 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-orange-400/8 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">

        {/* ── Section Header ── */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200/80 text-amber-800 text-xs font-extrabold uppercase tracking-widest">
            <Zap className="w-3.5 h-3.5 text-amber-600" />
            India's Government Digital Health Stack
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-[#0B132B] tracking-tight leading-[1.12]">
            Ayushman Bharat{" "}
            <span className="bg-gradient-to-r from-amber-600 via-orange-500 to-amber-500 bg-clip-text text-transparent">
              Digital Mission
            </span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-normal">
            Fully certified across ABDM M1, M2 & M3 milestones. Connect your hospital with India's national health network — ABHA IDs, HFR/HPR registries, and PM-JAY cashless settlement.
          </p>

          {/* Key stats strip */}
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 pt-1">
            {[
              { val: "M1 + M2 + M3", label: "ABDM Certified" },
              { val: "< 15 Sec", label: "ABHA OPD Triage" },
              { val: "< 1.8%", label: "TMS Rejection Rate" },
              { val: "FHIR R4", label: "Global Standard" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-base font-black text-amber-600">{s.val}</div>
                <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── 4 Milestone Cards (2×2 Grid) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {milestones.map((m) => {
            const Icon = m.icon;
            return (
              <div
                key={m.num}
                className={`group relative bg-white rounded-3xl border border-slate-200/90 ${m.hoverBorder} hover:shadow-xl ${m.hoverShadow} transition-all duration-300 hover:-translate-y-1 overflow-hidden`}
              >
                {/* Top gradient accent bar */}
                <div
                  className={`absolute top-0 inset-x-0 h-1 bg-gradient-to-r ${m.topBar}`}
                />

                {/* Large ghost step number */}
                <div
                  className={`absolute top-2 right-4 text-[88px] font-black leading-none pointer-events-none select-none ${m.numColor} group-hover:opacity-60 transition-opacity duration-300`}
                >
                  {m.num}
                </div>

                <div className="relative z-10 p-7 sm:p-8">
                  {/* Card header */}
                  <div className="flex items-start gap-4 mb-5">
                    <div
                      className={`w-13 h-13 rounded-2xl flex items-center justify-center bg-gradient-to-br ${m.iconBg} shadow-md shrink-0 group-hover:scale-105 transition-transform`}
                      style={{ width: "52px", height: "52px" }}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0 pt-0.5">
                      <span className={`inline-block text-[10px] font-extrabold uppercase tracking-[0.12em] px-2.5 py-1 rounded-full border ${m.pillBg} mb-2`}>
                        {m.label}
                      </span>
                      <h3 className="text-xl font-black text-[#0B132B] leading-tight group-hover:text-amber-700 transition-colors">
                        {m.title}
                      </h3>
                      <p className="text-xs text-slate-400 font-medium mt-0.5">{m.subtitle}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed mb-5">{m.desc}</p>

                  {/* Bullet grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-5">
                    {m.bullets.map((b, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2.5 px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200/70 hover:border-amber-200 hover:bg-amber-50/40 transition-all"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                        <span className="text-[11px] text-slate-700 font-medium leading-snug">{b}</span>
                      </div>
                    ))}
                  </div>

                  {/* Bottom stat row */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-2.5">
                      <div
                        className="w-8 h-8 rounded-xl flex items-center justify-center"
                        style={{ background: `${m.accentColor}12`, border: `1px solid ${m.accentColor}25` }}
                      >
                        <Zap className="w-3.5 h-3.5" style={{ color: m.accentColor }} />
                      </div>
                      <div>
                        <div className="text-sm font-black" style={{ color: m.accentColor }}>{m.stat}</div>
                        <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">{m.statDesc}</div>
                      </div>
                    </div>
                    <div
                      className="flex items-center gap-1.5 text-[11px] font-bold opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200"
                      style={{ color: m.accentColor }}
                    >
                      <span>Explore</span>
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>


      </div>
    </section>
  );
};

export default HwaiAbdmSection;
