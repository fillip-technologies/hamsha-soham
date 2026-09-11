import { useEffect, useRef, useState } from "react";
import {
  Ambulance, BarChart3, Boxes, BriefcaseBusiness, Building2, CalendarDays,
  CheckCircle2, ClipboardCheck, CreditCard, Database, FileArchive,
  FileHeart, FolderOpen, Glasses, HandCoins, Headphones, HeartPulse,
  Microscope, PackageSearch, Pill, Settings2, ShieldCheck, UserCog, Users,
} from "lucide-react";

const modules = [
  { title: "Universal Master", icon: Database, items: ["Country", "State", "District", "Block", "Village", "Discount", "Time Scheduling"] },
  { title: "Company Setup", icon: Building2, items: ["Company", "Unit", "Department", "License", "Manpower", "Taxation"] },
  { title: "User Setup", icon: UserCog, items: ["Users", "Roles", "Permissions", "Unit Tagging"] },
  { title: "Service Setup", icon: Settings2, items: ["Payer", "Services", "Pricing", "Packages", "Billing"] },
  { title: "Front Office", icon: CreditCard, items: ["OP Billing", "Admission", "Refund", "Patient Dashboard", "History"] },
  { title: "Appointment", icon: CalendarDays, items: ["Scheduler", "Admin Panel"] },
  { title: "EHR", icon: FileHeart, items: ["EHR Worklist", "Prescription"] },
  { title: "Laboratory", icon: Microscope, items: ["Sample Collection", "Reporting", "LIS"] },
  { title: "OT", icon: HeartPulse, items: ["OT Notes", "Surgical Record", "Checklists"] },
  { title: "MRD", icon: FileArchive, items: ["Discharge Summary", "Image Capture", "MRD Checklist"] },
  { title: "Ward Management", icon: ClipboardCheck, items: ["Ward Checklist"] },
  { title: "Pharmacy", icon: Pill, items: ["Sale", "Purchase", "GRN", "Inventory", "Indent", "Stock"] },
  { title: "Optical", icon: Glasses, items: ["Sale", "Purchase", "GRN", "Inventory", "Orders", "Delivery"] },
  { title: "General Store", icon: Boxes, items: ["Purchase", "GRN", "Stock", "Issue", "Consumption"] },
  { title: "Outreach", icon: Ambulance, items: ["Registration", "Camps", "EHR", "Counselling", "Planner"] },
  { title: "TPA", icon: ShieldCheck, items: ["Payment", "Bill Settlement"] },
  { title: "Project Management", icon: BriefcaseBusiness, items: ["Projects", "Donor", "Donation"] },
  { title: "Fund Raising", icon: HandCoins, items: ["Leads", "Tasks"] },
  { title: "Document Management", icon: FolderOpen, items: ["My Drive"] },
  { title: "Asset Management", icon: PackageSearch, items: ["Asset Register", "Fixed Assets"] },
  { title: "Call Ticketing", icon: Headphones, items: ["Helpdesk", "SLA", "Technician"] },
  { title: "QA Form", icon: CheckCircle2, items: ["Feedback", "Reports"] },
  { title: "Dashboards", icon: BarChart3, items: ["Admin", "Finance", "IT", "Optical", "Outreach", "Quality", "MIS"] },
  { title: "Reports", icon: Users, items: ["OPD", "IPD", "Pharmacy", "Optical", "General Store", "Finance", "Account", "Counsellor", "Medical Audit", "Miscellaneous"] },
];

