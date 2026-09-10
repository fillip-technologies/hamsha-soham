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
      className={`hwai-simple-flow py-20 sm:py-28 bg-white border-y border-slate-200/80 relative overflow-hidden ${isVisible ? "is-visible" : ""}`}
    >
      <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-amber-50/70 to-transparent pointer-events-none" />
      <div className="max-w-[1100px] mx-auto px-5 sm:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-extrabold uppercase tracking-widest mb-5">
            <ShieldCheck className="w-3.5 h-3.5" />
            End-to-end care journey
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#0B132B] tracking-tight leading-[1.1]">
            HWAI Complete Hospital <span className="text-amber-600">Workflow</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            One connected flow from patient registration to hospital-wide reports and analytics.
          </p>
        </div>

        <div className="max-w-3xl mx-auto relative">
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
                  style={{ "--delay": `${Math.min(index * 55, 650)}ms` }}
                >
                  <div className={`relative z-10 w-12 h-12 sm:w-16 sm:h-16 rounded-full border-[3px] flex items-center justify-center shadow-sm ${step.featured ? "bg-[#0B132B] border-amber-400 text-amber-300" : "bg-white border-amber-200 text-amber-600"}`}>
                    <StepIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>

                  <div className={`min-h-16 px-4 py-3.5 sm:px-5 sm:py-4 rounded-2xl border transition-all duration-300 ${step.featured ? "bg-[#0B132B] border-[#0B132B] shadow-lg shadow-slate-900/10" : "bg-[#F8FAFC] border-slate-200 hover:bg-white hover:border-amber-300 hover:shadow-md"}`}>
                    <div className="flex items-start gap-3">
                      <span className={`text-[11px] font-black tabular-nums mt-0.5 ${step.featured ? "text-amber-300" : "text-amber-700"}`}>
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div className="min-w-0 flex-1">
                        <h3 className={`text-sm sm:text-base font-extrabold leading-snug ${step.featured ? "text-white" : "text-[#0B132B]"}`}>
                          {step.title}
                        </h3>

                        {step.details && (
                          <div className="mt-3 flex flex-col sm:flex-row sm:flex-wrap gap-2">
                            {step.details.map((detail) => (
                              <span key={detail} className={`inline-flex items-center gap-1.5 text-[11px] font-semibold ${step.featured ? "text-slate-300" : "text-slate-600"}`}>
                                {step.featured && detail.includes("QR")
                                  ? <ScanLine className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                                  : <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 ${step.featured ? "text-amber-300" : "text-emerald-600"}`} />}
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
