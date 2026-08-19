import React, { useRef } from "react";
import {
  ShieldCheck,
  FileText,
  ExternalLink,
  Download,
  ChevronLeft,
  ChevronRight,
  BadgeCheck,
  Award,
  Lock,
  CheckCircle2,
  Sparkles,
  ArrowRight,
} from "lucide-react";

// Official PDF and image assets from src/assets/pdf
import ayushmanLogo from "../../assets/pdf/aysuhaman-1.png";
import abdmCertPdf from "../../assets/pdf/certificate.pdf";
import safeCertPdf from "../../assets/pdf/safe-cert.pdf";
import vapCertPdf from "../../assets/pdf/VAPcert.pdf";

export const ApprovedBySection = () => {
  const scrollContainerRef = useRef(null);

  const certificates = [
    {
      id: "abdm-m1-m3",
      certNumber: "ABDM-NHA-2026-M123",
      name: "Ayushman Bharat Digital Mission (ABDM)",
      authority: "National Health Authority (NHA) • Govt of India",
      tag: "M1, M2 & M3 Approved",
      tagColor: "bg-[#FF4D27] text-white",
      logo: ayushmanLogo,
      pdfUrl: abdmCertPdf,
      fileName: "ABDM_Milestone_Certification.pdf",
      features: [
        "Milestone M1 (ABHA Creation & Verification)",
        "Milestone M2 (Health Facility & Staff Registry)",
        "Milestone M3 (Longitudinal Health Records & UHI)",
      ],
      badgeText: "NHA Official Accreditation",
      accentBorder: "group-hover:border-[#FF4D27]/50",
      accentGlow: "from-orange-500/15 via-[#FF4D27]/5 to-transparent",
      accentPill: "bg-orange-500/10 text-[#FF4D27] border-orange-500/20",
    },
    {
      id: "safe-to-host",
      certNumber: "CERT-IN-SAFE-HOST-882",
      name: "Safe to Host Security Audit Certificate",
      authority: "CERT-In Empanelled Information Security Auditor",
      tag: "CERT-In Empanelled",
      tagColor: "bg-emerald-600 text-white",
      icon: ShieldCheck,
      iconBg: "bg-emerald-50 text-emerald-600 border-emerald-200",
      pdfUrl: safeCertPdf,
      fileName: "Safe_To_Host_Security_Certificate.pdf",
      features: [
        "Zero High / Critical Vulnerabilities",
        "OWASP Top 10 Application Security Cleared",
        "Protected Hospital Cloud & Database Hosting",
      ],
      badgeText: "Host Integrity Cleared",
      accentBorder: "group-hover:border-emerald-500/50",
      accentGlow: "from-emerald-500/15 via-teal-500/5 to-transparent",
      accentPill: "bg-emerald-500/10 text-emerald-700 border-emerald-500/20",
    },
    {
      id: "vapt-security",
      certNumber: "VAPT-HAMSA-AUDIT-409",
      name: "VAPT Security Compliance Certificate",
      authority: "Enterprise Healthcare IT Penetration Testing",
      tag: "VAPT Certified",
      tagColor: "bg-blue-600 text-white",
      icon: Lock,
      iconBg: "bg-blue-50 text-blue-600 border-blue-200",
      pdfUrl: vapCertPdf,
      fileName: "VAPT_Security_Certificate.pdf",
      features: [
        "Full Scope Web App & API Pentest Tested",
        "Granular Role-Based Data Isolation",
        "256-Bit AES Clinical Data Encryption",
      ],
      badgeText: "Cybersecurity Audited",
      accentBorder: "group-hover:border-blue-500/50",
      accentGlow: "from-blue-500/15 via-indigo-500/5 to-transparent",
      accentPill: "bg-blue-500/10 text-blue-700 border-blue-500/20",
    },
  ];

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollAmount = clientWidth * 0.8;
      scrollContainerRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative bg-[#F8FAFC] py-12 sm:py-16 border-b border-slate-200/80 select-none overflow-hidden">
      {/* Background Decorative Mesh Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#FF4D27]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8 sm:mb-10">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-[#FF4D27] text-xs font-black uppercase tracking-wider shadow-2xs">
              <BadgeCheck className="w-4 h-4" />
              <span>Government Accreditations & Verified Audits</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0B132B] tracking-tight">
              Approved & Certified By
            </h2>
          </div>

          {/* Navigation Controls & Status Indicator */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 text-xs font-bold text-slate-500 bg-white px-3 py-1.5 rounded-full border border-slate-200 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Active Verified Status</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => scroll("left")}
                className="w-10 h-10 rounded-full bg-white hover:bg-slate-50 text-slate-700 flex items-center justify-center border border-slate-200/90 shadow-xs hover:shadow-md transition-all cursor-pointer hover:scale-105 active:scale-95"
                aria-label="Previous Certificate"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scroll("right")}
                className="w-10 h-10 rounded-full bg-white hover:bg-slate-50 text-slate-700 flex items-center justify-center border border-slate-200/90 shadow-xs hover:shadow-md transition-all cursor-pointer hover:scale-105 active:scale-95"
                aria-label="Next Certificate"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Scrollable Certificate Cards Track */}
        <div
          ref={scrollContainerRef}
          className="flex items-stretch gap-6 overflow-x-auto pb-4 pt-1 scroll-smooth no-scrollbar"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className={`min-w-[320px] sm:min-w-[400px] md:min-w-[440px] bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group relative overflow-hidden flex-shrink-0 ${cert.accentBorder}`}
            >
              {/* Top Accent Radial Glow */}
              <div
                className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl ${cert.accentGlow} rounded-full blur-3xl pointer-events-none group-hover:scale-150 transition-transform duration-500`}
              />

              <div className="space-y-5 relative z-10">
                {/* Header: Logo / Icon + Tag Pill */}
                <div className="flex items-center justify-between gap-4">
                  {cert.logo ? (
                    <div className="h-14 w-auto max-w-[150px] flex items-center justify-start p-1.5 bg-slate-50/80 rounded-2xl border border-slate-200/60 shadow-2xs group-hover:scale-105 transition-transform duration-300">
                      <img
                        src={cert.logo}
                        alt={cert.name}
                        className="max-h-11 w-auto object-contain"
                      />
                    </div>
                  ) : (
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center border shadow-xs group-hover:scale-105 transition-transform duration-300 ${cert.iconBg}`}
                    >
                      <cert.icon className="w-7 h-7" />
                    </div>
                  )}

                  <div className="text-right">
                    <span
                      className={`text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-2xs ${cert.tagColor}`}
                    >
                      {cert.tag}
                    </span>
                    <div className="text-[10px] font-bold text-slate-400 mt-1">
                      {cert.badgeText}
                    </div>
                  </div>
                </div>

                {/* Certificate Title & Authority */}
                <div className="space-y-1">
                  <h3 className="text-lg sm:text-xl font-black text-[#0B132B] tracking-tight group-hover:text-[#FF4D27] transition-colors leading-snug">
                    {cert.name}
                  </h3>
                  <p className="text-xs font-bold text-slate-500">
                    {cert.authority}
                  </p>
                </div>

                {/* Feature / Milestone Checklist */}
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  {cert.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 text-xs font-medium text-slate-700"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct PDF Access Strip */}
              <div className="pt-5 mt-5 border-t border-slate-100 flex items-center gap-2.5 relative z-10">
                <a
                  href={cert.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl bg-slate-900 hover:bg-[#FF4D27] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xs hover:shadow-lg hover:shadow-orange-500/20 transition-all cursor-pointer group/btn"
                  title={`View ${cert.name} PDF Certificate`}
                >
                  <FileText className="w-4 h-4" />
                  <span>View Official PDF</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80 group-hover/btn:translate-x-0.5 transition-transform" />
                </a>

                <a
                  href={cert.pdfUrl}
                  download={cert.fileName}
                  className="p-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center justify-center border border-slate-200/90 shadow-2xs hover:shadow-xs transition-colors cursor-pointer"
                  title="Download PDF"
                  aria-label={`Download ${cert.fileName}`}
                >
                  <Download className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ApprovedBySection;
