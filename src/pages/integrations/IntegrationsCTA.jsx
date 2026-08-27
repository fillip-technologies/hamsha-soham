import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, Network, ShieldCheck } from "lucide-react";

export const IntegrationsCTA = () => {
  return (
    <section className="py-14 sm:py-20 bg-slate-950 text-white relative overflow-hidden select-none font-sans text-left">
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-[#1C2A52] to-slate-950 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#FF4D27]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10 text-center space-y-6">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-bold text-slate-300">
          <Network className="w-3.5 h-3.5 text-[#FF4D27]" />
          <span>Custom Hospital Interfacing Consultation</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight max-w-3xl mx-auto">
          Need a Custom Device or{" "}
          <span className="bg-gradient-to-r from-[#FF4D27] via-amber-400 to-sky-400 bg-clip-text text-transparent">
            System Integration?
          </span>
        </h2>

        <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto font-normal leading-relaxed">
          Our specialized healthcare interfacing engineers configure custom HL7, DICOM, diagnostic analyzer, and ERP connectors within 48 to 72 hours.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Link
            to="/contact"
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#FF4D27] via-orange-500 to-sky-600 hover:from-[#FF4D27] hover:to-sky-700 text-white font-extrabold text-sm sm:text-base shadow-xl shadow-[#FF4D27]/30 transition-all flex items-center gap-2.5"
          >
            <span>Speak with Integration Specialist</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <a
            href="tel:+919153998385"
            className="px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm sm:text-base transition-all flex items-center gap-2"
          >
            <Phone className="w-4.5 h-4.5 text-[#FF4D27]" />
            <span>+91 9153998385</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsCTA;
