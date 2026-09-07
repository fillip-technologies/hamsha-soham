import React from "react";
import {
  ShieldCheck,
  FileCheck2,
  AlertTriangle,
  Lock,
  ClipboardList,
  Flame,
  Activity,
  CheckCircle2,
  Award,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Cpu,
  Check,
} from "lucide-react";

export const HwaiComplianceSection = () => {
  const standards = [
    { title: "NABH 5th Edition Standard", desc: "60+ Quality indicators tracked continuously", badge: "Accreditation Ready" },
    { title: "NABL ISO 15189:2022", desc: "Bi-directional LIS interfacing & QC rules", badge: "LIS Certified" },
    { title: "WHO Patient Safety", desc: "3-Stage OT checklist & ISBAR protocols", badge: "Zero Error" },
    { title: "CPCB BMW Mandate", desc: "Barcoded statutory biomedical waste compliance", badge: "Statutory Law" },
  ];

  return (
    <section
      id="nabh-nabl-compliance"
      className="py-20 sm:py-28 bg-[#F8FAFC] border-t border-slate-200/80 scroll-mt-24 relative overflow-hidden select-none"
    >
      {/* Background Soft Mesh Ambient Glows with Master Brand Warmth */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-amber-400/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-orange-400/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Master Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-5xl font-black text-[#0B132B] tracking-tight leading-[1.15]">
            Accreditation-Grade Clinical Safety &{" "}
            <span className="bg-gradient-to-r from-amber-600 via-orange-500 to-amber-500 bg-clip-text text-transparent">
              Quality Assurance
            </span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto font-normal leading-relaxed">
            Eliminate chaotic audit preparations. HWAI embeds NABH 5th Edition hospital indicators and NABL ISO 15189 laboratory controls directly into the daily clinical software workflow.
          </p>
        </div>

        {/* Dynamic Bento Box Architecture Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* BENTO CARD 1: NABH 5th Edition CQI (Large Featured Card - Spans 8 Columns) */}
          <div className="lg:col-span-8 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 hover:border-amber-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-600 via-orange-500 to-amber-400" />
            
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-13 h-13 rounded-2xl bg-amber-50 border border-amber-200/80 text-amber-600 flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
                    <Activity className="w-6.5 h-6.5" />
                  </div>
                  <div>
                    <span className="px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-[11px] font-extrabold uppercase tracking-wider border border-amber-200/80">
                      NABH 5th Edition
                    </span>
                    <h3 className="text-2xl font-black text-[#0B132B] mt-1 group-hover:text-amber-600 transition-colors">
                      Clinical Quality Indicators (CQI)
                    </h3>
                  </div>
                </div>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                Automates real-time calculation and continuous charting of 60+ mandatory hospital quality indicators. HWAI processes live IPD, ICU, and OT clinical records to generate audit-ready CQI reports for NABH inspection.
              </p>

              {/* Live Quality Indicator Telemetry Bar */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 mb-6">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3 flex items-center justify-between">
                  <span>Live CQI Telemetry Metrics</span>
                  <span className="text-amber-600 font-extrabold">Assessor Audit Ready</span>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                  <div className="p-3 rounded-xl bg-white border border-slate-200/80">
                    <div className="text-lg font-black text-amber-600">0.6%</div>
                    <div className="text-[11px] font-bold text-slate-900">HAI Infection</div>
                    <div className="text-[10px] text-slate-500">Target &lt; 1.5%</div>
                  </div>

                  <div className="p-3 rounded-xl bg-white border border-slate-200/80">
                    <div className="text-lg font-black text-amber-600">100%</div>
                    <div className="text-[11px] font-bold text-slate-900">OT Safety Checklist</div>
                    <div className="text-[10px] text-slate-500">WHO Standard</div>
                  </div>

                  <div className="p-3 rounded-xl bg-white border border-slate-200/80">
                    <div className="text-lg font-black text-amber-600">3.2 Days</div>
                    <div className="text-[11px] font-bold text-slate-900">Avg Length of Stay</div>
                    <div className="text-[10px] text-slate-500">ALOS Optimized</div>
                  </div>

                  <div className="p-3 rounded-xl bg-white border border-slate-200/80">
                    <div className="text-lg font-black text-amber-600">&lt; 0.02%</div>
                    <div className="text-[11px] font-bold text-slate-900">Medication Error</div>
                    <div className="text-[10px] text-slate-500">Continuous Monitoring</div>
                  </div>
                </div>
              </div>

              {/* Feature Checkpoints */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>HAI tracking across CAUTI, CLABSI, and VAP protocols</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>Unexpected return to ICU & 30-day readmission monitoring</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>Bed occupancy, ALOS & turnover interval analytics</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>Pre-formatted monthly CQI summary sheets for NABH portal</span>
                </div>
              </div>
            </div>
          </div>

          {/* BENTO CARD 2: NABL ISO 15189 Lab LIS (Tall Card - Spans 4 Columns) */}
          <div className="lg:col-span-4 bg-white rounded-3xl p-8 border border-slate-200/90 hover:border-amber-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-600 to-orange-500" />
            
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200/80 text-amber-600 flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
                  <FileCheck2 className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200/80">
                  NABL ISO 15189
                </span>
              </div>

              <h3 className="text-xl font-black text-[#0B132B] mb-3 group-hover:text-amber-600 transition-colors">
                NABL-Ready LIS & Machine Interfacing
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Bi-directional medical analyzer interfacing (ASTM & HL7) with automated Levey-Jennings QC charts and Westgard multi-rule validation.
              </p>

              {/* Analyzer Status List */}
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2 mb-6">
                <div className="text-[11px] font-bold text-slate-500 uppercase">Interfaced Analyzers</div>
                <div className="flex items-center justify-between p-2 rounded-xl bg-white border border-slate-200/80 text-xs">
                  <span className="font-bold text-slate-800">Sysmex XN-1000 (Hematology)</span>
                  <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200/70">Bi-directional</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-xl bg-white border border-slate-200/80 text-xs">
                  <span className="font-bold text-slate-800">Roche Cobas c311 (Biochem)</span>
                  <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200/70">Bi-directional</span>
                </div>
              </div>

              <div className="space-y-2.5 pt-2 border-t border-slate-100">
                <div className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>Dual barcode primary tube tracking</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>Automated Levey-Jennings QC & Westgard rules</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>Delta checks against historical patient values</span>
                </div>
              </div>
            </div>
          </div>

          {/* BENTO CARD 3: Tamper-Proof Audit Trails (4 Columns) */}
          <div className="lg:col-span-4 bg-white rounded-3xl p-8 border border-slate-200/90 hover:border-amber-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-600 to-orange-500" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200/80 text-amber-600 flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
                  <Lock className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200/80">
                  21 CFR Part 11
                </span>
              </div>

              <h3 className="text-xl font-black text-[#0B132B] mb-3 group-hover:text-amber-600 transition-colors">
                Audit Trails & Doctor E-Sign
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Immutable field-level audit logging for every prescription, lab result, and billing edit with cryptographically signed doctor signatures.
              </p>

              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2 mb-6">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium">Ledger Security</span>
                  <span className="text-slate-900 font-bold">SHA-256 Cryptographic Hash</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium">Doctor Prescriptions</span>
                  <span className="text-amber-700 font-bold">Digital E-Signature Mandate</span>
                </div>
              </div>

              <div className="space-y-2.5 pt-2 border-t border-slate-100">
                <div className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>Field-level history capturing previous vs updated values</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>Role-based access preventing unauthorized clinical overrides</span>
                </div>
              </div>
            </div>
          </div>

          {/* BENTO CARD 4: WHO Surgical Safety & ISBAR (4 Columns) */}
          <div className="lg:col-span-4 bg-white rounded-3xl p-8 border border-slate-200/90 hover:border-amber-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-600 to-orange-500" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200/80 text-amber-600 flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
                  <ClipboardList className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200/80">
                  Patient Safety
                </span>
              </div>

              <h3 className="text-xl font-black text-[#0B132B] mb-3 group-hover:text-amber-600 transition-colors">
                WHO OT Safety & ISBAR Handover
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Systematically enforces the 3-stage WHO Surgical Safety checklist (Sign-In, Time-Out, Sign-Out) and structured ISBAR nursing shift transfers.
              </p>

              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2 mb-6">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium">WHO OT Checklist</span>
                  <span className="text-amber-700 font-bold">Sign-In • Time-Out • Sign-Out</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium">Nursing Handover</span>
                  <span className="text-slate-900 font-bold">ISBAR Protocol Standard</span>
                </div>
              </div>

              <div className="space-y-2.5 pt-2 border-t border-slate-100">
                <div className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>Procedures cannot advance without verified sign-offs</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>Braden pressure ulcer & Morse fall risk assessments</span>
                </div>
              </div>
            </div>
          </div>

          {/* BENTO CARD 5: Critical Panic Value Alerts & BMW CAPA (4 Columns) */}
          <div className="lg:col-span-4 bg-white rounded-3xl p-8 border border-slate-200/90 hover:border-amber-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-600 to-orange-500" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200/80 text-amber-600 flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200/80">
                  Risk & Statutory
                </span>
              </div>

              <h3 className="text-xl font-black text-[#0B132B] mb-3 group-hover:text-amber-600 transition-colors">
                Panic Alerts & CPCB Waste CAPA
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Instant automated SMS & push notification to treating consultants on critical test results, and barcoded biomedical waste dispatch logs per CPCB.
              </p>

              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2 mb-6">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium">Panic Value Log</span>
                  <span className="text-amber-700 font-bold">Mandatory Telephonic Read-Back</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium">BMW Waste Audit</span>
                  <span className="text-slate-900 font-bold">CPCB Barcode Dispatch Sync</span>
                </div>
              </div>

              <div className="space-y-2.5 pt-2 border-t border-slate-100">
                <div className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>Immediate consultant notification on critical test alerts</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>Closed-loop incident reporting with 5-Why RCA & CAPA</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Accreditation Frameworks Ribbon */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center border border-amber-200/80">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-lg font-black text-slate-900">Pre-Configured Accreditation Frameworks</h4>
                <p className="text-xs text-slate-500">Built-in clinical checklists and automated CQI indicator tracking for rapid hospital accreditation</p>
              </div>
            </div>
            <span className="text-xs font-bold text-amber-800 bg-amber-50 px-3.5 py-1.5 rounded-full border border-amber-200/80 self-start sm:self-auto">
              Ready for Assessor Inspection
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {standards.map((std, sIdx) => (
              <div key={sIdx} className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/70 hover:border-amber-300 hover:bg-amber-50/20 transition-all space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black text-slate-900">{std.title}</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800">
                    {std.badge}
                  </span>
                </div>
                <p className="text-[11px] text-slate-600 leading-snug">{std.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default HwaiComplianceSection;
