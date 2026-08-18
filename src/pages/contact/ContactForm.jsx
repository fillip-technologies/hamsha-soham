import React from "react";
import { RequestDemoForm } from "../../components/common/RequestDemoForm";
import { Sparkles } from "lucide-react";

export const ContactForm = () => {
  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-xl relative overflow-hidden text-left">
      <div className="space-y-2 mb-8 border-b border-slate-100 pb-5">
        <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#FF4D27]">
          <Sparkles className="w-4 h-4 text-[#FF4D27]" />
          <span>Interactive Product Demonstration</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B132B]">
          Request a Live Demo
        </h3>
        <p className="text-sm text-slate-600">
          Fill out the details below and our healthcare software specialist will get back to you within 2 business hours to schedule your personalized live demo.
        </p>
      </div>

      {/* Unified Master Request Demo Form */}
      <RequestDemoForm />
    </div>
  );
};

export default ContactForm;
