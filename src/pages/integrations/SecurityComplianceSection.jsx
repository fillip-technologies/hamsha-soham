import React from "react";
import { Link } from "react-router-dom";
import {
  Users,
  History,
  DatabaseBackup,
  Lock,
  ShieldCheck,
  Server,
  Key,
  EyeOff,
  Network,
  RefreshCw,
  CheckCircle,
  FileCheck2,
  ArrowUpRight,
} from "lucide-react";

export const SecurityComplianceSection = () => {
  const securityCards = [
    {
      id: "rbac",
      title: "Role-Based Access Control (RBAC)",
      badge: "Access Governance",
      icon: Users,
      desc: "Granular administrative privileges segmented across Doctors, Nurses, Pharmacists, Cashiers, Billing Officers, and System Administrators to prevent unauthorized clinical record exposure.",
      highlights: [
        "Doctor, Nurse, Billing, Pharmacy segregation",
        "Configurable privilege matrices per department",
        "Automatic privilege escalation safeguards",
        "Temporary emergency break-glass protocol",
      ],
      iconBg: "bg-blue-50 text-blue-600 border-blue-200",
      status: "Active RBAC",
    },
    {
      id: "audit-trail",
      title: "Immutable Audit Trail",
      badge: "Regulatory Compliance",
      icon: History,
      desc: "Comprehensive forensic logging tracking every patient file view, prescription edit, bill modification, diagnostic entry, and user session timestamp with IP and MAC footprinting.",
      highlights: [
        "Tamper-proof chronological action logs",
        "Bill adjustment & deletion authorization logs",
        "Clinical prescription revision histories",
        "NABH & DISHA audit export ready",
      ],
      iconBg: "bg-orange-50 text-[#FF4D27] border-orange-200",
      status: "Real-time Logging",
    },
    {
      id: "data-backup",
      title: "Automated Data Backup",
      badge: "Data Protection",
      icon: DatabaseBackup,
      desc: "Multi-tiered scheduled backup pipelines executing hourly incremental and daily full database snapshots with automated integrity verification and offsite cloud replication.",
      highlights: [
        "Hourly transactional differential snapshots",
        "Zero-downtime hot database backups",
        "Encrypted offsite cloud repository mirroring",
        "Automated restore testing drills",
      ],
      iconBg: "bg-emerald-50 text-emerald-600 border-emerald-200",
      status: "Automated Daily",
    },
    {
      id: "encryption",
      title: "End-to-End Encryption",
      badge: "Cryptographic Security",
      icon: Lock,
      desc: "Military-grade AES-256 encryption for all patient health records at rest and TLS 1.3 cryptographic transport layers safeguarding data in transit across web, mobile, and APIs.",
      highlights: [
        "AES-256 bit encryption at rest",
        "TLS 1.3 protocol encryption in transit",
        "Secure Hardware Security Module (HSM) key vault",
        "Zero plain-text transmission of PHI",
      ],
      iconBg: "bg-purple-50 text-purple-600 border-purple-200",
      status: "AES-256 / TLS 1.3",
    },
    {
      id: "vapt",
      title: "VAPT Certified",
      badge: "Penetration Tested",
      icon: ShieldCheck,
      desc: "Periodically audited through comprehensive Vulnerability Assessment and Penetration Testing (VAPT) in accordance with CERT-In and OWASP Top 10 security standards.",
      highlights: [
        "CERT-In empaneled auditor assessed",
        "OWASP Top 10 web & API vulnerability tested",
        "Zero critical/high unresolved CVE exposure",
        "Continuous automated vulnerability scanning",
      ],
      iconBg: "bg-rose-50 text-rose-600 border-rose-200",
      status: "CERT-In Audited",
    },
    {
      id: "secure-hosting",
      title: "Secure Cloud & Local Hosting",
      badge: "Infrastructure",
      icon: Server,
      desc: "Hosted on Tier-IV ISO 27001 certified data centers with DDoS mitigation, hardware firewall isolation, and optional localized air-gapped on-premises deployments.",
      highlights: [
        "Tier-IV data centers with 99.9% uptime SLA",
        "Enterprise Web Application Firewall (WAF)",
        "DDoS protection & IP rate limiting",
        "On-premise air-gapped hospital server option",
      ],
      iconBg: "bg-sky-50 text-sky-600 border-sky-200",
      status: "Tier-IV ISO 27001",
    },
    {
      id: "access-control",
      title: "Multi-Factor Access Control",
      badge: "Authentication",
      icon: Key,
      desc: "Strict session governance enforcing biometric verification, Time-based One-Time Passwords (TOTP), IP subnet whitelisting, and automated idle session lockouts.",
      highlights: [
        "SMS/Email & TOTP Multi-Factor Authentication",
        "Hospital LAN / IP Subnet whitelisting",
        "Biometric fingerprint device sync for staff",
        "Idle workstation auto-lockout policy",
      ],
      iconBg: "bg-indigo-50 text-indigo-600 border-indigo-200",
      status: "MFA & 2FA Enforced",
    },
    {
      id: "data-privacy",
      title: "Data Privacy & Governance",
      badge: "Privacy Standard",
      icon: EyeOff,
      desc: "Strict adherence to India Digital Personal Data Protection (DPDP) Act 2023, DISHA guidelines, and HIPAA principles safeguarding Protected Health Information (PHI).",
      highlights: [
        "Patient digital consent management framework",
        "De-identification & anonymization for clinical analytics",
        "Zero third-party telemetry or ad tracking",
        "Strict Right-to-Forget / Data Portability support",
      ],
      iconBg: "bg-amber-50 text-amber-600 border-amber-200",
      status: "DPDP & HIPAA Aligned",
    },
    {
      id: "abdm-integration",
      title: "ABDM & NHA Integration",
      badge: "National Standard",
      icon: Network,
      desc: "Fully certified with Ayushman Bharat Digital Mission architecture allowing seamless exchange of patient records across the unified digital health network of India.",
      highlights: [
        "ABHA ID verification & registration module",
        "Unified Health Interface (UHI) interoperability",
        "Health Information Exchange & Consent Manager",
        "NHA Sandbox Milestone 1, 2 & 3 Compliance",
      ],
      iconBg: "bg-teal-50 text-teal-600 border-teal-200",
      status: "NHA M1/M2/M3 Live",
    },
    {
      id: "disaster-recovery",
      title: "Disaster Recovery (DR)",
      badge: "Business Continuity",
      icon: RefreshCw,
      desc: "Resilient business continuity strategy with geographically separated disaster recovery zones delivering aggressive RPO (<15 mins) and RTO (<1 hour) thresholds.",
      highlights: [
        "Geographically separated active-passive failover",
        "Recovery Point Objective (RPO) < 15 minutes",
        "Recovery Time Objective (RTO) < 60 minutes",
        "Semi-annual live disaster simulation drills",
      ],
      iconBg: "bg-cyan-50 text-cyan-600 border-cyan-200",
      status: "RPO < 15m / RTO < 1h",
    },
  ];

  return (
    <section id="security-compliance" className="py-20 sm:py-28 bg-white border-t border-slate-200/80 text-left select-none font-sans relative">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 space-y-12">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl sm:text-5xl font-black text-[#0B132B] tracking-tight">
            Security & <span className="text-[#FF4D27]">Compliance</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Patient health data demands uncompromising security. Hamsa Soham enforces defense-in-depth protocols, CERT-In validated VAPT safeguards, and strict regulatory compliance across all deployment environments.
          </p>
        </div>

        {/* 10 Security & Compliance Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 pt-4">
          {securityCards.map((card, cIdx) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className="p-7 sm:p-8 rounded-3xl bg-[#F8FAFD] border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col justify-between space-y-5 group"
              >
                <div className="space-y-4">
                  {/* Card Top Row */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-2xl ${card.iconBg} flex items-center justify-center shadow-xs shrink-0 group-hover:scale-105 transition-transform`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-[10px] font-black uppercase text-[#FF4D27] tracking-wider">
                          0{cIdx + 1}. {card.badge}
                        </span>
                        <h3 className="text-xl font-black text-[#0B132B] tracking-tight">
                          {card.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {card.desc}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="pt-2 space-y-1.5 border-t border-slate-200/70">
                    <div className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                      Standard Safeguards
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-xs text-slate-700 font-medium">
                      {card.highlights.map((hl, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-1.5">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="leading-snug">{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200/70 flex items-center justify-between gap-2">
                  <span className="font-mono text-[10px] font-bold text-slate-500 bg-white px-2.5 py-1.5 rounded-xl border border-slate-200/80">
                    ISO / NABH / NABL
                  </span>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-900 hover:bg-[#FF4D27] text-white font-extrabold text-xs shadow-xs transition-all hover:scale-105 shrink-0 cursor-pointer"
                  >
                    <span>Request Compliance Doc</span>
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

export default SecurityComplianceSection;
