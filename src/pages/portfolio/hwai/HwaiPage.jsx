import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { HwaiHero } from "./HwaiHero";
import { HwaiFeatures } from "./HwaiFeatures";
import { HwaiWorkflowSection } from "./HwaiWorkflowSection";
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
  const matrixRef = useRef(null);
  const ctaRef = useRef(null);

  // Performance-optimized direct DOM mouse tracking (Zero React re-renders for smooth 120fps)
  const createMouseHandlers = (ref) => ({
    onMouseMove: (e) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const ratioX = ((x / rect.width) - 0.5) * 2;
      const ratioY = ((y / rect.height) - 0.5) * 2;

      ref.current.style.setProperty("--mouse-x", `${x}px`);
      ref.current.style.setProperty("--mouse-y", `${y}px`);
      ref.current.style.setProperty("--ratio-x", ratioX.toFixed(3));
      ref.current.style.setProperty("--ratio-y", ratioY.toFixed(3));
    },
    onMouseEnter: () => {
      if (!ref.current) return;
      ref.current.style.setProperty("--mouse-opacity", "1");
    },
    onMouseLeave: () => {
      if (!ref.current) return;
      ref.current.style.setProperty("--mouse-opacity", "0");
      ref.current.style.setProperty("--ratio-x", "0");
      ref.current.style.setProperty("--ratio-y", "0");
    },
  });

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

      {/* 3. Complete Hospital Workflow */}
      <HwaiWorkflowSection />

      {/* 4. Dropdown Section 1: Enterprise Multispecialty */}
      <HwaiEnterpriseSection />

      {/* 5. Dropdown Section 2: NABH and NABL Compliant Model */}
      <HwaiComplianceSection />

      {/* 6. Dropdown Section 3: ABDM and NHA Integration */}
      <HwaiAbdmSection />

      {/* 7. Comparison Matrix */}
      <section
        ref={matrixRef}
        {...createMouseHandlers(matrixRef)}
        className="py-20 sm:py-28 bg-[#FAFCFF] border-t border-slate-200/80 relative overflow-hidden select-none transition-colors duration-500"
        style={{
          "--mouse-x": "50%",
          "--mouse-y": "50%",
          "--mouse-opacity": "0",
          "--ratio-x": "0",
          "--ratio-y": "0",
        }}
      >
        {/* 1. Base Subtle Geometric Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#d977060f_1px,transparent_1px),linear-gradient(to_bottom,#d977060f_1px,transparent_1px)] bg-[size:36px_36px] pointer-events-none -z-0" />

        {/* 2. Full Background Atmospheric Darkening Wash on Hover */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-500 -z-0 bg-[#0B132B]/[0.08]"
          style={{
            opacity: "var(--mouse-opacity, 0)",
          }}
        />

        {/* 3. Dark Outer Vignette */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-500 -z-0"
          style={{
            opacity: "var(--mouse-opacity, 0)",
            background: "radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), transparent 35%, rgba(11, 19, 43, 0.18) 100%)",
          }}
        />

        {/* 4. Bold Dark Grid Lines (Revealed under cursor on hover) */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300 -z-0 bg-[linear-gradient(to_right,#0F172A_1.5px,transparent_1.5px),linear-gradient(to_bottom,#0F172A_1.5px,transparent_1.5px)] bg-[size:36px_36px]"
          style={{
            opacity: "calc(var(--mouse-opacity, 0) * 0.45)",
            WebkitMaskImage: "radial-gradient(550px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), black 15%, transparent 80%)",
            maskImage: "radial-gradient(550px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), black 15%, transparent 80%)",
          }}
        />

        {/* 5. Deep Dark Shadow Halo + Vivid Amber/Flame Spotlight Core */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-400 -z-0"
          style={{
            opacity: "var(--mouse-opacity, 0)",
            background: `
              radial-gradient(350px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(217, 119, 6, 0.35) 0%, rgba(255, 77, 39, 0.25) 45%, transparent 80%),
              radial-gradient(700px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(15, 23, 42, 0.26) 0%, rgba(30, 41, 59, 0.16) 50%, transparent 80%)
            `,
          }}
        />

        {/* 6. Parallax Background Deep Mesh Glows */}
        <div
          className="absolute top-1/4 left-0 w-[650px] h-[650px] bg-gradient-to-br from-amber-400/25 via-orange-400/15 to-transparent rounded-full blur-[140px] pointer-events-none -z-0 transition-transform duration-700 ease-out"
          style={{
            transform: "translate3d(calc(var(--ratio-x, 0) * 35px), calc(var(--ratio-y, 0) * 35px), 0)",
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-[650px] h-[650px] bg-gradient-to-tr from-orange-500/25 via-amber-500/15 to-transparent rounded-full blur-[140px] pointer-events-none -z-0 transition-transform duration-700 ease-out"
          style={{
            transform: "translate3d(calc(var(--ratio-x, 0) * -35px), calc(var(--ratio-y, 0) * -35px), 0)",
          }}
        />

        {/* 7. Interactive Background Floating Tech Accents */}
        <div
          className="absolute top-[16%] left-[8%] text-amber-500/40 pointer-events-none -z-0 transition-transform duration-700 ease-out hidden md:block"
          style={{
            transform: "translate3d(calc(var(--ratio-x, 0) * -25px), calc(var(--ratio-y, 0) * -25px), 0)",
          }}
        >
          <div className="w-8 h-8 rounded-full border border-amber-400/40 flex items-center justify-center">
            <span className="w-2 h-2 rounded-full bg-amber-500/80 animate-ping" />
          </div>
        </div>

        <div
          className="absolute bottom-[20%] left-[28%] text-orange-500/30 pointer-events-none -z-0 transition-transform duration-700 ease-out hidden md:block"
          style={{
            transform: "translate3d(calc(var(--ratio-x, 0) * 30px), calc(var(--ratio-y, 0) * 30px), 0)",
          }}
        >
          <span className="text-2xl font-light select-none">+</span>
        </div>

        <div
          className="absolute top-[24%] right-[16%] text-amber-600/35 pointer-events-none -z-0 transition-transform duration-700 ease-out hidden md:block"
          style={{
            transform: "translate3d(calc(var(--ratio-x, 0) * -30px), calc(var(--ratio-y, 0) * -30px), 0)",
          }}
        >
          <span className="text-3xl font-light select-none">+</span>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          
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
            <div className="bg-rose-50/70 backdrop-blur-md rounded-3xl p-8 border border-rose-200/80 space-y-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
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
            <div className="bg-amber-50/80 backdrop-blur-md rounded-3xl p-8 border border-amber-300/90 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 space-y-6">
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

      {/* 8. Bottom Compact CTA Banner */}
      <section
        ref={ctaRef}
        {...createMouseHandlers(ctaRef)}
        className="py-12 sm:py-16 bg-slate-950 text-white relative overflow-hidden select-none"
        style={{
          "--mouse-x": "50%",
          "--mouse-y": "50%",
          "--mouse-opacity": "0",
          "--ratio-x": "0",
          "--ratio-y": "0",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-amber-950 via-slate-900 to-slate-950 pointer-events-none" />
        
        {/* Glowing hover spotlight on dark banner */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-400 -z-0"
          style={{
            opacity: "var(--mouse-opacity, 0)",
            background: `
              radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(245, 158, 11, 0.28) 0%, rgba(255, 77, 39, 0.18) 45%, transparent 80%)
            `,
          }}
        />
        
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
