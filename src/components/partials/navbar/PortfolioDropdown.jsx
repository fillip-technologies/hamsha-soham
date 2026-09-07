import React from "react";
import { Link } from "react-router-dom";
import { Sparkles, Eye, Layers, Building2, ChevronRight } from "lucide-react";

export const PortfolioDropdown = ({ data, onClose }) => {
  if (!data) return null;

  return (
    <div className="w-[920px] bg-[#0A1128]/80 backdrop-blur-xl border border-white/15 rounded-3xl shadow-2xl p-7 text-white select-none text-left font-sans">
      {/* 4 Columns with Vertical Dividers */}
      <div className="grid grid-cols-4 divide-x divide-slate-700/60">
        
        {/* COLUMN 1: HWAI */}
        <div className="pr-6 space-y-4">
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-white shadow-inner">
              <Sparkles className="w-5 h-5 text-purple-300" />
            </div>
            <Link
              to="/products/hwai"
              onClick={onClose}
              className="text-base font-bold text-white hover:text-[#FF4D27] transition-colors flex items-center gap-1.5 group"
            >
              <span>HWAI</span>
              <ChevronRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#FF4D27]" />
            </Link>
          </div>

          <ul className="space-y-2.5 text-[13px] text-slate-300">
            <li className="flex items-start gap-2 group cursor-pointer">
              <span className="text-slate-400 select-none">•</span>
              <Link
                to="/products/hwai#enterprise-multispecialty"
                onClick={onClose}
                className="hover:text-white transition-colors"
              >
                Enterprise Multispecialty
              </Link>
            </li>
            <li className="flex items-start gap-2 group cursor-pointer">
              <span className="text-slate-400 select-none">•</span>
              <Link
                to="/products/hwai#nabh-nabl-compliance"
                onClick={onClose}
                className="hover:text-white transition-colors"
              >
                NABH and NABL compliant model
              </Link>
            </li>
            <li className="flex items-start gap-2 group cursor-pointer">
              <span className="text-slate-400 select-none">•</span>
              <Link
                to="/products/hwai#abdm-nha-integration"
                onClick={onClose}
                className="hover:text-white transition-colors"
              >
                ABDM and NHA Integration
              </Link>
            </li>
          </ul>
        </div>

        {/* COLUMN 2: e_Drishti */}
        <div className="px-6 space-y-4">
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-white shadow-inner">
              <Eye className="w-5 h-5 text-orange-300" />
            </div>
            <Link
              to="/products/e-drishti"
              onClick={onClose}
              className="text-base font-bold text-white hover:text-[#FF4D27] transition-colors flex items-center gap-1.5 group"
            >
              <span>e_Drishti</span>
              <ChevronRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#FF4D27]" />
            </Link>
          </div>

          <ul className="space-y-2.5 text-[13px] text-slate-300">
            <li className="flex items-start gap-2 group cursor-pointer">
              <span className="text-slate-400 select-none">•</span>
              <Link
                to="/products/e-drishti"
                onClick={onClose}
                className="hover:text-white transition-colors"
              >
                Enterprise Eye Hospital
              </Link>
            </li>
            <li className="flex items-start gap-2 group cursor-pointer">
              <span className="text-slate-400 select-none">•</span>
              <Link
                to="/products/e-drishti"
                onClick={onClose}
                className="hover:text-white transition-colors"
              >
                Registration to Inventory Management
              </Link>
            </li>
            <li className="flex items-start gap-2 group cursor-pointer">
              <span className="text-slate-400 select-none">•</span>
              <Link
                to="/products/e-drishti"
                onClick={onClose}
                className="hover:text-white transition-colors"
              >
                Comprehensive Eye EMR
              </Link>
            </li>
          </ul>
        </div>

        {/* COLUMN 3: Lite Products */}
        <div className="px-6 space-y-4">
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-white shadow-inner">
              <Layers className="w-5 h-5 text-emerald-300" />
            </div>
            <div className="text-base font-bold text-white">
              Lite Products
            </div>
          </div>

          <ul className="space-y-2.5 text-[13px] text-slate-300">
            <li className="flex items-start gap-2 group cursor-pointer">
              <span className="text-slate-400 select-none">•</span>
              <Link
                to="/products/e-kshitiz-lite"
                onClick={onClose}
                className="hover:text-emerald-400 transition-colors font-medium"
              >
                e_Kshitiz Lite
              </Link>
            </li>
            <li className="flex items-start gap-2 group cursor-pointer">
              <span className="text-slate-400 select-none">•</span>
              <Link
                to="/products/e-drishti-lite"
                onClick={onClose}
                className="hover:text-emerald-400 transition-colors font-medium"
              >
                e_Drishti Lite
              </Link>
            </li>
          </ul>
        </div>

        {/* COLUMN 4: e_Kshitiz */}
        <div className="pl-6 space-y-4">
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-white shadow-inner">
              <Building2 className="w-5 h-5 text-blue-300" />
            </div>
            <Link
              to="/products/e-kshitiz"
              onClick={onClose}
              className="text-base font-bold text-white hover:text-[#FF4D27] transition-colors flex items-center gap-1.5 group"
            >
              <span>e_Kshitiz</span>
              <ChevronRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#FF4D27]" />
            </Link>
          </div>

          <ul className="space-y-2.5 text-[13px] text-slate-300">
            <li className="flex items-start gap-2 group cursor-pointer">
              <span className="text-slate-400 select-none">•</span>
              <Link
                to="/products/e-kshitiz"
                onClick={onClose}
                className="hover:text-white transition-colors"
              >
                Workforce / SMB Healthcare
              </Link>
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default PortfolioDropdown;



