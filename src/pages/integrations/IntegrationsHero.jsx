import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Network,
  ShieldCheck,
  Zap,
  ArrowRight,
  Database,
  Cpu,
  Layers,
  Activity,
  Server,
  Lock,
  Workflow,
  Radio,
  Binary,
  CheckCircle2,
  Building2,
  FileText,
  FlaskConical,
  Images,
  CreditCard,
  MessageSquare,
  Calculator,
  KeyRound,
  Sparkles,
  Share2,
  TrendingUp,
} from "lucide-react";

export const IntegrationsHero = () => {
  const [activeNode, setActiveNode] = useState(0);

  const orbitingNodes = [
    {
      id: "lis",
      title: "LIS Analyzers",
      tag: "ASTM RS232",
      icon: FlaskConical,
      color: "bg-emerald-500 text-white shadow-emerald-500/40",
      accent: "text-emerald-600",
      bg: "bg-emerald-50 border-emerald-200",
      pos: "top-4 left-1/2 -translate-x-1/2",
      desc: "Sysmex, Roche & Mindray bidirectional auto-sync",
      metric: "< 35ms Sync",
    },
    {
      id: "pacs",
      title: "PACS DICOM",
      tag: "WADO-RS 3.0",
      icon: Images,
      color: "bg-purple-500 text-white shadow-purple-500/40",
      accent: "text-purple-600",
      bg: "bg-purple-50 border-purple-200",
      pos: "top-20 right-4",
      desc: "Lossless 3D viewer for OCT, CT & MRI scans",
      metric: "1.2 GB/s Stream",
    },
    {
      id: "abdm",
      title: "ABDM & NHA",
      tag: "M1, M2, M3",
      icon: ShieldCheck,
      color: "bg-rose-500 text-white shadow-rose-500/40",
      accent: "text-rose-600",
      bg: "bg-rose-50 border-rose-200",
      pos: "bottom-20 right-4",
      desc: "Govt certified ABHA generation & consent manager",
      metric: "100% NHA Live",
    },
    {
      id: "whatsapp",
      title: "WhatsApp API",
      tag: "Meta Cloud",
      icon: MessageSquare,
      color: "bg-teal-500 text-white shadow-teal-500/40",
      accent: "text-teal-600",
      bg: "bg-teal-50 border-teal-200",
      pos: "bottom-4 left-1/2 -translate-x-1/2",
      desc: "Instant digital Rx reports & appointment alerts",
      metric: "Instant Dispatch",
    },
    {
      id: "tpa",
      title: "Insurance TPAs",
      tag: "NHCX & Claims",
      icon: CreditCard,
      color: "bg-amber-500 text-white shadow-amber-500/40",
      accent: "text-amber-600",
      bg: "bg-amber-50 border-amber-200",
      pos: "bottom-20 left-4",
      desc: "Cashless pre-authorization & PM-JAY billing",
      metric: "99.8% Speed",
    },
    {
      id: "erp",
      title: "Tally & SAP",
      tag: "ERP Financials",
      icon: Calculator,
      color: "bg-indigo-500 text-white shadow-indigo-500/40",
      accent: "text-indigo-600",
      bg: "bg-indigo-50 border-indigo-200",
      pos: "top-20 left-4",
      desc: "Automated ledger sync & GST e-Invoicing",
      metric: "Auto-Reconciled",
    },
  ];

  // Auto-rotate active node focus every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveNode((prev) => (prev + 1) % orbitingNodes.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const currentNode = orbitingNodes[activeNode];
  const CurrentIcon = currentNode.icon;

  return (
    <section className="relative overflow-hidden pt-12 pb-16 sm:pt-16 sm:pb-24 bg-gradient-to-b from-[#F3F8FD] via-[#F8FBFE] to-white text-slate-900 select-none font-sans border-b border-slate-200/80">
      
      {/* Soft Ambient Mesh Background Lights */}
      <div className="absolute top-0 left-1/4 w-[650px] h-[400px] bg-sky-200/40 rounded-full blur-[140px] pointer-events-none -z-0" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[400px] bg-orange-100/35 rounded-full blur-[140px] pointer-events-none -z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(#CBD5E1_1px,transparent_1px)] [background-size:24px_24px] opacity-35 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Dual-Column Master Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center text-left">
          
          {/* LEFT COLUMN: Narrative, Headlines, Value Points & CTAs */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Main Headline */}
            <div className="space-y-3.5">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0B132B] tracking-tight leading-[1.08]">
                Connected Healthcare <br />
                <span className="bg-gradient-to-r from-[#FF4D27] via-amber-500 to-sky-600 bg-clip-text text-transparent">
                  Ecosystem
                </span>
              </h1>

              <p className="text-slate-600 text-base sm:text-lg font-normal leading-relaxed max-w-xl">
                The central nervous system of your healthcare enterprise. Seamlessly bridge diagnostic analyzers, DICOM PACS imaging, hospital ERPs, insurance TPAs, and national ABDM registries into a single unified medical network.
              </p>
            </div>

            {/* Value Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-xs text-slate-700 font-medium">
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Bi-Directional LIS & PACS Sync</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>ABDM M1, M2 & M3 Certified</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Sub-Second Latency (&lt; 60ms)</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Military-Grade AES-256 & TLS 1.3</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="https://apps.hamsasoham.com/portal/index.xhtml"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#FF4D27] to-[#FF7043] hover:from-[#E03A14] hover:to-[#FF4D27] text-white font-extrabold text-sm sm:text-base shadow-xl shadow-[#FF4D27]/30 transition-all flex items-center gap-2 hover:scale-105 group cursor-pointer"
              >
                <span>Request Live Demo</span>
                <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#connected-ecosystem"
                className="px-7 py-3.5 rounded-full bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-bold text-sm sm:text-base shadow-xs transition-all flex items-center gap-2 hover:scale-105 cursor-pointer"
              >
                <span>Explore 15+ Integrations</span>
              </a>
            </div>

          </div>

          {/* RIGHT COLUMN: Interactive Animated Interoperability Solar Orbit Reactor */}
          <div className="lg:col-span-6 relative flex items-center justify-center min-h-[460px] sm:min-h-[500px]">
            
            {/* Ambient Circular Glow */}
            <div className="absolute inset-0 m-auto w-[380px] h-[380px] bg-gradient-to-r from-blue-300/30 via-sky-200/40 to-orange-200/25 blur-3xl rounded-full pointer-events-none" />

            {/* SVG Animated Connector Rays & Orbital Circles */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 500 500">
              {/* Outer Orbit Track */}
              <circle
                cx="250"
                cy="250"
                r="185"
                fill="none"
                stroke="#E2E8F0"
                strokeWidth="1.5"
                strokeDasharray="6 6"
                className="animate-spin"
                style={{ animationDuration: "60s" }}
              />

              {/* Inner Orbit Track */}
              <circle
                cx="250"
                cy="250"
                r="125"
                fill="none"
                stroke="#E2E8F0"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                className="animate-spin"
                style={{ animationDuration: "35s", animationDirection: "reverse" }}
              />

              {/* Animated Data Pulse Rays Shooting to Center */}
              <line x1="250" y1="65" x2="250" y2="210" stroke="url(#blueGradient)" strokeWidth="2" strokeDasharray="5 5" className="animate-pulse" />
              <line x1="400" y1="130" x2="280" y2="220" stroke="url(#purpleGradient)" strokeWidth="2" strokeDasharray="5 5" className="animate-pulse" />
              <line x1="400" y1="370" x2="280" y2="280" stroke="url(#roseGradient)" strokeWidth="2" strokeDasharray="5 5" className="animate-pulse" />
              <line x1="250" y1="435" x2="250" y2="290" stroke="url(#tealGradient)" strokeWidth="2" strokeDasharray="5 5" className="animate-pulse" />
              <line x1="100" y1="370" x2="220" y2="280" stroke="url(#amberGradient)" strokeWidth="2" strokeDasharray="5 5" className="animate-pulse" />
              <line x1="100" y1="130" x2="220" y2="220" stroke="url(#indigoGradient)" strokeWidth="2" strokeDasharray="5 5" className="animate-pulse" />

              {/* Gradients */}
              <defs>
                <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#10B981" />
                  <stop offset="100%" stopColor="#0B132B" />
                </linearGradient>
                <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#A855F7" />
                  <stop offset="100%" stopColor="#0B132B" />
                </linearGradient>
                <linearGradient id="roseGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#F43F5E" />
                  <stop offset="100%" stopColor="#0B132B" />
                </linearGradient>
                <linearGradient id="tealGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#14B8A6" />
                  <stop offset="100%" stopColor="#0B132B" />
                </linearGradient>
                <linearGradient id="amberGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#F59E0B" />
                  <stop offset="100%" stopColor="#0B132B" />
                </linearGradient>
                <linearGradient id="indigoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#6366F1" />
                  <stop offset="100%" stopColor="#0B132B" />
                </linearGradient>
              </defs>
            </svg>

            {/* 1. CENTRAL GLOWING CORE HUB */}
            <div className="relative z-20 w-44 h-44 sm:w-48 sm:h-48 rounded-full bg-white border-2 border-slate-200 shadow-2xl p-3 flex flex-col items-center justify-center text-center group cursor-pointer hover:scale-105 transition-all">
              
              {/* Pulsing Concentric Aura Ring */}
              <div className="absolute inset-0 -m-3 rounded-full border-2 border-[#FF4D27]/30 animate-ping pointer-events-none" style={{ animationDuration: "3s" }} />
              <div className="absolute inset-0 -m-1.5 rounded-full border-2 border-sky-400/30 animate-pulse pointer-events-none" />

              {/* Central Inner Badge */}
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0B132B] to-[#1C2A52] text-white flex items-center justify-center shadow-lg mb-1.5">
                <Network className="w-7 h-7 text-[#FF4D27]" />
              </div>

              <div className="text-[11px] font-black uppercase text-[#FF4D27] tracking-wider leading-tight">
                HAMSA SOHAM
              </div>
              <div className="text-xs font-black text-[#0B132B] leading-tight mt-0.5">
                Data Bus Engine
              </div>
              <div className="text-[10px] font-mono text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded-full mt-1 border border-emerald-200 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>99.99% Live</span>
              </div>
            </div>

            {/* 2. SATELLITE ORBITING PROTOCOL NODES (Interactive Hover + Auto-Cycle Focus) */}
            {orbitingNodes.map((node, nIdx) => {
              const Icon = node.icon;
              const isSelected = activeNode === nIdx;
              return (
                <div
                  key={node.id}
                  onClick={() => setActiveNode(nIdx)}
                  className={`absolute z-30 transition-all duration-500 cursor-pointer ${node.pos} ${
                    isSelected ? "scale-110 z-40" : "hover:scale-105"
                  }`}
                >
                  <div
                    className={`p-2.5 sm:p-3 rounded-2xl border transition-all duration-300 flex items-center gap-2.5 ${
                      isSelected
                        ? "bg-white border-[#0B132B] shadow-2xl ring-2 ring-[#0B132B]/10"
                        : "bg-white/95 hover:bg-white border-slate-200 shadow-md backdrop-blur-md"
                    }`}
                  >
                    <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl ${node.color} flex items-center justify-center shadow-md shrink-0`}>
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="text-left pr-1">
                      <div className="flex items-center gap-1.5">
                        <span className="text-[11px] font-black text-[#0B132B]">
                          {node.title}
                        </span>
                        {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-[#FF4D27]" />}
                      </div>
                      <span className="text-[9px] font-mono text-slate-400 font-bold block">
                        {node.tag}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
};

export default IntegrationsHero;
