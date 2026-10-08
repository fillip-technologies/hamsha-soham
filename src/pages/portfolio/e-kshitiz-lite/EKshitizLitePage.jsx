import React, { useEffect } from "react";
import { EKshitizLiteHero } from "./EKshitizLiteHero";
import { EKshitizLiteModularSection } from "./EKshitizLiteModularSection";
import { EKshitizLiteFeatures } from "./EKshitizLiteFeatures";
import {
  Phone,
  CheckCircle2,
  XCircle,
  ArrowRight,
} from "lucide-react";
import { SEO } from "../../../components/common/SEO";

export const EKshitizLitePage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans">
      {/* Page Meta Title & Description */}
      <SEO
        title="Top Hospital Management Software in India | e_Kshitiz Lite"
        description="Switch from manual billing to e_Kshitiz Lite, the top hospital management software in India, with 1‑click prescriptions, faster queues, and smart EHR access."
      />

      {/* 1. Hero Section */}
      <EKshitizLiteHero />

      {/* 2. Need-Based Modular Selection Section */}
      <EKshitizLiteModularSection />

      {/* 3. Modular Features Section */}
      <EKshitizLiteFeatures />

      {/* 3. Comparison Matrix */}
      <section className="py-20 sm:py-28 bg-white border-t border-slate-200/80">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">

          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-5xl font-black text-[#0B132B] tracking-tight">
              Manual Hospital Billing vs <span className="text-emerald-600">e_Kshitiz Lite</span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Healthcare companies have been upgrading their manual register systems to the top hospital management software in India with the purpose of increasing efficiency and accuracy.

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
                  Handwritten prescriptions by doctors, resulting in pharmacy dispensing errors.
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-rose-500" />
                  Frustration in the form of long queues of patients.
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-rose-500" />
                  Absence of a tracked patient's medical history.
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-rose-500" />
                  Long process of cash reconciliation taking hours.
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
                  One-click prescriptions free of any errors.
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-600" />
                  Barcode billing system saving up to 75% of patient queue time.
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-600" />
                  Patient health records (EHR) accessible instantly with one click.
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-600" />
                  Auto-generation of bills and audit reports.
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
            From inefficiency to innovation — that’s why e_Kshitiz Lite is the best hospital management system software in India.
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
