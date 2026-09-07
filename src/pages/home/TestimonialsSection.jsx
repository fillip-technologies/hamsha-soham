import React, { useState, useEffect } from "react";
import {
  Star,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Hospital,
  MapPin,
  Headphones,
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

  const trustStats = [
    { Icon: Hospital, value: "Hospitals", label: "trusted deployments" },
    { Icon: MapPin, value: "Across India", label: "multi-city support" },
    { Icon: Headphones, value: "Responsive", label: "implementation team" },
  ];

  return (
    <section className="relative py-18 sm:py-24 bg-[#F8FAFC] text-[#0B132B] select-none overflow-hidden border-t border-slate-200/80">
      <style>
        {`
          @keyframes testimonial-geometry-drift {
            0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg); }
            50% { transform: translate3d(14px, -10px, 0) rotate(2deg); }
          }

          @keyframes testimonial-shimmer {
            0% { transform: translateX(-120%) skewX(-16deg); opacity: 0; }
            24% { opacity: 0.32; }
            58%, 100% { transform: translateX(140%) skewX(-16deg); opacity: 0; }
          }

          @keyframes testimonial-float {
            0%, 100% { transform: translate3d(0, 0, 0); }
            50% { transform: translate3d(10px, -12px, 0); }
          }

          .testimonial-geometry-bg {
            background-image:
              linear-gradient(135deg, rgba(14, 165, 233, 0.09) 0 1px, transparent 1px 28px),
              linear-gradient(45deg, rgba(255, 77, 39, 0.07) 0 1px, transparent 1px 32px);
            background-size: 56px 56px, 72px 72px;
            mask-image: linear-gradient(180deg, transparent, black 14%, black 86%, transparent);
          }

          .testimonial-geo-shape {
            animation: testimonial-geometry-drift 10s ease-in-out infinite;
          }

          .testimonial-header-shine::after {
            content: "";
            position: absolute;
            inset: 0 auto 0 -8%;
            width: 12%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.7), transparent);
            animation: testimonial-shimmer 6s ease-in-out infinite;
            pointer-events: none;
          }

          .testimonial-float-mark {
            animation: testimonial-float 7s ease-in-out infinite;
          }

          @media (prefers-reduced-motion: reduce) {
            .testimonial-geo-shape,
            .testimonial-header-shine::after,
            .testimonial-float-mark {
              animation: none !important;
            }
          }
        `}
      </style>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#F8FAFC_0%,#FFFFFF_48%,#F8FAFC_100%)]" />
        <div className="testimonial-geometry-bg absolute inset-0 opacity-80" />
        <div className="testimonial-geo-shape absolute -left-24 top-20 h-64 w-64 rotate-12 border-[28px] border-[#FF4D27]/10" />
        <div className="testimonial-geo-shape absolute right-[-72px] top-12 h-72 w-72 rotate-45 border-[34px] border-sky-500/10" style={{ animationDelay: "1.4s" }} />
        <div className="testimonial-geo-shape absolute bottom-8 left-[38%] h-44 w-44 rotate-[28deg] border-[22px] border-emerald-500/10" style={{ animationDelay: "2.2s" }} />
        <div className="absolute left-[8%] bottom-20 h-24 w-24 rotate-45 bg-[#FF4D27]/[0.055]" />
        <div className="absolute right-[18%] bottom-28 h-28 w-28 rotate-12 bg-sky-500/[0.055]" />
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 1440 760"
          fill="none"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <polygon points="105,168 145,112 190,172" fill="#FF4D27" opacity="0.075" />
          <polygon points="1208,202 1266,128 1326,212" fill="#0EA5E9" opacity="0.075" />
          <polygon points="760,626 812,552 872,636" fill="#22C55E" opacity="0.07" />
        </svg>
      </div>

        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="testimonial-header-shine relative overflow-hidden py-3 sm:py-4 mb-12 sm:mb-14">
          <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-8">
          <div className="max-w-2xl text-left space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-200/80 bg-orange-50 px-3 py-1.5 text-xs font-black uppercase tracking-wider text-[#FF4D27]">
              <Sparkles className="h-3.5 w-3.5" />
              Trusted by care teams
            </div>
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

          <div className="grid grid-cols-1 sm:grid-cols-3 xl:w-[560px] gap-3">
            {trustStats.map(({ Icon, value, label }) => (
              <div
                key={value}
                className="rounded-2xl border border-slate-200/80 bg-slate-50/80 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:bg-white hover:shadow-lg hover:shadow-sky-100/60"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white text-sky-600 shadow-sm ring-1 ring-slate-200/80">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="text-sm font-black text-slate-900">{value}</div>
                <div className="mt-1 text-xs font-semibold leading-snug text-slate-500">{label}</div>
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3 shrink-0 self-start xl:self-end">
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
        </div>

        {/* 3-Card Floating Backdrop Layout (Matching Reference Screenshot) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-8 lg:gap-10 pt-4 items-stretch">
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
