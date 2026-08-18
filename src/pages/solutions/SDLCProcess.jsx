import React, { useState } from "react";
import {
  Settings,
  Pencil,
  Wand2,
  Trophy,
  CheckCircle2,
  Layers,
  Server,
} from "lucide-react";

export const SDLCProcess = () => {
  const [activeTab, setActiveTab] = useState(0);

  const sdlcSteps = [
    {
      num: "01",
      title: "Planning & Feasibility",
      short: "Planning",
      icon: Layers,
      summary: "Requirement gathering, domain survey, and technical & economic feasibility studies.",
      details: [
        "Performed by senior engineering members with direct inputs from customers, sales, and healthcare domain experts.",
        "Evaluation of technical feasibility to define optimal architecture with minimum operational risk.",
        "Quality assurance planning and identification of project risks before starting development.",
      ],
      iconBg: "bg-orange-50 text-[#FF4D27] border-orange-200/80",
      gradient: "from-[#FF4D27] to-amber-500",
    },
    {
      num: "02",
      title: "Defining Requirements (SRS)",
      short: "Analysis",
      icon: Pencil,
      summary: "Clear documentation of product specifications into a Software Requirement Specification (SRS).",
      details: [
        "Translates customer requirements into a formal Software Requirement Specification (SRS) document.",
        "Formal stakeholder review and approval to establish locked project scope and milestones.",
        "Establishes precise performance benchmarks, security compliance, and data schema criteria.",
      ],
      iconBg: "bg-sky-50 text-sky-600 border-sky-200/80",
      gradient: "from-sky-500 to-cyan-500",
    },
    {
      num: "03",
      title: "Product Architecture (DDS)",
      short: "Design & Approvals",
      icon: Wand2,
      summary: "Designing Design Document Specifications (DDS), module communication, and data flow.",
      details: [
        "SRS acts as reference for architects to document multiple design approaches in a DDS (Design Document Specification).",
        "Review by key stakeholders based on risk assessment, product robustness, modularity, budget, and timelines.",
        "Defines architectural modules, data flow representations, and third-party API integrations in detail.",
      ],
      iconBg: "bg-amber-50 text-amber-600 border-amber-200/80",
      gradient: "from-amber-500 to-orange-500",
    },
    {
      num: "04",
      title: "Developing & Testing",
      short: "Testing & Code",
      icon: Trophy,
      summary: "Generating clean code (Java, C/C++, PHP) and rigorous QA testing.",
      details: [
        "Code generation according to Design Document Specification following strict organizational guidelines.",
        "Development across high-level enterprise languages (Java, C++, PHP, JavaScript) tailored for web applications.",
        "Iterative defect reporting, tracking, fixing, and retesting until quality standards defined in SRS are met.",
      ],
      iconBg: "bg-indigo-50 text-indigo-600 border-indigo-200/80",
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      num: "05",
      title: "Deployment & Maintenance",
      short: "Maintenance",
      icon: Server,
      summary: "User Acceptance Testing (UAT), market release, and 24/7 ongoing maintenance.",
      details: [
        "Staged deployment starting with User Acceptance Testing (UAT) in real business environments.",
        "Formal release into live server environments based on customer feedback and enhancements.",
        "Ongoing round-the-clock maintenance, security patches, and upgrades for the customer base.",
      ],
      iconBg: "bg-emerald-50 text-emerald-600 border-emerald-200/80",
      gradient: "from-emerald-500 to-teal-500",
    },
  ];

  const active = sdlcSteps[activeTab];
  const ActiveIcon = active.icon;

  return (
    <section className="py-20 sm:py-28 bg-white border-t border-slate-200/80 relative overflow-hidden select-none text-left">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <h2 className="text-3xl sm:text-5xl font-black text-[#0B132B] tracking-tight uppercase">
            Our Development <span className="bg-gradient-to-r from-[#FF4D27] via-amber-500 to-sky-600 bg-clip-text text-transparent">Process</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
            A structured, proven 5-step SDLC process ensuring secure, high-performance web applications and hospital management software.
          </p>
        </div>

        {/* 5-Step Process Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-10 max-w-5xl mx-auto">
          {sdlcSteps.map((step, idx) => {
            const isSelected = activeTab === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`p-4 rounded-2xl border text-left transition-all duration-300 relative group cursor-pointer ${
                  isSelected
                    ? "bg-[#0B132B] border-[#0B132B] text-white shadow-xl scale-105"
                    : "bg-slate-50 border-slate-200/80 text-slate-700 hover:bg-slate-100"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-black px-2 py-0.5 rounded-full ${isSelected ? "bg-white/20 text-white" : "bg-slate-200 text-slate-700"}`}>
                    Step {step.num}
                  </span>
                  <step.icon className={`w-4 h-4 ${isSelected ? "text-amber-400" : "text-slate-400"}`} />
                </div>
                <div className="text-sm font-extrabold truncate">{step.short}</div>
              </button>
            );
          })}
        </div>

        {/* Active Stage Detail Panel */}
        <div className="max-w-5xl mx-auto bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-2xl relative overflow-hidden">
          <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${active.gradient}`} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <div className={`w-14 h-14 rounded-2xl ${active.iconBg} border flex items-center justify-center shadow-xs shrink-0`}>
                  <ActiveIcon className="w-7 h-7" />
                </div>
                <div>
                  <div className="text-xs font-extrabold text-[#FF4D27] uppercase tracking-wider">
                    Phase {active.num} of 05
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                    {active.title}
                  </h3>
                </div>
              </div>

              <p className="text-base text-slate-300 leading-relaxed font-medium">
                {active.summary}
              </p>

              {/* Detailed Points */}
              <div className="space-y-3 pt-2">
                {active.details.map((point, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-3 bg-slate-950/70 p-3.5 rounded-xl border border-white/10 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Graphic Panel */}
            <div className="lg:col-span-5 flex flex-col justify-center items-center text-center p-8 rounded-2xl bg-gradient-to-b from-slate-950 to-slate-900 border border-white/10 shadow-inner space-y-4">
              <div className="w-20 h-20 rounded-3xl bg-slate-800/80 border border-white/15 flex items-center justify-center text-amber-400 shadow-lg">
                <ActiveIcon className="w-10 h-10" />
              </div>
              <div className="text-lg font-black text-white">{active.title}</div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Strict adherence to international software development guidelines ensuring zero-defect deliverables.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default SDLCProcess;
