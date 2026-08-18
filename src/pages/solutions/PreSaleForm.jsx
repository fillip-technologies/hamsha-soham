import React, { useState } from "react";
import { Send, CheckCircle2, MessageSquare, Phone, Mail, HelpCircle } from "lucide-react";

export const PreSaleForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section className="py-16 sm:py-24 bg-[#F4F8FD] border-t border-slate-200/80 text-left">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-xl space-y-6">
          
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-50 text-[#FF4D27] border border-orange-200 text-xs font-extrabold uppercase tracking-wider">
              <HelpCircle className="w-3.5 h-3.5 text-[#FF4D27]" />
              <span>Inquiry</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-black text-[#0B132B] uppercase">
              Got a Pre-Sale <span className="text-[#FF4D27]">Question?</span>
            </h3>
            <p className="text-sm text-slate-600 font-normal">
              Have questions regarding custom software development, feasibility, or server setup? Send us your message below.
            </p>
          </div>

          {isSubmitted ? (
            <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4 animate-in fade-in duration-300">
              <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h4 className="text-lg font-bold text-slate-900">Pre-Sale Message Received!</h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                Thank you <span className="font-semibold text-slate-900">{formData.name}</span>. Our software architecture team will respond to {formData.email} shortly.
              </p>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({ name: "", email: "", comment: "" });
                }}
                className="px-5 py-2 rounded-full bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 transition-colors cursor-pointer"
              >
                Ask Another Question
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 pt-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm font-medium text-slate-900 focus:outline-none focus:border-[#FF4D27] focus:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="yourname@hospital.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm font-medium text-slate-900 focus:outline-none focus:border-[#FF4D27] focus:bg-white transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1">Your Message / Pre-Sale Query *</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Ask any pre-sale questions about web application architecture, custom modules, or deployment..."
                  value={formData.comment}
                  onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm font-medium text-slate-900 focus:outline-none focus:border-[#FF4D27] focus:bg-white transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-[#FF4D27] via-orange-500 to-amber-500 hover:from-orange-600 hover:to-[#FF4D27] text-white font-extrabold text-base flex items-center justify-center gap-2 shadow-lg shadow-[#FF4D27]/20 transition-all cursor-pointer"
              >
                <span>Send Pre-Sale Message</span>
                <Send className="w-5 h-5" />
              </button>
            </form>
          )}

        </div>
      </div>
    </section>
  );
};

export default PreSaleForm;
