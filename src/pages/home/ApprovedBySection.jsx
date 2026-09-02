import {
  ShieldCheck,
  FileText,
  ExternalLink,
  Download,
  BadgeCheck,
  Award,
  Lock,
  Sparkles,
  ArrowRight,
} from "lucide-react";

// Official PDF and image assets
import ayushmanLogo from "../../assets/aysuhman-bharat-removebg-preview.png";
import ayushmanSeal from "../../assets/pdf/aysuhaman-1.png";
import nhaLogo from "../../assets/nha.png";
import abdmCertPdf from "../../assets/pdf/certificate.pdf";
import safeCertPdf from "../../assets/pdf/safe-cert.pdf";
import vapCertPdf from "../../assets/pdf/VAPcert.pdf";
import abdmCertPreview from "../../assets/pdf/previews/certificate.jpg";
import safeCertPreview from "../../assets/pdf/previews/safe-cert.jpg";
import vapCertPreview from "../../assets/pdf/previews/VAPcert.jpg";

export const ApprovedBySection = () => {
  const certificates = [
    {
      id: "abdm-m1-m3",
      certNumber: "ABDM-NHA-2026-M123",
      name: "Ayushman Bharat Digital Mission (ABDM)",
      authority: "National Health Authority (NHA) • Govt of India",
      logo: ayushmanLogo,
      preview: abdmCertPreview,
      pdfUrl: abdmCertPdf,
      fileName: "ABDM_Milestone_Certification.pdf",
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
      icon: ShieldCheck,
      iconBg: "bg-emerald-50 text-emerald-600 border-emerald-200",
      preview: safeCertPreview,
      pdfUrl: safeCertPdf,
      fileName: "Safe_To_Host_Security_Certificate.pdf",
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
      icon: Lock,
      iconBg: "bg-blue-50 text-blue-600 border-blue-200",
      preview: vapCertPreview,
      pdfUrl: vapCertPdf,
      fileName: "VAPT_Security_Certificate.pdf",
      badgeText: "Cybersecurity Audited",
      accentBorder: "group-hover:border-blue-500/50",
      accentGlow: "from-blue-500/15 via-indigo-500/5 to-transparent",
      accentPill: "bg-blue-500/10 text-blue-700 border-blue-500/20",
    },
  ];

  return (
    <section className="relative bg-[#F8FAFC] py-12 sm:py-16 border-b border-slate-200/80 select-none overflow-hidden">
      {/* Background Decorative Mesh Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#FF4D27]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-8 sm:mb-10 text-left">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-[#FF4D27] text-xs font-black uppercase tracking-wider shadow-2xs">
              <BadgeCheck className="w-4 h-4" />
              <span>Government Accreditations & Verified Audits</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0B132B] tracking-tight">
              Approved & Certified By
            </h2>
          </div>
        </div>

        {/* Official Government Recognition Logos */}
        <div className="mb-10 sm:mb-14 rounded-3xl bg-white border border-slate-200/90 shadow-md py-10 sm:py-14 px-6 sm:px-12 lg:px-16 flex items-center justify-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-10 sm:gap-14 lg:gap-20 w-full max-w-5xl">
            {/* Ayushman Bharat Digital Mission Seal */}
            <div className="flex items-center justify-center h-32 sm:h-40 md:h-44 w-full md:w-auto">
              <img
                src={ayushmanSeal}
                alt="Ayushman Bharat Digital Mission Integration Seal"
                className="h-full max-h-44 w-auto object-contain hover:scale-105 transition-transform duration-300 drop-shadow-xs"
              />
            </div>

            {/* Subtle Divider */}
            <div className="hidden md:block w-px h-28 lg:h-32 bg-slate-200" />
            <div className="md:hidden w-36 h-px bg-slate-200" />

            {/* Ayushman Bharat Digital Mission Logo */}
            <div className="flex items-center justify-center h-28 sm:h-36 md:h-40 w-full md:w-auto">
              <img
                src={ayushmanLogo}
                alt="Ayushman Bharat Digital Mission"
                className="h-full max-h-40 w-auto object-contain hover:scale-105 transition-transform duration-300 drop-shadow-xs"
              />
            </div>

            {/* Subtle Divider */}
            <div className="hidden md:block w-px h-28 lg:h-32 bg-slate-200" />
            <div className="md:hidden w-36 h-px bg-slate-200" />

            {/* National Health Authority Logo */}
            <div className="flex items-center justify-center h-24 sm:h-32 md:h-36 w-full md:w-auto">
              <img
                src={nhaLogo}
                alt="National Health Authority"
                className="h-full max-h-36 w-auto object-contain hover:scale-105 transition-transform duration-300 drop-shadow-xs"
              />
            </div>
          </div>
        </div>

        {/* Scrollable Certificate Cards Track */}
        <div
          className="flex items-stretch gap-6 overflow-x-auto pb-4 pt-1 scroll-smooth no-scrollbar"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className={`min-w-[320px] sm:min-w-[400px] md:min-w-[440px] bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col group relative overflow-hidden flex-shrink-0 ${cert.accentBorder}`}
            >
              {/* Top Accent Radial Glow */}
              <div
                className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl ${cert.accentGlow} rounded-full blur-3xl pointer-events-none group-hover:scale-150 transition-transform duration-500 z-10`}
              />

              {/* Certificate Image Preview — actual scanned certificate, click to view full PDF */}
              <a
                href={cert.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block w-full h-44 sm:h-48 overflow-hidden bg-slate-100 group/preview"
                title={`View ${cert.name} full certificate`}
              >
                <img
                  src={cert.preview}
                  alt={`${cert.name} certificate scan`}
                  className="w-full h-full object-cover object-top group-hover/preview:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent opacity-0 group-hover/preview:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <span className="text-white text-xs font-bold flex items-center gap-1.5 bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-full">
                    <FileText className="w-3.5 h-3.5" />
                    View Full Certificate
                  </span>
                </div>
              </a>

              <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 relative z-10">
                <div className="space-y-5">
                  {/* Header: Logo / Icon + Accreditation Label */}
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

                    <div className="text-right text-[10px] font-bold text-slate-400">
                      {cert.badgeText}
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
                </div>

                {/* Direct PDF Access Strip */}
                <div className="pt-5 mt-5 border-t border-slate-100 flex items-center gap-2.5">
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
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ApprovedBySection;
