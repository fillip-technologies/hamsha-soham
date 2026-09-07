import React from "react";
import { CheckCircle2, ShieldCheck } from "lucide-react";
import ayushmanLogo from "../../assets/aysuhman-bharat-removebg-preview.png";
import nhaLogo from "../../assets/nha.png";

export const AbdmComplianceSection = () => {
  const coversList = [
    "Creation & Verification of ABHA Card",
    "Access control to the ABHA/PHR app with the ABHA address",
    "Notification to App for Data Linking & Generation",
    "Make OPD tokens via HIP QR code.",
    "Access & Discover Health Record via PHR App",
    "Manage consents for allowing the hospital/doctors to access your record across the facilities.",
  ];

  return (
    <section className="relative bg-white py-16 sm:py-20 border-b border-slate-200/80 select-none overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-orange-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-80 h-80 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

          {/* Left Column: Official Logos Showcase Card */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center">
            <div className="w-full max-w-sm bg-gradient-to-b from-slate-50/80 to-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-lg shadow-slate-100/80 flex flex-col items-center text-center space-y-6 group hover:border-orange-500/30 transition-all duration-300">

              {/* Ayushman Bharat Mission Logo */}
              <div className="flex flex-col items-center">
                <img
                  src={ayushmanLogo}
                  alt="Ayushman Bharat Digital Mission Logo"
                  className="max-h-28 sm:max-h-32 w-auto object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Approved By Divider */}
              <div className="w-full flex items-center gap-3">
                <div className="h-px bg-slate-200 flex-1" />
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Approved By:
                </span>
                <div className="h-px bg-slate-200 flex-1" />
              </div>

              {/* National Health Authority Logo */}
              <div className="flex flex-col items-center">
                <img
                  src={nhaLogo}
                  alt="National Health Authority Logo"
                  className="max-h-20 sm:max-h-24 w-auto object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Milestones Badge */}
              <div className="pt-2 w-full">
                <div className="px-3.5 py-1.5 rounded-xl bg-orange-50 border border-orange-200/80 text-[#FF4D27] text-xs font-black tracking-wide flex items-center justify-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Certified M1 • M2 • M3 Milestones</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Title, Subheading, ABDM overview & HMIS coverage checklist */}
          <div className="lg:col-span-8 space-y-6 text-left">

            {/* Main Header & Subheading */}
            <div className="space-y-3">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B132B] tracking-tight leading-tight">
                ABHA & ABDM Compliant Hospital Software
              </h2>

              <p className="text-lg sm:text-xl font-bold text-slate-800">
                <span className="underline decoration-slate-900 underline-offset-4 decoration-2">Hamsa Soham</span> is certified for ABDM's M1, M2, and M3.
              </p>

              <p className="italic text-slate-500 font-medium text-sm sm:text-base">
                Ayushman Bharat Digital Mission (ABDM)
              </p>
            </div>

            {/* Paragraph Description */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              The Ayushman Bharat Digital Mission (ABDM) aims to develop the backbone necessary to support the integrated digital health infrastructure of the country. It will bridge the existing gap amongst different stakeholders of the healthcare ecosystem through digital highways.
            </p>

            {/* Section Subheading: Hamsa Soham HMIS covers */}
            <div className="pt-2 space-y-4">
              <h3 className="text-base sm:text-lg font-black text-slate-900 tracking-tight">
                Hamsa Soham HMIS covers
              </h3>

              {/* Checklist Items */}
              <div className="space-y-3">
                {coversList.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 group">
                    <div className="mt-0.5 shrink-0 text-sky-500 group-hover:text-sky-600 transition-colors">
                      <CheckCircle2 className="w-5 h-5 stroke-[2.2]" />
                    </div>
                    <p className="text-sm sm:text-base text-slate-700 font-medium leading-normal">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AbdmComplianceSection;
