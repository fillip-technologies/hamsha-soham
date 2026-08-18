import React, { useState, useEffect } from "react";
import { EDrishtiLiteHero } from "./EDrishtiLiteHero";
import { EDrishtiLiteFeatures } from "./EDrishtiLiteFeatures";
import { RequestDemoModal } from "../../../components/common/RequestDemoModal";
import {
  Phone,
  CheckCircle2,
  XCircle,
  Eye,
  FileText,
  Zap,
  ArrowRight,
} from "lucide-react";

export const EDrishtiLitePage = () => {
  const [isBottomDemoOpen, setIsBottomDemoOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans">
      {/* 1. Hero Section */}
      <EDrishtiLiteHero />

      {/* 2. Clinic Features Section */}
      <EDrishtiLiteFeatures />

      {/* 3. Comparison Matrix: Manual Worksheets vs e_Drishti Lite */}
      <section className="py-20 sm:py-28 bg-white border-t border-slate-200/80">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-5xl font-black text-[#0B132B] tracking-tight">
              Manual Paper Prescriptions vs <span className="text-purple-600">e_Drishti Lite</span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Streamline your eye clinic operations and eliminate patient wait times.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Manual Paper Register Setup */}
            <div className="bg-rose-50/50 rounded-3xl p-8 border border-rose-200/70 space-y-6">
              <div className="flex items-center gap-3 text-rose-700">
                <XCircle className="w-6 h-6" />
                <h3 className="text-xl font-extrabold">Manual Clinic Registers</h3>
              </div>
              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-rose-500" />
                  Handwritten spectacle prescriptions hard for patients to read
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-rose-500" />
                  Manual stock register discrepancies in optical frame inventory
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-rose-500" />
                  No patient visit history tracking or quick re-consult lookup
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-rose-500" />
                  Time wasted re-typing refraction numbers manually
                </li>
              </ul>
            </div>

            {/* e_Drishti Lite Clinic HIMS */}
            <div className="bg-purple-50/70 rounded-3xl p-8 border border-purple-300/80 shadow-md space-y-6">
              <div className="flex items-center gap-3 text-purple-800">
                <CheckCircle2 className="w-6 h-6 text-purple-600" />
                <h3 className="text-xl font-extrabold">With e_Drishti Lite</h3>
              </div>
              <ul className="space-y-3 text-sm text-slate-800 font-medium">
                <li className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-purple-600" />
                  1-Click printed spectacle & eye drops prescription output
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-purple-600" />
                  Automated frame stock deduction & optical POS barcode billing
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-purple-600" />
                  Instant patient history lookup from past consult visits
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-purple-600" />
                  Direct auto-refractor & diagnostic device connectivity
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Bottom Compact CTA Glass Banner */}
      <section className="py-10 sm:py-14 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-950 via-slate-900 to-slate-950 pointer-events-none" />
        
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10 text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Schedule Your Live{" "}
            <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-sky-400 bg-clip-text text-transparent">
              e_Drishti Lite Demo
            </span>
          </h2>

          <p className="text-slate-300 text-base max-w-2xl mx-auto">
            Discover how e_Drishti Lite simplifies eye clinic consults, optical POS, and patient record management.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => setIsBottomDemoOpen(true)}
              className="px-7 py-3.5 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-sky-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-sm sm:text-base shadow-xl shadow-purple-500/30 transition-all flex items-center gap-2.5 cursor-pointer"
            >
              <span>Request Live Demo</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <a
              href="tel:+919153998385"
              className="px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-sm sm:text-base transition-all flex items-center gap-2.5 cursor-pointer"
            >
              <Phone className="w-4.5 h-4.5 text-purple-400" />
              <span>Call Specialist: +91 9153998385</span>
            </a>
          </div>
        </div>

        <RequestDemoModal
          isOpen={isBottomDemoOpen}
          onClose={() => setIsBottomDemoOpen(false)}
          defaultProduct="e_Drishti Lite"
        />
      </section>
    </div>
  );
};

export default EDrishtiLitePage;
