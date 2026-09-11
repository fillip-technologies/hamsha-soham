import React, { useRef } from "react";
import {
  Sparkles,
  Activity,
  Zap,
  ShieldCheck,
  Building2,
  Lock,
} from "lucide-react";

export const HwaiFeatures = () => {
  const sectionRef = useRef(null);

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

  const aiFeatures = [
    {
      title: "Patient Queue & Wait Time Prediction",
      desc: "Machine learning algorithms forecasting OPD arrival surges, doctor bottlenecks, and patient turn-around times.",
      icon: Sparkles,
      iconBg: "bg-amber-50 text-amber-600 border-amber-200/60",
      glowColor: "group-hover:border-amber-300",
    },
    {
      title: "Clinical Decision Support System (CDSS)",
      desc: "AI-assisted clinical risk flagging, drug allergy warnings, and evidence-based diagnostic suggestions for doctors.",
      icon: Activity,
      iconBg: "bg-orange-50 text-orange-600 border-orange-200/60",
      glowColor: "group-hover:border-orange-300",
    },
    {
      title: "Revenue Cycle & Billing Audit AI",
      desc: "Automated billing anomaly detection flagging unbilled diagnostic procedures, TPA claim rejections, and inventory leaks.",
      icon: Zap,
      iconBg: "bg-[#FFF5F2] text-[#FF4D27] border-[#FF4D27]/30",
      glowColor: "group-hover:border-[#FF4D27]/40",
    },
    {
      title: "NABH Clinical Quality Metrics",
      desc: "Real-time compliance dashboards tracking hospital infection rates, incident reports, and quality indicator trends.",
      icon: ShieldCheck,
      iconBg: "bg-emerald-50 text-emerald-600 border-emerald-200/60",
      glowColor: "group-hover:border-emerald-300",
    },
    {
      title: "Bed Occupancy & OT Analytics",
      desc: "Predictive IPD bed turnover models and Operation Theatre utilization analytics to maximize surgical throughput.",
      icon: Building2,
      iconBg: "bg-sky-50 text-sky-600 border-sky-200/60",
      glowColor: "group-hover:border-sky-300",
    },
    {
      title: "Executive Intelligence Dashboard",
      desc: "Centralized C-suite mobile dashboard with real-time financial KPIs, doctor performance metrics, and patient satisfaction scores.",
      icon: Lock,
      iconBg: "bg-indigo-50 text-indigo-600 border-indigo-200/60",
      glowColor: "group-hover:border-indigo-300",
    },
  ];

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="py-20 sm:py-28 bg-[#FAFCFF] border-t border-slate-200/80 relative overflow-hidden select-none transition-colors duration-500"
      style={{
        "--mouse-x": "50%",
        "--mouse-y": "50%",
        "--mouse-opacity": "0",
        "--ratio-x": "0",
        "--ratio-y": "0",
      }}
    >
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

      {/* 3. Deep Dark Shadow Halo + Vivid Amber/Flame Spotlight Core */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-400 -z-0"
        style={{
          opacity: "var(--mouse-opacity, 0)",
          background: `
            radial-gradient(320px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(217, 119, 6, 0.28) 0%, rgba(255, 77, 39, 0.22) 45%, transparent 80%),
            radial-gradient(650px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(15, 23, 42, 0.22) 0%, rgba(30, 41, 59, 0.14) 50%, transparent 80%)
          `,
        }}
      />

      {/* 4. Parallax Background Deep Mesh Glows */}
      <div
        className="absolute top-1/3 left-0 w-[600px] h-[600px] bg-amber-400/20 rounded-full blur-[140px] pointer-events-none -z-0 transition-transform duration-700 ease-out"
        style={{
          transform: "translate3d(calc(var(--ratio-x, 0) * 35px), calc(var(--ratio-y, 0) * 35px), 0)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-orange-500/20 rounded-full blur-[140px] pointer-events-none -z-0 transition-transform duration-700 ease-out"
        style={{
          transform: "translate3d(calc(var(--ratio-x, 0) * -35px), calc(var(--ratio-y, 0) * -35px), 0)",
        }}
      />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Clean Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <h2 className="text-3xl sm:text-5xl font-black text-[#0B132B] tracking-tight uppercase">
            Healthcare Management <span className="bg-gradient-to-r from-amber-600 via-orange-500 to-amber-500 bg-clip-text text-transparent">Capabilities</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto font-normal">
            Empower hospital leadership with integrated operational intelligence, workflow automation, and real-time clinical insights.
          </p>
        </div>

        {/* Ultra-Clean 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aiFeatures.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className={`bg-white rounded-3xl p-8 sm:p-9 border border-slate-200/80 ${item.glowColor} transition-all duration-300 shadow-xs hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between group cursor-default relative overflow-hidden`}
              >
                <div>
                  {/* Round Soft Pastel Icon Avatar */}
                  <div className={`w-14 h-14 rounded-full ${item.iconBg} border flex items-center justify-center mb-6 shadow-xs group-hover:scale-110 transition-transform duration-300`}>
                    <IconComp className="w-6.5 h-6.5" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-extrabold text-[#0B132B] mb-3 group-hover:text-amber-600 transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-600 font-normal leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default HwaiFeatures;
