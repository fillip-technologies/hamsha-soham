import React from "react";
import {
  Layers,
  FileText,
  Cpu,
  ShoppingBag,
  CheckCircle2,
  Zap,
  ArrowRight,
  QrCode,
  Eye,
  Stethoscope,
  PackageCheck,
  CreditCard,
} from "lucide-react";

export const EDrishtiWorkflowSection = () => {
  const steps = [
    { num: "01", label: "Smart OPD Token", desc: "ABHA QR & Demographics", icon: QrCode },
    { num: "02", label: "Auto-Refractor Sync", desc: "NIDEK / Topcon Interface", icon: Cpu },
    { num: "03", label: "Doctor EMR Note", desc: "Refraction & Slit Lamp", icon: Stethoscope },
    { num: "04", label: "Optical Barcode POS", desc: "Frame & Lens Auto-Rx", icon: ShoppingBag },
    { num: "05", label: "Stock Control", desc: "Eye Drop FEFO & Audit", icon: PackageCheck },
  ];

  return (
    <section
      id="registration-inventory-management"
      className="py-20 sm:py-28 bg-[#FAFCFF] border-t border-slate-200/80 scroll-mt-24 relative overflow-hidden select-none"
    >
      {/* Ambient Mesh Background */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-cyan-400/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[500px] h-[500px] bg-sky-400/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-50 border border-cyan-200/80 text-cyan-800 text-xs font-extrabold uppercase tracking-widest">
            <Layers className="w-3.5 h-3.5 text-cyan-600" />
            End-to-End Hospital Operations
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-[#0B132B] tracking-tight leading-[1.12]">
            Registration to{" "}
            <span className="bg-gradient-to-r from-cyan-600 via-sky-500 to-[#FF4D27] bg-clip-text text-transparent">
              Inventory Management
            </span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto font-normal leading-relaxed">
            Eliminate operational silos. A unified workflow connecting front-desk OPD tokening, optometry auto-refractors, doctor consultation notes, retail optical POS, and inventory stock control.
          </p>
        </div>

        {/* 5-Step Visual Workflow Stepper Bar */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm mb-16 relative overflow-hidden">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-6 text-center">
            Integrated Patient & Inventory Flow
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 relative z-10">
            {steps.map((s, idx) => {
              const StepIcon = s.icon;
              return (
                <div
                  key={s.num}
                  className="p-4 rounded-2xl bg-slate-50/90 border border-slate-200/80 hover:border-cyan-300 hover:bg-cyan-50/30 transition-all flex flex-col justify-between group relative"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-black text-cyan-700 font-mono bg-cyan-100/70 px-2 py-0.5 rounded-md">
                      STEP {s.num}
                    </span>
                    <StepIcon className="w-4 h-4 text-slate-400 group-hover:text-cyan-600 transition-colors" />
                  </div>
                  <div>
                    <div className="text-sm font-black text-slate-900 leading-snug group-hover:text-cyan-700 transition-colors">
                      {s.label}
                    </div>
                    <div className="text-[11px] text-slate-500 mt-1">{s.desc}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dynamic Bento Box Architecture Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* BENTO CARD 1: Optical Retail Store POS & Frame Inventory (Featured Card - 8 Columns) */}
          <div className="lg:col-span-8 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 hover:border-cyan-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-cyan-600 via-sky-500 to-[#FF4D27]" />
            
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-50 border border-cyan-200/80 text-cyan-600 flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
                    <ShoppingBag className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="px-3 py-1 rounded-full bg-cyan-50 text-cyan-800 text-[11px] font-extrabold uppercase tracking-wider border border-cyan-200/80">
                      Optical Retail POS
                    </span>
                    <h3 className="text-2xl font-black text-[#0B132B] mt-1 group-hover:text-cyan-600 transition-colors">
                      Optical Store & Glass Prescription Billing
                    </h3>
                  </div>
                </div>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                Direct integration between Ophthalmologist refraction notes and the Optical Store POS. Automatically prints patient glass prescriptions and tracks frame, lens, and contact lens stock with barcode scanning.
              </p>

              {/* Sample Optical Order Billing Telemetry */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 mb-6">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3 flex items-center justify-between">
                  <span>Auto Glass Prescription Fetch</span>
                  <span className="text-cyan-700 font-bold bg-cyan-50 px-2 py-0.5 rounded-md text-[10px]">Zero Re-typing</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center text-xs">
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200/80">
                    <div className="text-[10px] text-slate-400 uppercase">Frame Model</div>
                    <div className="font-extrabold text-slate-900">Titan Edge Titanium</div>
                    <div className="text-[10px] text-cyan-700 font-semibold">SKU #FR-9041</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200/80">
                    <div className="text-[10px] text-slate-400 uppercase">Lens Index</div>
                    <div className="font-extrabold text-slate-900">1.67 Single Vision</div>
                    <div className="text-[10px] text-cyan-700 font-semibold">Anti-Blue Coating</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200/80">
                    <div className="text-[10px] text-slate-400 uppercase">Right Eye (OD)</div>
                    <div className="font-extrabold text-slate-900">-2.50 SPH / -0.50 CYL</div>
                    <div className="text-[10px] text-slate-500">Axis 90°</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200/80">
                    <div className="text-[10px] text-slate-400 uppercase">Left Eye (OS)</div>
                    <div className="font-extrabold text-slate-900">-2.25 SPH / -0.75 CYL</div>
                    <div className="text-[10px] text-slate-500">Axis 180°</div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                  <span>1-Click optical order slip generation from doctor consultation</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                  <span>Frame barcode scanner checkout & automated inventory deduction</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                  <span>Supplier purchase order management & re-order threshold alerts</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                  <span>Customer delivery status tracking via SMS notifications</span>
                </div>
              </div>
            </div>
          </div>

          {/* BENTO CARD 2: Auto-Refractometer Interfacing Engine (Spans 4 Columns) */}
          <div className="lg:col-span-4 bg-white rounded-3xl p-8 border border-slate-200/90 hover:border-cyan-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-sky-500 to-[#FF4D27]" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-cyan-50 border border-cyan-200/80 text-cyan-600 flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
                  <Cpu className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-cyan-50 text-cyan-800 border border-cyan-200/80">
                  Machine Sync
                </span>
              </div>

              <h3 className="text-xl font-black text-[#0B132B] mb-3 group-hover:text-cyan-600 transition-colors">
                Auto-Refractor Machine Interfacing
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Serial RS232 & Network machine connectivity with leading Auto-Refractometers. Captures objective refraction data instantly into patient EMR.
              </p>

              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2 mb-6 text-xs">
                <div className="flex items-center justify-between p-2 rounded-xl bg-white border border-slate-200">
                  <span className="font-bold text-slate-800">Topcon KR-800 / KR-1</span>
                  <span className="text-[10px] font-bold text-cyan-700 bg-cyan-50 px-2 py-0.5 rounded-full">Auto-Fetch</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-xl bg-white border border-slate-200">
                  <span className="font-bold text-slate-800">NIDEK AR-1 / ARK-1</span>
                  <span className="text-[10px] font-bold text-cyan-700 bg-cyan-50 px-2 py-0.5 rounded-full">Auto-Fetch</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-xl bg-white border border-slate-200">
                  <span className="font-bold text-slate-800">Shin-Nippon ACCUREF</span>
                  <span className="text-[10px] font-bold text-cyan-700 bg-cyan-50 px-2 py-0.5 rounded-full">Auto-Fetch</span>
                </div>
              </div>

              <div className="space-y-2.5 pt-2 border-t border-slate-100">
                <div className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                  <span>0% manual data entry error in SPH/CYL/Axis values</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                  <span>Direct Keratometry (K1, K2) reading import for contact lenses</span>
                </div>
              </div>
            </div>
          </div>

          {/* BENTO CARD 3: Pharmacy Stock & Batch Expiry Control (Spans 6 Columns) */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-8 border border-slate-200/90 hover:border-cyan-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-cyan-600 to-sky-500" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-cyan-50 border border-cyan-200/80 text-cyan-600 flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
                  <PackageCheck className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-cyan-50 text-cyan-800 border border-cyan-200/80">
                  Pharmacy Control
                </span>
              </div>

              <h3 className="text-xl font-black text-[#0B132B] mb-3 group-hover:text-cyan-600 transition-colors">
                Eye Drop Pharmacy & Batch Expiry Tracking
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Specialized ophthalmic pharmacy management. FEFO (First Expiry First Out) stock dispensing, batch-level tracking, and drug interaction alerts.
              </p>

              <div className="space-y-2.5 pt-2 border-t border-slate-100">
                <div className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                  <span>Automated alerts for near-expiry eye drops & ointments</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                  <span>1-Click e-Prescription billing directly at pharmacy counter</span>
                </div>
              </div>
            </div>
          </div>

          {/* BENTO CARD 4: Billing & PM-JAY Cashless Claims (Spans 6 Columns) */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-8 border border-slate-200/90 hover:border-cyan-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-sky-500 to-[#FF4D27]" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-cyan-50 border border-cyan-200/80 text-cyan-600 flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
                  <CreditCard className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-cyan-50 text-cyan-800 border border-cyan-200/80">
                  Billing & Claims
                </span>
              </div>

              <h3 className="text-xl font-black text-[#0B132B] mb-3 group-hover:text-cyan-600 transition-colors">
                Itemized Package Billing & Insurance Pre-Auth
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Pre-configured billing packages for Cataract Phaco, Multifocal IOL upgrades, LASIK, and Vitrectomy procedures with TPA & Ayushman PM-JAY integration.
              </p>

              <div className="space-y-2.5 pt-2 border-t border-slate-100">
                <div className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                  <span>Itemized breakdown for lens upgrades & surgical consumables</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                  <span>Direct NHA PM-JAY TMS pre-auth claim submission</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default EDrishtiWorkflowSection;
