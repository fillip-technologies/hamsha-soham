import React, { useEffect } from "react";
import { EKshitizLiteHero } from "./EKshitizLiteHero";
import { EKshitizLiteFeatures } from "./EKshitizLiteFeatures";
import {
  Phone,
  CheckCircle2,
  XCircle,
  ArrowRight,
} from "lucide-react";

export const EKshitizLitePage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans">
      {/* 1. Hero Section */}
      <EKshitizLiteHero />

      {/* 2. Modular Features Section */}
      <EKshitizLiteFeatures />

      {/* 3. Comparison Matrix */}
      <section className="py-20 sm:py-28 bg-white border-t border-slate-200/80">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-5xl font-black text-[#0B132B] tracking-tight">
              Manual Hospital Billing vs <span className="text-emerald-600">e_Kshitiz Lite</span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Upgrade your nursing home or mid-sized hospital with zero IT complexity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Manual Registers */}
            <div className="bg-rose-50/50 rounded-3xl p-8 border border-rose-200/70 space-y-6">
              <div className="flex items-center gap-3 text-rose-700">
                <XCircle className="w-6 h-6" />
                <h3 className="text-xl font-extrabold">Manual Registers & Paper Records</h3>
              </div>
              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-rose-500" />
                  Handwritten doctor prescriptions prone to pharmacy dispensing errors
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-rose-500" />
                  Long patient queues at OPD counter during peak morning hours
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-rose-500" />
                  Untracked patient medical history across repeat visits
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-rose-500" />
                  Manual daily cash reconciliation taking hours after OPD close
                </li>
              </ul>
            </div>

            {/* e_Kshitiz Lite HIMS */}
            <div className="bg-emerald-50/70 rounded-3xl p-8 border border-emerald-300/80 shadow-md space-y-6">
              <div className="flex items-center gap-3 text-emerald-800">
                <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                <h3 className="text-xl font-extrabold">With e_Kshitiz Lite</h3>
              </div>
              <ul className="space-y-3 text-sm text-slate-800 font-medium">
                <li className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-600" />
                  1-Click printed OPD prescriptions & diagnostic test requests
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-600" />
                  Fast barcode billing reducing patient queue time by 75%
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-600" />
                  Instant electronic health record (EHR) lookup for repeat patients
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-600" />
                  Automated daily billing summary & cash collection reports
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Bottom Compact CTA Banner */}
      <section className="py-10 sm:py-14 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950 via-slate-900 to-slate-950 pointer-events-none" />
        
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10 text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Schedule Your Live{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              e_Kshitiz Lite Demo
            </span>
          </h2>

          <p className="text-slate-300 text-base max-w-2xl mx-auto">
            Discover how e_Kshitiz Lite simplifies OPD billing, electronic health records, and pharmacy management.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="https://apps.hamsasoham.com/portal/index.xhtml"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-full bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-sm sm:text-base shadow-xl shadow-emerald-500/30 transition-all flex items-center gap-2.5 cursor-pointer"
            >
              <span>Request Live Demo</span>
              <ArrowRight className="w-5 h-5" />
            </a>

            <a
              href="tel:+919153998385"
              className="px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-sm sm:text-base transition-all flex items-center gap-2.5 cursor-pointer"
            >
              <Phone className="w-4.5 h-4.5 text-emerald-400" />
              <span>Call Specialist: +91 9153998385</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EKshitizLitePage;
