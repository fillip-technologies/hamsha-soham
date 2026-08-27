import React from "react";
import { Link } from "react-router-dom";
import {
  Building2,
  FileText,
  FlaskConical,
  Scan,
  Images,
  Binary,
  GitMerge,
  ShieldCheck,
  CreditCard,
  Wallet,
  MessageSquare,
  Calculator,
  Code2,
  KeyRound,
  Cpu,
  CheckCircle2,
  ArrowUpRight,
  Filter,
} from "lucide-react";

export const EcosystemSection = () => {
  const integrations = [
    {
      id: "his-hims",
      category: "clinical",
      name: "HIS / HIMS",
      fullName: "Hospital Information Management System",
      desc: "Centralized enterprise backbone orchestrating IPD, OPD, OT scheduling, bed census, and multi-departmental administrative workflows.",
      icon: Building2,
      protocol: "Enterprise Core / REST",
      badge: "Core Platform",
      accent: "from-blue-500 to-indigo-600",
      iconBg: "bg-blue-50 text-blue-600 border-blue-200",
      features: [
        "Patient Demographic & Master Index (EMPI)",
        "Real-Time Ward & Bed Management",
        "Multi-Specialty Clinical Department Routing",
        "NABH Indicator Tracking & Compliance",
      ],
    },
    {
      id: "emr",
      category: "clinical",
      name: "EMR & EHR",
      fullName: "Electronic Medical Records & Health Records",
      desc: "Specialized clinical charting with ophthalmic auto-fill templates, doctor voice-to-text, prescription generator, and longitudinal patient health histories.",
      icon: FileText,
      protocol: "HL7 FHIR / SNOMED-CT",
      badge: "Clinical Core",
      accent: "from-orange-500 to-amber-500",
      iconBg: "bg-orange-50 text-[#FF4D27] border-orange-200",
      features: [
        "Specialty-Specific Clinical EMR Templates",
        "Rx Drug Allergy & Contraindication Alerts",
        "Ophthalmology Slit-Lamp & Retina Charting",
        "Digital Patient Consent & e-Signatures",
      ],
    },
    {
      id: "lis",
      category: "clinical",
      name: "LIS",
      fullName: "Laboratory Information System",
      desc: "End-to-end diagnostic pathology lifecycle from barcode sample collection, analyzer result parsing, doctor digital sign-off, to automated SMS report dispatch.",
      icon: FlaskConical,
      protocol: "ASTM / HL7 v2.x",
      badge: "Diagnostics",
      accent: "from-emerald-500 to-teal-600",
      iconBg: "bg-emerald-50 text-emerald-600 border-emerald-200",
      features: [
        "Barcode Sample Tracking & Phlebotomy Queue",
        "Automated Normal / Critical Range Flagging",
        "Pathologist Multi-Stage Sign-off Workflow",
        "NABL Quality Control (QC) Charting",
      ],
    },
    {
      id: "ris",
      category: "clinical",
      name: "RIS",
      fullName: "Radiology Information System",
      desc: "Radiology scheduling, modality worklist (MWL) management, radiologist reporting templates, and diagnostic status tracking across ultrasound, X-ray, CT & MRI.",
      icon: Scan,
      protocol: "DICOM MWL / HL7",
      badge: "Radiology",
      accent: "from-purple-500 to-indigo-600",
      iconBg: "bg-purple-50 text-purple-600 border-purple-200",
      features: [
        "Modality Worklist (MWL) Order Sync",
        "Radiologist Voice Dictation & Structured Reporting",
        "Study Turnaround Time (TAT) Analytics",
        "Emergency Stat-Read Prioritization",
      ],
    },
    {
      id: "pacs",
      category: "clinical",
      name: "PACS",
      fullName: "Picture Archiving & Communication System",
      desc: "High-performance medical imaging storage and ultra-fast web viewer for lossless DICOM radiologic studies with zero desktop software installation required.",
      icon: Images,
      protocol: "DICOM C-STORE / WADO-RS",
      badge: "Medical Imaging",
      accent: "from-sky-500 to-blue-600",
      iconBg: "bg-sky-50 text-sky-600 border-sky-200",
      features: [
        "Zero-Footprint Web DICOM Viewer",
        "Multi-Planar Reconstruction (MPR) & 3D Tools",
        "Secure Cloud & On-Premises Study Archival",
        "Direct Link Embedding in Patient EMR",
      ],
    },
    {
      id: "dicom",
      category: "hardware",
      name: "DICOM",
      fullName: "Digital Imaging and Communications in Medicine",
      desc: "Universal standard interface connecting imaging modalities (CT, MRI, X-Ray, OCT, Fundus Cameras) directly into electronic patient records.",
      icon: Binary,
      protocol: "DICOM 3.0 Standard",
      badge: "Standards",
      accent: "from-cyan-500 to-sky-600",
      iconBg: "bg-cyan-50 text-cyan-600 border-cyan-200",
      features: [
        "Bi-Directional Modality Query / Retrieve",
        "Lossless Compression & Metadata Tag Parsing",
        "Ophthalmic OCT & Visual Field Device Sync",
        "Standardized Tagging (Patient ID, Study UID)",
      ],
    },
    {
      id: "hl7",
      category: "hardware",
      name: "HL7 & FHIR",
      fullName: "Health Level Seven & Fast Healthcare Interoperability",
      desc: "Inter-system message brokering complying with global HL7 v2.x and modern FHIR JSON APIs for seamless data interchange across heterogeneous hospital software.",
      icon: GitMerge,
      protocol: "HL7 v2.5 / FHIR R4",
      badge: "Interoperability",
      accent: "from-indigo-500 to-purple-600",
      iconBg: "bg-indigo-50 text-indigo-600 border-indigo-200",
      features: [
        "ADT (Admission, Discharge, Transfer) Sync",
        "ORM / ORU Clinical Orders & Results Messaging",
        "RESTful FHIR Resource Endpoints",
        "Secure TLS-Encrypted Message Queuing",
      ],
    },
    {
      id: "abdm",
      category: "compliance",
      name: "ABDM & NHA",
      fullName: "Ayushman Bharat Digital Mission (M1, M2, M3)",
      desc: "Complete National Health Authority sandbox certified integration for ABHA ID creation, health records linking, and consent-driven health data exchange.",
      icon: ShieldCheck,
      protocol: "ABDM Milestone 1, 2 & 3",
      badge: "National Standard",
      accent: "from-rose-500 to-red-600",
      iconBg: "bg-rose-50 text-rose-600 border-rose-200",
      features: [
        "ABHA (Health ID) Generation via Aadhaar / Mobile",
        "Health Information Provider (HIP) Sync",
        "Health Information User (HIU) Data Ingestion",
        "Consent Manager Gateway Adherence",
      ],
    },
    {
      id: "insurance-tpa",
      category: "compliance",
      name: "Insurance / TPA",
      fullName: "Third-Party Administrator & Cashless Desk",
      desc: "Real-time insurance pre-authorization, cashless claim submission, query management, and automated settlement tracking for private & government health schemes.",
      icon: CreditCard,
      protocol: "NHCX / Payer REST APIs",
      badge: "Payer Gateway",
      accent: "from-amber-500 to-orange-600",
      iconBg: "bg-amber-50 text-amber-600 border-amber-200",
      features: [
        "Digital Pre-Auth & Query Dispatch",
        "Ayushman Bharat PM-JAY & State Scheme Billing",
        "Claim Status Real-Time Tracking & Remittance",
        "Automated Disallowance & Co-pay Calculations",
      ],
    },
    {
      id: "payment-gateway",
      category: "ops",
      name: "Payment Gateway",
      fullName: "Unified UPI, Card, NetBanking & POS Terminals",
      desc: "Instant dynamic QR code generation at billing counters, smart POS card machines, payment link SMS dispatch, and zero-error automated reconciliation.",
      icon: Wallet,
      protocol: "Razorpay / PayU / PineLabs / UPI",
      badge: "Fintech",
      accent: "from-emerald-500 to-green-600",
      iconBg: "bg-emerald-50 text-emerald-600 border-emerald-200",
      features: [
        "Counter Dynamic UPI QR Code Generation",
        "Integrated Smart POS Credit/Debit Card Swipes",
        "Automated Settlement & Ledger Reconciliations",
        "Multi-Mode Split Billing (Cash, UPI, TPA)",
      ],
    },
    {
      id: "sms-whatsapp",
      category: "ops",
      name: "SMS / WhatsApp",
      fullName: "Automated Patient Communications Engine",
      desc: "Official Meta WhatsApp Business Cloud API & transactional DLT SMS gateway for automated appointment reminders, e-prescriptions, and discharge summaries.",
      icon: MessageSquare,
      protocol: "WhatsApp Cloud API / DLT SMS",
      badge: "Communication",
      accent: "from-teal-500 to-emerald-600",
      iconBg: "bg-teal-50 text-teal-600 border-teal-200",
      features: [
        "Interactive WhatsApp Appointment Booking & Reminders",
        "One-Click PDF Rx & Diagnostic Report Dispatch",
        "Emergency IPD Billing & Discharge Notifications",
        "Secure OTP-Based Patient Portal Access",
      ],
    },
    {
      id: "accounting-erp",
      category: "ops",
      name: "Accounting / ERP",
      fullName: "Enterprise Financial Ledger & Supply Chain",
      desc: "Real-time bi-directional sync with enterprise financial software (Tally Prime, SAP, Oracle, Zoho Books) for automatic sales, purchases, and GST e-invoicing.",
      icon: Calculator,
      protocol: "XML / ODBC / REST Webhooks",
      badge: "Financial ERP",
      accent: "from-slate-700 to-slate-900",
      iconBg: "bg-slate-100 text-slate-800 border-slate-300",
      features: [
        "Automated Tally Prime Ledger XML Export",
        "GST e-Invoice & e-Way Bill IRN Auto-Generation",
        "Pharmacy & Central Store Stock Ledger Sync",
        "Vendor Purchase Order & AP/AR Reconciliations",
      ],
    },
    {
      id: "apis-webhooks",
      category: "hardware",
      name: "APIs & Webhooks",
      fullName: "Extensible Developer & Partner Gateway",
      desc: "Comprehensive developer ecosystem with Swagger-documented RESTful APIs and real-time webhook event triggers for third-party medical software integration.",
      icon: Code2,
      protocol: "OpenAPI 3.0 / Webhooks",
      badge: "Developer API",
      accent: "from-violet-500 to-purple-700",
      iconBg: "bg-violet-50 text-violet-600 border-violet-200",
      features: [
        "Granular RESTful JSON Endpoints with JWT Auth",
        "Real-Time Event Webhooks (Admit, Discharge, Order)",
        "Rate-Limited & Encrypted API Gateway",
        "Comprehensive Sandbox Environment & Docs",
      ],
    },
    {
      id: "sso",
      category: "compliance",
      name: "SSO (Single Sign-On)",
      fullName: "Enterprise Identity & Access Management (IAM)",
      desc: "Centralized federated authentication with Microsoft Azure AD, Google Workspace, SAML 2.0, OAuth2, and Active Directory LDAP for secure hospital login.",
      icon: KeyRound,
      protocol: "SAML 2.0 / OAuth 2.0 / OIDC",
      badge: "Identity & Security",
      accent: "from-blue-600 to-sky-700",
      iconBg: "bg-blue-50 text-blue-700 border-blue-200",
      features: [
        "Microsoft 365 & Google Workspace SSO",
        "Active Directory & LDAP Directory Sync",
        "Two-Factor Authentication (2FA) Enforcement",
        "Centralized Session Revocation & Timeout Controls",
      ],
    },
    {
      id: "lab-machine",
      category: "hardware",
      name: "Lab Machine Integration",
      fullName: "Diagnostic Analyzer Hardware Interfacing",
      desc: "Direct serial RS232, TCP/IP, and unidirectional/bi-directional interfacing with biochemistry, hematology, immunoassay, and ophthalmic diagnostic devices.",
      icon: Cpu,
      protocol: "RS-232 / TCP/IP / ASTM E1381",
      badge: "Hardware Sync",
      accent: "from-orange-500 to-red-600",
      iconBg: "bg-orange-50 text-[#FF4D27] border-orange-200",
      features: [
        "Bi-directional Analyzer Worklist & Result Fetch",
        "Auto-Refractor & Keratometer Device Interfacing",
        "Zero Clerical Typing Errors on Lab Values",
        "Support for Beckman, Sysmex, Roche, Mindray, Topcon",
      ],
    },
  ];

  return (
    <section id="connected-ecosystem" className="py-20 sm:py-28 bg-[#F8FAFC] border-t border-slate-200/80 text-left select-none font-sans relative">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 space-y-12">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 text-[#FF4D27] text-xs font-black uppercase tracking-wider">
            <span>Interoperability Architecture</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-[#0B132B] tracking-tight">
            Connected Healthcare <span className="text-[#FF4D27]">Ecosystem</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Hamsa Soham eliminates clinical data silos by interfacing directly with clinical hardware, laboratory analyzers, medical imaging modalities, financial ledgers, and national healthcare exchanges.
          </p>
        </div>

        {/* 15 Integration Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
          {integrations.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col justify-between group space-y-5"
              >
                <div className="space-y-4">
                  {/* Card Header */}
                  <div className="flex items-start justify-between">
                    <div className={`w-12 h-12 rounded-2xl ${item.iconBg} flex items-center justify-center shadow-xs shrink-0 group-hover:scale-105 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200/70">
                      {item.badge}
                    </span>
                  </div>

                  {/* Title & Sub */}
                  <div>
                    <h3 className="text-xl font-black text-[#0B132B] tracking-tight group-hover:text-[#FF4D27] transition-colors">
                      {item.name}
                    </h3>
                    <div className="text-xs font-bold text-slate-500 mt-0.5">
                      {item.fullName}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>

                  {/* Feature Checklist */}
                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <div className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                      Capabilities & Protocol: <span className="text-slate-700 font-mono">{item.protocol}</span>
                    </div>
                    <ul className="space-y-1.5 text-xs text-slate-700">
                      {item.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="leading-snug">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                  <span className="font-mono text-[10px] font-bold text-slate-500 bg-slate-50 px-2.5 py-1.5 rounded-xl border border-slate-200/80 truncate">
                    {item.protocol}
                  </span>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-900 hover:bg-[#FF4D27] text-white font-extrabold text-xs shadow-xs transition-all hover:scale-105 shrink-0 cursor-pointer"
                  >
                    <span>Request Integration</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
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

export default EcosystemSection;
