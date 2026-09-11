import React from "react";
import { MapPin, Phone, Mail, MessageCircle, ShieldCheck } from "lucide-react";

export const ContactInfo = () => {
  return (
    <div className="space-y-6 text-left select-none">
      
      {/* Corporate Address Card */}
      <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-md space-y-5">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-orange-50 text-[#FF4D27] flex items-center justify-center border border-orange-100 shrink-0">
            <MapPin className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-xl font-black text-[#0B132B]">Find Us</h4>
            <p className="text-xs text-slate-500 font-extrabold uppercase tracking-wider">Hamsa Soham Healthcare Pvt Ltd</p>
          </div>
        </div>

        {/* Corporate Address */}
        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
          <div className="text-xs font-black text-[#0B132B] flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-[#FF4D27]" />
            <span>Address:</span>
          </div>
          <p className="text-xs text-slate-600 font-medium leading-relaxed pl-5">
            Flat No. 3B, Mayank Manan, Ashokpuri, Khajpura, Patna, Bihar – 800025, India
          </p>
        </div>
      </div>

      {/* Direct Contact Channels Card */}
      <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-md space-y-4">
        <h4 className="text-lg font-black text-[#0B132B]">Direct Contact Lines</h4>

        <div className="space-y-3">
          
          {/* Phone Numbers */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
            <div className="text-xs font-black text-[#0B132B] flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#FF4D27]" />
              <span>Phone Numbers:</span>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pl-6">
              <a href="tel:+918789287388" className="text-sm font-extrabold text-slate-900 hover:text-[#FF4D27] transition-colors">
                +91 8789287388
              </a>
              <span className="hidden sm:inline text-slate-300">|</span>
              <a href="tel:+919153998385" className="text-sm font-extrabold text-slate-900 hover:text-[#FF4D27] transition-colors">
                +91 9153998385
              </a>
            </div>
          </div>

          {/* WhatsApp */}
          <a
            href="https://wa.me/919153998385"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 hover:bg-emerald-50 border border-slate-200/80 hover:border-emerald-300 transition-colors group"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                <MessageCircle className="w-4.5 h-4.5" />
              </div>
              <div>
                <div className="text-xs text-slate-500 font-medium">WhatsApp:</div>
                <div className="text-sm font-extrabold text-slate-900 group-hover:text-emerald-600 transition-colors">+91 91539 98385</div>
              </div>
            </div>
            <span className="text-xs font-bold text-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity">Chat &rarr;</span>
          </a>

          {/* Email */}
          <a
            href="mailto:info@hamsasoham.com"
            className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 hover:bg-orange-50 border border-slate-200/80 hover:border-orange-300 transition-colors group"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-orange-100 text-[#FF4D27] flex items-center justify-center shrink-0">
                <Mail className="w-4.5 h-4.5" />
              </div>
              <div>
                <div className="text-xs text-slate-500 font-medium">Email:</div>
                <div className="text-sm font-extrabold text-slate-900 group-hover:text-[#FF4D27] transition-colors">info@hamsasoham.com</div>
              </div>
            </div>
            <span className="text-xs font-bold text-[#FF4D27] opacity-0 group-hover:opacity-100 transition-opacity">Send Email &rarr;</span>
          </a>

        </div>
      </div>

      {/* Support Commitment Box */}
      <div className="bg-slate-900 text-white rounded-3xl p-6 border border-slate-800 shadow-xl space-y-2">
        <div className="flex items-center gap-2 text-sky-400">
          <ShieldCheck className="w-5 h-5" />
          <h5 className="text-xs font-extrabold uppercase tracking-wider">Enterprise Guarantee</h5>
        </div>
        <p className="text-xs text-slate-300 leading-relaxed font-medium">
          Dedicated 24/7 technical support engineers available for on-premise and cloud hospital deployments.
        </p>
      </div>

    </div>
  );
};

export default ContactInfo;
