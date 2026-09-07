import React from "react";
import abhaCardImg from "../../assets/abha-card.jpg";

export const AbhaCardSection = () => {
  return (
    <section className="relative bg-[#F8FAFC] py-16 sm:py-20 border-b border-slate-200/80 select-none overflow-hidden">
      {/* Ambient background decoration */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-orange-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Text Information */}
          <div className="lg:col-span-7 space-y-7 text-left">
            {/* Section Main Title */}
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0B132B] tracking-tight leading-tight">
                Ayushman Bharat Health Account (ABHA)
              </h2>
            </div>

            {/* Block 1: ABHA Address */}
            <div className="space-y-2">
              <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight flex items-center gap-2">
                ABHA Address
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                ABHA (Ayushman Bharat Health Account) is a unique identifier (self-declared username) that enables you to share and access your health records digitally. Your ABHA address may look like <span className="font-semibold text-slate-800">‘yourname@consentmanager.’</span> For instance, <span className="font-semibold text-[#FF4D27]">xyz@abdm</span> is an ABHA address with ABDM Consent Manager that will streamline health data exchange for you with appropriate consent on the ABDM network.
              </p>
            </div>

            {/* Block 2: ABHA Number */}
            <div className="space-y-2 pt-1">
              <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight flex items-center gap-2">
                ABHA Number
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                The ABHA Number will uniquely identify you as a participant in India’s digital healthcare ecosystem. ABHA is a 14-digit personalized number that harbors the identity of people, their authenticity, and their health records seamlessly.
              </p>
            </div>
          </div>

          {/* Right Column: Visual ABHA Card Image */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="w-full max-w-lg rounded-3xl overflow-hidden shadow-xl shadow-slate-200/70 border border-slate-200/90 group hover:shadow-2xl hover:border-blue-500/30 transition-all duration-300 bg-white">
              <img
                src={abhaCardImg}
                alt="Ayushman Bharat Health Account (ABHA) Card"
                className="w-full h-auto object-contain block group-hover:scale-[1.02] transition-transform duration-300"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AbhaCardSection;
