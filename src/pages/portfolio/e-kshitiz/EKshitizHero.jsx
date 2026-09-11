import React, { useState, useRef } from "react";
import {
  ArrowRight,
  Phone,
  Maximize2,
  X,
  Building2,
} from "lucide-react";
import eKshitizImg from "../../../assets/portfolio/e_Kshitiz.png";
import { AnimatedCounter } from "../../../components/common/AnimatedCounter";

export const EKshitizHero = () => {
  const heroRef = useRef(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  // Performance-optimized direct DOM mouse tracking (Zero React re-renders for smooth 120fps)
  const handleMouseMove = (e) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const ratioX = ((x / rect.width) - 0.5) * 2;
    const ratioY = ((y / rect.height) - 0.5) * 2;

    heroRef.current.style.setProperty("--mouse-x", `${x}px`);
    heroRef.current.style.setProperty("--mouse-y", `${y}px`);
    heroRef.current.style.setProperty("--ratio-x", ratioX.toFixed(3));
    heroRef.current.style.setProperty("--ratio-y", ratioY.toFixed(3));
  };

  const handleMouseEnter = () => {
    if (!heroRef.current) return;
    heroRef.current.style.setProperty("--mouse-opacity", "1");
  };

  const handleMouseLeave = () => {
    if (!heroRef.current) return;
    heroRef.current.style.setProperty("--mouse-opacity", "0");
    heroRef.current.style.setProperty("--ratio-x", "0");
    heroRef.current.style.setProperty("--ratio-y", "0");
  };

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative overflow-hidden pt-10 pb-20 sm:pt-16 sm:pb-28 bg-[#F4F8FD] text-slate-900 select-none border-b border-[#FF4D27]/10 transition-colors duration-500"
      style={{
        "--mouse-x": "50%",
        "--mouse-y": "40%",
        "--mouse-opacity": "0",
        "--ratio-x": "0",
        "--ratio-y": "0",
      }}
    >
      {/* 1. Base Subtle Geometric Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ff4d270f_1px,transparent_1px),linear-gradient(to_bottom,#ff4d270f_1px,transparent_1px)] bg-[size:36px_36px] pointer-events-none -z-0" />

      {/* 2. Full Background Atmospheric Darkening Wash on Hover */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500 -z-0 bg-[#0B132B]/[0.06]"
        style={{
          opacity: "var(--mouse-opacity, 0)",
        }}
      />

      {/* 3. Dark Outer Vignette */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500 -z-0"
        style={{
          opacity: "var(--mouse-opacity, 0)",
          background: "radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 40%), transparent 40%, rgba(11, 19, 43, 0.14) 100%)",
        }}
      />

      {/* 4. Bold Dark Grid Lines (Revealed under cursor on hover) */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300 -z-0 bg-[linear-gradient(to_right,#0F172A_1.5px,transparent_1.5px),linear-gradient(to_bottom,#0F172A_1.5px,transparent_1.5px)] bg-[size:36px_36px]"
        style={{
          opacity: "calc(var(--mouse-opacity, 0) * 0.45)",
          WebkitMaskImage: "radial-gradient(550px circle at var(--mouse-x, 50%) var(--mouse-y, 40%), black 15%, transparent 80%)",
          maskImage: "radial-gradient(550px circle at var(--mouse-x, 50%) var(--mouse-y, 40%), black 15%, transparent 80%)",
        }}
      />

      {/* 5. Deep Dark Shadow Halo + Vivid Flame/Orange/Amber Spotlight Core */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-400 -z-0"
        style={{
          opacity: "var(--mouse-opacity, 0)",
          background: `
            radial-gradient(320px circle at var(--mouse-x, 50%) var(--mouse-y, 40%), rgba(255, 77, 39, 0.30) 0%, rgba(245, 158, 11, 0.22) 45%, transparent 80%),
            radial-gradient(650px circle at var(--mouse-x, 50%) var(--mouse-y, 40%), rgba(15, 23, 42, 0.22) 0%, rgba(30, 41, 59, 0.14) 50%, transparent 80%)
          `,
        }}
      />

      {/* 6. Parallax Background Deep Mesh Glows */}
      <div
        className="absolute top-0 right-0 w-[650px] h-[650px] bg-gradient-to-br from-[#FF4D27]/25 via-orange-400/20 to-transparent rounded-full blur-[130px] pointer-events-none -z-0 transition-transform duration-700 ease-out"
        style={{
          transform: "translate3d(calc(var(--ratio-x, 0) * -35px), calc(var(--ratio-y, 0) * -35px), 0)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[550px] h-[550px] bg-gradient-to-tr from-rose-500/20 via-amber-400/15 to-transparent rounded-full blur-[130px] pointer-events-none -z-0 transition-transform duration-700 ease-out"
        style={{
          transform: "translate3d(calc(var(--ratio-x, 0) * 30px), calc(var(--ratio-y, 0) * 30px), 0)",
        }}
      />

      {/* 7. Interactive Background Floating Tech Accents */}
      <div
        className="absolute top-[16%] left-[8%] text-[#FF4D27]/40 pointer-events-none -z-0 transition-transform duration-700 ease-out hidden md:block"
        style={{
          transform: "translate3d(calc(var(--ratio-x, 0) * -25px), calc(var(--ratio-y, 0) * -25px), 0)",
        }}
      >
        <div className="w-8 h-8 rounded-full border border-[#FF4D27]/40 flex items-center justify-center">
          <span className="w-2 h-2 rounded-full bg-[#FF4D27]/80 animate-ping" />
        </div>
      </div>

      <div
        className="absolute bottom-[20%] left-[34%] text-amber-600/30 pointer-events-none -z-0 transition-transform duration-700 ease-out hidden md:block"
        style={{
          transform: "translate3d(calc(var(--ratio-x, 0) * 30px), calc(var(--ratio-y, 0) * 30px), 0)",
        }}
      >
        <span className="text-2xl font-light select-none">+</span>
      </div>

      <div
        className="absolute top-[26%] right-[22%] text-orange-500/35 pointer-events-none -z-0 transition-transform duration-700 ease-out hidden md:block"
        style={{
          transform: "translate3d(calc(var(--ratio-x, 0) * -30px), calc(var(--ratio-y, 0) * -30px), 0)",
        }}
      >
        <span className="text-3xl font-light select-none">+</span>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 w-full">
        
        {/* Asymmetric 2-Column Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Action CTAs */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            {/* Master Headline */}
            <h1 className="text-4xl sm:text-6xl font-black text-[#0B132B] tracking-tight leading-[1.10]">
              e_Kshitiz <br />
              <span className="bg-gradient-to-r from-[#FF4D27] via-orange-500 to-amber-500 bg-clip-text text-transparent">
                Enterprise Hospital Information System
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              Full-scale enterprise HIMS for large hospitals and medical centers managing IPD, OPD, OT, ICU, Pharmacy, LIS Diagnostics, and Finance centrally with 100% NABH compliance.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="https://apps.hamsasoham.com/portal/index.xhtml"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-full bg-gradient-to-r from-[#FF4D27] via-orange-500 to-amber-500 hover:from-orange-600 hover:to-[#FF4D27] text-white font-bold text-base flex items-center gap-2.5 shadow-lg shadow-[#FF4D27]/25 hover:shadow-xl hover:shadow-[#FF4D27]/35 hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                <span>Request Live Demo</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="tel:+919153998385"
                className="px-6 py-3.5 rounded-full bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-semibold text-base flex items-center gap-2 shadow-xs hover:border-[#FF4D27]/40 transition-all cursor-pointer"
              >
                <Phone className="w-4.5 h-4.5 text-[#FF4D27]" />
                <span>+91 9153998385</span>
              </a>
            </div>

          </div>

          {/* Right Column: Clean Showcase Frame */}
          <div className="lg:col-span-6 relative">
            
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#FF4D27]/30 via-orange-400/20 to-amber-400/20 rounded-3xl blur-2xl -z-10 transform scale-105" />

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
                  e_Kshitiz Enterprise HIMS Workspace
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
              <div className="relative bg-slate-900 p-2 rounded-b-2xl overflow-hidden flex items-center justify-center">
                <img
                  src={eKshitizImg}
                  alt="e_Kshitiz Enterprise HIMS Interface"
                  className="w-full h-auto object-contain rounded-xl shadow-lg transform group-hover:scale-[1.01] transition-transform duration-500"
                />
              </div>

            </div>

          </div>

        </div>

        {/* Bottom Metrics Strip with Animated Numbers */}
        <div className="mt-16 pt-8 border-t border-orange-200/70 grid grid-cols-2 md:grid-cols-4 gap-6 text-center max-w-5xl mx-auto bg-white/90 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-orange-100 shadow-md">
          <div className="group hover:-translate-y-1 transition-transform">
            <div className="text-3xl sm:text-4xl font-black text-[#0B132B]">
              <AnimatedCounter end={1000000} duration={2000} suffix="+" />
            </div>
            <div className="text-xs sm:text-sm text-slate-600 font-medium mt-1">IPD & OPD Records</div>
          </div>
          <div className="group hover:-translate-y-1 transition-transform">
            <div className="text-3xl sm:text-4xl font-black text-[#FF4D27]">
              <AnimatedCounter end={50} duration={1800} suffix="+" />
            </div>
            <div className="text-xs sm:text-sm text-slate-600 font-medium mt-1">Multi-Speciality Hospitals</div>
          </div>
          <div className="group hover:-translate-y-1 transition-transform">
            <div className="text-3xl sm:text-4xl font-black text-[#0B132B]">
              <AnimatedCounter end={99.99} decimals={2} duration={2200} suffix="%" />
            </div>
            <div className="text-xs sm:text-sm text-slate-600 font-medium mt-1">System Uptime</div>
          </div>
          <div className="group hover:-translate-y-1 transition-transform">
            <div className="text-3xl sm:text-4xl font-black text-amber-600">
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
                <Building2 className="w-5 h-5 text-[#FF4D27]" />
                <h3 className="text-lg font-bold">e_Kshitiz Enterprise HIMS Full Workspace</h3>
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
                src={eKshitizImg}
                alt="e_Kshitiz Full Interface"
                className="w-full max-h-[75vh] object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default EKshitizHero;
