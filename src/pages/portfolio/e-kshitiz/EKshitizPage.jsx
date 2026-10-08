import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { EKshitizHero } from "./EKshitizHero";
import { EKshitizWorkforceSection } from "./EKshitizWorkforceSection";
import { EKshitizFeatures } from "./EKshitizFeatures";
import {
  Phone,
  CheckCircle2,
  XCircle,
  ArrowRight,
} from "lucide-react";
import { SEO } from "../../../components/common/SEO";

export const EKshitizPage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const timer = setTimeout(() => {
        const elem = document.getElementById(id);
        if (elem) {
          elem.scrollIntoView({ behavior: "smooth" });
        }
      }, 150);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans">
      {/* Page Meta Title & Description */}
      <SEO
        title="Hospital Billing Software India | e_Kshitiz HIMS"
        description="Upgrade from legacy systems to e_Kshitiz HIMS, trusted hospital billing software India, with centralized EMR, zero‑leakage billing, and real‑time analytics."
      />

      {/* 1. Hero Section */}
      <EKshitizHero />

      {/* 2. Single Dropdown Section: Workforce / SMB Healthcare */}
      <EKshitizWorkforceSection />

      {/* 3. Enterprise Features Section */}
      <EKshitizFeatures />

      {/* 3. Comparison Matrix */}
      <section className="py-20 sm:py-28 bg-white border-t border-slate-200/80">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">

          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-5xl font-black text-[#0B132B] tracking-tight">
              Legacy Systems vs <span className="text-[#FF4D27]">e_Kshitiz HIMS</span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Top Multispeciality Hospitals are now switching from legacy and fragmented systems to e_Kshitiz Enterprise, which is widely used and accepted as top-of-the-line hospital billing software India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Legacy Fragmented Systems */}
            <div className="bg-rose-50/50 rounded-3xl p-8 border border-rose-200/70 space-y-6">
              <div className="flex items-center gap-3 text-rose-700">
                <XCircle className="w-6 h-6" />
                <h3 className="text-xl font-extrabold">Legacy Fragmented Systems</h3>
              </div>
              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-rose-500 shrink-0" />
                  Billing, pharmacy, and diagnostics modules operate in isolation
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-rose-500 shrink-0" />
                  Vulnerability to billing leakage and dispensing not captured
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-rose-500 shrink-0" />
                  Time-consuming effort to prepare manual NABH audit documentation
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-rose-500 shrink-0" />
                  Lack of real-time dashboards for bed occupancy and OT scheduling
                </li>
              </ul>
            </div>

            {/* e_Kshitiz Enterprise HIMS */}
            <div className="bg-orange-50/70 rounded-3xl p-8 border border-orange-300/80 shadow-md space-y-6">
              <div className="flex items-center gap-3 text-[#FF4D27]">
                <CheckCircle2 className="w-6 h-6 text-[#FF4D27]" />
                <h3 className="text-xl font-extrabold">With e_Kshitiz Enterprise</h3>
              </div>
              <ul className="space-y-3 text-sm text-slate-800 font-medium">
                <li className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#FF4D27] shrink-0" />
                  EMR, Billing, IPD/OPD, LIS, RIS, Pharmacy integrated
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#FF4D27] shrink-0" />
                  Drug interaction and no-leakage billing automated
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#FF4D27] shrink-0" />
                  NABH and NABL audit reports in one click
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#FF4D27] shrink-0" />
                  Real-time dashboards for bed occupancy, OT scheduling, and financial management
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Bottom Compact CTA Banner */}
      <section className="py-10 sm:py-14 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-950 via-slate-900 to-slate-950 pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10 text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Schedule Your Live{" "}
            <span className="bg-gradient-to-r from-[#FF4D27] via-orange-400 to-amber-300 bg-clip-text text-transparent">
              e_Kshitiz Demo
            </span>
          </h2>

          <p className="text-slate-300 text-base max-w-2xl mx-auto">
            From fragmentation to innovation, e_Kshitiz Enterprise is the benchmark of hospital billing software India.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="https://apps.hamsasoham.com/portal/index.xhtml"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-full bg-gradient-to-r from-[#FF4D27] via-orange-500 to-amber-500 hover:from-orange-600 hover:to-[#FF4D27] text-white font-bold text-sm sm:text-base shadow-xl shadow-[#FF4D27]/30 transition-all flex items-center gap-2.5 cursor-pointer"
            >
              <span>Request Live Demo</span>
              <ArrowRight className="w-5 h-5" />
            </a>

            <a
              href="tel:+919153998385"
              className="px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-sm sm:text-base transition-all flex items-center gap-2.5 cursor-pointer"
            >
              <Phone className="w-4.5 h-4.5 text-[#FF4D27]" />
              <span>Call Specialist: +91 9153998385</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EKshitizPage;
