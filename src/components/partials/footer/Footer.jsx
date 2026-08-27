import React from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MessageSquare,
  MapPin,
  Building,
  ShieldCheck,
  ExternalLink,
  Lock,
} from "lucide-react";
import filliptechLogo from "../../../assets/Fillip-logo-white.webp";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Products",
      links: [
        { name: "e_Kshitiz", path: "/products/e-kshitiz" },
        { name: "e_Kshitiz Lite", path: "/products/e-kshitiz-lite" },
        { name: "e_Drishti", path: "/products/e-drishti" },
        { name: "e_Drishti Lite", path: "/products/e-drishti-lite" },
        { name: "HWAI", path: "/products/hwai" },
      ],
    },
    {
      title: "Solutions",
      links: [
        { name: "Hospital Management", path: "/solutions" },
        { name: "Eye Hospital Management", path: "/solutions" },
        { name: "Integrations & Ecosystem", path: "/integrations" },
        { name: "Security & Compliance", path: "/integrations#security-compliance" },
        { name: "Enterprise Healthcare", path: "/solutions" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About", path: "/about" },
        { name: "Vision", path: "/about" },
        { name: "Clients", path: "/about" },
        { name: "Careers", path: "/contact" },
        { name: "Contact", path: "/contact" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Client Login", path: "/login" },
        { name: "Support", path: "/contact" },
        { name: "License Activation", path: "/contact" },
        { name: "Service Request", path: "/contact" },
        { name: "Webmail", path: "/contact" },
      ],
    },
    {
      title: "Legal & Security",
      links: [
        { name: "Security & VAPT", path: "/integrations#security-compliance" },
        { name: "ABDM Compliance", path: "/integrations" },
        { name: "Data Privacy", path: "/integrations#security-compliance" },
        { name: "Terms & Conditions", path: "/terms" },
      ],
    },
  ];

  return (
    <footer className="relative z-30 w-full bg-[#0E162E] text-white pt-20 pb-12 overflow-hidden select-none border-t border-slate-700/60 font-sans">
      {/* Background Decorative Mesh Orbs */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#FF4D27]/10 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#0284C7]/10 rounded-full blur-3xl pointer-events-none -z-0" />

      {/* Giant Background Watermark Text */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[11vw] font-black text-white/[0.03] whitespace-nowrap pointer-events-none tracking-tighter uppercase select-none">
        HAMSA SOHAM
      </div>

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10 space-y-16">
        
        {/* Glassmorphism Top CTA Banner */}
        <div className="bg-gradient-to-r from-slate-900/90 via-[#1C2A52] to-slate-900/90 border border-slate-600/60 rounded-3xl p-8 sm:p-10 shadow-2xl backdrop-blur-xl flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden group">
          <div className="space-y-2 text-left">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Ready to Upgrade Your Hospital Operations?
            </h3>
            <p className="text-sm text-slate-300 font-normal max-w-2xl">
              Get in touch with our healthcare IT specialists to schedule a personalized demonstration of e_Kshitiz, e_Drishti, or HWAI.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3.5 shrink-0">
            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/919153998385"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#FF4D27] to-[#FF7043] hover:from-[#E03A14] hover:to-[#FF4D27] text-white font-extrabold text-xs sm:text-sm shadow-xl shadow-[#FF4D27]/30 transition-all hover:scale-105 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>

            {/* Direct Phone CTA */}
            <a
              href="tel:+919153998385"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-extrabold text-xs sm:text-sm transition-all hover:scale-105 cursor-pointer"
            >
              <Phone className="w-4 h-4 text-[#FF4D27]" />
              <span>+91 9153998385</span>
            </a>
          </div>
        </div>

        {/* 5-Section Categorized Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-10 pb-12 border-b border-slate-700/60 text-left">
          {footerSections.map((sec, idx) => (
            <div key={idx} className="space-y-4">
              <h4 className="text-xs font-black text-[#FF4D27] uppercase tracking-wider">
                {sec.title}
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-300 font-medium">
                {sec.links.map((linkItem, lIdx) => (
                  <li key={lIdx}>
                    {linkItem.path ? (
                      linkItem.isExternal ? (
                        <a
                          href={linkItem.path}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer group py-0.5"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#FF4D27] opacity-0 group-hover:opacity-100 transition-opacity" />
                          <span>{linkItem.name}</span>
                          <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-white transition-colors" />
                        </a>
                      ) : (
                        <Link
                          to={linkItem.path}
                          className="hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer group py-0.5"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#FF4D27] opacity-0 group-hover:opacity-100 transition-opacity" />
                          <span>{linkItem.name}</span>
                        </Link>
                      )
                    ) : (
                      <span className="text-slate-300 flex items-center gap-1.5 py-0.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-500/40" />
                        <span>{linkItem.name}</span>
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Detailed Address & Contact Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 border-b border-slate-700/60 text-left items-start">
          
          {/* Corporate & Registered Office Cards */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-200">
            {/* Corporate Address */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <div className="text-[11px] font-extrabold text-white flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#FF4D27] shrink-0" />
                <span>Corporate Office:</span>
              </div>
              <p className="text-slate-300 text-[11px] leading-relaxed">
                Flat No. 3B, Mayank Manan, Ashokpuri, Khajpura, Patna-14, Bihar (IN)
              </p>
            </div>

            {/* Registered Office */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <div className="text-[11px] font-extrabold text-white flex items-center gap-1.5">
                <Building className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Registered Office:</span>
              </div>
              <p className="text-slate-300 text-[11px] leading-relaxed">
                Rental Flat No. 119, Lohiya Nagar, Kankarbagh, Patna-20, Bihar (IN)
              </p>
            </div>
          </div>

          {/* Direct Support & Hotline Strip */}
          <div className="lg:col-span-4 space-y-2 text-xs">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2.5">
              <div className="flex items-center justify-between border-b border-white/10 pb-2 text-[11px]">
                <span className="font-bold text-white flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#FF4D27]" />
                  <span>Helpline:</span>
                </span>
                <a href="tel:+919153998385" className="font-bold text-white hover:text-[#FF4D27] transition-colors">
                  +91 91539 98385
                </a>
              </div>

              <div className="flex items-center justify-between text-[11px]">
                <span className="font-bold text-white flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-sky-400" />
                  <span>Email:</span>
                </span>
                <a href="mailto:info@hamsasoham.com" className="font-bold text-white hover:text-sky-400 transition-colors">
                  info@hamsasoham.com
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom Copyright & Compliance Bar */}
        <div className="space-y-3">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-medium">
            <p>© {currentYear} Hamsa Soham Healthcare Pvt Ltd. All rights reserved.</p>

            <div className="flex items-center gap-4 text-[11px]">
              <span className="flex items-center gap-1 text-emerald-400">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>NABH & ABDM Ready</span>
              </span>
              <span className="text-slate-600">•</span>
              <span className="flex items-center gap-1 text-slate-300">
                <Lock className="w-3.5 h-3.5 text-amber-400" />
                <span>ISO 27001 Certified Security</span>
              </span>
            </div>
          </div>

          {/* Designed & Developed Credit */}
          <div className="pt-2 flex items-center justify-center gap-2.5 sm:gap-3">
            <span className="text-xs sm:text-sm text-slate-400 font-medium">
              Design and Developed by
            </span>
            <a
              href="https://filliptechnologies.com"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-90 hover:opacity-100 hover:scale-105 transition-all inline-flex items-center"
            >
              <img
                src={filliptechLogo}
                alt="Fillip Technologies"
                className="h-6 sm:h-7 w-auto object-contain"
              />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
