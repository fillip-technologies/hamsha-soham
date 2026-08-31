import React, { useState } from "react";
import { Maximize2, X, ChevronRight, ArrowUpRight } from "lucide-react";

import eKshitizImg from "../../assets/portfolio/e_Kshitiz.png";
import eKshitizLiteImg from "../../assets/portfolio/e_KshitizLite.png";
import eDrishtiImg from "../../assets/portfolio/e_Drishti_P_I.png";
import eDrishtiLiteImg from "../../assets/portfolio/e_Drishtilite_P_I.png";
import hwaiImg from "../../assets/portfolio/hwai.png";

export const PortfolioSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: "edrishti",
      num: "01",
      name: "e_Drishti",
      category: "Ophthalmology HIMS",
      description:
        "Tailored workflow engine specifically engineered for eye care institutions—featuring vision chart integration, refraction records, and optical inventory.",
      image: eDrishtiImg,
      bgGradient: "from-[#0284C7] via-[#0369A1] to-[#0B132B]",
    },
    {
      id: "edrishti-lite",
      num: "02",
      name: "e_Drishti Lite",
      category: "Eye Clinic HIMS",
      description:
        "Ultra-lightweight eye care clinic solution for fast patient consults, diagnostic device connectivity, and automated optical prescription printing.",
      image: eDrishtiLiteImg,
      bgGradient: "from-[#7C3AED] via-[#5B21B6] to-[#0B132B]",
    },
    {
      id: "ekshitiz",
      num: "03",
      name: "e_Kshitiz",
      category: "Enterprise HIMS",
      description:
        "Full-scale enterprise solution for large hospitals and medical centers managing IPD, OPD, OT, ICU, Pharmacy, Diagnostics, and Finance centrally.",
      image: eKshitizImg,
      bgGradient: "from-[#FF4D27] via-[#C22D0B] to-[#0B132B]",
    },
    {
      id: "ekshitiz-lite",
      num: "04",
      name: "e_Kshitiz Lite",
      category: "Modular HIMS",
      description:
        "Modular, fast-deployment solution designed for rapid setup, automated patient billing, prescription management, and electronic health records.",
      image: eKshitizLiteImg,
      bgGradient: "from-[#059669] via-[#047857] to-[#0B132B]",
    },
    {
      id: "hwai",
      num: "05",
      name: "HWAI Platform",
      category: "Healthcare Management System",
      description:
        "Complete healthcare management platform for hospital operational intelligence, automated patient queue management, financial auditing, and clinical workflow optimization.",
      image: hwaiImg,
      bgGradient: "from-[#D97706] via-[#B45309] to-[#0B132B]",
    },
  ];

  return (
    <section className="relative py-20 sm:py-28 bg-[#F8F9FB] overflow-hidden select-none border-t border-slate-200/80">
      {/* Subtle Background Grid Texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">

        {/* Section Header (NO PILL BADGES) */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0B132B] tracking-tight leading-tight">
            Our Flagship <br />
            <span className="bg-gradient-to-r from-[#FF4D27] via-[#FF8000] to-[#0B132B] bg-clip-text text-transparent">
              Healthcare Portfolio
            </span>
          </h2>
        </div>

        {/* Horizontal Expanding Accordion Showcase */}
        <div className="flex flex-col lg:flex-row gap-4 h-auto lg:h-[460px] w-full">
          {products.map((product, idx) => {
            const isActive = activeIndex === idx;

            if (isActive) {
              return (
                /* Active Expanded Card */
                <div
                  key={product.id}
                  className={`lg:flex-[5] bg-gradient-to-br ${product.bgGradient} rounded-3xl p-6 sm:p-8 text-white flex flex-col justify-between transition-all duration-700 ease-out shadow-2xl relative overflow-hidden group cursor-default`}
                >
                  {/* FULL VISIBLE PRODUCT BACKGROUND IMAGE MOCKUP */}
                  <div className="absolute inset-0 p-4 sm:p-6 flex items-center justify-center pointer-events-none">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain drop-shadow-2xl transition-transform duration-700 group-hover:scale-102"
                    />
                  </div>

                  {/* Dark Gradient Overlay Vignette for Text Contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />

                  {/* Top Content Row: Number Badge & Zoom Action Button */}
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="w-11 h-11 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-sm font-extrabold text-white border border-white/30 shadow-md">
                      {product.num}
                    </div>

                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md hover:bg-white text-white hover:text-slate-900 flex items-center justify-center transition-all shadow-md cursor-pointer"
                      title="View Full Screenshot"
                    >
                      <Maximize2 className="w-4.5 h-4.5" />
                    </button>
                  </div>

                  {/* Bottom Row: Product Name ONLY */}
                  <div className="relative z-10 text-left pt-6">
                    <h3 className="text-3xl sm:text-5xl font-black text-white tracking-tight drop-shadow-md">
                      {product.name}
                    </h3>
                  </div>
                </div>
              );
            }

            /* Collapsed Pill Card */
            return (
              <div
                key={product.id}
                onClick={() => setActiveIndex(idx)}
                className={`lg:flex-[0.6] bg-gradient-to-b ${product.bgGradient} rounded-3xl p-5 text-white flex flex-row lg:flex-col items-center justify-between transition-all duration-700 ease-out shadow-md hover:shadow-xl cursor-pointer opacity-90 hover:opacity-100 hover:scale-[1.02] group`}
              >
                {/* Top Number */}
                <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-xs font-extrabold text-white border border-white/20">
                  {product.num}
                </div>

                {/* Vertical Rotated Title on Desktop */}
                <div className="hidden lg:block my-auto py-6">
                  <span className="text-xl font-extrabold text-white tracking-wider uppercase writing-mode-vertical -rotate-90 block whitespace-nowrap group-hover:text-cyan-300 transition-colors">
                    {product.name}
                  </span>
                </div>

                {/* Horizontal Title on Mobile */}
                <div className="block lg:hidden text-left pl-4">
                  <span className="text-lg font-extrabold text-white">
                    {product.name}
                  </span>
                </div>

                {/* Bottom Icon Indicator */}
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-slate-900 transition-all">
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Lightbox Image Preview Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="relative bg-white rounded-3xl max-w-5xl w-full p-6 sm:p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-200">
              <div>
                <span className="px-3 py-1 rounded-full bg-[#FF4D27]/10 text-[#FF4D27] text-xs font-extrabold uppercase tracking-wider">
                  {selectedProduct.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B132B] pt-2">
                  {selectedProduct.name}
                </h3>
              </div>

              <button
                onClick={() => setSelectedProduct(null)}
                className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* High-Res Product Image Showcase */}
            <div className="bg-slate-950 rounded-2xl p-4 border border-slate-800 flex items-center justify-center">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full max-h-[60vh] object-contain rounded-lg"
              />
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-slate-700 font-normal leading-relaxed">
              {selectedProduct.description}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default PortfolioSection;
