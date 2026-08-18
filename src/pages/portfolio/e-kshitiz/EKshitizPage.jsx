import React, { useState, useEffect } from "react";
import { EKshitizHero } from "./EKshitizHero";
import { EKshitizFeatures } from "./EKshitizFeatures";
import { RequestDemoModal } from "../../../components/common/RequestDemoModal";
import {
  Phone,
  CheckCircle2,
  XCircle,
  ArrowRight,
} from "lucide-react";

export const EKshitizPage = () => {
  const [isBottomDemoOpen, setIsBottomDemoOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans">
      {/* 1. Hero Section */}
      <EKshitizHero />

      {/* 2. Enterprise Features Section */}
      <EKshitizFeatures />

      {/* 3. Comparison Matrix */}
      <section className="py-20 sm:py-28 bg-white border-t border-slate-200/80">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-5xl font-black text-[#0B132B] tracking-tight">
              Legacy Systems vs <span className="text-[#FF4D27]">e_Kshitiz HIMS</span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Why leading multispeciality hospitals upgrade to e_Kshitiz Enterprise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Legacy Standalone Systems */}
            <div className="bg-rose-50/50 rounded-3xl p-8 border border-rose-200/70 space-y-6">
              <div className="flex items-center gap-3 text-rose-700">
                <XCircle className="w-6 h-6" />
                <h3 className="text-xl font-extrabold">Legacy Disconnected Software</h3>
              </div>
              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-rose-500" />
                  Isolated software for billing, pharmacy, and LIS diagnostics
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-rose-500" />
                  High risk of billing leakage & unrecorded medication dispensing
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-rose-500" />
                  Weeks required to compile manual NABH audit compliance files
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-rose-500" />
                  No real-time occupancy or OT utilization dashboard for management
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
                  <span className="w-2 h-2 rounded-full bg-[#FF4D27]" />
                  Centralized EMR, billing, IPD/OPD, LIS, RIS, and Pharmacy integration
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#FF4D27]" />
                  Automated drug interaction warnings & zero-leakage patient billing
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#FF4D27]" />
                  1-Click automated NABH & NABL audit report generation
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#FF4D27]" />
                  Real-time bed occupancy, OT scheduling, and financial analytics
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
            Discover how e_Kshitiz centralizes multispeciality hospital operations, IPD/OPD, and NABH compliance.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => setIsBottomDemoOpen(true)}
              className="px-7 py-3.5 rounded-full bg-gradient-to-r from-[#FF4D27] via-orange-500 to-amber-500 hover:from-orange-600 hover:to-[#FF4D27] text-white font-bold text-sm sm:text-base shadow-xl shadow-[#FF4D27]/30 transition-all flex items-center gap-2.5 cursor-pointer"
            >
              <span>Request Live Demo</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <a
              href="tel:+919153998385"
              className="px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-sm sm:text-base transition-all flex items-center gap-2.5 cursor-pointer"
            >
              <Phone className="w-4.5 h-4.5 text-[#FF4D27]" />
              <span>Call Specialist: +91 9153998385</span>
            </a>
          </div>
        </div>

        <RequestDemoModal
          isOpen={isBottomDemoOpen}
          onClose={() => setIsBottomDemoOpen(false)}
          defaultProduct="e_Kshitiz"
        />
      </section>
    </div>
  );
};

export default EKshitizPage;
