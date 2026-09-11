import React, { useState, useRef } from "react";
import {
  ArrowRight,
  Phone,
  Maximize2,
  X,
  Building2,
} from "lucide-react";
import eKshitizLiteImg from "../../../assets/portfolio/e_KshitizLite.png";
import { AnimatedCounter } from "../../../components/common/AnimatedCounter";

export const EKshitizLiteHero = () => {
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
      className="relative overflow-hidden pt-10 pb-20 sm:pt-16 sm:pb-28 bg-[#F4F8FD] text-slate-900 select-none border-b border-emerald-100 transition-colors duration-500"
      style={{
        "--mouse-x": "50%",
        "--mouse-y": "40%",
        "--mouse-opacity": "0",
        "--ratio-x": "0",
        "--ratio-y": "0",
      }}
    >
      {/* 1. Base Subtle Geometric Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0596690f_1px,transparent_1px),linear-gradient(to_bottom,#0596690f_1px,transparent_1px)] bg-[size:36px_36px] pointer-events-none -z-0" />

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

      {/* 5. Deep Dark Shadow Halo + Vivid Emerald/Teal/Cyan Spotlight Core */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-400 -z-0"
        style={{
          opacity: "var(--mouse-opacity, 0)",
          background: `
            radial-gradient(320px circle at var(--mouse-x, 50%) var(--mouse-y, 40%), rgba(16, 185, 129, 0.28) 0%, rgba(6, 182, 212, 0.22) 45%, transparent 80%),
            radial-gradient(650px circle at var(--mouse-x, 50%) var(--mouse-y, 40%), rgba(15, 23, 42, 0.22) 0%, rgba(30, 41, 59, 0.14) 50%, transparent 80%)
          `,
        }}
      />

      {/* 6. Parallax Background Deep Mesh Glows */}
      <div
        className="absolute top-0 right-0 w-[650px] h-[650px] bg-gradient-to-br from-emerald-500/25 via-teal-400/20 to-transparent rounded-full blur-[130px] pointer-events-none -z-0 transition-transform duration-700 ease-out"
        style={{
          transform: "translate3d(calc(var(--ratio-x, 0) * -35px), calc(var(--ratio-y, 0) * -35px), 0)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[550px] h-[550px] bg-gradient-to-tr from-cyan-500/20 via-green-400/15 to-transparent rounded-full blur-[130px] pointer-events-none -z-0 transition-transform duration-700 ease-out"
        style={{
          transform: "translate3d(calc(var(--ratio-x, 0) * 30px), calc(var(--ratio-y, 0) * 30px), 0)",
        }}
      />

      {/* 7. Interactive Background Floating Tech Accents */}
      <div
        className="absolute top-[16%] left-[8%] text-emerald-500/40 pointer-events-none -z-0 transition-transform duration-700 ease-out hidden md:block"
        style={{
          transform: "translate3d(calc(var(--ratio-x, 0) * -25px), calc(var(--ratio-y, 0) * -25px), 0)",
        }}
      >
        <div className="w-8 h-8 rounded-full border border-emerald-400/40 flex items-center justify-center">
          <span className="w-2 h-2 rounded-full bg-emerald-500/80 animate-ping" />
        </div>
      </div>

      <div
        className="absolute bottom-[20%] left-[34%] text-cyan-600/30 pointer-events-none -z-0 transition-transform duration-700 ease-out hidden md:block"
        style={{
          transform: "translate3d(calc(var(--ratio-x, 0) * 30px), calc(var(--ratio-y, 0) * 30px), 0)",
        }}
      >
        <span className="text-2xl font-light select-none">+</span>
      </div>

      <div
        className="absolute top-[26%] right-[22%] text-teal-600/35 pointer-events-none -z-0 transition-transform duration-700 ease-out hidden md:block"
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
            
            {/* Edition Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-300/80 text-emerald-900 text-xs font-black uppercase tracking-wider shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              Compact Edition • Modules Provided As Per Your Need
            </div>

            {/* Master Headline */}
            <h1 className="text-4xl sm:text-6xl font-black text-[#0B132B] tracking-tight leading-[1.10]">
              e_Kshitiz Lite <br />
              <span className="bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-600 bg-clip-text text-transparent">
                Modular HIMS for Mid-Sized Hospitals
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              The agile, compact edition of our flagship e_Kshitiz HIMS. Built specifically for nursing homes, polyclinics, and mid-sized hospitals—we give you only the modules you actually need today, keeping software costs low and operations blazing fast, with instant upgrades as you grow.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="https://apps.hamsasoham.com/portal/index.xhtml"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-full bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-base flex items-center gap-2.5 shadow-lg shadow-emerald-500/25 hover:shadow-xl hover:shadow-emerald-500/35 hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                <span>Request Live Demo</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="tel:+919153998385"
                className="px-6 py-3.5 rounded-full bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-semibold text-base flex items-center gap-2 shadow-xs hover:border-emerald-300 transition-all cursor-pointer"
              >
                <Phone className="w-4.5 h-4.5 text-emerald-600" />
                <span>+91 9153998385</span>
              </a>
            </div>

          </div>

          {/* Right Column: Clean Showcase Frame */}
          <div className="lg:col-span-6 relative">
            
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-400/30 via-teal-400/20 to-cyan-400/20 rounded-3xl blur-2xl -z-10 transform scale-105" />

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
                  e_Kshitiz Lite Modular HIMS Workspace
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
                  src={eKshitizLiteImg}
                  alt="e_Kshitiz Lite Interface"
                  className="w-full h-auto object-contain rounded-xl shadow-lg transform group-hover:scale-[1.01] transition-transform duration-500"
                />
              </div>

            </div>

          </div>

        </div>

        {/* Bottom Metrics Strip with Animated Numbers */}
        <div className="mt-16 pt-8 border-t border-emerald-200/70 grid grid-cols-2 md:grid-cols-4 gap-6 text-center max-w-5xl mx-auto bg-white/90 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-emerald-100 shadow-md">
          <div className="group hover:-translate-y-1 transition-transform">
            <div className="text-3xl sm:text-4xl font-black text-[#0B132B]">
              <AnimatedCounter end={300000} duration={2000} suffix="+" />
            </div>
            <div className="text-xs sm:text-sm text-slate-600 font-medium mt-1">Patient Consultations</div>
          </div>
          <div className="group hover:-translate-y-1 transition-transform">
            <div className="text-3xl sm:text-4xl font-black text-emerald-600">
              <AnimatedCounter end={80} duration={1800} suffix="+" />
            </div>
            <div className="text-xs sm:text-sm text-slate-600 font-medium mt-1">Mid-Sized Hospitals</div>
          </div>
          <div className="group hover:-translate-y-1 transition-transform">
            <div className="text-3xl sm:text-4xl font-black text-[#0B132B]">
              <AnimatedCounter end={99.99} decimals={2} duration={2200} suffix="%" />
            </div>
            <div className="text-xs sm:text-sm text-slate-600 font-medium mt-1">Uptime Reliability</div>
          </div>
          <div className="group hover:-translate-y-1 transition-transform">
            <div className="text-3xl sm:text-4xl font-black text-teal-600">
              <AnimatedCounter end={30} duration={1500} suffix=" Mins" />
            </div>
            <div className="text-xs sm:text-sm text-slate-600 font-medium mt-1">Modular Setup</div>
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
                <Building2 className="w-5 h-5 text-emerald-400" />
                <h3 className="text-lg font-bold">e_Kshitiz Lite Modular HIMS Full Workspace</h3>
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
                src={eKshitizLiteImg}
                alt="e_Kshitiz Lite Full Interface"
                className="w-full max-h-[75vh] object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default EKshitizLiteHero;
