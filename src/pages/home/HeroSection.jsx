import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Phone,
} from "lucide-react";
import heroBgImg from "../../assets/home-image/hero-section.png";
import heroDashboardImg from "../../assets/hero-dashboard.jpeg";
import { RequestDemoModal } from "../../components/common/RequestDemoModal";
import { AnimatedCounter } from "../../components/common/AnimatedCounter";

export const HeroSection = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  // Clean URL hash if any exists
  useEffect(() => {
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
    }
  }, []);

  return (
    <section className="relative overflow-hidden pt-16 pb-24 sm:pt-24 sm:pb-36 select-none min-h-[90vh] flex items-center justify-center text-white">
      {/* Fixed Parallax Background Image from assets/home-image/hero-section.png */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed z-0 pointer-events-none"
        style={{ backgroundImage: `url(${heroBgImg})` }}
      />

      {/* Seamless Dark Contrast Gradient Overlay so Background Image is 100% Visible & Text is Laser Sharp */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/65 via-slate-900/50 to-slate-950/75 z-0" />

      {/* Elevated Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 w-full">
        {/* Centered Hero Content */}
        <div className="max-w-4xl mx-auto text-center space-y-8">

          {/* Master Headline in Crisp High-Contrast Text */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.10] drop-shadow-md">
            Complete Healthcare  <br />
            <span className="bg-gradient-to-r from-[#FF5722] via-[#FF9800] to-amber-300 bg-clip-text text-transparent">
              Information Management Solutions
            </span>
          </h1>

          {/* Sub-headline */}
          <p className="text-lg sm:text-xl text-slate-200 font-normal leading-relaxed max-w-2xl mx-auto drop-shadow-sm">
            Digitize your hospital operations with an integrated, secure and scalable Healthcare IT platform designed for hospitals, eye-care organizations and healthcare groups.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => setIsDemoModalOpen(true)}
              className="px-8 py-4 rounded-full bg-white hover:bg-slate-100 text-slate-950 font-bold text-base flex items-center gap-3 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all focus:outline-none cursor-pointer"
            >
              <span>Request Live Demo</span>
              <ArrowRight className="w-5 h-5 text-slate-950" />
            </button>

            <a
              href="tel:+919153998385"
              className="px-7 py-4 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/25 text-white font-medium text-base flex items-center gap-2.5 shadow-sm transition-all focus:outline-none cursor-pointer"
            >
              <Phone className="w-5 h-5 text-white" />
              <span>+91 9153998385</span>
            </a>
          </div>

        </div>

        {/* macOS Browser Showcase Mockup */}
        <div className="mt-16 max-w-6xl mx-auto relative">

          {/* Ambient Glow Gradient behind Showcase */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FF4D27]/25 via-amber-500/20 to-cyan-500/20 rounded-3xl blur-3xl -z-10 transform scale-105" />

          {/* Window Frame */}
          <div className="rounded-3xl bg-slate-900/90 border border-white/20 shadow-2xl overflow-hidden soft-card-shadow backdrop-blur-md">

            {/* macOS Control Dots Header Bar */}
            <div className="bg-slate-950/90 px-5 py-3 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>

              <div className="text-[11px] font-semibold text-slate-300 bg-slate-900 px-4 py-1 rounded-full border border-white/10 shadow-xs">
                https://apps.hamsasoham.com • Live Analytics & HIMS Suite
              </div>

              <div className="w-12" />
            </div>

            {/* High-Resolution Dashboard Mockup Image */}
            <div className="relative overflow-hidden bg-slate-900">
              <img
                src={heroDashboardImg}
                alt="Hamsa Soham Healthcare IT & HIMS Dashboard"
                className="w-full h-auto object-cover transform hover:scale-[1.01] transition-transform duration-500"
              />
            </div>

          </div>

        </div>

        {/* Minimalist Trust Metrics Strip with Animated Numbers */}
        <div className="mt-20 pt-10 border-t border-white/15 grid grid-cols-2 md:grid-cols-4 gap-8 text-center max-w-4xl mx-auto bg-slate-900/70 backdrop-blur-md p-8 rounded-3xl border border-white/10 shadow-2xl transition-all duration-300">
          <div className="group hover:-translate-y-1 transition-transform">
            <div className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              <AnimatedCounter end={50} duration={1800} suffix="+" />
            </div>
            <div className="text-xs text-slate-300 font-medium mt-1 group-hover:text-white transition-colors">
              Multispeciality Hospitals
            </div>
          </div>

          <div className="group hover:-translate-y-1 transition-transform">
            <div className="text-3xl sm:text-4xl font-black text-[#FF5722] tracking-tight">
              <AnimatedCounter end={100} duration={2000} suffix="%" />
            </div>
            <div className="text-xs text-slate-300 font-medium mt-1 group-hover:text-white transition-colors">
              NABH & NABL Compliant
            </div>
          </div>

          <div className="group hover:-translate-y-1 transition-transform">
            <div className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              <AnimatedCounter end={99.99} decimals={2} duration={2200} suffix="%" />
            </div>
            <div className="text-xs text-slate-300 font-medium mt-1 group-hover:text-white transition-colors">
              Operational Uptime
            </div>
          </div>

          <div className="group hover:-translate-y-1 transition-transform">
            <div className="text-3xl sm:text-4xl font-black text-[#FF5722] tracking-tight flex items-center justify-center gap-1">
              <AnimatedCounter end={24} duration={1500} />
              <span>/</span>
              <AnimatedCounter end={7} duration={1500} />
            </div>
            <div className="text-xs text-slate-300 font-medium mt-1 group-hover:text-white transition-colors">
              Round-the-clock Support
            </div>
          </div>
        </div>

      </div>

      {/* Unified Demo Request Modal */}
      <RequestDemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />
    </section>
  );
};

export default HeroSection;
