import { useEffect, useRef, useState } from "react";
import {
  Activity, BedDouble, Boxes, CalendarDays, CheckCircle2, ClipboardList,
  FileCheck2, FilePenLine, HeartPulse, Landmark, LayoutDashboard,
  Microscope, PackageOpen, Pill, QrCode, ScanLine, ShieldCheck,
  Stethoscope, UserRoundPlus,
} from "lucide-react";

const steps = [
  { title: "Patient Registration & UHID", icon: UserRoundPlus },
  {
    title: "ABHA Creation / ABHA Linking",
    icon: QrCode,
    featured: true,
    details: ["ABHA Verification", "ABDM Consent Management", "ABHA QR / Scan & Fetch"],
  },
  { title: "Appointment Management", icon: CalendarDays },
  { title: "OPD Management & Billing", icon: Stethoscope },
  { title: "Digital / Manual Prescription", icon: FilePenLine },
  { title: "Diagnostic Services", icon: Microscope, details: ["Laboratory", "Radiology"] },
  { title: "IPD Management & Billing", icon: HeartPulse },
  { title: "Ward Management", icon: BedDouble },
  { title: "Doctor Notes", icon: ClipboardList },
  { title: "OT Booking & OT Notes", icon: Activity },
  { title: "Discharge Summary", icon: FileCheck2 },
  { title: "Pharmacy Management", icon: Pill },
  { title: "Inventory & Stores", icon: Boxes },
  { title: "MRD Management", icon: PackageOpen },
  { title: "Finance & Accounts", icon: Landmark },
  { title: "MIS Dashboard, Reports & Analytics", icon: LayoutDashboard },
];