export const EDrishtiModuleStructure = () => {
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
    }, { threshold: 0.05 });
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="module-structure"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`ed-module-flow py-12 sm:py-16 bg-[#FAFCFF] border-t border-slate-200/80 relative overflow-hidden select-none transition-colors duration-500 ${isVisible ? "is-visible" : ""}`}
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
        className="absolute inset-0 pointer-events-none transition-opacity duration-500 -z-0 bg-[#0B132B]/[0.08]"
        style={{
          opacity: "var(--mouse-opacity, 0)",
        }}
      />

      {/* 2. Dark Outer Vignette */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500 -z-0"
        style={{
          opacity: "var(--mouse-opacity, 0)",
          background: "radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), transparent 35%, rgba(11, 19, 43, 0.18) 100%)",
        }}
      />

      {/* 5. Deep Dark Shadow Halo + Vivid Sky/Cyan Spotlight Core */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-400 -z-0"
        style={{
          opacity: "var(--mouse-opacity, 0)",
          background: `
            radial-gradient(350px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(2, 132, 199, 0.32) 0%, rgba(6, 182, 212, 0.22) 45%, transparent 80%),
            radial-gradient(700px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(15, 23, 42, 0.24) 0%, rgba(30, 41, 59, 0.16) 50%, transparent 80%)
          `,
        }}
      />

      {/* 6. Parallax Background Deep Mesh Glows */}
      <div
        className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-sky-400/20 rounded-full blur-[140px] pointer-events-none -z-0 transition-transform duration-700 ease-out"
        style={{
          transform: "translate3d(calc(var(--ratio-x, 0) * 35px), calc(var(--ratio-y, 0) * 35px), 0)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-[140px] pointer-events-none -z-0 transition-transform duration-700 ease-out"
        style={{
          transform: "translate3d(calc(var(--ratio-x, 0) * -35px), calc(var(--ratio-y, 0) * -35px), 0)",
        }}
      />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Compact Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-800 text-[11px] font-extrabold uppercase tracking-widest mb-3">
            <Settings2 className="w-3.5 h-3.5 text-sky-600" />
            24 Connected Modules • Minimized Scrolling
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-[#0B132B] tracking-tight leading-tight">
            e_Drishti Complete <span className="text-sky-600">Module Structure</span>
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 font-medium">
            A single connected platform covering setup, clinical care, optical POS, outreach, finance, and reporting.
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

        {/* ── VIEW 1: COMPACT 4-COLUMN MODULE GRID (Zero unnecessary scrolling) ── */}
        {viewMode === "compact" ? (
          <div className="space-y-4">
            {/* 4 Functional Domain Ribbons */}
            <div className="hidden lg:grid grid-cols-4 gap-3 text-center mb-1">
              <div className="text-[11px] font-extrabold uppercase tracking-wider text-sky-800 bg-sky-50/90 border border-sky-200/80 py-1.5 px-3 rounded-xl flex items-center justify-center gap-1.5 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-sky-500" />
                Setup & Masters (01–04)
              </div>
              <div className="text-[11px] font-extrabold uppercase tracking-wider text-cyan-800 bg-cyan-50/90 border border-cyan-200/80 py-1.5 px-3 rounded-xl flex items-center justify-center gap-1.5 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-cyan-500" />
                Clinical & OT Care (05–11)
              </div>
              <div className="text-[11px] font-extrabold uppercase tracking-wider text-amber-800 bg-amber-50/90 border border-amber-200/80 py-1.5 px-3 rounded-xl flex items-center justify-center gap-1.5 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                Optical, Stores & TPA (12–16)
              </div>
              <div className="text-[11px] font-extrabold uppercase tracking-wider text-indigo-800 bg-indigo-50/90 border border-indigo-200/80 py-1.5 px-3 rounded-xl flex items-center justify-center gap-1.5 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-indigo-500" />
                Enterprise MIS & BI (17–24)
              </div>
            </div>

            {/* 24 Compact Interactive Cards in 4 Columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3">
              {modules.map((module, index) => {
                const ModuleIcon = module.icon;
                const isHighlight =
                  module.title === "EHR" ||
                  module.title === "Dashboards" ||
                  module.title === "Optical" ||
                  module.title === "OT" ||
                  module.title === "Ward Management";
                return (
                  <article
                    key={module.title}
                    className={`relative rounded-2xl p-3.5 border transition-all duration-300 flex flex-col justify-between group min-h-[96px] ${
                      isHighlight
                        ? "bg-gradient-to-br from-[#FF4D27] to-[#E03A14] border-orange-400/50 text-white shadow-lg shadow-[#FF4D27]/25 hover:shadow-xl hover:shadow-[#FF4D27]/35 hover:-translate-y-0.5"
                        : "bg-white/95 backdrop-blur-xs border-slate-200/90 text-slate-900 shadow-2xs hover:shadow-md hover:border-sky-300 hover:bg-white hover:-translate-y-0.5"
                    }`}
                  >
                    {/* Top Row: Module Step Badge + Icon */}
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span
                        className={`text-[10.5px] font-black tabular-nums px-2 py-0.5 rounded-md ${
                          isHighlight
                            ? "bg-white text-[#E03A14] font-black shadow-xs"
                            : "bg-sky-50 text-sky-800 border border-sky-200/80"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div
                        className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-110 ${
                          isHighlight
                            ? "bg-white/20 text-white border border-white/30 backdrop-blur-xs"
                            : "bg-slate-50 text-sky-600 border border-slate-200/80 group-hover:bg-sky-50"
                        }`}
                      >
                        <ModuleIcon className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Module Title */}
                    <div>
                      <h3
                        className={`text-xs sm:text-[13px] font-extrabold leading-tight tracking-tight ${
                          isHighlight ? "text-white" : "text-[#0B132B] group-hover:text-sky-700 transition-colors"
                        }`}
                      >
                        {module.title}
                      </h3>

                      {/* Micro Item Badges */}
                      {module.items && (
                        <div className="mt-2 flex flex-wrap gap-1">
                          {module.items.slice(0, 4).map((item) => (
                            <span
                              key={item}
                              className={`inline-flex items-center gap-1 text-[9.5px] font-semibold px-1.5 py-0.5 rounded ${
                                isHighlight
                                  ? "bg-black/20 text-white border border-white/20 backdrop-blur-xs"
                                  : "bg-slate-100 text-slate-600 border border-slate-200/70"
                              }`}
                            >
                              <CheckCircle2
                                className={`w-2.5 h-2.5 shrink-0 ${
                                  isHighlight ? "text-white" : "text-cyan-600"
                                }`}
                              />
                              {item}
                            </span>
                          ))}
                          {module.items.length > 4 && (
                            <span
                              className={`text-[9px] font-bold px-1 py-0.5 rounded ${
                                isHighlight ? "text-orange-100 font-bold" : "text-slate-400"
                              }`}
                            >
                              +{module.items.length - 4} more
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>

            {/* Bottom Compact Benefit Strip */}
            <div className="mt-4 p-3 rounded-2xl bg-white/80 backdrop-blur-md border border-slate-200 shadow-2xs flex flex-wrap items-center justify-between gap-3 text-xs text-slate-700 font-semibold">
              <div className="flex items-center gap-2 text-sky-700 font-bold">
                <CheckCircle2 className="w-4 h-4 shrink-0 text-sky-600" />
                <span>All 24 Specialized Modules Fully Unified Under e_Drishti</span>
              </div>
              <div className="flex items-center gap-4 text-[11px] text-slate-500">
                <span>• Central Master Data</span>
                <span>• Optical POS & Lens Inventory</span>
                <span>• NABH Audit Trail</span>
                <span>• Executive MIS & Analytics</span>
              </div>
            </div>
          </div>
        ) : (
          /* ── VIEW 2: TRADITIONAL STEPPER VIEW ── */
          <div className="max-w-3xl mx-auto relative mt-6">
            <div className="absolute left-[23px] sm:left-[31px] top-6 bottom-6 w-0.5 bg-slate-200 rounded-full overflow-hidden">
              <div className="ed-module-progress w-full h-full bg-gradient-to-b from-sky-500 via-cyan-500 to-[#FF4D27] origin-top" />
            </div>

            <div className="space-y-3 sm:space-y-4">
              {modules.map((module, index) => {
                const ModuleIcon = module.icon;
                const isHighlight =
                  module.title === "EHR" ||
                  module.title === "Dashboards" ||
                  module.title === "Optical" ||
                  module.title === "OT" ||
                  module.title === "Ward Management";
                return (
                  <article
                    key={module.title}
                    className="ed-module-row grid grid-cols-[48px_1fr] sm:grid-cols-[64px_1fr] gap-3 sm:gap-5 items-start relative"
                    style={{ "--delay": `${Math.min(index * 35, 600)}ms` }}
                  >
                    <div
                      className={`relative z-10 w-12 h-12 sm:w-16 sm:h-16 rounded-full border-[3px] flex items-center justify-center shadow-sm ${
                        isHighlight
                          ? "bg-gradient-to-br from-[#FF4D27] to-[#E03A14] border-white text-white shadow-md shadow-[#FF4D27]/30"
                          : "bg-white border-sky-200 text-sky-600"
                      }`}
                    >
                      <ModuleIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>

                    <div
                      className={`min-h-16 px-4 py-3 sm:px-5 sm:py-3.5 rounded-2xl border transition-all duration-300 ${
                        isHighlight
                          ? "bg-gradient-to-br from-[#FF4D27] to-[#E03A14] border-orange-400/50 text-white shadow-lg shadow-[#FF4D27]/20"
                          : "bg-white/95 border-slate-200 hover:border-sky-300 hover:shadow-md"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <span
                          className={`text-[11px] font-black tabular-nums mt-0.5 ${
                            isHighlight ? "text-white font-black" : "text-sky-700"
                          }`}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <div className="min-w-0 flex-1">
                          <h3
                            className={`text-sm sm:text-base font-extrabold leading-snug ${
                              isHighlight ? "text-white" : "text-[#0B132B]"
                            }`}
                          >
                            {module.title}
                          </h3>

                          {module.items && (
                            <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1">
                              {module.items.map((item) => (
                                <span
                                  key={item}
                                  className={`inline-flex items-center gap-1 text-[11px] font-semibold ${
                                    isHighlight ? "text-white/90" : "text-slate-600"
                                  }`}
                                >
                                  <CheckCircle2
                                    className={`w-3 h-3 shrink-0 ${
                                      isHighlight ? "text-white" : "text-cyan-600"
                                    }`}
                                  />
                                  {item}
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

            <div className="mt-6 ml-[60px] sm:ml-[84px] flex items-center gap-3 text-xs sm:text-sm font-bold text-sky-700">
              <CheckCircle2 className="w-5 h-5 shrink-0" />
              One platform connecting every clinical and operational module
            </div>
          </div>
        )}
      </div>

      <style>{`
        .ed-module-row { opacity: 0; transform: translateX(14px); }
        .ed-module-flow.is-visible .ed-module-row {
          animation: ed-module-in 480ms cubic-bezier(.2,.8,.2,1) var(--delay) forwards;
        }
        .ed-module-progress { transform: scaleY(0); }
        .ed-module-flow.is-visible .ed-module-progress {
          animation: ed-module-line 2.1s cubic-bezier(.2,.8,.2,1) 180ms forwards;
        }
        @keyframes ed-module-in { to { opacity: 1; transform: translateX(0); } }
        @keyframes ed-module-line { to { transform: scaleY(1); } }
        @media (prefers-reduced-motion: reduce) {
          .ed-module-row { opacity: 1; transform: none; }
          .ed-module-progress { transform: scaleY(1); }
          .ed-module-flow.is-visible .ed-module-row,
          .ed-module-flow.is-visible .ed-module-progress { animation: none; }
        }
      `}</style>
    </section>
  );
};

export default EDrishtiModuleStructure;
