import React, { useState, useEffect } from "react";
import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Building2,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

export const TestimonialsSection = () => {
  const [startIndex, setStartIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote:
        "Hamsa Soham's e_Kshitiz software transformed our multi-branch administration. The centralized real-time OPD and IPD tracking reduced operational delays by over 40% across all hospital departments.",
      author: "Dr. Rajesh Sharma",
      initials: "RS",
      role: "Medical Director",
      hospital: "Sharda Imagine Hospital",
      location: "Patna, Bihar",
      product: "e_Kshitiz Enterprise",
      rating: 5,
      accentColor: "from-[#FF4D27] to-[#FF7043]",
      badgeColor: "bg-orange-50 text-[#FF4D27] border-orange-200/80",
    },
    {
      id: 2,
      quote:
        "e_Drishti Lite proved to be an invaluable asset for our eye care camps and surgical workflows. Seamless refraction records, diagnostic device connectivity, and optical inventory management.",
      author: "Dr. M. K. Sinha",
      initials: "MS",
      role: "Chief Ophthalmologist",
      hospital: "Akhand Jyoti Eye Hospital",
      location: "Mastichak, Saran",
      product: "e_Drishti Lite",
      rating: 5,
      accentColor: "from-[#0284C7] to-[#38BDF8]",
      badgeColor: "bg-sky-50 text-sky-600 border-sky-200/80",
    },
    {
      id: 3,
      quote:
        "The speed, reliability, and 24/7 technical support of Hamsa Soham e_Kshitiz have given our administrative team total peace of mind. Billing and pharmacy inventory are 100% synchronized.",
      author: "Sunil Verma",
      initials: "SV",
      role: "Chief Operating Officer",
      hospital: "Holy Family Hospital",
      location: "Kurji, Patna",
      product: "e_Kshitiz Enterprise",
      rating: 5,
      accentColor: "from-emerald-600 to-teal-500",
      badgeColor: "bg-emerald-50 text-emerald-600 border-emerald-200/80",
    },
    {
      id: 4,
      quote:
        "Cost control and patient satisfaction improved dramatically within 3 months of deploying e_Drishti. It is one of the few healthcare IT solutions that is simple, reliable, and truly effective.",
      author: "Dr. Ananya Sarraf",
      initials: "AS",
      role: "Senior Ophthalmic Surgeon",
      hospital: "Sarraf Eye Hospital",
      location: "Ranchi, Jharkhand",
      product: "e_Drishti Ophthalmology",
      rating: 5,
      accentColor: "from-amber-500 to-orange-500",
      badgeColor: "bg-amber-50 text-amber-700 border-amber-200/80",
    },
    {
      id: 5,
      quote:
        "Managing multiple vision testing labs and optical retail stores used to be complex. e_Drishti unified our entire OPD workflow into a single seamless dashboard.",
      author: "Dr. Arvind Kumar",
      initials: "AK",
      role: "Director of Ophthalmology",
      hospital: "Aastha Eye Hospital",
      location: "Gaya, Bihar",
      product: "e_Drishti Ophthalmology",
      rating: 5,
      accentColor: "from-purple-600 to-indigo-500",
      badgeColor: "bg-purple-50 text-purple-600 border-purple-200/80",
    },
    {
      id: 6,
      quote:
        "The customer service team at Hamsa Soham is exceptional. They migrated our legacy hospital data without a single minute of downtime. Highly recommended HIMS provider.",
      author: "Sanjay Mehta",
      initials: "SM",
      role: "Head of Hospital IT",
      hospital: "SSLN Medical Center",
      location: "Muzaffarpur, Bihar",
      product: "Complete Suite",
      rating: 5,
      accentColor: "from-rose-500 to-pink-500",
      badgeColor: "bg-rose-50 text-rose-600 border-rose-200/80",
    },
  ];

  const maxStartIndex = Math.max(0, testimonials.length - 3);

  // Auto scroll 3-card window
  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev >= maxStartIndex ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(interval);
  }, [maxStartIndex]);

  const handleNext = () => {
    setStartIndex((prev) => (prev >= maxStartIndex ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setStartIndex((prev) => (prev <= 0 ? maxStartIndex : prev - 1));
  };

  // Display 3 visible cards at a time
  const visibleCards = testimonials.slice(startIndex, startIndex + 3);

  return (
    <section className="relative py-20 sm:py-28 bg-[#F8FAFC] text-[#0B132B] select-none overflow-hidden border-t border-slate-200/80">
      {/* Background Decorative Mesh Orbs */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-[#FF4D27]/5 rounded-full blur-[140px] pointer-events-none -z-0" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-[#0284C7]/5 rounded-full blur-[140px] pointer-events-none -z-0" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a05_1px,transparent_1px),linear-gradient(to_bottom,#0f172a05_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none -z-0" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
          <div className="max-w-2xl text-left space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-xs text-xs font-bold text-slate-800">
              <span className="flex items-center gap-1 text-amber-500">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span className="font-extrabold text-slate-900">4.9 / 5.0</span>
              </span>
              <span className="text-slate-300">•</span>
              <span className="text-slate-600 font-medium">Over 50+ Verified Healthcare Institutions</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-[#0B132B] tracking-tight leading-[1.15]">
              Trusted by Leading <br />
              <span className="bg-gradient-to-r from-[#FF4D27] via-orange-500 to-[#0284C7] bg-clip-text text-transparent">
                Healthcare Leaders
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              Discover how Hamsa Soham empowers medical directors, ophthalmic surgeons, and hospital IT administrators across India.
            </p>
          </div>

          {/* Top-Right Navigation Controls & Carousel Counter */}
          <div className="flex items-center gap-4 shrink-0 self-start md:self-end">
            <div className="text-xs font-bold text-slate-500 bg-white px-3 py-2 rounded-xl border border-slate-200/80 shadow-xs">
              Showing <span className="text-[#0B132B] font-extrabold">{startIndex + 1}–{startIndex + 3}</span> of {testimonials.length}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="w-11 h-11 rounded-full bg-white hover:bg-slate-900 border border-slate-200 hover:border-slate-900 text-slate-700 hover:text-white flex items-center justify-center transition-all shadow-sm hover:shadow-md cursor-pointer group"
                aria-label="Previous testimonials"
              >
                <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={handleNext}
                className="w-11 h-11 rounded-full bg-white hover:bg-slate-900 border border-slate-200 hover:border-slate-900 text-slate-700 hover:text-white flex items-center justify-center transition-all shadow-sm hover:shadow-md cursor-pointer group"
                aria-label="Next testimonials"
              >
                <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* 3-Card Grid Display */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {visibleCards.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between relative text-left group overflow-hidden"
            >
              {/* Subtle Top Gradient Accent Bar */}
              <div
                className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${item.accentColor}`}
              />

              {/* Decorative Subtle Background Watermark */}
              <Quote className="absolute top-6 right-6 w-14 h-14 text-slate-100/90 pointer-events-none group-hover:text-slate-200/80 transition-colors -z-0" />

              <div className="relative z-10 space-y-5">
                {/* Header: Star Rating & Product Badge */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>

                  <span
                    className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${item.badgeColor}`}
                  >
                    <CheckCircle2 className="w-3 h-3" />
                    <span>{item.product}</span>
                  </span>
                </div>

                {/* Quote Paragraph */}
                <p className="text-sm sm:text-base text-slate-700 font-normal leading-relaxed">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Info Footer */}
              <div className="relative z-10 pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  {/* Monogram Avatar */}
                  <div
                    className={`w-11 h-11 rounded-2xl bg-gradient-to-br ${item.accentColor} text-white font-black text-sm flex items-center justify-center shadow-md shadow-slate-900/10 shrink-0`}
                  >
                    {item.initials}
                  </div>

                  {/* Author Names & Hospital */}
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-1.5">
                      <h4 className="text-sm font-extrabold text-[#0B132B] tracking-tight">
                        {item.author}
                      </h4>
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" title="Verified Client" />
                    </div>
                    <p className="text-xs text-slate-500 font-medium">
                      {item.role}
                    </p>
                    <p className="text-[11px] font-bold text-[#FF4D27] flex items-center gap-1">
                      <Building2 className="w-3 h-3 text-slate-400" />
                      <span>{item.hospital}</span>
                      <span className="text-slate-400 font-normal">({item.location})</span>
                    </p>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-10">
          {Array.from({ length: maxStartIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setStartIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                startIndex === idx
                  ? "w-8 bg-[#FF4D27]"
                  : "w-2 bg-slate-300 hover:bg-slate-400"
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
