import React from "react";
import { useLocation } from "react-router-dom";
import { RequestDemoForm } from "../../components/common/RequestDemoForm";
import { Sparkles } from "lucide-react";

export const ContactForm = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const defaultProduct = location.state?.product || searchParams.get("product") || "";
  const defaultMessage = location.state?.message || searchParams.get("message") || "";

  return (
    <div
      id="contact-form"
      className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-xl relative overflow-hidden text-left scroll-mt-28"
    >
      {/* Anchor for demo-form alias */}
      <span id="demo-form" className="absolute -top-28 pointer-events-none" />

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
      <RequestDemoForm defaultProduct={defaultProduct} defaultMessage={defaultMessage} />
    </div>
  );
};

export default ContactForm;