export const HwaiWorkflowSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [viewMode, setViewMode] = useState("compact"); // 'compact' (default, minimized scroll) or 'timeline'

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

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || typeof IntersectionObserver === "undefined") return undefined;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.08 });

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="complete-hospital-workflow"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`hwai-simple-flow py-12 sm:py-16 bg-[#FAFCFF] border-y border-slate-200/80 relative overflow-hidden select-none transition-colors duration-500 ${isVisible ? "is-visible" : ""}`}
      style={{
        "--mouse-x": "50%",
        "--mouse-y": "50%",
        "--mouse-opacity": "0",
        "--ratio-x": "0",
        "--ratio-y": "0",
      }}
    >
      {/* 1. Base Subtle Geometric Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#d977060f_1px,transparent_1px),linear-gradient(to_bottom,#d977060f_1px,transparent_1px)] bg-[size:36px_36px] pointer-events-none -z-0" />

      {/* 2. Full Background Atmospheric Darkening Wash on Hover */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500 -z-0 bg-[#0B132B]/[0.08]"
        style={{
          opacity: "var(--mouse-opacity, 0)",
        }}
      />

      {/* 3. Dark Outer Vignette */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500 -z-0"
        style={{
          opacity: "var(--mouse-opacity, 0)",
          background: "radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), transparent 35%, rgba(11, 19, 43, 0.18) 100%)",
        }}
      />

      {/* 4. Deep Dark Shadow Halo + Vivid Amber/Flame Spotlight Core */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-400 -z-0"
        style={{
          opacity: "var(--mouse-opacity, 0)",
          background: `
            radial-gradient(350px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(217, 119, 6, 0.32) 0%, rgba(255, 77, 39, 0.22) 45%, transparent 80%),
            radial-gradient(700px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(15, 23, 42, 0.24) 0%, rgba(30, 41, 59, 0.16) 50%, transparent 80%)
          `,
        }}
      />

      {/* 5. Parallax Background Deep Mesh Glows */}
      <div
        className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-amber-400/20 rounded-full blur-[140px] pointer-events-none -z-0 transition-transform duration-700 ease-out"
        style={{
          transform: "translate3d(calc(var(--ratio-x, 0) * 35px), calc(var(--ratio-y, 0) * 35px), 0)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-orange-500/20 rounded-full blur-[140px] pointer-events-none -z-0 transition-transform duration-700 ease-out"
        style={{
          transform: "translate3d(calc(var(--ratio-x, 0) * -35px), calc(var(--ratio-y, 0) * -35px), 0)",
        }}
      />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Compact Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-[11px] font-extrabold uppercase tracking-widest mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
            16 Integrated Care Steps • Minimized Scrolling
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-[#0B132B] tracking-tight leading-tight">
            HWAI Complete Hospital <span className="text-amber-600">Workflow</span>
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 font-medium">
            One continuous connected flow from patient registration to hospital-wide analytics — visible at a glance.
          </p>

          {/* View Mode Toggle Pill */}
          <div className="mt-4 inline-flex items-center p-1 rounded-full bg-slate-200/70 border border-slate-300/80 shadow-xs">
            <button
              onClick={() => setViewMode("compact")}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                viewMode === "compact"
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Compact Grid (All Visible)
            </button>
            <button
              onClick={() => setViewMode("timeline")}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                viewMode === "timeline"
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Vertical Stepper Flow
            </button>
          </div>
        </div>

        {/* ── VIEW 1: COMPACT 4-COLUMN WORKFLOW GRID (Zero unnecessary scrolling) ── */}
        {viewMode === "compact" ? (
          <div className="space-y-4">
            {/* 4 Phase Summary Ribbon */}
            <div className="hidden lg:grid grid-cols-4 gap-3 text-center mb-1">
              <div className="text-[11px] font-extrabold uppercase tracking-wider text-amber-800 bg-amber-50/90 border border-amber-200/80 py-1.5 px-3 rounded-xl flex items-center justify-center gap-1.5 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                Phase 1: Registration & OPD (01–04)
              </div>
              <div className="text-[11px] font-extrabold uppercase tracking-wider text-[#C03514] bg-orange-50/90 border border-orange-200/90 py-1.5 px-3 rounded-xl flex items-center justify-center gap-1.5 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#FF4D27]" />
                Phase 2: Diagnostics & IPD (05–08)
              </div>
              <div className="text-[11px] font-extrabold uppercase tracking-wider text-orange-800 bg-orange-50/90 border border-orange-200/80 py-1.5 px-3 rounded-xl flex items-center justify-center gap-1.5 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#FF4D27]" />
                Phase 3: Surgery & Pharmacy (09–12)
              </div>
              <div className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-800 bg-emerald-50/90 border border-emerald-200/80 py-1.5 px-3 rounded-xl flex items-center justify-center gap-1.5 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                Phase 4: Admin & Analytics (13–16)
              </div>
            </div>

            {/* 16 Compact Interactive Cards in 4 Columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3">
              {steps.map((step, index) => {
                const StepIcon = step.icon;
                const isFeatured = step.featured;
                return (
                  <article
                    key={step.title}
                    className={`relative rounded-2xl p-3.5 border transition-all duration-300 flex flex-col justify-between group min-h-[92px] ${
                      isFeatured
                        ? "bg-gradient-to-br from-[#FF4D27] to-[#E03A14] border-orange-400/50 text-white shadow-lg shadow-[#FF4D27]/25 hover:shadow-xl hover:shadow-[#FF4D27]/35 hover:-translate-y-0.5"
                        : "bg-white/95 backdrop-blur-xs border-slate-200/90 text-slate-900 shadow-2xs hover:shadow-md hover:border-orange-300 hover:bg-white hover:-translate-y-0.5"
                    }`}
                  >
                    {/* Top Row: Step Tag + Lucide Icon */}
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span
                        className={`text-[10.5px] font-black tabular-nums px-2 py-0.5 rounded-md ${
                          isFeatured
                            ? "bg-white text-[#E03A14] font-black shadow-xs"
                            : "bg-amber-50 text-amber-800 border border-amber-200/80"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div
                        className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-110 ${
                          isFeatured
                            ? "bg-white/20 text-white border border-white/30 backdrop-blur-xs"
                            : "bg-slate-50 text-amber-600 border border-slate-200/80 group-hover:bg-amber-50"
                        }`}
                      >
                        <StepIcon className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Title */}
                    <div>
                      <h3
                        className={`text-xs sm:text-[13px] font-extrabold leading-tight tracking-tight ${
                          isFeatured ? "text-white" : "text-[#0B132B] group-hover:text-orange-600 transition-colors"
                        }`}
                      >
                        {step.title}
                      </h3>

                      {/* Micro Details Badges */}
                      {step.details && (
                        <div className="mt-2 flex flex-wrap gap-1">
                          {step.details.map((detail) => (
                            <span
                              key={detail}
                              className={`inline-flex items-center gap-1 text-[9.5px] font-semibold px-1.5 py-0.5 rounded ${
                                isFeatured
                                  ? "bg-black/20 text-white border border-white/20 backdrop-blur-xs"
                                  : "bg-slate-100 text-slate-600 border border-slate-200/70"
                              }`}
                            >
                              {isFeatured && detail.includes("QR") ? (
                                <ScanLine className="w-2.5 h-2.5 text-white shrink-0" />
                              ) : (
                                <CheckCircle2
                                  className={`w-2.5 h-2.5 shrink-0 ${
                                    isFeatured ? "text-white" : "text-emerald-600"
                                  }`}
                                />
                              )}
                              {detail}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>

            {/* Bottom Compact Benefit Strip */}
            <div className="mt-4 p-3 rounded-2xl bg-white/80 backdrop-blur-md border border-slate-200 shadow-2xs flex flex-wrap items-center justify-between gap-3 text-xs text-slate-700 font-semibold">
              <div className="flex items-center gap-2 text-emerald-700 font-bold">
                <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
                <span>All 16 Modules Connected in Real-Time</span>
              </div>
              <div className="flex items-center gap-4 text-[11px] text-slate-500">
                <span>• Zero Data Re-entry</span>
                <span>• Integrated ABDM & ABHA</span>
                <span>• Real-Time Hospital Analytics</span>
              </div>
            </div>
          </div>
        ) : (
          /* ── VIEW 2: TRADITIONAL STEPPER VIEW ── */
          <div className="max-w-3xl mx-auto relative mt-6">
            <div className="absolute left-[23px] sm:left-[31px] top-6 bottom-6 w-0.5 bg-slate-200 rounded-full overflow-hidden">
              <div className="hwai-progress-line w-full h-full bg-gradient-to-b from-amber-500 via-[#FF4D27] to-emerald-500 origin-top" />
            </div>

            <div className="space-y-3 sm:space-y-4">
              {steps.map((step, index) => {
                const StepIcon = step.icon;
                return (
                  <article
                    key={step.title}
                    className="hwai-flow-row grid grid-cols-[48px_1fr] sm:grid-cols-[64px_1fr] gap-3 sm:gap-5 items-start relative"
                    style={{ "--delay": `${Math.min(index * 40, 500)}ms` }}
                  >
                    <div
                      className={`relative z-10 w-12 h-12 sm:w-16 sm:h-16 rounded-full border-[3px] flex items-center justify-center shadow-sm ${
                        step.featured
                          ? "bg-[#0B132B] border-amber-400 text-amber-300"
                          : "bg-white border-amber-200 text-amber-600"
                      }`}
                    >
                      <StepIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>

                    <div
                      className={`min-h-16 px-4 py-3 sm:px-5 sm:py-3.5 rounded-2xl border transition-all duration-300 ${
                        step.featured
                          ? "bg-gradient-to-br from-[#FF4D27] to-[#E03A14] border-orange-400/50 shadow-lg shadow-[#FF4D27]/25 text-white"
                          : "bg-white/95 border-slate-200 hover:border-orange-300 hover:shadow-md text-slate-900"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <span
                          className={`text-[11px] font-black tabular-nums mt-0.5 px-1.5 py-0.5 rounded ${
                            step.featured ? "bg-white text-[#E03A14]" : "text-amber-700 bg-amber-50"
                          }`}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <div className="min-w-0 flex-1">
                          <h3
                            className={`text-sm sm:text-base font-extrabold leading-snug ${
                              step.featured ? "text-white" : "text-[#0B132B]"
                            }`}
                          >
                            {step.title}
                          </h3>

                          {step.details && (
                            <div className="mt-2.5 flex flex-wrap gap-2">
                              {step.details.map((detail) => (
                                <span
                                  key={detail}
                                  className={`inline-flex items-center gap-1.5 text-[11px] font-semibold px-2 py-0.5 rounded ${
                                    step.featured ? "text-white bg-black/20 border border-white/20" : "text-slate-600 bg-slate-100"
                                  }`}
                                >
                                  {step.featured && detail.includes("QR") ? (
                                    <ScanLine className="w-3.5 h-3.5 text-white shrink-0" />
                                  ) : (
                                    <CheckCircle2
                                      className={`w-3.5 h-3.5 shrink-0 ${
                                        step.featured ? "text-white" : "text-emerald-600"
                                      }`}
                                    />
                                  )}
                                  {detail}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            <div className="mt-6 ml-[60px] sm:ml-[84px] flex items-center gap-3 text-xs sm:text-sm font-bold text-emerald-700">
              <CheckCircle2 className="w-5 h-5 shrink-0" />
              Complete visibility across the patient and hospital lifecycle
            </div>
          </div>
        )}
      </div>

      <style>{`
        .hwai-flow-row { opacity: 0; transform: translateX(14px); }
        .hwai-simple-flow.is-visible .hwai-flow-row {
          animation: hwai-row-in 480ms cubic-bezier(.2,.8,.2,1) var(--delay) forwards;
        }
        .hwai-progress-line { transform: scaleY(0); }
        .hwai-simple-flow.is-visible .hwai-progress-line {
          animation: hwai-line-down 1.8s cubic-bezier(.2,.8,.2,1) 180ms forwards;
        }
        @keyframes hwai-row-in {
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes hwai-line-down {
          to { transform: scaleY(1); }
        }
        @media (prefers-reduced-motion: reduce) {
          .hwai-flow-row { opacity: 1; transform: none; }
          .hwai-progress-line { transform: scaleY(1); }
          .hwai-simple-flow.is-visible .hwai-flow-row,
          .hwai-simple-flow.is-visible .hwai-progress-line { animation: none; }
        }
      `}</style>
    </section>
  );
};

export default HwaiWorkflowSection;
