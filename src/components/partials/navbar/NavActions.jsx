import React from "react";
import { Link } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";

export const NavActions = ({
  isMobileOpen,
  onToggleMobile,
  onLogin,
}) => {
  return (
    <div className="flex items-center gap-2.5 sm:gap-3.5">
      {/* Client Portal Login Button */}
      <a
        href="https://apps.hamsasoham.com/portal/index.xhtml"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:inline-flex items-center px-4 py-2 rounded-full border border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50 text-slate-700 hover:text-[#0B132B] text-xs sm:text-sm font-bold shadow-xs hover:shadow-sm transition-all cursor-pointer select-none"
      >
        <span>Login</span>
      </a>

      {/* Request Live Demo CTA Button */}
      <a
        href="https://apps.hamsasoham.com/portal/index.xhtml"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#0B132B] hover:bg-slate-800 text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all cursor-pointer select-none"
      >
        <span className="hidden xs:inline sm:inline">Request Live Demo</span>
        <span className="inline xs:hidden sm:hidden">Live Demo</span>
        <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
      </a>

      {/* Mobile Hamburger Menu */}
      <button
        onClick={onToggleMobile}
        className="lg:hidden p-2 text-black hover:bg-slate-100 rounded-xl focus:outline-none transition-colors cursor-pointer"
        aria-label="Toggle navigation menu"
      >
        {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>
    </div>
  );
};

export default NavActions;
