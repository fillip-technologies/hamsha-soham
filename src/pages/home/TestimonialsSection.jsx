import React, { useState, useEffect } from "react";
import {
  Star,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from "lucide-react";

import aasthaLogo from "../../assets/clients/aastha-removebg-preview.png";
import ajehLogo from "../../assets/clients/ajeh.png";
import sslnLogo from "../../assets/clients/ssln-removebg-preview.png";
import holyLogo from "../../assets/clients/holy.png";
import sarrafLogo from "../../assets/clients/sarraf-removebg-preview.png";
import shardaLogo from "../../assets/clients/sharda-imging.png";
import vhriLogo from "../../assets/clients/vhri-logo.png";

export const TestimonialsSection = () => {
  const [startIndex, setStartIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Aastha Super Speciality Hospital & Diagnostics",
      position: null,
      hospital: "Siliguri, West Bengal",
      image: aasthaLogo,
      avatarBg: "bg-white",
      initials: "AS",
      quote:
        "This feedback is given to Hamsa Soham as we have been using your software from past 1 year, the services are satisfying and user friendly but some issues are there as in registration head and bed allotment for the given patient, sometimes the software fails to display bed occupancy. So, it’s my humble request to look into the matter.",
      backdropColor: "bg-[#1E74B7]",
      backdropRotate: "-rotate-6",
    },
    {
      id: 2,
      name: "Nilesh Kumar",
      position: null,
      hospital: "Vivantes Hospital and Research Institute Pvt. Ltd.",
      image: vhriLogo,
      avatarBg: "bg-white",
      initials: "NK",
      quote:
        "Your support team is great. All our modules are live and working fine with the help of your support team. And because of this I am getting MIS report properly. I hope you will continue like this.",
      backdropColor: "bg-[#43A047]",
      backdropRotate: "rotate-6",
    },
    {
      id: 3,
      name: "Ashish Sehgal",
      position: "General Manager",
      hospital: "Sharda Imaging, Panipat",
      image: shardaLogo,
      avatarBg: "bg-white",
      initials: "AS",
      quote:
        "This is to bring in your kind notice that we are getting proper services from your side. There is no such problem in our software & hope for the same in future. Mr. Rajender is very supportive throughout the time. Looking for the same support in future.",
      backdropColor: "bg-[#00897B]",
      backdropRotate: "-rotate-6",
    },
    {
      id: 4,
      name: "Deepankar Chanda",
      position: "IT Head",
      hospital: "Akhandjyoti Eye Hospital",
      image: ajehLogo,
      avatarBg: "bg-[#0F172A]", // Dark Navy so white text & red logo pop clearly
      initials: "DC",
      quote:
        "This is to acknowledge that we have been using e-Dristi Hospital Management Information System, developed by Hamsa Soham Healthcare Pvt. Ltd., for the last 2 years. The software has all the modules to run the Hospital operations efficiently. Their support services are good since the commissioning of the HMIS.",
      backdropColor: "bg-[#FF4D27]",
      backdropRotate: "rotate-6",
    },
    {
      id: 5,
      name: "Sri Sai Lions Netralaya",
      position: null,
      hospital: "Patna, Bihar",
      image: sslnLogo,
      avatarBg: "bg-white",
      imageClass: "contrast-[2.2] brightness-[0.65] scale-120", // Deepens the faint grey text and eye graphic for crystal clear visibility on white
      initials: "SS",
      quote:
        "We are impressed; the best thing about Hamsa Soham is their support team. This is good software. We are using Hamsa Soham software in all the centres. It is the most affordable and has features unique to the eye care hospital module. We are happy with the performance of the software and we are also implementing Hamsa Soham in other branches and can be recommended to any other hospital.",
      backdropColor: "bg-[#6D28D9]",
      backdropRotate: "-rotate-6",
    },
  ];

  const maxStartIndex = Math.max(0, testimonials.length - 3);

  // Auto scroll
  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev >= maxStartIndex ? 0 : prev + 1));
    }, 6500);
    return () => clearInterval(interval);
  }, [maxStartIndex]);

  const handleNext = () => {
    setStartIndex((prev) => (prev >= maxStartIndex ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setStartIndex((prev) => (prev <= 0 ? maxStartIndex : prev - 1));
  };

  const visibleCards = testimonials.slice(startIndex, startIndex + 3);

  return (
    <section className="relative py-24 sm:py-32 bg-[#F8FAFC] text-[#0B132B] select-none overflow-hidden border-t border-slate-200/80">
      
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#FF4D27]/5 rounded-full blur-[140px] pointer-events-none -z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#0284C7]/5 rounded-full blur-[140px] pointer-events-none -z-0" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 sm:mb-24">
          <div className="max-w-2xl text-left space-y-4">
            <h2 className="text-3xl sm:text-5xl font-black text-[#0B132B] tracking-tight leading-[1.15]">
              Loved by Leading <br />
              <span className="bg-gradient-to-r from-[#FF4D27] via-orange-500 to-[#0284C7] bg-clip-text text-transparent">
                Healthcare Professionals
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              Real testimonials from hospital directors, chief ophthalmologists, and IT executives across India.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3 shrink-0 self-start md:self-end">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full bg-white hover:bg-slate-900 border border-slate-200 hover:border-slate-900 text-slate-700 hover:text-white flex items-center justify-center transition-all shadow-sm hover:shadow-md cursor-pointer group"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
            </button>

            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-white hover:bg-slate-900 border border-slate-200 hover:border-slate-900 text-slate-700 hover:text-white flex items-center justify-center transition-all shadow-sm hover:shadow-md cursor-pointer group"
              aria-label="Next testimonials"
            >
              <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* 3-Card Floating Backdrop Layout (Matching Reference Screenshot) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-10 lg:gap-12 pt-6 items-stretch">
          {visibleCards.map((item) => (
            <div key={item.id} className="relative group pt-10">
              
              {/* Colored Layered Backdrop Card (Rotated Behind) */}
              <div
                className={`absolute inset-0 top-10 rounded-[32px] sm:rounded-[36px] ${item.backdropColor} ${item.backdropRotate} opacity-90 group-hover:opacity-100 group-hover:rotate-0 transition-all duration-500 -z-0 shadow-lg`}
              />

              {/* Pure White Front Card */}
              <div className="bg-white rounded-[32px] sm:rounded-[36px] shadow-2xl p-8 pt-20 sm:pt-22 pb-12 relative z-10 text-center flex flex-col justify-between items-center h-full border border-slate-100 transition-transform duration-300 group-hover:-translate-y-1">
                
                {/* Overlapping Client Image / Initials Avatar Badge on Top Center */}
                <div
                  className={`absolute -top-14 sm:-top-16 left-1/2 -translate-x-1/2 w-28 h-28 sm:w-32 sm:h-32 rounded-full border-4 border-white shadow-2xl z-20 flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-105 ${
                    item.image
                      ? `${item.avatarBg || "bg-white"} p-3 shadow-[0_12px_28px_-6px_rgba(0,0,0,0.25)]`
                      : `${item.backdropColor} text-white text-2xl sm:text-3xl font-black tracking-tight`
                  }`}
                >
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.name}
                      className={`w-full h-full object-contain ${item.imageClass || "scale-110"}`}
                    />
                  ) : (
                    <span>{item.initials}</span>
                  )}
                </div>

                {/* Author Name, Position, & Hospital */}
                <div className="space-y-1 text-center w-full">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#1E293B] tracking-tight leading-snug">
                    {item.name}
                  </h3>
                  {item.position && (
                    <p className="text-sm italic text-slate-400 font-medium">
                      {item.position}
                    </p>
                  )}
                  <p className="text-xs font-bold text-[#FF4D27] uppercase tracking-wider pt-0.5">
                    {item.hospital}
                  </p>
                </div>

                {/* Testimonial Quote */}
                <p className="text-sm sm:text-[15px] text-slate-500 font-normal leading-relaxed text-center mt-5 max-w-xs mx-auto">
                  "{item.quote}"
                </p>

                {/* Floating Gold Star Badge on Bottom Center */}
                <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-white shadow-lg border border-slate-100 flex items-center justify-center z-20 group-hover:scale-110 transition-transform duration-300">
                  <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-16">
          {Array.from({ length: maxStartIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setStartIndex(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                startIndex === idx
                  ? "w-8 bg-[#FF4D27]"
                  : "w-2.5 bg-slate-300 hover:bg-slate-400"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
