import React, { useState, useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

export const FeaturesSection = () => {
  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeStep, setActiveStep] = useState(0);

  const features = [
    {
      num: "01",
      badge: "Multi-Branch Sync",
      title: "Business Consistency",
      description:
        "Create a central corporate account with multiple hospital branches. Provide a seamless, standardized experience across every location.",
      badgeBg: "bg-rose-100",
      circleColor: "bg-rose-950/45",
      tagColor: "bg-rose-50 text-rose-700 border-rose-200",
    },
    {
      num: "02",
      badge: "Cost Savings",
      title: "Efficient Operations",
      description:
        "Simplify complex hospital workflows and boost operational efficiency, reaping direct benefits through cost savings and increased revenues.",
      badgeBg: "bg-sky-100",
      circleColor: "bg-sky-950/45",
      tagColor: "bg-sky-50 text-sky-700 border-sky-200",
    },
    {
      num: "03",
      badge: "Unified Analytics",
      title: "Central Management",
      description:
        "View and analyze hospital operations centrally from a corporate setup. Central call center for managing all calls, leads, and appointments.",
      badgeBg: "bg-purple-100",
      circleColor: "bg-purple-950/45",
      tagColor: "bg-purple-50 text-purple-700 border-purple-200",
    },
    {
      num: "04",
      badge: "Value-Driven",
      title: "Value Based Solution",
      description:
        "Delivering value-based healthcare solutions across every operational aspect—cycle through our innovation products including HIMS, DMS, and Payroll.",
      badgeBg: "bg-amber-100",
      circleColor: "bg-amber-950/45",
      tagColor: "bg-amber-50 text-amber-700 border-amber-200",
    },
  ];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Precise scroll progress tracking through the 300vh pinned container
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const scrollableHeight = sectionRef.current.offsetHeight - window.innerHeight;
      
      if (scrollableHeight <= 0) return;

      const currentScroll = -rect.top;
      const progress = Math.min(Math.max(currentScroll / scrollableHeight, 0), 1);
      setScrollProgress(progress);

      // Determine active card for the left text box
      if (progress < 0.28) {
        setActiveStep(0);
      } else if (progress < 0.58) {
        setActiveStep(1);
      } else if (progress < 0.85) {
        setActiveStep(2);
      } else {
        setActiveStep(3);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Jump to specific step by scrolling
  const scrollToStep = (stepIndex) => {
    if (!sectionRef.current) return;
    const sectionTop = sectionRef.current.offsetTop;
    const scrollableHeight = sectionRef.current.offsetHeight - window.innerHeight;
    const targetProgress = stepIndex / (features.length - 1);
    window.scrollTo({
      top: sectionTop + targetProgress * scrollableHeight,
      behavior: "smooth",
    });
  };

  const currentCard = features[activeStep];

  return (
    <section
      ref={sectionRef}
      className="relative h-[280vh] sm:h-[320vh] bg-gradient-to-br from-[#3B41C5] via-[#6366F1] to-[#F97316] select-none border-b border-white/10"
    >
      {/* Sticky Fixed Viewport During Scroll */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* Ambient Background Glows */}
        <div className="absolute top-1/4 left-1/6 w-[550px] h-[550px] bg-white/10 rounded-full blur-[140px] pointer-events-none -z-0" />
        <div className="absolute bottom-1/4 right-1/6 w-[600px] h-[600px] bg-amber-400/15 rounded-full blur-[150px] pointer-events-none -z-0" />
        
        {/* Subtle Geometric Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff15_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none -z-0 opacity-40" />

        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-14 items-center">
            
            {/* Left Side: Text Description & Scroll Guide (5 Columns) */}
            <div className="lg:col-span-5 space-y-5 sm:space-y-7 text-left">

              {/* Master Headline */}
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                Introducing <br />
                <span className="bg-gradient-to-r from-white via-amber-200 to-orange-300 bg-clip-text text-transparent">
                  Hamsa Soham Healthcare
                </span>
              </h2>

              {/* Section Paragraph */}
              <p className="text-sm sm:text-base lg:text-lg text-white/85 font-normal leading-relaxed max-w-lg">
                Empowering hospitals, clinical networks, and specialty healthcare groups with next-generation unified management solutions. Experience seamless operational consistency, automated clinical workflows, and real-time multi-branch synchronization on a single secure platform.
              </p>

              {/* Action CTA Button */}
              <div className="pt-1 sm:pt-2 flex items-center gap-4">
                <a
                  href="https://apps.hamsasoham.com/portal/index.xhtml"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 sm:px-8 py-3 sm:py-3.5 rounded-full bg-white hover:bg-slate-50 text-[#0B132B] font-bold text-sm sm:text-base flex items-center gap-3 shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all cursor-pointer group"
                >
                  <span>Explore Capabilities</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF4D27] transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

            </div>

            {/* Right Side: Scroll-Driven Overlapping Deck of Cards (7 Columns) */}
            <div className="lg:col-span-7 relative min-h-[360px] sm:min-h-[500px] lg:min-h-[560px] flex items-center justify-center">
              <div className="relative w-full max-w-[340px] sm:max-w-[520px] lg:max-w-[650px] h-[330px] sm:h-[390px] lg:h-[430px] mx-auto">
                
                {features.map((card, idx) => {
                  // Define staggered scroll intervals for each card to arrive
                  let arrivalProgress = 1;
                  if (idx === 0) {
                    arrivalProgress = 1; // Card 0 is anchored
                  } else if (idx === 1) {
                    arrivalProgress = Math.min(Math.max((scrollProgress - 0.05) / 0.27, 0), 1);
                  } else if (idx === 2) {
                    arrivalProgress = Math.min(Math.max((scrollProgress - 0.33) / 0.29, 0), 1);
                  } else if (idx === 3) {
                    arrivalProgress = Math.min(Math.max((scrollProgress - 0.63) / 0.29, 0), 1);
                  }

                  const isSelected = activeStep === idx;

                  // Directly overlap in center on mobile, diagonal cascade on desktop
                  const stepX = isMobile ? 0 : 40;
                  const stepY = isMobile ? 0 : 36;
                  const targetX = idx * stepX;
                  const targetY = idx * stepY;

                  // Smooth incoming glide from right (+120px on mobile, +320px on desktop)
                  const incomingOffsetX = isMobile ? 140 : 320;
                  const incomingOffsetY = isMobile ? 0 : 45;
                  const currentX = targetX + (1 - arrivalProgress) * incomingOffsetX;
                  const currentY = targetY + (1 - arrivalProgress) * incomingOffsetY;
                  
                  // 100% solid opaque (never transparent when entering)
                  const currentOpacity = arrivalProgress > 0.01 ? 1 : 0;
                  const currentScale = isMobile
                    ? (isSelected ? 1 : 0.96)
                    : 0.95 + arrivalProgress * 0.05;
                  
                  // Progressive Z-index: newer cards always land ON TOP of older cards
                  const currentZ = (idx + 1) * 10 + (isSelected ? 5 : 0);

                  return (
                    <div
                      key={card.num}
                      onClick={() => scrollToStep(idx)}
                      style={{
                        transform: `translate3d(${currentX}px, ${currentY}px, 0) scale(${currentScale})`,
                        opacity: currentOpacity,
                        zIndex: currentZ,
                        pointerEvents: arrivalProgress > 0.3 ? "auto" : "none",
                      }}
                      className={`absolute top-0 left-0 w-full sm:w-[520px] lg:w-[550px] min-h-[290px] sm:min-h-[300px] lg:min-h-[330px] bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 lg:p-9 border border-slate-200/90 shadow-2xl transition-all duration-300 ease-out cursor-pointer flex flex-col justify-between opacity-100 ${
                        isSelected
                          ? "ring-2 sm:ring-4 ring-white/80 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.35)] sm:shadow-[0_35px_70px_-15px_rgba(0,0,0,0.4)]"
                          : "shadow-[0_15px_30px_-10px_rgba(0,0,0,0.2)] sm:shadow-[0_20px_45px_-15px_rgba(0,0,0,0.25)]"
                      }`}
                    >
                      {/* Card Top: Number & Title */}
                      <div className="flex items-start justify-between gap-3 sm:gap-4">
                        <div>
                          <span className="text-[10px] sm:text-xs font-black text-slate-400 uppercase tracking-widest block mb-1">
                            Capability {card.num}
                          </span>
                          <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 tracking-tight leading-snug">
                            {card.title}
                          </h3>
                        </div>

                        <span className={`px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-wider border shrink-0 ${card.tagColor}`}>
                          {card.badge}
                        </span>
                      </div>

                      {/* Card Bottom: Animated Abstract Geometric Lens Badge + Description */}
                      <div className="flex items-end gap-4 sm:gap-6 pt-4 sm:pt-6 mt-auto">
                        
                        {/* Geometric Lens Badge */}
                        <div
                          className={`w-14 h-14 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-xl sm:rounded-2xl ${card.badgeBg} relative overflow-hidden flex items-center justify-center shrink-0 border border-slate-200/60 shadow-inner group`}
                        >
                          <div
                            className={`w-10 h-10 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full ${card.circleColor} absolute mix-blend-multiply opacity-60 transition-transform duration-700 group-hover:scale-125`}
                          />
                          <div
                            className={`w-8 h-8 sm:w-11 sm:h-11 lg:w-13 lg:h-13 rounded-full ${card.circleColor} absolute translate-x-2 translate-y-1 mix-blend-multiply opacity-50 transition-transform duration-700 group-hover:-translate-x-1 group-hover:-translate-y-1`}
                          />
                          <div
                            className={`w-6 h-6 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-full ${card.circleColor} absolute -translate-x-2 -translate-y-1 mix-blend-multiply opacity-40 transition-transform duration-700 group-hover:translate-x-1.5`}
                          />
                        </div>

                        {/* Description Paragraph */}
                        <p className="text-xs sm:text-sm lg:text-base text-slate-600 leading-relaxed font-medium flex-1">
                          {card.description}
                        </p>

                      </div>

                    </div>
                  );
                })}

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default FeaturesSection;


