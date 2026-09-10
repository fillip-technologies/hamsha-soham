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
      className={`ed-module-flow py-20 sm:py-28 bg-white border-t border-slate-200/80 relative overflow-hidden ${isVisible ? "is-visible" : ""}`}
    >
      <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-sky-50/80 to-transparent pointer-events-none" />
      <div className="max-w-[1100px] mx-auto px-5 sm:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-800 text-xs font-extrabold uppercase tracking-widest mb-5">
            <Settings2 className="w-3.5 h-3.5" />
            24 connected modules
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#0B132B] tracking-tight leading-[1.1]">
            e_Drishti Complete <span className="text-sky-600">Module Structure</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            A single connected platform covering setup, clinical care, operations, outreach, finance, quality, and reporting.
          </p>
        </div>

        <div className="max-w-3xl mx-auto relative">
          <div className="absolute left-[23px] sm:left-[31px] top-6 bottom-6 w-0.5 bg-slate-200 rounded-full overflow-hidden">
            <div className="ed-module-progress w-full h-full bg-gradient-to-b from-sky-500 via-cyan-500 to-[#FF4D27] origin-top" />
          </div>

          <div className="space-y-3 sm:space-y-4">
            {modules.map((module, index) => {
              const ModuleIcon = module.icon;
              const isHighlight = module.title === "EHR" || module.title === "Dashboards";
              return (
                <article
                  key={module.title}
                  className="ed-module-row grid grid-cols-[48px_1fr] sm:grid-cols-[64px_1fr] gap-3 sm:gap-5 items-start relative"
                  style={{ "--delay": `${Math.min(index * 45, 700)}ms` }}
                >
                  <div className={`relative z-10 w-12 h-12 sm:w-16 sm:h-16 rounded-full border-[3px] flex items-center justify-center shadow-sm ${isHighlight ? "bg-[#0B132B] border-sky-400 text-sky-300" : "bg-white border-sky-200 text-sky-600"}`}>
                    <ModuleIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>

                  <div className={`min-h-16 px-4 py-3.5 sm:px-5 sm:py-4 rounded-2xl border transition-all duration-300 ${isHighlight ? "bg-[#0B132B] border-[#0B132B] shadow-lg shadow-slate-900/10" : "bg-[#F8FAFC] border-slate-200 hover:bg-white hover:border-sky-300 hover:shadow-md"}`}>
                    <div className="flex items-start gap-3">
                      <span className={`text-[11px] font-black tabular-nums mt-0.5 ${isHighlight ? "text-sky-300" : "text-sky-700"}`}>
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div className="min-w-0 flex-1">
                        <h3 className={`text-sm sm:text-base font-extrabold leading-snug ${isHighlight ? "text-white" : "text-[#0B132B]"}`}>
                          {module.title}
                        </h3>
                        <div className="mt-2.5 flex flex-wrap gap-x-3 gap-y-1.5">
                          {module.items.map((item) => (
                            <span key={item} className={`inline-flex items-center gap-1.5 text-[11px] font-semibold ${isHighlight ? "text-slate-300" : "text-slate-600"}`}>
                              <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 ${isHighlight ? "text-sky-300" : "text-cyan-600"}`} />
                              {item}
                            </span>
                          ))}
                        </div>
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
