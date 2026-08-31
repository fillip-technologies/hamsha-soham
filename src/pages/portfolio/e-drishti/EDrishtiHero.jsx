import React, { useState } from "react";
import {
  ArrowRight,
  Phone,
  Maximize2,
  X,
  Eye,
} from "lucide-react";
import eDrishtiImg from "../../../assets/portfolio/e_Drishti_P_I.png";
import { AnimatedCounter } from "../../../components/common/AnimatedCounter";

export const EDrishtiHero = () => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  return (
    <section className="relative overflow-hidden pt-10 pb-20 sm:pt-16 sm:pb-28 bg-[#F4F8FD] text-slate-900 select-none border-b border-sky-100">
      {/* Background Radial Glow Meshes */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-sky-400/20 via-cyan-300/10 to-transparent rounded-full blur-[140px] pointer-events-none -z-0" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#FF4D27]/15 via-amber-300/10 to-transparent rounded-full blur-[140px] pointer-events-none -z-0" />
      
      {/* Crisp Subtle Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0284c70a_1px,transparent_1px),linear-gradient(to_bottom,#0284c70a_1px,transparent_1px)] bg-[size:36px_36px] pointer-events-none -z-0" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 w-full">
        
        {/* Asymmetric 2-Column Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Action CTAs */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            {/* Master Headline */}
            <h1 className="text-4xl sm:text-6xl font-black text-[#0B132B] tracking-tight leading-[1.10]">
              e_Drishti <br />
              <span className="bg-gradient-to-r from-sky-600 via-cyan-500 to-[#FF4D27] bg-clip-text text-transparent">
                Next-Gen Eye Care Operating System
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              Engineered specifically for eye care hospitals and ophthalmic clinic networks. Unifies refraction charting, auto-refractometer sync, optical inventory POS, and cataract OT workflows into a single intuitive platform.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="https://apps.hamsasoham.com/portal/index.xhtml"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-full bg-gradient-to-r from-sky-600 via-cyan-600 to-sky-700 hover:from-sky-500 hover:to-cyan-500 text-white font-bold text-base flex items-center gap-2.5 shadow-lg shadow-sky-500/25 hover:shadow-xl hover:shadow-sky-500/35 hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                <span>Request Live Demo</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="tel:+919153998385"
                className="px-6 py-3.5 rounded-full bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-semibold text-base flex items-center gap-2 shadow-xs hover:border-sky-300 transition-all cursor-pointer"
              >
                <Phone className="w-4.5 h-4.5 text-sky-600" />
                <span>+91 9153998385</span>
              </a>
            </div>

          </div>

          {/* Right Column: Clean Showcase Frame */}
          <div className="lg:col-span-6 relative">
            
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-sky-400/30 via-cyan-400/20 to-[#FF4D27]/20 rounded-3xl blur-2xl -z-10 transform scale-105" />

            {/* Main Window Container */}
            <div className="relative rounded-3xl bg-slate-950 p-2 sm:p-3 border border-slate-800 shadow-2xl overflow-hidden group">
              
              {/* macOS Header Bar */}
              <div className="bg-slate-900 px-4 py-2.5 rounded-t-2xl border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-500" />
                  <div className="w-3 h-3 rounded-full bg-amber-500" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                </div>
                <div className="text-[11px] font-semibold text-slate-300 bg-slate-950 px-4 py-1 rounded-full border border-slate-800 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  e_Drishti Ophthalmology HIMS Workspace
                </div>
                <button
                  onClick={() => setIsPreviewOpen(true)}
                  className="p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
                  title="Expand Full Screenshot"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>

              {/* Product Image */}
              <div className="relative bg-slate-900 p-2 rounded-b-2xl overflow-hidden">
                <img
                  src={eDrishtiImg}
                  alt="e_Drishti Ophthalmology Interface"
                  className="w-full h-auto object-contain rounded-xl shadow-lg transform group-hover:scale-[1.01] transition-transform duration-500"
                />
              </div>

            </div>

          </div>

        </div>

        {/* Bottom Metrics Strip with Animated Numbers */}
        <div className="mt-16 pt-8 border-t border-sky-200/70 grid grid-cols-2 md:grid-cols-4 gap-6 text-center max-w-5xl mx-auto bg-white/90 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-sky-100 shadow-md">
          <div className="group hover:-translate-y-1 transition-transform">
            <div className="text-3xl sm:text-4xl font-black text-[#0B132B]">
              <AnimatedCounter end={500000} duration={2000} suffix="+" />
            </div>
            <div className="text-xs sm:text-sm text-slate-600 font-medium mt-1">Eye Consults Recorded</div>
          </div>
          <div className="group hover:-translate-y-1 transition-transform">
            <div className="text-3xl sm:text-4xl font-black text-sky-600">
              <AnimatedCounter end={50} duration={1800} suffix="+" />
            </div>
            <div className="text-xs sm:text-sm text-slate-600 font-medium mt-1">Specialty Eye Hospitals</div>
          </div>
          <div className="group hover:-translate-y-1 transition-transform">
            <div className="text-3xl sm:text-4xl font-black text-[#0B132B]">
              <AnimatedCounter end={99.99} decimals={2} duration={2200} suffix="%" />
            </div>
            <div className="text-xs sm:text-sm text-slate-600 font-medium mt-1">Uptime & Reliability</div>
          </div>
          <div className="group hover:-translate-y-1 transition-transform">
            <div className="text-3xl sm:text-4xl font-black text-[#FF4D27]">
              <AnimatedCounter end={100} duration={2000} suffix="%" />
            </div>
            <div className="text-xs sm:text-sm text-slate-600 font-medium mt-1">NABH Audit Ready</div>
          </div>
        </div>

      </div>

      {/* Screenshot Lightbox Preview Modal */}
      {isPreviewOpen && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setIsPreviewOpen(false)}
        >
          <div
            className="relative bg-slate-900 rounded-3xl max-w-6xl w-full p-4 sm:p-6 border border-slate-700 shadow-2xl space-y-4 max-h-[92vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-white">
              <div className="flex items-center gap-2">
                <Eye className="w-5 h-5 text-sky-400" />
                <h3 className="text-lg font-bold">e_Drishti Ophthalmology HIMS Full Workspace</h3>
              </div>
              <button
                onClick={() => setIsPreviewOpen(false)}
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-auto bg-slate-950 p-2 rounded-xl border border-slate-800 flex items-center justify-center">
              <img
                src={eDrishtiImg}
                alt="e_Drishti Full Interface"
                className="w-full max-h-[75vh] object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default EDrishtiHero;
