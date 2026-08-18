import React from "react";
import { Mail, Phone, MapPin, MessageSquare, Clock } from "lucide-react";

export const ContactHero = () => {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 sm:pt-18 sm:pb-20 bg-[#F4F8FD] text-slate-900 select-none border-b border-slate-200/80">
      {/* Radial Mesh Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-400/15 rounded-full blur-[140px] pointer-events-none -z-0" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#FF4D27]/10 rounded-full blur-[140px] pointer-events-none -z-0" />
      
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0284c70a_1px,transparent_1px),linear-gradient(to_bottom,#0284c70a_1px,transparent_1px)] bg-[size:36px_36px] pointer-events-none -z-0" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 w-full text-center space-y-4">
        <h1 className="text-4xl sm:text-6xl font-black text-[#0B132B] tracking-tight uppercase">
          Let's Build Your <span className="bg-gradient-to-r from-[#FF4D27] via-amber-500 to-sky-600 bg-clip-text text-transparent">Healthcare System</span>
        </h1>

        <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto font-normal leading-relaxed">
          Have questions about e_Drishti, e_Kshitiz, or HWAI platform? Contact our healthcare specialists for custom product demos and deployment queries.
        </p>

        {/* Quick Contact Info Badges */}
        <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          <a
            href="tel:+919153998385"
            className="flex items-center justify-center gap-3 p-4 rounded-2xl bg-white border border-slate-200/80 hover:border-sky-300 shadow-xs hover:shadow-md transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0 border border-sky-100 group-hover:scale-105 transition-transform">
              <Phone className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Direct Call</div>
              <div className="text-sm font-extrabold text-[#0B132B]">+91 9153998385</div>
            </div>
          </a>

          <a
            href="mailto:info@hamsasoham.com"
            className="flex items-center justify-center gap-3 p-4 rounded-2xl bg-white border border-slate-200/80 hover:border-orange-300 shadow-xs hover:shadow-md transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#FF4D27] flex items-center justify-center shrink-0 border border-orange-100 group-hover:scale-105 transition-transform">
              <Mail className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Email Inquiry</div>
              <div className="text-sm font-extrabold text-[#0B132B]">info@hamsasoham.com</div>
            </div>
          </a>

          <div className="flex items-center justify-center gap-3 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100">
              <Clock className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Support Hours</div>
              <div className="text-sm font-extrabold text-[#0B132B]">Mon - Sat: 9 AM - 7 PM</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactHero;
