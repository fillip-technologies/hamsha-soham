import React, { useState } from "react";
import {
  Eye,
  Stethoscope,
  FileCheck2,
  Activity,
  CheckCircle2,
  Zap,
  Layers,
  Sparkles,
  ClipboardList,
  Flame,
  Check,
} from "lucide-react";

export const EDrishtiEmrSection = () => {
  const [activeEyeTab, setActiveEyeTab] = useState("OD");

  return (
    <section
      id="comprehensive-eye-emr"
      className="py-20 sm:py-28 bg-[#F8FAFC] border-t border-slate-200/80 scroll-mt-24 relative overflow-hidden select-none"
    >
      {/* Soft Ambient Mesh Glows */}
      <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-sky-400/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[500px] h-[500px] bg-[#FF4D27]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 border border-orange-200/80 text-[#FF4D27] text-xs font-extrabold uppercase tracking-widest">
            <Eye className="w-3.5 h-3.5 text-[#FF4D27]" />
            Ophthalmic Speciality EMR
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-[#0B132B] tracking-tight leading-[1.12]">
            Comprehensive{" "}
            <span className="bg-gradient-to-r from-[#FF4D27] via-orange-500 to-sky-600 bg-clip-text text-transparent">
              Eye EMR & Clinical Suite
            </span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto font-normal leading-relaxed">
            Purpose-built for Ophthalmologists, Optometrists, and Retina Specialists. Rapid visual refraction charting, diagnostic OCT image attachment, tonometry flowsheets, and 1-click prescription generation.
          </p>
        </div>

        {/* Dynamic Bento Box Architecture Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* BENTO CARD 1: Interactive Refraction & Acuity Engine (Featured Card - 8 Columns) */}
          <div className="lg:col-span-8 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 hover:border-orange-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#FF4D27] via-orange-500 to-sky-600" />
            
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-200/80 text-[#FF4D27] flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
                    <Stethoscope className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="px-3 py-1 rounded-full bg-orange-50 text-[#FF4D27] text-[11px] font-extrabold uppercase tracking-wider border border-orange-200/80">
                      Refraction & Acuity Engine
                    </span>
                    <h3 className="text-2xl font-black text-[#0B132B] mt-1 group-hover:text-[#FF4D27] transition-colors">
                      Interactive Refraction & Visual Acuity Charting
                    </h3>
                  </div>
                </div>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                Dual OD (Right Eye) & OS (Left Eye) interactive refraction matrix. Captures Uncorrected (UCVA), Best Corrected Visual Acuity (BCVA), Pinhole, Auto-Refractor, and Subjective Refraction values in seconds.
              </p>

              {/* Interactive Refraction Matrix Showcase Box */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 mb-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Live EMR Refraction Pane</span>
                  <div className="flex gap-1.5 bg-slate-200/60 p-1 rounded-lg">
                    <button
                      onClick={() => setActiveEyeTab("OD")}
                      className={`px-3 py-1 rounded-md text-xs font-extrabold transition-all ${
                        activeEyeTab === "OD" ? "bg-white text-orange-600 shadow-2xs" : "text-slate-600"
                      }`}
                    >
                      OD (Right Eye)
                    </button>
                    <button
                      onClick={() => setActiveEyeTab("OS")}
                      className={`px-3 py-1 rounded-md text-xs font-extrabold transition-all ${
                        activeEyeTab === "OS" ? "bg-white text-sky-600 shadow-2xs" : "text-slate-600"
                      }`}
                    >
                      OS (Left Eye)
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center text-xs">
                  <div className="p-3 rounded-xl bg-white border border-slate-200/80">
                    <div className="text-[10px] text-slate-400 font-bold uppercase">Sphere (SPH)</div>
                    <div className="text-lg font-black text-[#0B132B] mt-0.5">
                      {activeEyeTab === "OD" ? "-2.50 D" : "-2.25 D"}
                    </div>
                    <div className="text-[10px] text-slate-500">Distance Rx</div>
                  </div>

                  <div className="p-3 rounded-xl bg-white border border-slate-200/80">
                    <div className="text-[10px] text-slate-400 font-bold uppercase">Cylinder (CYL)</div>
                    <div className="text-lg font-black text-[#0B132B] mt-0.5">
                      {activeEyeTab === "OD" ? "-0.50 D" : "-0.75 D"}
                    </div>
                    <div className="text-[10px] text-slate-500">Astigmatism</div>
                  </div>

                  <div className="p-3 rounded-xl bg-white border border-slate-200/80">
                    <div className="text-[10px] text-slate-400 font-bold uppercase">Axis</div>
                    <div className="text-lg font-black text-[#0B132B] mt-0.5">
                      {activeEyeTab === "OD" ? "90°" : "180°"}
                    </div>
                    <div className="text-[10px] text-slate-500">Meridian</div>
                  </div>

                  <div className="p-3 rounded-xl bg-white border border-slate-200/80">
                    <div className="text-[10px] text-slate-400 font-bold uppercase">BCVA</div>
                    <div className="text-lg font-black text-emerald-600 mt-0.5">6 / 6</div>
                    <div className="text-[10px] text-slate-500">Snellen Standard</div>
                  </div>
                </div>
              </div>

              {/* Feature Checkpoints */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#FF4D27] shrink-0 mt-0.5" />
                  <span>Slit-lamp anterior segment findings (Cornea, Lens, Iris, Pupil)</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#FF4D27] shrink-0 mt-0.5" />
                  <span>Fundus, OCT, and Visual Field diagnostic image attachment</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#FF4D27] shrink-0 mt-0.5" />
                  <span>Pre-configured eye drop tapering schedules (Post-cataract steroids)</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#FF4D27] shrink-0 mt-0.5" />
                  <span>1-Click Glass Prescription printing for patient hand-out</span>
                </div>
              </div>
            </div>
          </div>

          {/* BENTO CARD 2: IOL Power Calculation & Biometry (Spans 4 Columns) */}
          <div className="lg:col-span-4 bg-white rounded-3xl p-8 border border-slate-200/90 hover:border-orange-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-orange-500 to-sky-600" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-200/80 text-[#FF4D27] flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
                  <Layers className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-orange-50 text-[#FF4D27] border border-orange-200/80">
                  Biometry
                </span>
              </div>

              <h3 className="text-xl font-black text-[#0B132B] mb-3 group-hover:text-[#FF4D27] transition-colors">
                IOL Calculation & Biometry Suite
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Automated calculation storage for A-Scan biometry using SRK-T, Barrett Universal II, Haigis, and Hoffer Q formulas.
              </p>

              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2 mb-6 text-xs">
                <div className="flex items-center justify-between p-2 rounded-xl bg-white border border-slate-200">
                  <span className="font-bold text-slate-800">Target Refraction</span>
                  <span className="text-[11px] font-extrabold text-[#FF4D27]">0.00 D (Emmetropia)</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-xl bg-white border border-slate-200">
                  <span className="font-bold text-slate-800">IOL Formula</span>
                  <span className="text-[11px] font-bold text-sky-700 bg-sky-50 px-2 py-0.5 rounded-md">Barrett Universal II</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-xl bg-white border border-slate-200">
                  <span className="font-bold text-slate-800">Calculated IOL Power</span>
                  <span className="text-[11px] font-black text-emerald-600">+21.50 D</span>
                </div>
              </div>

              <div className="space-y-2.5 pt-2 border-t border-slate-100">
                <div className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#FF4D27] shrink-0 mt-0.5" />
                  <span>Toric IOL axis alignment planning & keratometry records</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#FF4D27] shrink-0 mt-0.5" />
                  <span>Direct import from ZEISS IOLMaster & TOMEY Biometer</span>
                </div>
              </div>
            </div>
          </div>

          {/* BENTO CARD 3: Glaucoma & Tonometry IOP Flowsheet (Spans 6 Columns) */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-8 border border-slate-200/90 hover:border-orange-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#FF4D27] to-orange-500" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-200/80 text-[#FF4D27] flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
                  <Activity className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-orange-50 text-[#FF4D27] border border-orange-200/80">
                  Glaucoma Suite
                </span>
              </div>

              <h3 className="text-xl font-black text-[#0B132B] mb-3 group-hover:text-[#FF4D27] transition-colors">
                Glaucoma IOP & Pachymetry Flowsheet
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Longitudinal tracking of Intraocular Pressure (IOP) via Goldmann Applanation or NCT, Cup-to-Disc ratio (C:D), and Central Corneal Thickness (CCT).
              </p>

              <div className="grid grid-cols-2 gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-200/70 mb-6 text-xs">
                <div className="p-2.5 rounded-xl bg-white border border-slate-200">
                  <div className="font-bold text-slate-500 text-[10px]">IOP Goldmann (OD/OS)</div>
                  <div className="text-sm font-black text-sky-700 mt-0.5">14 mmHg / 16 mmHg</div>
                </div>
                <div className="p-2.5 rounded-xl bg-white border border-slate-200">
                  <div className="font-bold text-slate-500 text-[10px]">Cup:Disc Ratio (C:D)</div>
                  <div className="text-sm font-black text-orange-600 mt-0.5">0.4 OD / 0.4 OS</div>
                </div>
              </div>

              <div className="space-y-2.5 pt-2 border-t border-slate-100">
                <div className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#FF4D27] shrink-0 mt-0.5" />
                  <span>Visual field Humphry Perimeter (HFA) report attachment</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#FF4D27] shrink-0 mt-0.5" />
                  <span>OCT RNFL nerve fiber layer progress charting</span>
                </div>
              </div>
            </div>
          </div>

          {/* BENTO CARD 4: Retina & Sub-Specialty Injection Tracker (Spans 6 Columns) */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-8 border border-slate-200/90 hover:border-orange-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-orange-500 to-sky-600" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-200/80 text-[#FF4D27] flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
                  <Sparkles className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-orange-50 text-[#FF4D27] border border-orange-200/80">
                  Retina & Cornea
                </span>
              </div>

              <h3 className="text-xl font-black text-[#0B132B] mb-3 group-hover:text-[#FF4D27] transition-colors">
                Retina Anti-VEGF & Dry Eye Workup
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Specialized documentation for Intravitreal Anti-VEGF injections (Lucentis, Avastin, Eylea), diabetic retinopathy grading, and dry eye workups.
              </p>

              <div className="space-y-2.5 pt-2 border-t border-slate-100">
                <div className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#FF4D27] shrink-0 mt-0.5" />
                  <span>Intravitreal injection site & batch number logging</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#FF4D27] shrink-0 mt-0.5" />
                  <span>Schirmer test & Tear Film Break-Up Time (TBUT) records</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default EDrishtiEmrSection;
