import React, { useState, useEffect } from "react";
import {
  Star,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from "lucide-react";

export const TestimonialsSection = () => {
  const [startIndex, setStartIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Dr. Rajesh Sharma",
      position: "Medical Director",
      hospital: "Sharda Imagine Hospital",
      location: "Patna, Bihar",
      avatar:
        "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=240&auto=format&fit=crop&q=80",
      quote:
        "Hamsa Soham's e_Kshitiz software transformed our multi-branch administration. The centralized real-time OPD and IPD tracking reduced operational delays by over 40% across all hospital departments.",
      backdropColor: "bg-[#1E74B7]",
      backdropRotate: "-rotate-6",
    },
    {
      id: 2,
      name: "Dr. M. K. Sinha",
      position: "Chief Ophthalmologist",
      hospital: "Akhand Jyoti Eye Hospital",
      location: "Mastichak, Saran",
      avatar:
        "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=240&auto=format&fit=crop&q=80",
      quote:
        "e_Drishti Lite proved to be an invaluable asset for our eye care camps and surgical workflows. Seamless refraction records, diagnostic device connectivity, and optical inventory management.",
      backdropColor: "bg-[#43A047]",
      backdropRotate: "rotate-6",
    },
    {
      id: 3,
      name: "Dr. Ananya Sarraf",
      position: "Senior Ophthalmic Surgeon",
      hospital: "Sarraf Eye Hospital",
      location: "Ranchi, Jharkhand",
      avatar:
        "https://images.unsplash.com/photo-1594824813598-a3f278077717?w=240&auto=format&fit=crop&q=80",
      quote:
        "Cost control and patient satisfaction improved dramatically within 3 months of deploying e_Drishti. It is one of the few healthcare IT solutions that is simple, reliable, and truly effective.",
      backdropColor: "bg-[#00897B]",
      backdropRotate: "-rotate-6",
    },
    {
      id: 4,
      name: "Sunil Verma",
      position: "Chief Operating Officer",
      hospital: "Holy Family Hospital",
      location: "Kurji, Patna",
      avatar:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=240&auto=format&fit=crop&q=80",
      quote:
        "The speed, reliability, and 24/7 technical support of Hamsa Soham e_Kshitiz have given our administrative team total peace of mind. Billing and pharmacy inventory are 100% synchronized.",
      backdropColor: "bg-[#FF4D27]",
      backdropRotate: "rotate-6",
    },
    {
      id: 5,
      name: "Dr. Arvind Kumar",
      position: "Director of Ophthalmology",
      hospital: "Aastha Eye Hospital",
      location: "Gaya, Bihar",
      avatar:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=240&auto=format&fit=crop&q=80",
      quote:
        "Managing multiple vision testing labs and optical retail stores used to be complex. e_Drishti unified our entire OPD workflow into a single seamless dashboard.",
      backdropColor: "bg-[#6D28D9]",
      backdropRotate: "-rotate-6",
    },
    {
      id: 6,
      name: "Sanjay Mehta",
      position: "Head of Hospital IT",
      hospital: "SSLN Medical Center",
      location: "Muzaffarpur, Bihar",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=240&auto=format&fit=crop&q=80",
      quote:
        "The customer service team at Hamsa Soham is exceptional. They migrated our legacy hospital data without a single minute of downtime. Highly recommended HIMS provider.",
      backdropColor: "bg-[#D97706]",
      backdropRotate: "rotate-6",
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
              <div className="bg-white rounded-[32px] sm:rounded-[36px] shadow-2xl p-8 pt-18 pb-12 relative z-10 text-center flex flex-col justify-between items-center h-full border border-slate-100 transition-transform duration-300 group-hover:-translate-y-1">
                
                {/* Overlapping Profile Avatar Image on Top Center */}
                <div className="absolute -top-12 sm:-top-14 left-1/2 -translate-x-1/2 w-24 h-24 sm:w-28 sm:h-28 rounded-full border-4 border-white shadow-xl overflow-hidden z-20 bg-slate-100 group-hover:scale-105 transition-transform duration-300">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Author Name, Position, & Hospital */}
                <div className="space-y-1 text-center w-full">
                  <h3 className="text-2xl sm:text-[26px] font-extrabold text-[#1E293B] tracking-tight">
                    {item.name}
                  </h3>
                  <p className="text-sm italic text-slate-400 font-medium">
                    {item.position}
                  </p>
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
