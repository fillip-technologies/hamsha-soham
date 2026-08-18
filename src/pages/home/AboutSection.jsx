import React, { useState, useEffect, useRef } from "react";
import { Plus, Minus } from "lucide-react";

export const AboutSection = () => {
  const sectionRef = useRef(null);
  const [revealedCount, setRevealedCount] = useState(1);
  const [activeId, setActiveId] = useState("about");

  const items = [
    {
      id: "about",
      index: 0,
      title: "About Us & Brand Story",
      tagline: "The Core Philosophy of Breathing & Existence",
      content:
        "Hamsa Soham is defined by Breathing and in another word by Life and existence. Inhalation is Synonymous of HAMSA & SOHAM is exhalation. Soham is 'So I am' and it means that we are the God and God is in us. We believe that what breathing is to life a good management is to any system and specially Healthcare Systems.",
      dotColor: "bg-[#FF4D27]",
    },
    {
      id: "mission",
      index: 1,
      title: "Mission",
      tagline: "Empowering Healthcare at the Margins",
      content:
        "To bring change in scenario of healthcare for those who are left on the margins of growth by helping in creating institutions who can deliver quality healthcare with service and by using technology in its delivery.",
      dotColor: "bg-[#0284C7]",
    },
    {
      id: "vision",
      index: 2,
      title: "Vision",
      tagline: "Leading Healthcare Startup & Platform",
      content:
        "We shall strive to become leading healthcare startup in field of healthcare through innovation & technology & collaboration.",
      dotColor: "bg-emerald-500",
    },
    {
      id: "credo",
      index: 3,
      title: "Credo",
      tagline: "Uncompromising Quality & Lifetime Compliance",
      content:
        "Our association shall be for Quality & compliance. We shall be available to our associates in thick & thin of their life cycle.",
      dotColor: "bg-purple-600",
    },
    {
      id: "why",
      index: 4,
      title: "Why Choose Us",
      tagline: "Complete Health Care Information System",
      content:
        "Our HIMS is a complete Health Care Information System which provides the benefits of streamlined operation, enhanced administration & control, Superior patient care, strict cost control and improved profitability. We are one among the very few who offer an advanced solution globally that's simple, reliable, affordable and proven.",
      dotColor: "bg-amber-500",
    },
  ];

  // Scroll Progress Listener: Handles desktop sticky scroll vs mobile natural layout
  useEffect(() => {
    const handleScroll = () => {
      // Mobile screens (< 1024px): reveal all items naturally and ensure activeId stays set
      if (window.innerWidth < 1024) {
        setRevealedCount(items.length);
        if (!activeId) {
          setActiveId("about");
        }
        return;
      }

      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const totalScrollable = rect.height - window.innerHeight;

      if (totalScrollable <= 0) return;

      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / totalScrollable));

      // Calculate revealed items count (1 to 5) for desktop
      const count = Math.min(items.length, Math.max(1, Math.floor(progress * items.length) + 1));
      setRevealedCount(count);

      const latestItemIndex = count - 1;
      if (items[latestItemIndex]) {
        setActiveId(items[latestItemIndex].id);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [items.length, activeId]);

  const activeIndex = items.findIndex((item) => item.id === activeId);

  // Y-offset translation for floating dots matching the active list row height
  const orbYTranslate = activeIndex !== -1 ? activeIndex * 82 : 0;

  return (
    <section
      ref={sectionRef}
      className="relative lg:h-[300vh] h-auto py-12 sm:py-20 lg:py-0 bg-[#F8F9FA] text-[#0B132B] select-none border-t border-slate-200/80"
    >
      {/* Sticky Viewport Container on Desktop (h-auto static on Mobile) */}
      <div className="lg:sticky lg:top-0 lg:h-screen flex items-center justify-center lg:overflow-hidden py-4 lg:py-0">
        
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-16 items-center">
            
            {/* Left Column: Fixed Headline & Subtitle */}
            <div className="lg:col-span-5 space-y-4 sm:space-y-6 text-left">
              
              {/* Stationary Section Title */}
              <div className="space-y-1.5 sm:space-y-2 pt-2">
                <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-[#0B132B] leading-tight">
                  Hamsa Soham
                </h2>
                <h3 className="text-3xl sm:text-5xl font-black bg-gradient-to-r from-[#FF4D27] via-[#FF8000] to-[#0B132B] bg-clip-text text-transparent leading-tight">
                  Means:
                </h3>
                <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-md pt-2 sm:pt-3">
                  The core pillars of our existence, mission, vision, and dedication to hospital management excellence.
                </p>
              </div>

              {/* GJR Style Dynamic Floating Animated Brand Orbs Stage (Desktop Only) */}
              <div className="hidden lg:flex relative pt-2 items-center gap-8 min-h-[240px]">
                
                {/* Dynamic Floating Orbs Track */}
                <div className="relative w-24 h-[320px] flex justify-center">
                  {/* Track Line */}
                  <div className="absolute top-0 bottom-0 w-0.5 bg-slate-200 rounded-full" />

                  {/* Primary Animated Floating Orb (Tracks active item position) */}
                  <div
                    className="absolute w-12 h-12 rounded-full bg-gradient-to-br from-[#FF4D27] to-[#FF8000] shadow-xl shadow-[#FF4D27]/40 flex items-center justify-center transition-transform duration-500 ease-out z-20"
                    style={{ transform: `translateY(${orbYTranslate}px)` }}
                  >
                    <span className="w-4 h-4 rounded-full bg-white animate-ping opacity-75" />
                  </div>

                  {/* Secondary Orbiting Orb 1 */}
                  <div
                    className="absolute w-8 h-8 rounded-full bg-[#0B132B] shadow-md transition-transform duration-700 ease-out z-10"
                    style={{ transform: `translateY(${orbYTranslate + 24}px) translateX(-24px)` }}
                  />

                  {/* Secondary Orbiting Orb 2 */}
                  <div
                    className="absolute w-6 h-6 rounded-full bg-[#0284C7] shadow-sm transition-transform duration-700 ease-out z-10"
                    style={{ transform: `translateY(${orbYTranslate - 20}px) translateX(22px)` }}
                  />
                </div>

              </div>

            </div>

            {/* Right Column: Accordion List (Responsive Desktop/Mobile) */}
            <div className="lg:col-span-7 divide-y divide-slate-200/90 text-left border-t border-b border-slate-200/90 min-h-0 lg:min-h-[420px]">
              {items.map((item, idx) => {
                const isRevealed = idx < revealedCount;
                const isOpen = activeId === item.id;

                if (!isRevealed) {
                  return (
                    <div
                      key={item.id}
                      className="max-h-0 opacity-0 pointer-events-none overflow-hidden transition-all duration-700 ease-out border-none"
                    />
                  );
                }

                return (
                  <div
                    key={item.id}
                    className="py-4 sm:py-6 transition-all duration-700 ease-out animate-in fade-in slide-in-from-bottom-4 cursor-pointer group"
                    onClick={() => setActiveId(isOpen ? "" : item.id)}
                  >
                    {/* Header Row */}
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3 sm:gap-6">
                        <span className={`w-3.5 h-3.5 rounded-full transition-all duration-300 ${item.dotColor} ${isOpen ? "scale-125 ring-4 ring-slate-200" : "scale-100"}`} />
                        <h3 className={`text-xl sm:text-3xl tracking-tight transition-all duration-300 ${isOpen ? "font-bold text-[#FF4D27]" : "font-light text-[#0B132B] group-hover:text-[#FF4D27]"}`}>
                          {item.title}
                        </h3>
                      </div>

                      <div className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-slate-300 flex items-center justify-center transition-all duration-300 shrink-0 ${isOpen ? "bg-[#FF4D27] border-[#FF4D27] text-white rotate-180" : "bg-white text-slate-700 group-hover:border-[#FF4D27] group-hover:text-[#FF4D27]"}`}>
                        {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </div>
                    </div>

                    {/* Smooth Accordion Content Reveal */}
                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        isOpen ? "max-h-96 opacity-100 pt-3 sm:pt-6" : "max-h-0 opacity-0 pt-0"
                      }`}
                    >
                      <div className="pl-6 sm:pl-9 space-y-2">
                        <p className="text-xs font-bold uppercase tracking-wider text-[#FF4D27]">
                          {item.tagline}
                        </p>
                        <p className="text-sm sm:text-lg text-slate-700 font-normal leading-relaxed">
                          {item.content}
                        </p>
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
