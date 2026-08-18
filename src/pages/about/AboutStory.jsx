import React from "react";
import { Target, Eye } from "lucide-react";
import heroDashboardImg from "../../assets/hero-dashboard.png";

export const AboutStory = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#FAFCFF] border-t border-slate-200/80 select-none">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Two-Column Story Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center text-left">
          
          {/* Left Column: Story & Mission text */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="space-y-3">
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#FF4D27] bg-orange-50 px-3.5 py-1.5 rounded-full border border-orange-200/70 inline-block">
                Our Origin & Philosophy
              </span>

              <h2 className="text-3xl sm:text-5xl font-black text-[#0B132B] tracking-tight leading-snug">
                Architecting the Future of <br />
                <span className="bg-gradient-to-r from-[#FF4D27] via-amber-500 to-[#5254F2] bg-clip-text text-transparent">
                  Clinical Operations
                </span>
              </h2>
            </div>

            <p className="text-slate-600 text-base sm:text-lg font-normal leading-relaxed">
              Founded with a vision to eliminate operational bottlenecks in Indian healthcare institutions, Hamsa Soham delivers end-to-end, high-availability software platforms that streamline patient care, OPD/IPD queues, and financial auditing.
            </p>

            <div className="space-y-4 pt-2">
              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-orange-50 text-[#FF4D27] border border-orange-200 flex items-center justify-center shrink-0">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-extrabold text-[#0B132B]">Our Core Mission</h3>
                  <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                    To empower healthcare providers with intuitive, compliant, and hardware-interfaced software that reduces patient wait times and guarantees NABH audit readiness.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-indigo-50 text-[#5254F2] border border-indigo-200 flex items-center justify-center shrink-0">
                  <Eye className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-extrabold text-[#0B132B]">Specialized Vision</h3>
                  <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                    Pioneering specialized ophthalmic EMR workflows alongside multispeciality enterprise HIMS to serve single-doctor clinics up to 500-bed hospital chains.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: High-Res Clean Interface Graphic */}
          <div className="lg:col-span-6 relative">
            <div className="rounded-3xl bg-white p-3 border border-slate-200 shadow-2xl space-y-2">
              
              {/* Header Dots */}
              <div className="flex items-center justify-between px-3 py-1.5 border-b border-slate-200 text-[10px] text-slate-600 font-bold">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                </div>
                <span className="text-slate-800">Hamsa Soham Enterprise Architecture</span>
                <span className="text-emerald-600 font-extrabold">99.99% Uptime</span>
              </div>

              {/* Dashboard Preview */}
              <div className="rounded-2xl overflow-hidden bg-slate-900">
                <img
                  src={heroDashboardImg}
                  alt="Hamsa Soham HIMS Platform Architecture"
                  className="w-full h-auto object-cover transform hover:scale-[1.02] transition-transform duration-500"
                />
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutStory;
