import React, { useState } from "react";
import { siteConfig } from "../../../config/site.config";
import { Sparkles, ArrowRight, X } from "lucide-react";

export const TopBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible || !siteConfig.announcement.enabled) return null;

  return (
    <div className="bg-slate-900 text-white text-xs py-2 px-4 border-b border-slate-800 relative transition-all duration-300 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-2.5 mx-auto sm:mx-0">
          <span className="bg-[#FF4D27] text-white px-2 py-0.5 rounded-full text-[10px] font-extrabold tracking-wider uppercase flex items-center gap-1">
            <Sparkles className="w-3 h-3" />
            {siteConfig.announcement.badge}
          </span>
          <span className="text-slate-200 hidden sm:inline font-medium">
            {siteConfig.announcement.text}
          </span>
          <a
            href={siteConfig.announcement.href}
            className="text-[#FF4D27] hover:text-white font-bold underline underline-offset-4 flex items-center gap-1 transition-colors ml-1"
          >
            {siteConfig.announcement.linkText}
          </a>
        </div>

        <button
          onClick={() => setIsVisible(false)}
          className="text-slate-400 hover:text-white transition-colors p-1 rounded hover:bg-slate-800 focus:outline-none"
          aria-label="Dismiss banner"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
