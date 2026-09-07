import React, { useState } from "react";
import {
  Building2,
  Users,
  Bed,
  Pill,
  FileSpreadsheet,
  CheckCircle2,
  Zap,
  Activity,
  ShieldCheck,
  Clock,
  UserCheck,
} from "lucide-react";

export const EKshitizWorkforceSection = () => {
  const [activeWardFilter, setActiveWardFilter] = useState("ALL");

  const bedStats = [
    { type: "General Ward", total: 40, occupied: 32, available: 8, bg: "bg-emerald-50 border-emerald-200 text-emerald-800" },
    { type: "ICU / CCU Suite", total: 12, occupied: 10, available: 2, bg: "bg-rose-50 border-rose-200 text-rose-800" },
    { type: "Private Deluxe", total: 16, occupied: 11, available: 5, bg: "bg-blue-50 border-blue-200 text-blue-800" },
    { type: "Day Care / OT", total: 8, occupied: 4, available: 4, bg: "bg-amber-50 border-amber-200 text-amber-800" },
  ];

  return (
    <section
      id="workforce-smb-healthcare"
      className="py-20 sm:py-28 bg-[#F8FAFC] border-t border-slate-200/80 scroll-mt-24 relative overflow-hidden select-none"
    >
      {/* Ambient Mesh Background Glows */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-[#FF4D27]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-800 text-xs font-extrabold uppercase tracking-widest">
            <Building2 className="w-3.5 h-3.5 text-blue-600" />
            Workforce & SMB Healthcare Engine
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-[#0B132B] tracking-tight leading-[1.12]">
            Workforce &{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-[#FF4D27] bg-clip-text text-transparent">
              SMB Healthcare Solution
            </span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto font-normal leading-relaxed">
            Engineered for mid-sized hospitals, SMB clinics, and healthcare workforces. Unifies IPD/OPD bed management, pharmacy billing, lab LIS diagnostics, and staff shift rosters into an easy-to-use platform.
          </p>
        </div>

        {/* Dynamic Bento Box Architecture Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* BENTO CARD 1: Integrated IPD Bed Management & Patient Queue (Featured Card - 8 Columns) */}
          <div className="lg:col-span-8 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 hover:border-blue-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-[#FF4D27]" />
            
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200/80 text-blue-600 flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
                    <Bed className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-800 text-[11px] font-extrabold uppercase tracking-wider border border-blue-200/80">
                      IPD & Bed Control
                    </span>
                    <h3 className="text-2xl font-black text-[#0B132B] mt-1 group-hover:text-blue-600 transition-colors">
                      Integrated IPD Bed Management & OPD Triage
                    </h3>
                  </div>
                </div>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                Real-time visual bed matrix tracking ward occupancy, ICU availability, cleaning status, and room rent calculations. Seamless patient admission, bed transfer, and instant discharge summary generation.
              </p>

              {/* Live Ward Bed Matrix Grid */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 mb-6">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3 flex items-center justify-between">
                  <span>Live Bed Occupancy Telemetry</span>
                  <span className="text-blue-600 font-extrabold">Real-Time Bed Grid</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                  {bedStats.map((b, idx) => (
                    <div key={idx} className={`p-3 rounded-xl border ${b.bg}`}>
                      <div className="text-lg font-black">{b.occupied} / {b.total}</div>
                      <div className="text-[11px] font-bold text-slate-900 mt-0.5">{b.type}</div>
                      <div className="text-[10px] text-slate-500 mt-0.5">{b.available} Beds Available</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Feature Checkpoints */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>Instant patient admission & UHID digital token generation</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>Automated daily room rent & nursing charge billing sync</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>Doctor consultation queue display & token call system</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>1-Click automated clinical discharge summaries & advice</span>
                </div>
              </div>
            </div>
          </div>

          {/* BENTO CARD 2: Pharmacy & Expiry Control (Spans 4 Columns) */}
          <div className="lg:col-span-4 bg-white rounded-3xl p-8 border border-slate-200/90 hover:border-blue-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-indigo-500 to-[#FF4D27]" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200/80 text-blue-600 flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
                  <Pill className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-blue-50 text-blue-800 border border-blue-200/80">
                  Pharmacy POS
                </span>
              </div>

              <h3 className="text-xl font-black text-[#0B132B] mb-3 group-hover:text-blue-600 transition-colors">
                Pharmacy Billing & Batch Control
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Fast barcode pharmacy dispensing linked directly with OPD doctor e-prescriptions and IPD patient billing sheets.
              </p>

              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2 mb-6 text-xs">
                <div className="flex items-center justify-between p-2 rounded-xl bg-white border border-slate-200">
                  <span className="font-bold text-slate-800">Batch Expiry System</span>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">FEFO Rule Enabled</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-xl bg-white border border-slate-200">
                  <span className="font-bold text-slate-800">Prescription Fetch</span>
                  <span className="text-[10px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md">Auto Doctor Sync</span>
                </div>
              </div>

              <div className="space-y-2.5 pt-2 border-t border-slate-100">
                <div className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>Automatic stock deduction & re-order alert levels</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>GST compliant retail & IPD pharmacy invoicing</span>
                </div>
              </div>
            </div>
          </div>

          {/* BENTO CARD 3: Laboratory & LIS Diagnostics (Spans 6 Columns) */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-8 border border-slate-200/90 hover:border-blue-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200/80 text-blue-600 flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
                  <Activity className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-blue-50 text-blue-800 border border-blue-200/80">
                  LIS Diagnostics
                </span>
              </div>

              <h3 className="text-xl font-black text-[#0B132B] mb-3 group-hover:text-blue-600 transition-colors">
                Laboratory LIS & Diagnostic Reports
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Sample collection tracking, primary tube barcode generation, lab result entry, and automated PDF test report delivery via WhatsApp & Email.
              </p>

              <div className="space-y-2.5 pt-2 border-t border-slate-100">
                <div className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>Barcode sample tube tracking from collection desk</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>Pathologist digital signatures & normal range reference charts</span>
                </div>
              </div>
            </div>
          </div>

          {/* BENTO CARD 4: Workforce & Staff Duty Rostering (Spans 6 Columns) */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-8 border border-slate-200/90 hover:border-blue-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-indigo-600 to-[#FF4D27]" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200/80 text-blue-600 flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
                  <UserCheck className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-blue-50 text-blue-800 border border-blue-200/80">
                  Workforce Control
                </span>
              </div>

              <h3 className="text-xl font-black text-[#0B132B] mb-3 group-hover:text-blue-600 transition-colors">
                Workforce Shift Roster & Staff Management
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Comprehensive staff management for doctors, nurses, optometrists, and technicians. Biometric shift attendance, duty rosters, and role access security.
              </p>

              <div className="space-y-2.5 pt-2 border-t border-slate-100">
                <div className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>Department duty shift scheduling & leave management</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>Role-based access permissions securing sensitive financial logs</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default EKshitizWorkforceSection;
