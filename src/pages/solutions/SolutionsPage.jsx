import React, { useEffect } from "react";
import { SolutionsHero } from "./SolutionsHero";
import { SolutionsGrid } from "./SolutionsGrid";
import { SDLCProcess } from "./SDLCProcess";
import { Link } from "react-router-dom";
import { Phone, ArrowRight, Sparkles, Eye, Layers, Building2 } from "lucide-react";

export const SolutionsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans select-none">
      {/* 1. Solutions Hero Section */}
      <SolutionsHero />

      {/* 2. Structured 4-Column Solutions Matrix (Exact Match to User Reference UI) */}
      <section className="py-12 sm:py-16 bg-[#070D1E] text-white relative overflow-hidden border-y border-slate-800">
        {/* Ambient background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-gradient-to-r from-purple-500/10 via-sky-500/10 to-[#FF4D27]/10 blur-[120px] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          
          <div className="bg-[#0A1128]/95 backdrop-blur-2xl border border-slate-700/60 rounded-3xl shadow-2xl p-8 sm:p-12 text-left">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-700/60 gap-8 md:gap-0">
              
              {/* COLUMN 1: HWAI */}
              <div className="md:pr-8 space-y-4 pt-4 md:pt-0">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-white shadow-inner">
                    <Sparkles className="w-6 h-6 text-purple-300" />
                  </div>
                  <h3 className="text-xl font-black text-white tracking-tight">
                    HWAI
                  </h3>
                </div>

                <ul className="space-y-3 text-sm text-slate-300">
                  <li className="flex items-start gap-2.5">
                    <span className="text-slate-400 select-none mt-0.5">•</span>
                    <Link to="/products/hwai#enterprise-multispecialty" className="hover:text-white transition-colors">
                      Enterprise Multispecialty
                    </Link>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-slate-400 select-none mt-0.5">•</span>
                    <Link to="/products/hwai#nabh-nabl-compliance" className="hover:text-white transition-colors">
                      NABH and NABL compliant model
                    </Link>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-slate-400 select-none mt-0.5">•</span>
                    <Link to="/products/hwai#abdm-nha-integration" className="hover:text-white transition-colors">
                      ABDM and NHA Integration
                    </Link>
                  </li>
                </ul>
              </div>

              {/* COLUMN 2: e_Drishti */}
              <div className="md:px-8 space-y-4 pt-6 md:pt-0">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-white shadow-inner">
                    <Eye className="w-6 h-6 text-orange-300" />
                  </div>
                  <h3 className="text-xl font-black text-white tracking-tight">
                    e_Drishti
                  </h3>
                </div>

                <ul className="space-y-3 text-sm text-slate-300">
                  <li className="flex items-start gap-2.5">
                    <span className="text-slate-400 select-none mt-0.5">•</span>
                    <Link to="/products/e-drishti" className="hover:text-white transition-colors">
                      Enterprise Eye Hospital
                    </Link>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-slate-400 select-none mt-0.5">•</span>
                    <Link to="/products/e-drishti" className="hover:text-white transition-colors">
                      Registration to Inventory Management
                    </Link>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-slate-400 select-none mt-0.5">•</span>
                    <Link to="/products/e-drishti" className="hover:text-white transition-colors">
                      Comprehensive Eye EMR
                    </Link>
                  </li>
                </ul>
              </div>

              {/* COLUMN 3: Lite Products */}
              <div className="md:px-8 space-y-4 pt-6 md:pt-0">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-white shadow-inner">
                    <Layers className="w-6 h-6 text-emerald-300" />
                  </div>
                  <h3 className="text-xl font-black text-white tracking-tight">
                    Lite Products
                  </h3>
                </div>

                <ul className="space-y-3 text-sm text-slate-300">
                  <li className="flex items-start gap-2.5">
                    <span className="text-slate-400 select-none mt-0.5">•</span>
                    <Link to="/products/e-kshitiz-lite" className="hover:text-emerald-400 font-semibold transition-colors">
                      e_Kshitiz Lite
                    </Link>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-slate-400 select-none mt-0.5">•</span>
                    <Link to="/products/e-drishti-lite" className="hover:text-emerald-400 font-semibold transition-colors">
                      e_Drishti Lite
                    </Link>
                  </li>
                </ul>
              </div>

              {/* COLUMN 4: e_Kshitiz */}
              <div className="md:pl-8 space-y-4 pt-6 md:pt-0">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-white shadow-inner">
                    <Building2 className="w-6 h-6 text-blue-300" />
                  </div>
                  <h3 className="text-xl font-black text-white tracking-tight">
                    e_Kshitiz
                  </h3>
                </div>

                <ul className="space-y-3 text-sm text-slate-300">
                  <li className="flex items-start gap-2.5">
                    <span className="text-slate-400 select-none mt-0.5">•</span>
                    <Link to="/products/e-kshitiz" className="hover:text-white transition-colors">
                      Workforce / SMB Healthcare
                    </Link>
                  </li>
                </ul>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 3. Tailored Solutions Grid */}
      <SolutionsGrid />


      {/* 3. 5-Step Software Development Life Cycle (SDLC Process from hamsasoham.com/web-development) */}
      <SDLCProcess />

      {/* 4. Value Proposition Matrix */}
      <section className="py-20 sm:py-28 bg-white border-t border-slate-200/80 text-left">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-5xl font-black text-[#0B132B] tracking-tight">
              Why Healthcare Leaders Choose <span className="text-[#FF4D27]">Hamsa Soham</span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Enterprise architecture engineered for zero downtime, 100% NABH compliance, and effortless staff adoption.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Box 1 */}
            <div className="p-8 rounded-3xl bg-[#F8FAFD] border border-slate-200/90 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-orange-50 text-[#FF4D27] flex items-center justify-center border border-orange-100 font-black text-lg">
                01
              </div>
              <h3 className="text-xl font-extrabold text-[#0B132B]">NABH & NABL Compliance</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Pre-configured clinical audit templates, infection control checklists, and automated NABH quality indicator reporting.
              </p>
            </div>

            {/* Box 2 */}
            <div className="p-8 rounded-3xl bg-[#F8FAFD] border border-slate-200/90 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center border border-sky-100 font-black text-lg">
                02
              </div>
              <h3 className="text-xl font-extrabold text-[#0B132B]">Rapid Server Setup</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Fast server deployment engines get your clinic or multispeciality hospital operational in as little as 1 hour to 1 day.
              </p>
            </div>

            {/* Box 3 */}
            <div className="p-8 rounded-3xl bg-[#F8FAFD] border border-slate-200/90 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100 font-black text-lg">
                03
              </div>
              <h3 className="text-xl font-extrabold text-[#0B132B]">24/7 Dedicated Support</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Our specialized healthcare software engineers provide round-the-clock technical support and staff onboarding.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 6. Bottom Compact CTA Banner */}
      <section className="py-10 sm:py-14 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-[#1C2A52] to-slate-950 pointer-events-none" />
        
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10 text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Need a Customized{" "}
            <span className="bg-gradient-to-r from-[#FF4D27] via-amber-400 to-sky-400 bg-clip-text text-transparent">
              Healthcare Solution?
            </span>
          </h2>

          <p className="text-slate-300 text-base max-w-2xl mx-auto">
            Contact our solution architects to design a customized HIMS or AI suite for your medical institution.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              to="/contact"
              className="px-7 py-3 rounded-full bg-gradient-to-r from-[#FF4D27] via-orange-500 to-sky-600 hover:from-[#FF4D27] hover:to-sky-700 text-white font-bold text-sm sm:text-base shadow-xl shadow-[#FF4D27]/30 transition-all flex items-center gap-2.5"
            >
              <span>Contact Solution Specialists</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href="tel:+919153998385"
              className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-sm sm:text-base transition-all flex items-center gap-2"
            >
              <Phone className="w-4.5 h-4.5 text-[#FF4D27]" />
              <span>+91 9153998385</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SolutionsPage;
