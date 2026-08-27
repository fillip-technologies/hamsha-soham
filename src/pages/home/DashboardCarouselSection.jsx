import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import img1 from "../../assets/image-1.png";
import img2 from "../../assets/image-2.png";
import img3 from "../../assets/image-3.png";

export const DashboardCarouselSection = () => {
  const images = [
    { src: img1, alt: "Hamsa Soham Healthcare Management Suite 1" },
    { src: img2, alt: "Hamsa Soham Healthcare Management Suite 2" },
    { src: img3, alt: "Hamsa Soham Healthcare Management Suite 3" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 4500);

    return () => clearInterval(interval);
  }, [currentIndex, isPaused]);

  // Touch Swipe Handlers for Mobile
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      nextSlide();
    }
    if (touchStartX.current - touchEndX.current < -50) {
      prevSlide();
    }
  };

  return (
    <section className="py-10 sm:py-14 bg-[#F8FAFC] border-b border-slate-200/80 select-none overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20">
        
        {/* Centered Section Header */}
        <div className="mb-8 sm:mb-10 text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0B132B] tracking-tight">
            Clinical & Operations Dashboard
          </h2>
        </div>

        {/* Main Carousel Wrapper */}
        <div
          className="relative max-w-5xl lg:max-w-6xl mx-auto group"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Ambient Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/15 via-amber-500/10 to-indigo-500/15 rounded-3xl blur-2xl -z-10 transform scale-105" />

          {/* Slide Window Frame */}
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-white border border-slate-200/90 shadow-2xl transition-all duration-300">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {images.map((item, index) => (
                <div key={index} className="w-full shrink-0">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-auto block object-cover rounded-2xl sm:rounded-3xl"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Left Navigation Arrow (Further Outside Image) */}
          <button
            onClick={prevSlide}
            aria-label="Previous Slide"
            className="absolute -left-5 sm:-left-10 md:-left-14 lg:-left-16 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white hover:bg-slate-50 text-slate-800 hover:text-[#FF4D27] flex items-center justify-center border border-slate-200 shadow-xl hover:shadow-2xl hover:scale-110 active:scale-95 transition-all z-20 cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Navigation Arrow (Further Outside Image) */}
          <button
            onClick={nextSlide}
            aria-label="Next Slide"
            className="absolute -right-5 sm:-right-10 md:-right-14 lg:-right-16 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white hover:bg-slate-50 text-slate-800 hover:text-[#FF4D27] flex items-center justify-center border border-slate-200 shadow-xl hover:shadow-2xl hover:scale-110 active:scale-95 transition-all z-20 cursor-pointer"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Indicator Pagination Dots */}
          <div className="flex items-center justify-center gap-2.5 mt-5">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === index
                    ? "w-8 bg-[#FF4D27]"
                    : "w-2.5 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default DashboardCarouselSection;
