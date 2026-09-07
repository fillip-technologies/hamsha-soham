import React from "react";
import {
  Building2,
  Users,
  Activity,
  ShieldCheck,
  CheckCircle2,
  Zap,
  Globe,
  MapPin,
  TrendingUp,
  Award,
  Layers,
} from "lucide-react";

export const EDrishtiEnterpriseSection = () => {
  const branches = [
    { name: "Main Tertiary Hospital", city: "Metro Campus", opd: "450+/day", surgeries: "28/day", status: "Active Sync" },
    { name: "City Laser & LASIK Center", city: "Urban Hub", opd: "180+/day", surgeries: "12/day", status: "Active Sync" },
    { name: "Outreach Screening Camp", city: "Rural Vision Unit", opd: "320+/day", surgeries: "Camp Triage", status: "Offline App Sync" },
  ];

  return (
    <section
      id="enterprise-eye-hospital"
      className="py-20 sm:py-28 bg-[#F8FAFC] border-t border-slate-200/80 scroll-mt-24 relative overflow-hidden select-none"
    >
      {/* Soft Ambient Mesh Glows */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-sky-400/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-cyan-400/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-50 border border-sky-200/80 text-sky-800 text-xs font-extrabold uppercase tracking-widest">
            <Building2 className="w-3.5 h-3.5 text-sky-600" />
            Enterprise Ophthalmic Network
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-[#0B132B] tracking-tight leading-[1.12]">
            Enterprise Eye Hospital &{" "}
            <span className="bg-gradient-to-r from-sky-600 via-cyan-500 to-[#FF4D27] bg-clip-text text-transparent">
              Multi-Branch Network
            </span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto font-normal leading-relaxed">
            Centralized cloud architecture for multi-location eye hospitals, LASIK surgery centers, vision screening camps, and optical chains with unified patient records and real-time operational telemetry.
          </p>
        </div>

        {/* Dynamic Bento Box Architecture Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* BENTO CARD 1: Centralized Operations & Branch Telemetry (Spans 8 Columns) */}
          <div className="lg:col-span-8 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 hover:border-sky-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-sky-600 via-cyan-500 to-[#FF4D27]" />
            
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-200/80 text-sky-600 flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
                    <Globe className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="px-3 py-1 rounded-full bg-sky-50 text-sky-800 text-[11px] font-extrabold uppercase tracking-wider border border-sky-200/80">
                      Multi-Branch Telemetry
                    </span>
                    <h3 className="text-2xl font-black text-[#0B132B] mt-1 group-hover:text-sky-600 transition-colors">
                      Centralized Network Control & Live Telemetry
                    </h3>
                  </div>
                </div>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                Manage multiple eye care centers from a single unified control panel. Cross-branch patient lookup, doctor scheduling, centralized optical inventory distribution, and aggregated financial dashboards.
              </p>

              {/* Live Branch Status Telemetry Table */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 mb-6">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3 flex items-center justify-between">
                  <span>Live Network Branch Telemetry</span>
                  <span className="text-sky-600 font-extrabold">Real-Time Sync</span>
                </div>

                <div className="space-y-2">
                  {branches.map((b, idx) => (
                    <div key={idx} className="flex flex-wrap items-center justify-between p-3 rounded-xl bg-white border border-slate-200/80 text-xs gap-2">
                      <div className="flex items-center gap-2.5">
                        <MapPin className="w-4 h-4 text-sky-600 shrink-0" />
                        <div>
                          <div className="font-extrabold text-slate-900">{b.name}</div>
                          <div className="text-[10px] text-slate-500">{b.city}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 text-right">
                        <div>
                          <div className="font-bold text-sky-700">{b.opd}</div>
                          <div className="text-[10px] text-slate-400">OPD Queue</div>
                        </div>
                        <div>
                          <div className="font-bold text-orange-600">{b.surgeries}</div>
                          <div className="text-[10px] text-slate-400">Surgical OT</div>
                        </div>
                        <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-bold text-[10px] border border-emerald-200">
                          {b.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Feature Checkpoints */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                  <span>Universal UHID search across all network branches</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                  <span>Centralized doctor shift & consultation booking</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                  <span>Inter-branch optical frame & lens stock transfers</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                  <span>Consolidated P&L, OPD revenue & surgical analytics</span>
                </div>
              </div>
            </div>
          </div>

          {/* BENTO CARD 2: Outreach & Vision Screening Camp App (Spans 4 Columns) */}
          <div className="lg:col-span-4 bg-white rounded-3xl p-8 border border-slate-200/90 hover:border-sky-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-cyan-500 to-[#FF4D27]" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-200/80 text-sky-600 flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
                  <Users className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-sky-50 text-sky-800 border border-sky-200/80">
                  Outreach Camps
                </span>
              </div>

              <h3 className="text-xl font-black text-[#0B132B] mb-3 group-hover:text-sky-600 transition-colors">
                Mobile Outreach Vision Camp App
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Prebuilt offline-first Android tablet app designed for field optometrists conducting rural community vision screening camps.
              </p>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2 mb-6">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium">Connectivity</span>
                  <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded-md">Offline-First Engine</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium">Screening Triage</span>
                  <span className="text-slate-900 font-bold">Cataract & Refraction</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium">Base Sync</span>
                  <span className="text-sky-700 font-bold">Auto Server Upload</span>
                </div>
              </div>

              <div className="space-y-2.5 pt-2 border-t border-slate-100">
                <div className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                  <span>Rapid field demographic registration</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                  <span>Visual acuity & cataract grading logs</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                  <span>Instant camp patient token & surgery referral</span>
                </div>
              </div>
            </div>
          </div>

          {/* BENTO CARD 3: Cataract & Phaco Surgical Suite (Spans 6 Columns) */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-8 border border-slate-200/90 hover:border-sky-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-sky-600 to-cyan-500" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-200/80 text-sky-600 flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
                  <Layers className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-sky-50 text-sky-800 border border-sky-200/80">
                  Phaco & OT Workflow
                </span>
              </div>

              <h3 className="text-xl font-black text-[#0B132B] mb-3 group-hover:text-sky-600 transition-colors">
                Cataract & OT Surgical Suite
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                End-to-end surgical documentation from pre-operative biometry and IOL selection to intra-op Phaco parameters and post-op care regimens.
              </p>

              <div className="grid grid-cols-2 gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70 mb-6 text-xs">
                <div className="p-2.5 rounded-xl bg-white border border-slate-200/80">
                  <div className="font-black text-sky-700">Pre-Op Biometry</div>
                  <div className="text-[11px] text-slate-500">IOL Power & A-Scan records</div>
                </div>
                <div className="p-2.5 rounded-xl bg-white border border-slate-200/80">
                  <div className="font-black text-orange-600">WHO OT Checklist</div>
                  <div className="text-[11px] text-slate-500">Sign-in, time-out & sign-out</div>
                </div>
              </div>

              <div className="space-y-2.5 pt-2 border-t border-slate-100">
                <div className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                  <span>IOL serial number barcode scan & consignment tracking</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                  <span>Pre-operative digital informed consent capture</span>
                </div>
              </div>
            </div>
          </div>

          {/* BENTO CARD 4: Ophthalmic Quality & Safety Governance (Spans 6 Columns) */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-8 border border-slate-200/90 hover:border-sky-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-cyan-500 to-[#FF4D27]" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-200/80 text-sky-600 flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-sky-50 text-sky-800 border border-sky-200/80">
                  Quality Audit
                </span>
              </div>

              <h3 className="text-xl font-black text-[#0B132B] mb-3 group-hover:text-sky-600 transition-colors">
                NABH Quality Indicators & Audit Control
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Built-in NABH quality telemetry for eye care: tracking post-op endophthalmitis, un-planned return to OT, vitreous loss rates, and OPD wait times.
              </p>

              <div className="grid grid-cols-3 gap-2 text-center p-3 rounded-2xl bg-slate-50 border border-slate-200/70 mb-6">
                <div className="p-2 rounded-xl bg-white border border-slate-200">
                  <div className="text-base font-black text-sky-700">&lt; 0.01%</div>
                  <div className="text-[10px] text-slate-500">Infection Rate</div>
                </div>
                <div className="p-2 rounded-xl bg-white border border-slate-200">
                  <div className="text-base font-black text-emerald-700">100%</div>
                  <div className="text-[10px] text-slate-500">Consent Audit</div>
                </div>
                <div className="p-2 rounded-xl bg-white border border-slate-200">
                  <div className="text-base font-black text-orange-600">&lt; 12 Min</div>
                  <div className="text-[10px] text-slate-500">Avg OPD Wait</div>
                </div>
              </div>

              <div className="space-y-2.5 pt-2 border-t border-slate-100">
                <div className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                  <span>Real-time clinical indicator charts for NABH assessors</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                  <span>Automated adverse event logging & CAPA reporting</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default EDrishtiEnterpriseSection;
