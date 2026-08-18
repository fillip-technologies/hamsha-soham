import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, Calendar } from "lucide-react";

export const AboutCTA = () => {
  return (
    <section className="w-full bg-gradient-to-b from-indigo-50/40 via-white to-slate-50 text-slate-900 py-14 sm:py-20 relative overflow-hidden border-t border-slate-200/80 select-none">
      
      {/* Full-Width Top Decorative Gradient Accent Bar */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#FF4D27] via-amber-500 to-[#5254F2]" />

      {/* Background Soft Ambient Mesh Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[350px] bg-gradient-to-r from-indigo-100/50 via-orange-100/40 to-sky-100/50 rounded-full blur-[140px] pointer-events-none -z-0" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10 text-center space-y-6">
        
        <div className="max-w-3xl mx-auto space-y-3">
          <h2 className="text-3xl sm:text-5xl font-black text-[#0B132B] tracking-tight leading-tight">
            Ready to Transform Your <span className="bg-gradient-to-r from-[#FF4D27] via-amber-500 to-[#5254F2] bg-clip-text text-transparent">Hospital Operations?</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Schedule a live demo with our healthcare IT experts to explore how e_Drishti or e_Kshitiz fits your workflow.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-1">
          <Link
            to="/contact"
            className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#FF4D27] to-[#FF6B4A] hover:from-[#E03A14] hover:to-[#FF4D27] text-white font-extrabold text-xs uppercase tracking-wider flex items-center gap-2.5 shadow-lg shadow-[#FF4D27]/30 hover:shadow-xl hover:-translate-y-0.5 transition-all cursor-pointer"
          >
            <Calendar className="w-4.5 h-4.5" />
            <span>Schedule Live Demo</span>
            <ArrowRight className="w-4.5 h-4.5" />
          </Link>

          <a
            href="tel:+919153998385"
            className="px-7 py-3.5 rounded-xl bg-[#0B132B] hover:bg-slate-800 text-white font-extrabold text-xs uppercase tracking-wider flex items-center gap-2 shadow-md transition-all cursor-pointer"
          >
            <Phone className="w-4.5 h-4.5 text-amber-400" />
            <span>+91 9153998385</span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default AboutCTA;
