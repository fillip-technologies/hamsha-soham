import React from "react";
import { Menu, X, ArrowRight } from "lucide-react";

export const NavActions = ({
  isMobileOpen,
  onToggleMobile,
  onRequestDemo,
  onLogin,
}) => {
  return (
    <div className="flex items-center gap-2.5 sm:gap-3.5">
      {/* Client Portal Login Button */}
      <button
        onClick={onLogin}
        className="hidden md:inline-flex items-center px-4 py-2 rounded-full border border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50 text-slate-700 hover:text-[#0B132B] text-xs sm:text-sm font-bold shadow-xs hover:shadow-sm transition-all cursor-pointer select-none"
      >
        <span>Login</span>
      </button>

      {/* Request Live Demo CTA Button */}
      <button
        onClick={onRequestDemo}
        className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0B132B] hover:bg-slate-800 text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all cursor-pointer select-none"
      >
        <span>Request Live Demo</span>
        <ArrowRight className="w-4 h-4" />
      </button>

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
