import React from "react";

import aasthaLogo from "../../assets/clients/aastha-removebg-preview.png";
import ajehLogo from "../../assets/clients/ajeh.png";
import holyLogo from "../../assets/clients/holy.png";
import sarrafLogo from "../../assets/clients/sarraf-removebg-preview.png";
import sslnLogo from "../../assets/clients/ssln-removebg-preview.png";

export const ClientsSection = () => {
  const clientsRow1 = [
    { id: "ajeh1", name: "Akhand Jyoti Eye Hospital", logo: ajehLogo },
    { id: "holy1", name: "Holy Family Hospital", logo: holyLogo },
    { id: "aastha1", name: "Aastha Eye Hospital", logo: aasthaLogo },
    { id: "sarraf1", name: "Sarraf Eye Hospital", logo: sarrafLogo },
    { id: "ssln1", name: "Sharda Imagine / SSLN", logo: sslnLogo },
  ];

  const clientsRow2 = [
    { id: "ssln2", name: "Sharda Imagine / SSLN", logo: sslnLogo },
    { id: "sarraf2", name: "Sarraf Eye Hospital", logo: sarrafLogo },
    { id: "aastha2", name: "Aastha Eye Hospital", logo: aasthaLogo },
    { id: "holy2", name: "Holy Family Hospital", logo: holyLogo },
    { id: "ajeh2", name: "Akhand Jyoti Eye Hospital", logo: ajehLogo },
  ];

  // Repeat items to ensure seamless infinite looping
  const marqueeRow1 = [...clientsRow1, ...clientsRow1, ...clientsRow1, ...clientsRow1];
  const marqueeRow2 = [...clientsRow2, ...clientsRow2, ...clientsRow2, ...clientsRow2];

  return (
    <section className="relative bg-[#F5F2E9] pt-16 pb-32 text-[#0F172A] select-none overflow-hidden shadow-[inset_0_12px_24px_rgba(0,0,0,0.04)]">
      
      {/* Inline Styles for Dual Direction Marquee Animations */}
      <style>{`
        @keyframes marquee-left {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-25%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-25%); }
          100% { transform: translateX(0%); }
        }
        .animate-marquee-left {
          animation: marquee-left 22s linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right 22s linear infinite;
        }
        .animate-marquee-left:hover,
        .animate-marquee-right:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Title matching reference screenshot */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1E293B] tracking-tight">
            We Partner With The Best
          </h2>
        </div>

        {/* Row 1: Infinite Marquee Moving RIGHT to LEFT (Frosted Glass Containers Matching Reference UI) */}
        <div className="relative overflow-hidden mb-6 py-2">
          <div className="flex gap-6 sm:gap-8 items-center whitespace-nowrap animate-marquee-left w-max">
            {marqueeRow1.map((client, idx) => (
              <div
                key={`${client.id}-${idx}`}
                className="inline-flex items-center justify-center p-4 cursor-pointer group shrink-0 w-44 sm:w-56 bg-[#E8E3D8]/80 hover:bg-[#E0DBCF] rounded-2xl border border-[#D8D2C4] shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 backdrop-blur-sm"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-16 sm:max-h-20 w-auto max-w-[85%] object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Infinite Marquee Moving LEFT to RIGHT (Frosted Glass Containers Matching Reference UI) */}
        <div className="relative overflow-hidden py-2">
          <div className="flex gap-6 sm:gap-8 items-center whitespace-nowrap animate-marquee-right w-max">
            {marqueeRow2.map((client, idx) => (
              <div
                key={`${client.id}-${idx}`}
                className="inline-flex items-center justify-center p-4 cursor-pointer group shrink-0 w-44 sm:w-56 bg-[#E8E3D8]/80 hover:bg-[#E0DBCF] rounded-2xl border border-[#D8D2C4] shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 backdrop-blur-sm"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-16 sm:max-h-20 w-auto max-w-[85%] object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Concave Arch Curve Sweeping Upwards */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-16 sm:h-24 lg:h-32 text-white fill-current"
        >
          <path d="M0,0 Q600,140 1200,0 L1200,120 L0,120 Z" />
        </svg>
      </div>
    </section>
  );
};

export default ClientsSection;
