import React, { useRef } from "react";
import { Activity, CheckCircle2, Cloud, FileText, QrCode, ShieldCheck } from "lucide-react";
import ayushmanLogo from "../../assets/aysuhman-bharat-removebg-preview.png";
import nhaLogo from "../../assets/nha.png";

export const AbdmComplianceSection = () => {
  const sectionRef = useRef(null);

  const coversList = [
    "Instant ABHA Health ID Generation & Aadhaar Verification",
    "Secure ABHA/PHR App Authentication via Unique ABHA Address",
    "Real-time Notifications for Health Record Linking & Generation",
    "Counterless OPD Queue Tokens via HIP Scan & Share QR Code",
    "Seamless Health Record Discovery & Access via PHR Apps",
    "Granular Patient Consent Management for Cross-Facility Doctor Access",
  ];

  const floatingIcons = [
    { Icon: ShieldCheck, className: "top-[14%] left-[8%]", delay: "0s" },
    { Icon: QrCode, className: "top-[18%] right-[12%]", delay: "1.3s" },
    { Icon: Cloud, className: "bottom-[18%] left-[11%]", delay: "2.1s" },
    { Icon: FileText, className: "bottom-[22%] right-[9%]", delay: "3s" },
    { Icon: Activity, className: "top-[46%] right-[4%]", delay: "1.8s" },
  ];

  // Performance-optimized direct DOM mouse tracking (Zero React re-renders for smooth 120fps)
  const handleMouseMove = (e) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const ratioX = ((x / rect.width) - 0.5) * 2;
    const ratioY = ((y / rect.height) - 0.5) * 2;

    sectionRef.current.style.setProperty("--mouse-x", `${x}px`);
    sectionRef.current.style.setProperty("--mouse-y", `${y}px`);
    sectionRef.current.style.setProperty("--ratio-x", ratioX.toFixed(3));
    sectionRef.current.style.setProperty("--ratio-y", ratioY.toFixed(3));
  };

  const handleMouseEnter = () => {
    if (!sectionRef.current) return;
    sectionRef.current.style.setProperty("--mouse-opacity", "1");
  };

  const handleMouseLeave = () => {
    if (!sectionRef.current) return;
    sectionRef.current.style.setProperty("--mouse-opacity", "0");
    sectionRef.current.style.setProperty("--ratio-x", "0");
    sectionRef.current.style.setProperty("--ratio-y", "0");
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="abdm-interactive-section group/abdm relative bg-[#F8FAFD] py-16 sm:py-20 border-b border-slate-200/80 select-none overflow-hidden transition-colors duration-500"
      style={{
        "--mouse-x": "50%",
        "--mouse-y": "50%",
        "--mouse-opacity": "0",
        "--ratio-x": "0",
        "--ratio-y": "0",
      }}
    >
      <style>
        {`
          @keyframes abdm-float {
            0%, 100% { transform: translate3d(0, 0, 0); opacity: 0.16; }
            50% { transform: translate3d(10px, -14px, 0); opacity: 0.28; }
          }

          @keyframes abdm-drift {
            0% { transform: translate3d(-18px, -8px, 0) scale(1); }
            50% { transform: translate3d(18px, 10px, 0) scale(1.03); }
            100% { transform: translate3d(-18px, -8px, 0) scale(1); }
          }

          @keyframes abdm-line-flow {
            0% { stroke-dashoffset: 80; opacity: 0.16; }
            50% { opacity: 0.34; }
            100% { stroke-dashoffset: 0; opacity: 0.16; }
          }

          @keyframes abdm-card-in {
            from { opacity: 0; transform: translateX(-28px); }
            to { opacity: 1; transform: translateX(0); }
          }

          @keyframes abdm-content-in {
            from { opacity: 0; transform: translateX(28px); }
            to { opacity: 1; transform: translateX(0); }
          }

          @keyframes abdm-item-in {
            from { opacity: 0; transform: translateY(12px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes abdm-sheen {
            0% { transform: translateX(-120%) rotate(18deg); opacity: 0; }
            20% { opacity: 0.45; }
            55%, 100% { transform: translateX(140%) rotate(18deg); opacity: 0; }
          }

          .abdm-network-line {
            stroke-dasharray: 8 10;
            animation: abdm-line-flow 7s ease-in-out infinite;
            transition: opacity 260ms ease, stroke-width 260ms ease;
          }

          .abdm-interactive-section:hover .abdm-network-line {
            opacity: 0.48;
            stroke-width: 2;
          }

          .abdm-floating-icon {
            animation: abdm-float 7s ease-in-out infinite;
          }

          .abdm-drift-bg {
            animation: abdm-drift 12s ease-in-out infinite;
          }

          .abdm-card-enter {
            animation: abdm-card-in 700ms ease-out both;
          }

          .abdm-content-enter {
            animation: abdm-content-in 700ms ease-out 140ms both;
          }

          .abdm-check-item {
            animation: abdm-item-in 520ms ease-out both;
          }

          .abdm-cert-card::after {
            content: "";
            position: absolute;
            inset: -40% auto -40% -34%;
            width: 34%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.74), transparent);
            animation: abdm-sheen 5.8s ease-in-out infinite;
            pointer-events: none;
          }

          @media (prefers-reduced-motion: reduce) {
            .abdm-network-line,
            .abdm-floating-icon,
            .abdm-drift-bg,
            .abdm-card-enter,
            .abdm-content-enter,
            .abdm-check-item,
            .abdm-cert-card::after {
              animation: none !important;
              opacity: 0 !important;
            }
          }
        `}
      </style>

      {/* 1. Full Background Atmospheric Darkening Wash on Hover */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500 -z-0 bg-[#0B132B]/[0.06]"
        style={{
          opacity: "var(--mouse-opacity, 0)",
        }}
      />

      {/* 2. Dark Outer Vignette */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500 -z-0"
        style={{
          opacity: "var(--mouse-opacity, 0)",
          background: "radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), transparent 40%, rgba(11, 19, 43, 0.14) 100%)",
        }}
      />

      {/* 3. Deep Dark Shadow Halo + Vivid Flame/Cyan Spotlight Core */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-400 -z-0"
        style={{
          opacity: "var(--mouse-opacity, 0)",
          background: `
            radial-gradient(320px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255, 77, 39, 0.28) 0%, rgba(14, 165, 233, 0.24) 45%, transparent 80%),
            radial-gradient(650px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(15, 23, 42, 0.22) 0%, rgba(30, 41, 59, 0.14) 50%, transparent 80%)
          `,
        }}
      />

      {/* 6. Parallax Background Deep Mesh Glows */}
      <div
        className="absolute top-0 right-0 w-[650px] h-[650px] bg-gradient-to-br from-indigo-500/25 via-sky-400/20 to-transparent rounded-full blur-[130px] pointer-events-none -z-0 transition-transform duration-700 ease-out"
        style={{
          transform: "translate3d(calc(var(--ratio-x, 0) * -35px), calc(var(--ratio-y, 0) * -35px), 0)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[550px] h-[550px] bg-gradient-to-tr from-[#FF4D27]/25 via-emerald-400/20 to-transparent rounded-full blur-[130px] pointer-events-none -z-0 transition-transform duration-700 ease-out"
        style={{
          transform: "translate3d(calc(var(--ratio-x, 0) * 30px), calc(var(--ratio-y, 0) * 30px), 0)",
        }}
      />

      {/* 7. Ambient Decorative Network & Floating Icons */}
      <div
        className="absolute inset-0 pointer-events-none transition-transform duration-700 ease-out"
        style={{
          transform: "translate3d(calc(var(--ratio-x, 0) * -12px), calc(var(--ratio-y, 0) * -12px), 0)",
        }}
      >
        <svg
          className="absolute inset-0 h-full w-full opacity-70"
          viewBox="0 0 1440 620"
          fill="none"
          aria-hidden="true"
          preserveAspectRatio="none"
        >
          <path className="abdm-network-line" d="M75 156C242 96 360 238 505 184C650 130 718 60 905 126C1092 192 1178 108 1355 158" stroke="#0EA5E9" strokeWidth="1.5" />
          <path className="abdm-network-line" d="M18 446C190 352 320 454 480 386C640 318 730 470 884 394C1038 318 1172 422 1420 326" stroke="#22C55E" strokeWidth="1.5" style={{ animationDelay: "1.4s" }} />
          <path className="abdm-network-line" d="M220 295C335 218 475 276 596 252C718 228 814 170 947 230C1080 290 1200 262 1310 204" stroke="#FF4D27" strokeWidth="1.3" style={{ animationDelay: "2.2s" }} />
          {[
            [75, 156],
            [505, 184],
            [905, 126],
            [1355, 158],
            [480, 386],
            [884, 394],
            [1310, 204],
            [596, 252],
          ].map(([cx, cy], idx) => (
            <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={idx % 2 ? "4" : "5"} fill={idx % 3 === 0 ? "#0EA5E9" : "#22C55E"} opacity="0.22" />
          ))}
        </svg>
        {floatingIcons.map(({ Icon, className, delay }, idx) => (
          <div
            key={idx}
            className={`abdm-floating-icon absolute hidden sm:flex h-11 w-11 items-center justify-center rounded-full border border-sky-200/70 bg-white/65 text-sky-500 shadow-sm shadow-sky-100/70 backdrop-blur ${className}`}
            style={{ animationDelay: delay }}
            aria-hidden="true"
          >
            <Icon className="h-5 w-5" />
          </div>
        ))}
      </div>

      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

          {/* Left Column: Official Logos Showcase Card */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center abdm-card-enter">
            <div className="abdm-cert-card relative w-full max-w-sm overflow-hidden bg-gradient-to-b from-slate-50/90 to-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xl shadow-sky-100/40 flex flex-col items-center text-center space-y-6 group hover:border-orange-500/30 hover:-translate-y-1 group-hover/abdm:shadow-2xl group-hover/abdm:shadow-sky-100/70 transition-all duration-300">

              {/* Ayushman Bharat Mission Logo */}
              <div className="flex flex-col items-center">
                <img
                  src={ayushmanLogo}
                  alt="Ayushman Bharat Digital Mission Logo"
                  className="max-h-28 sm:max-h-32 w-auto object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Approved By Divider */}
              <div className="w-full flex items-center gap-3">
                <div className="h-px bg-slate-200 flex-1" />
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Approved By:
                </span>
                <div className="h-px bg-slate-200 flex-1" />
              </div>

              {/* National Health Authority Logo */}
              <div className="flex flex-col items-center">
                <img
                  src={nhaLogo}
                  alt="National Health Authority Logo"
                  className="max-h-20 sm:max-h-24 w-auto object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Milestones Badge */}
              <div className="pt-2 w-full">
                <div className="px-3.5 py-1.5 rounded-xl bg-orange-50 border border-orange-200/80 text-[#FF4D27] text-xs font-black tracking-wide flex items-center justify-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Certified M1 • M2 • M3 Milestones</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Title, Subheading, ABDM overview & HMIS coverage checklist */}
          <div className="lg:col-span-8 space-y-6 text-left abdm-content-enter">

            {/* Main Header & Subheading */}
            <div className="space-y-3">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B132B] tracking-tight leading-tight">
                ABHA & ABDM Compliant Hospital Software
              </h2>

              <p className="text-lg sm:text-xl font-bold text-slate-800">
                <span className="underline decoration-slate-900 underline-offset-4 decoration-2">Hamsa Soham</span> is certified for ABDM's M1, M2, and M3.
              </p>

              <p className="italic text-slate-500 font-medium text-sm sm:text-base">
                Ayushman Bharat Digital Mission (ABDM)
              </p>
            </div>

            {/* Paragraph Description */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              The Ayushman Bharat Digital Mission (ABDM) establishes a unified digital infrastructure for nationwide healthcare. By deploying robust digital highways, it bridges systemic gaps between patients, hospitals, diagnostics, and health registries.
            </p>

            {/* Section Subheading: Hamsa Soham HMIS covers */}
            <div className="pt-2 space-y-4">
              <h3 className="text-base sm:text-lg font-black text-slate-900 tracking-tight">
                Hamsa Soham HMIS covers
              </h3>

              {/* Checklist Items */}
              <div className="space-y-3">
                {coversList.map((item, idx) => (
                  <div
                    key={idx}
                    className="abdm-check-item flex items-start gap-3 group"
                    style={{ animationDelay: `${360 + idx * 110}ms` }}
                  >
                    <div className="mt-0.5 shrink-0 text-sky-500 group-hover:text-emerald-500 group-hover:scale-110 transition-all duration-300">
                      <CheckCircle2 className="w-5 h-5 stroke-[2.2]" />
                    </div>
                    <p className="text-sm sm:text-base text-slate-700 font-medium leading-normal">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AbdmComplianceSection;
