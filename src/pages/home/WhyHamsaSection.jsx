import React from "react";
import { Link } from "react-router-dom";
import {
  HeartPulse,
  TrendingUp,
  Layers,
  ShieldCheck,
  CircleDollarSign,
  Headphones,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Shield,
  Zap,
  Activity,
  Lock,
  Cpu,
  RefreshCw,
  Clock,
  Building2,
  Stethoscope,
} from "lucide-react";

export const WhyHamsaSection = () => {
  const cards = [
    {
      id: "healthcare-focused",
      step: "01",
      pillar: "Clinical First",
      title: "Healthcare Focused",
      subtitle: "Engineered specifically for clinical hospital operations, not retrofitted generic ERPs.",
      icon: HeartPulse,
      tags: ["OPD / IPD Workflows", "Doctor EMR Charting", "OT & Daycare"],
      statLabel: "Speciality Readiness",
      statValue: "100% Clinical",
      gradient: "from-orange-500 to-[#FF4D27]",
      lightBg: "bg-orange-50/70 text-[#FF4D27] border-orange-200/80",
      accentBorder: "group-hover:border-orange-500/50",
      glowBg: "from-orange-500/15 via-[#FF4D27]/5 to-transparent",
      widget: (
        <div className="flex flex-wrap gap-1.5 pt-1">
          <span className="px-2.5 py-1 rounded-lg bg-orange-100/70 text-orange-800 text-[11px] font-bold border border-orange-200/60">
            OPD / IPD
          </span>
          <span className="px-2.5 py-1 rounded-lg bg-orange-100/70 text-orange-800 text-[11px] font-bold border border-orange-200/60">
            Doctor EMR
          </span>
          <span className="px-2.5 py-1 rounded-lg bg-orange-100/70 text-orange-800 text-[11px] font-bold border border-orange-200/60">
            OT & Surgery
          </span>
        </div>
      ),
    },
    {
      id: "scalable",
      step: "02",
      pillar: "Scalability",
      title: "Scalable Architecture",
      subtitle: "Cloud-native infrastructure that scales effortlessly from standalone clinics to hospital chains.",
      icon: TrendingUp,
      tags: ["Multi-Location Sync", "Centralized Analytics", "Zero Server Lag"],
      statLabel: "Capacity Limit",
      statValue: "1 to 500+ Beds",
      gradient: "from-sky-500 to-blue-600",
      lightBg: "bg-sky-50/70 text-sky-700 border-sky-200/80",
      accentBorder: "group-hover:border-sky-500/50",
      glowBg: "from-sky-500/15 via-blue-500/5 to-transparent",
      widget: (
        <div className="flex items-center gap-1.5 pt-1 text-[11px] font-bold text-sky-800">
          <span className="px-2 py-1 rounded-lg bg-sky-100/70 border border-sky-200/60">
            Clinic
          </span>
          <span className="text-sky-400">➔</span>
          <span className="px-2 py-1 rounded-lg bg-sky-100/70 border border-sky-200/60">
            Hospital
          </span>
          <span className="text-sky-400">➔</span>
          <span className="px-2 py-1 rounded-lg bg-sky-100/70 border border-sky-200/60">
            Multi-Chain
          </span>
        </div>
      ),
    },
    {
      id: "integrated",
      step: "03",
      pillar: "Interoperability",
      title: "Fully Integrated",
      subtitle: "Synchronizes doctors, diagnostic labs, pharmacy stock, and billing counters into real-time harmony.",
      icon: Layers,
      tags: ["LIMS & PACS Interfaced", "Pharmacy Live Sync", "Instant TPA Billing"],
      statLabel: "Data Synchronization",
      statValue: "Real-Time Sync",
      gradient: "from-emerald-500 to-teal-600",
      lightBg: "bg-emerald-50/70 text-emerald-700 border-emerald-200/80",
      accentBorder: "group-hover:border-emerald-500/50",
      glowBg: "from-emerald-500/15 via-teal-500/5 to-transparent",
      widget: (
        <div className="flex flex-wrap gap-1.5 pt-1">
          <span className="px-2.5 py-1 rounded-lg bg-emerald-100/70 text-emerald-800 text-[11px] font-bold border border-emerald-200/60 flex items-center gap-1">
            <RefreshCw className="w-3 h-3 text-emerald-600" />
            <span>EMR ⇄ Labs ⇄ Billing</span>
          </span>
        </div>
      ),
    },
    {
      id: "secure",
      step: "04",
      pillar: "Governance",
      title: "Enterprise Security",
      subtitle: "End-to-end encryption with granular role access and tamper-proof audit trails for total compliance.",
      icon: ShieldCheck,
      tags: ["256-Bit AES Encryption", "Role-Based Permissions", "NABH & ISO Ready"],
      statLabel: "Compliance Level",
      statValue: "CERT-In Audited",
      gradient: "from-purple-500 to-indigo-600",
      lightBg: "bg-purple-50/70 text-purple-700 border-purple-200/80",
      accentBorder: "group-hover:border-purple-500/50",
      glowBg: "from-purple-500/15 via-indigo-500/5 to-transparent",
      widget: (
        <div className="flex items-center gap-2 pt-1">
          <span className="px-2.5 py-1 rounded-lg bg-purple-100/70 text-purple-800 text-[11px] font-bold border border-purple-200/60 flex items-center gap-1">
            <Lock className="w-3 h-3 text-purple-600" />
            <span>256-Bit AES</span>
          </span>
          <span className="px-2.5 py-1 rounded-lg bg-purple-100/70 text-purple-800 text-[11px] font-bold border border-purple-200/60">
            NABH Ready
          </span>
        </div>
      ),
    },
    {
      id: "cost-effective",
      step: "05",
      pillar: "High ROI",
      title: "Cost Effective",
      subtitle: "Transparent pricing designed for hospital budgets with rapid operational payback and zero hidden fees.",
      icon: CircleDollarSign,
      tags: ["Predictable Pricing", "Zero Hardware Overhead", "Fast Payback Period"],
      statLabel: "Payback Timeline",
      statValue: "Rapid ROI",
      gradient: "from-amber-500 to-orange-600",
      lightBg: "bg-amber-50/70 text-amber-700 border-amber-200/80",
      accentBorder: "group-hover:border-amber-500/50",
      glowBg: "from-amber-500/15 via-orange-500/5 to-transparent",
      widget: (
        <div className="flex items-center gap-2 pt-1">
          <span className="px-2.5 py-1 rounded-lg bg-amber-100/70 text-amber-800 text-[11px] font-bold border border-amber-200/60">
            Zero Hidden Fees
          </span>
          <span className="px-2.5 py-1 rounded-lg bg-amber-100/70 text-amber-800 text-[11px] font-bold border border-amber-200/60">
            Modular Tiers
          </span>
        </div>
      ),
    },
    {
      id: "support",
      step: "06",
      pillar: "Continuous Care",
      title: "24/7 Dedicated Support",
      subtitle: "Hands-on implementation, staff training, and continuous technical support with guaranteed SLAs.",
      icon: Headphones,
      tags: ["Live Support Engineers", "Clinical Staff Training", "99.99% Uptime SLA"],
      statLabel: "Response Time",
      statValue: "< 15 Mins SLA",
      gradient: "from-blue-600 to-indigo-700",
      lightBg: "bg-blue-50/70 text-blue-700 border-blue-200/80",
      accentBorder: "group-hover:border-blue-500/50",
      glowBg: "from-blue-500/15 via-indigo-500/5 to-transparent",
      widget: (
        <div className="flex items-center gap-2 pt-1">
          <span className="px-2.5 py-1 rounded-lg bg-blue-100/70 text-blue-800 text-[11px] font-bold border border-blue-200/60 flex items-center gap-1">
            <Clock className="w-3 h-3 text-blue-600" />
            <span>24/7 Technical SLA</span>
          </span>
        </div>
      ),
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#F8FAFC] relative overflow-hidden text-slate-900 select-none border-t border-slate-200/80">
      {/* Background Decorative Mesh Glows */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-[#FF4D27]/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -right-40 w-96 h-96 bg-blue-500/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-[#FF4D27] text-xs font-black uppercase tracking-wider shadow-2xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Platform Advantages</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B132B] tracking-tight leading-[1.15]">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-[#FF4D27] via-orange-500 to-[#0D62FF] bg-clip-text text-transparent">
              Hamsa Soham?
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Purpose-engineered hospital intelligence platform designed to eliminate operational friction, empower clinicians, and scale healthcare enterprises.
          </p>
        </div>

        {/* 6 High-Density Enterprise Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className={`group relative bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden ${card.accentBorder}`}
              >
                {/* Top Subtle Radial Glow */}
                <div
                  className={`absolute top-0 right-0 w-44 h-44 bg-gradient-to-bl ${card.glowBg} rounded-full blur-3xl pointer-events-none group-hover:scale-150 transition-transform duration-500`}
                />

                <div className="space-y-4 relative z-10">
                  {/* Top Bar: Icon + Pillar Tag + Step Number */}
                  <div className="flex items-center justify-between gap-3">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center bg-gradient-to-br ${card.gradient} text-white shadow-md transition-transform duration-300 group-hover:scale-110`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    <div className="flex items-center gap-2">
                      <span
                        className={`text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full border shadow-2xs ${card.lightBg}`}
                      >
                        {card.pillar}
                      </span>
                      <span className="text-xs font-black text-slate-300 group-hover:text-slate-500 transition-colors">
                        {card.step}
                      </span>
                    </div>
                  </div>

                  {/* Title & Concise Subtitle */}
                  <div className="space-y-1.5">
                    <h3 className="text-xl font-black text-[#0B132B] tracking-tight group-hover:text-[#FF4D27] transition-colors leading-snug">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                      {card.subtitle}
                    </p>
                  </div>

                  {/* Interactive Micro-Widget */}
                  <div className="pt-1">
                    {card.widget}
                  </div>
                </div>

                {/* Bottom Value Metric Bar */}
                <div className="pt-4 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-bold relative z-10">
                  <div className="flex items-center gap-2 text-slate-500">
                    <span className="text-[11px] font-semibold">{card.statLabel}:</span>
                    <span className="font-extrabold text-slate-900">{card.statValue}</span>
                  </div>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-[#FF4D27] text-white font-extrabold text-[11px] shadow-xs transition-all hover:scale-105 shrink-0 cursor-pointer"
                  >
                    <span>Request Demo</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhyHamsaSection;
