import React, { useState, useRef } from "react";
import {
  Building2,
  Users,
  BedDouble,
  Activity,
  Boxes,
  CreditCard,
  CheckCircle2,
  ArrowRight,
  Stethoscope,
  TrendingUp,
  Sparkles,
  HeartPulse,
  Brain,
  Baby,
  Layers,
  ShieldCheck,
} from "lucide-react";

export const HwaiEnterpriseSection = () => {
  const sectionRef = useRef(null);
  const [activeDeptTab, setActiveDeptTab] = useState(0);

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

  // Departments for Interactive Command Center Showcase
  const departments = [
    {
      id: "opd",
      name: "OPD & Smart Token Triage",
      badge: "Outpatient Operations",
      icon: Users,
      kpi: "45% Shorter Patient Turnaround Time",
      kpiSub: "Smart queue balancing across 40+ consultation cabins",
      title: "High-Volume OPD Flow & Intelligent Token Dispatch",
      desc: "Eliminate reception bottlenecks and reduce patient waiting times with AI-assisted token allocation, multi-counter triage routing, doctor cabin scheduling, and real-time SMS/WhatsApp queue updates.",
      features: [
        "Automated token generation with doctor cabin availability & turn-around time algorithms",
        "Multi-language digital queue display boards for waiting lounges & consultation corridors",
        "Real-time SMS & WhatsApp token status alerts keeping patients informed on the go",
        "Priority triage routing for emergency cases, senior citizens, and pediatric patients",
      ],
      mockupType: "tokenQueue",
      mockData: {
        currentCabin: "Cabin 04 - Cardiology Desk",
        doctor: "Dr. A. Sengupta, MD DM",
        activeToken: "C-108",
        waitingCount: 14,
        tokens: [
          { number: "C-108", patient: "Rajesh K. (48M)", status: "In Consultation", statusColor: "bg-emerald-600 text-white" },
          { number: "C-109", patient: "Anita S. (35F)", status: "Next in Line", statusColor: "bg-amber-600 text-white" },
          { number: "C-110", patient: "Vikram P. (62M)", status: "Vitals Recorded", statusColor: "bg-orange-600 text-white" },
          { number: "C-111", patient: "Sunita D. (51F)", status: "In Waiting Area", statusColor: "bg-slate-700 text-slate-200" },
        ],
      },
    },
    {
      id: "ipd",
      name: "IPD & Interactive Bed Matrix",
      badge: "Inpatient Management",
      icon: BedDouble,
      kpi: "2-Hour Fast-Track Discharge",
      kpiSub: "Automated billing audit and electronic nursing handover",
      title: "Real-Time Visual Bed Boards & Inpatient Care Suite",
      desc: "Gain 360° operational visibility over bed occupancy across ICU, HDU, Emergency, and ward suites. Streamline doctor rounds, nursing shift handovers, bed transfers, and fast-track discharge workflows.",
      features: [
        "Interactive color-coded visual bed board tracking real-time occupancy, sanitization & availability",
        "Electronic ISBAR nursing shift handover charts with automated vital sign trend monitoring",
        "2-Hour fast-track IPD discharge summary protocol eliminating billing & discharge delays",
        "Integrated ward-to-pharmacy e-indenting and doctor round progress note recording",
      ],
      mockupType: "bedMatrix",
      mockData: {
        icuBeds: "18 / 20 Occupied",
        hduBeds: "24 / 28 Occupied",
        generalBeds: "142 / 160 Occupied",
        beds: [
          { room: "ICU-01", patient: "Manoj T. (64M)", vitals: "SpO2 98% | BP 124/82", tag: "Post-Op Stable", color: "border-emerald-500/50 bg-emerald-50/40" },
          { room: "ICU-02", patient: "Kavita R. (42F)", vitals: "SpO2 95% | BP 110/70", tag: "Ventilator Active", color: "border-amber-500/50 bg-amber-50/40" },
          { room: "HDU-06", patient: "Prakash V. (58M)", vitals: "SpO2 99% | BP 130/85", tag: "Discharge Pending", color: "border-orange-500/50 bg-orange-50/40" },
          { room: "HDU-07", patient: "Empty (Sanitized)", vitals: "Ready for Admission", tag: "Clean Vacant", color: "border-slate-300 bg-slate-50" },
        ],
      },
    },
    {
      id: "ot",
      name: "OT & Surgical Care Suites",
      badge: "Surgical Theatre",
      icon: Activity,
      kpi: "100% WHO Surgical Safety Compliant",
      kpiSub: "Mandatory pre-op PAC and implant consumption tracking",
      title: "High-Turnover OT Scheduling & Surgical Workflows",
      desc: "Maximize surgical throughput and eliminate scheduling conflicts with master OT rosters, Pre-Anesthesia Checkup (PAC) clearance tracking, WHO surgical safety protocols, and implant barcode logging.",
      features: [
        "Master multi-OT interactive calendar synchronizing surgeons, anesthetists & scrub nurses",
        "Mandatory 3-step WHO Surgical Safety Checklist (Sign-In, Time-Out, Sign-Out) enforcement",
        "Barcoded implant & surgical consumable scanning directly into patient billing records",
        "Live recovery room (PACU) post-operative telemetry monitoring & transfer tracking",
      ],
      mockupType: "otSuite",
      mockData: {
        activeOTs: "4 Operative Theatres Active",
        surgeries: [
          { ot: "OT-1 (Neuro)", procedure: "Craniotomy", surgeon: "Dr. Mehra", stage: "Intra-Op (75m)", status: "Active Procedure", color: "bg-amber-600 text-white" },
          { ot: "OT-2 (Ortho)", procedure: "Total Knee Replacement", surgeon: "Dr. K. Nair", stage: "Implant Placement", status: "Active Procedure", color: "bg-amber-600 text-white" },
          { ot: "OT-3 (Cardiac)", procedure: "CABG", surgeon: "Dr. J. Roy", stage: "PAC Cleared", status: "Pre-Op Prep", color: "bg-orange-500 text-white" },
          { ot: "OT-4 (General)", procedure: "Laparoscopic Cholecystectomy", surgeon: "Dr. Verma", stage: "Sanitizing", status: "Turnaround", color: "bg-emerald-600 text-white" },
        ],
      },
    },
    {
      id: "pharmacy",
      name: "Central Pharmacy & MMD",
      badge: "Supply Chain",
      icon: Boxes,
      kpi: "Zero Expiry Stock Leakage",
      kpiSub: "Automated FIFO stock rotation and automated ward re-indenting",
      title: "CPOE, Bedside MAR & Multi-Store Inventory Control",
      desc: "Bridge the gap between clinical orders and inventory. Features Computerized Physician Order Entry (CPOE), bedside barcode Medication Administration Records (MAR), automated stock re-indenting, and near-expiry alerts.",
      features: [
        "Real-time main pharmacy store vs sub-ward dispensary stock synchronization",
        "Near-expiry automatic return-to-vendor alerts reducing stock wastage to zero",
        "Bedside barcode medication administration enforcing the 5 Rights of Nursing Safety",
        "Automated drug allergy checks and drug-to-drug contraindication warnings at CPOE entry",
      ],
      mockupType: "pharmacy",
      mockData: {
        stats: "12,480 SKUs Tracked Real-time",
        indents: [
          { id: "IND-8041", ward: "ICU Ward 3", items: "12 Items", status: "Dispensed", tagColor: "bg-emerald-600 text-white" },
          { id: "IND-8042", ward: "Cardiology IPD", items: "8 Items", status: "Packing", tagColor: "bg-amber-600 text-white" },
          { id: "IND-8043", ward: "Emergency 24x7", items: "5 Items", status: "Dispatched", tagColor: "bg-orange-600 text-white" },
          { id: "IND-8044", ward: "Orthopedic Floor", items: "14 Items", status: "Reviewing CPOE", tagColor: "bg-slate-700 text-slate-200" },
        ],
      },
    },
    {
      id: "tpa",
      name: "Institutional Cashless TPA",
      badge: "Revenue Cycle",
      icon: CreditCard,
      kpi: "<2% Claim Deduction Rate",
      kpiSub: "Pre-audit scrutiny and direct tariff package mapping",
      title: "Accelerated Insurance Pre-Auth & Settlement Desk",
      desc: "Accelerate cashless approvals and reduce claim rejection rates below 2%. Features instant tariff package estimation, 1-click digital pre-auth document compilation, and real-time claim query tracking.",
      features: [
        "Instant treatment package estimation mapped against specific insurer & corporate tariffs",
        "1-Click digital document packet compiler assembling EMR notes & diagnostic reports",
        "Automated pre-audit scrutiny flagging missing clinical documentation prior to submission",
        "Real-time insurer co-pay calculation and cashless settlement reconciliation",
      ],
      mockupType: "tpaDesk",
      mockData: {
        activeClaims: "₹38.4 Lakhs Active in Pre-Auth",
        claims: [
          { claimId: "CLM-9104", tpa: "Star Health", amount: "₹1,85,000", status: "Approved (100%)", statusColor: "bg-emerald-600 text-white" },
          { claimId: "CLM-9105", tpa: "HDFC ERGO", amount: "₹92,000", status: "Query Replied", statusColor: "bg-amber-600 text-white" },
          { claimId: "CLM-9106", tpa: "Medi Assist", amount: "₹2,40,000", status: "Pre-Auth Granted", statusColor: "bg-orange-600 text-white" },
          { claimId: "CLM-9107", tpa: "Vidal Health", amount: "₹1,15,000", status: "Settlement Ready", statusColor: "bg-slate-700 text-slate-200" },
        ],
      },
    },
  ];




  const currentDept = departments[activeDeptTab];
  const DeptIcon = currentDept.icon;

  return (
    <section
      id="enterprise-multispecialty"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="py-20 sm:py-28 bg-[#FAFCFF] border-t border-slate-200/80 scroll-mt-24 relative overflow-hidden select-none transition-colors duration-500"
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
        className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-amber-400/20 rounded-full blur-[140px] pointer-events-none -z-0 transition-transform duration-700 ease-out"
        style={{
          transform: "translate3d(calc(var(--ratio-x, 0) * 35px), calc(var(--ratio-y, 0) * 35px), 0)",
        }}
      />
      <div
        className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-orange-400/20 rounded-full blur-[140px] pointer-events-none -z-0 transition-transform duration-700 ease-out"
        style={{
          transform: "translate3d(calc(var(--ratio-x, 0) * -35px), calc(var(--ratio-y, 0) * -35px), 0)",
        }}
      />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Master Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <h2 className="text-3xl sm:text-5xl font-black text-[#0B132B] tracking-tight leading-[1.15]">
            Enterprise Multispecialty Hospital Management{" "}
            <span className="bg-gradient-to-r from-amber-600 via-orange-500 to-amber-500 bg-clip-text text-transparent">
              Platform
            </span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto font-normal leading-relaxed">
            Synchronizing multi-location hospital networks, high-throughput OPD/IPD operations, tertiary surgical suites, and unified financial workflows into a single intelligent platform.
          </p>
        </div>

        {/* 1. Interactive Department Navigator Tabs */}
        <div className="bg-white/95 backdrop-blur-md p-2 rounded-2xl sm:rounded-full border border-slate-200 shadow-sm max-w-5xl mx-auto mb-10">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-1.5">
            {departments.map((dept, idx) => {
              const TabIcon = dept.icon;
              const isActive = activeDeptTab === idx;
              return (
                <button
                  key={dept.id}
                  onClick={() => setActiveDeptTab(idx)}
                  className={`px-3 py-3 rounded-xl sm:rounded-full text-xs sm:text-[13px] font-bold flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-gradient-to-r from-amber-600 via-orange-500 to-amber-500 text-white shadow-md shadow-amber-500/25"
                      : "text-slate-700 hover:text-slate-900 hover:bg-amber-50/60"
                  }`}
                >
                  <TabIcon className={`w-4 h-4 shrink-0 ${isActive ? "text-white" : "text-slate-400"}`} />
                  <span className="truncate">{dept.name.split("&")[0]}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 2. Active Department Command Center Showcase Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-xl mb-16 relative overflow-hidden">
          {/* Top highlight border using master brand flame/amber gradient */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-600 via-orange-500 to-amber-400" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left 7 Columns: Department Breakdown */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="flex flex-wrap items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200/80 text-amber-600 flex items-center justify-center shadow-xs">
                  <DeptIcon className="w-6 h-6" />
                </div>
                <div>
                  <span className="px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-[11px] font-extrabold uppercase tracking-wider border border-amber-200/80">
                    {currentDept.badge}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-[#0B132B] mt-1 tracking-tight">
                    {currentDept.title}
                  </h3>
                </div>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {currentDept.desc}
              </p>

              {/* 4 Feature Bullets with Checkmarks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                {currentDept.features.map((f, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-2.5 p-3 rounded-2xl bg-slate-50 border border-slate-200/70">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-800 font-medium leading-snug">{f}</span>
                  </div>
                ))}
              </div>

              {/* Department Benchmark Chip */}
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-gradient-to-r from-amber-50 via-orange-50/40 to-white border border-amber-200/80">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-r from-amber-600 to-orange-500 text-white flex items-center justify-center shrink-0 shadow-xs">
                  <TrendingUp className="w-4.5 h-4.5" />
                </div>
                <div>
                  <div className="text-xs font-black text-[#0B132B]">{currentDept.kpi}</div>
                  <div className="text-[11px] text-slate-600">{currentDept.kpiSub}</div>
                </div>
              </div>
            </div>

            {/* Right 5 Columns: Realistic Interactive Live Department HUD Mockup */}
            <div className="lg:col-span-5">
              <div className="bg-[#0B132B] rounded-2xl p-5 sm:p-6 text-white border border-slate-800 shadow-2xl relative overflow-hidden">
                {/* Header of HUD */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-black uppercase tracking-wider text-slate-300">
                      Live Department HUD
                    </span>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/10 text-slate-300 border border-white/10">
                    Auto-Sync Active
                  </span>
                </div>

                {/* Content based on mockupType */}
                {currentDept.mockupType === "tokenQueue" && (
                  <div className="space-y-3">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                      <div>
                        <div className="text-[10px] text-slate-400 uppercase font-semibold">Active Doctor Cabin</div>
                        <div className="text-xs font-bold text-white">{currentDept.mockData.doctor}</div>
                        <div className="text-[11px] text-amber-400 font-medium">{currentDept.mockData.currentCabin}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-black text-amber-400">{currentDept.mockData.activeToken}</div>
                        <div className="text-[10px] text-slate-400">Current Calling</div>
                      </div>
                    </div>

                    <div className="space-y-1.5 pt-1">
                      <div className="text-[11px] font-bold text-slate-400 flex items-center justify-between">
                        <span>Upcoming Waiting Queue</span>
                        <span className="text-amber-400 font-extrabold">{currentDept.mockData.waitingCount} in line</span>
                      </div>
                      {currentDept.mockData.tokens.map((tok, tIdx) => (
                        <div key={tIdx} className="flex items-center justify-between p-2 rounded-lg bg-white/5 text-xs border border-white/5">
                          <div className="flex items-center gap-2">
                            <span className="font-mono font-bold text-amber-300">{tok.number}</span>
                            <span className="text-slate-300 text-[11px]">{tok.patient}</span>
                          </div>
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${tok.statusColor}`}>
                            {tok.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {currentDept.mockupType === "bedMatrix" && (
                  <div className="space-y-3">
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div className="p-2 rounded-xl bg-white/5 border border-white/10">
                        <div className="text-[10px] text-slate-400">ICU Beds</div>
                        <div className="text-xs font-black text-emerald-400">{currentDept.mockData.icuBeds}</div>
                      </div>
                      <div className="p-2 rounded-xl bg-white/5 border border-white/10">
                        <div className="text-[10px] text-slate-400">HDU Beds</div>
                        <div className="text-xs font-black text-amber-400">{currentDept.mockData.hduBeds}</div>
                      </div>
                      <div className="p-2 rounded-xl bg-white/5 border border-white/10">
                        <div className="text-[10px] text-slate-400">General Ward</div>
                        <div className="text-xs font-black text-orange-400">{currentDept.mockData.generalBeds}</div>
                      </div>
                    </div>

                    <div className="space-y-2 pt-1">
                      {currentDept.mockData.beds.map((b, bIdx) => (
                        <div key={bIdx} className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs">
                          <div>
                            <div className="font-bold text-white flex items-center gap-1.5">
                              <span className="text-amber-400 font-mono">{b.room}</span>
                              <span className="text-slate-300 text-[11px]">{b.patient}</span>
                            </div>
                            <div className="text-[10px] text-slate-400">{b.vitals}</div>
                          </div>
                          <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                            {b.tag}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {currentDept.mockupType === "otSuite" && (
                  <div className="space-y-3">
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs">
                      <span className="text-slate-300 font-medium">Surgical Complex Status</span>
                      <span className="font-bold text-emerald-400">{currentDept.mockData.activeOTs}</span>
                    </div>

                    <div className="space-y-2">
                      {currentDept.mockData.surgeries.map((surg, sIdx) => (
                        <div key={sIdx} className="p-2.5 rounded-xl bg-white/5 border border-white/10 space-y-1 text-xs">
                          <div className="flex items-center justify-between">
                            <span className="font-mono font-bold text-amber-300">{surg.ot}</span>
                            <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${surg.color}`}>
                              {surg.status}
                            </span>
                          </div>
                          <div className="text-white font-bold text-[11px]">{surg.procedure}</div>
                          <div className="flex items-center justify-between text-[10px] text-slate-400">
                            <span>Surgeon: {surg.surgeon}</span>
                            <span className="text-amber-300 font-medium">{surg.stage}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {currentDept.mockupType === "pharmacy" && (
                  <div className="space-y-3">
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs">
                      <span className="text-slate-300 font-medium">Active Dispensary Telemetry</span>
                      <span className="font-bold text-amber-400">{currentDept.mockData.stats}</span>
                    </div>

                    <div className="space-y-2">
                      {currentDept.mockData.indents.map((ind, iIdx) => (
                        <div key={iIdx} className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs">
                          <div>
                            <div className="font-mono font-bold text-white">{ind.id}</div>
                            <div className="text-[11px] text-slate-400">{ind.ward} • {ind.items}</div>
                          </div>
                          <span className={`text-[9px] font-bold px-2.5 py-0.5 rounded-full ${ind.tagColor}`}>
                            {ind.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {currentDept.mockupType === "tpaDesk" && (
                  <div className="space-y-3">
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs">
                      <span className="text-slate-300 font-medium">Cashless Desk Queue</span>
                      <span className="font-bold text-emerald-400">{currentDept.mockData.activeClaims}</span>
                    </div>

                    <div className="space-y-2">
                      {currentDept.mockData.claims.map((clm, cIdx) => (
                        <div key={cIdx} className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs">
                          <div>
                            <div className="flex items-center gap-1.5">
                              <span className="font-mono font-bold text-white">{clm.claimId}</span>
                              <span className="text-amber-400 font-bold">{clm.amount}</span>
                            </div>
                            <div className="text-[11px] text-slate-400">{clm.tpa}</div>
                          </div>
                          <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${clm.statusColor}`}>
                            {clm.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Footer status */}
                <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                    HWAI Hospital OS Engine
                  </span>
                  <span className="text-amber-400 font-semibold cursor-pointer hover:underline">
                    Expand Console →
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>




      </div>
    </section>
  );
};

export default HwaiEnterpriseSection;
