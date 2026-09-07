import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { HwaiHero } from "./HwaiHero";
import { HwaiFeatures } from "./HwaiFeatures";
import { HwaiEnterpriseSection } from "./HwaiEnterpriseSection";
import { HwaiComplianceSection } from "./HwaiComplianceSection";
import { HwaiAbdmSection } from "./HwaiAbdmSection";
import {
  Phone,
  CheckCircle2,
  XCircle,
  ArrowRight,
} from "lucide-react";

export const HwaiPage = () => {
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
      {/* 1. Hero Section */}
      <HwaiHero />

      {/* 2. AI Capabilities Section */}
      <HwaiFeatures />

      {/* 3. Dropdown Section 1: Enterprise Multispecialty */}
      <HwaiEnterpriseSection />

      {/* 4. Dropdown Section 2: NABH and NABL Compliant Model */}
      <HwaiComplianceSection />

      {/* 5. Dropdown Section 3: ABDM and NHA Integration */}
      <HwaiAbdmSection />

      {/* 6. Comparison Matrix */}
      <section className="py-20 sm:py-28 bg-white border-t border-slate-200/80">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-5xl font-black text-[#0B132B] tracking-tight">
              Traditional Static Reports vs <span className="text-amber-600">HWAI Healthcare Management</span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Transform reactive hospital management into proactive, intelligent healthcare operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Traditional Static Reports */}
            <div className="bg-rose-50/50 rounded-3xl p-8 border border-rose-200/70 space-y-6">
              <div className="flex items-center gap-3 text-rose-700">
                <XCircle className="w-6 h-6" />
                <h3 className="text-xl font-extrabold">Traditional Monthly Reports</h3>
              </div>
              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-rose-500" />
                  Delayed end-of-month financial reports too late to fix revenue leaks
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-rose-500" />
                  No early warning system for OPD crowd surges or bed shortages
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-rose-500" />
                  Manual TPA insurance claim rejections discovered after weeks
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-rose-500" />
                  Static spreadsheets lacking actionable clinical & financial insights
                </li>
              </ul>
            </div>

            {/* HWAI Healthcare Management */}
            <div className="bg-amber-50/70 rounded-3xl p-8 border border-amber-300/80 shadow-md space-y-6">
              <div className="flex items-center gap-3 text-amber-800">
                <CheckCircle2 className="w-6 h-6 text-amber-600" />
                <h3 className="text-xl font-extrabold">With HWAI Platform</h3>
              </div>
              <ul className="space-y-3 text-sm text-slate-800 font-medium">
                <li className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-amber-600" />
                  Real-time revenue leakage audit & automated billing alerts
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-amber-600" />
                  Intelligent queue management forecasting patient wait times accurately
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-amber-600" />
                  Automated pre-audit of TPA insurance claims reducing rejection rate to &lt;2%
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-amber-600" />
                  Live C-suite executive dashboard accessible anywhere on mobile
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Bottom Compact CTA Banner */}
      <section className="py-10 sm:py-14 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-950 via-slate-900 to-slate-950 pointer-events-none" />
        
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10 text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Schedule Your Live{" "}
            <span className="bg-gradient-to-r from-amber-400 via-orange-300 to-yellow-400 bg-clip-text text-transparent">
              HWAI Healthcare Platform Demo
            </span>
          </h2>

          <p className="text-slate-300 text-base max-w-2xl mx-auto">
            Discover how HWAI transforms healthcare management with integrated operational intelligence and real-time revenue audits.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="https://apps.hamsasoham.com/portal/index.xhtml"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-full bg-gradient-to-r from-amber-600 via-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-sm sm:text-base shadow-xl shadow-amber-500/30 transition-all flex items-center gap-2.5 cursor-pointer"
            >
              <span>Request Live Demo</span>
              <ArrowRight className="w-5 h-5" />
            </a>

            <a
              href="tel:+919153998385"
              className="px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-sm sm:text-base transition-all flex items-center gap-2.5 cursor-pointer"
            >
              <Phone className="w-4.5 h-4.5 text-amber-400" />
              <span>Call Specialist: +91 9153998385</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HwaiPage;
