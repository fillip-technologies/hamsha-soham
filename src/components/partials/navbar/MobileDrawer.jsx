import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { navConfig } from "../../../config/navigation.config";
import { ChevronDown, ArrowRight, LogIn } from "lucide-react";

export const MobileDrawer = ({ isOpen, onClose, onLogin }) => {
  const [expandedId, setExpandedId] = useState(null);
  const location = useLocation();

  if (!isOpen) return null;

  const toggleExpand = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="lg:hidden fixed inset-0 z-40 bg-slate-900/30 backdrop-blur-sm flex flex-col justify-between pt-20 animate-in fade-in duration-200">
      <div className="bg-white border-t border-slate-200 p-6 space-y-5 max-h-[80vh] overflow-y-auto soft-card-shadow">
        <div className="space-y-1">
          {navConfig.items.map((item) => {
            const isActive =
              location.pathname === item.href ||
              (item.href !== "/" && location.pathname.startsWith(item.href));
            const isExpanded = expandedId === item.id;

            return (
              <div key={item.id} className="border-b border-slate-100 py-1">
                <div className="flex items-center justify-between">
                  <Link
                    to={item.href || "/"}
                    onClick={() => {
                      if (!item.hasDropdown) onClose();
                    }}
                    className={`text-sm font-semibold tracking-wide py-2.5 px-3 rounded-full block transition-all ${
                      isActive
                        ? "bg-slate-900 text-white"
                        : "text-slate-700 hover:text-slate-900"
                    }`}
                  >
                    {item.label}
                  </Link>

                  {item.hasDropdown && (
                    <button
                      onClick={() => toggleExpand(item.id)}
                      className="p-2 text-slate-500 hover:text-slate-800 cursor-pointer"
                    >
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>

                {/* Mobile Dropdown Items (Structured Groups) */}
                {item.hasDropdown && isExpanded && item.dropdownData && (
                  <div className="pl-2 pr-2 py-3 space-y-3 bg-slate-50 rounded-2xl mt-2 border border-slate-100">
                    {/* 1. HWAI */}
                    <div className="bg-white p-3 rounded-xl border border-purple-100 space-y-1">
                      <div className="flex items-center justify-between">
                        <Link
                          to="/products/hwai"
                          onClick={onClose}
                          className="text-xs font-black text-purple-700 hover:underline"
                        >
                          HWAI
                        </Link>
                        <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-purple-50 text-purple-700">
                          AI & HIMS
                        </span>
                      </div>
                      <ul className="text-[10px] text-slate-600 space-y-1 pl-1">
                        <li>
                          <Link
                            to="/products/hwai#enterprise-multispecialty"
                            onClick={onClose}
                            className="hover:text-purple-700 transition-colors flex items-center gap-1"
                          >
                            <span>• Enterprise Multispecialty</span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/products/hwai#nabh-nabl-compliance"
                            onClick={onClose}
                            className="hover:text-purple-700 transition-colors flex items-center gap-1"
                          >
                            <span>• NABH and NABL compliant model</span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/products/hwai#abdm-nha-integration"
                            onClick={onClose}
                            className="hover:text-purple-700 transition-colors flex items-center gap-1"
                          >
                            <span>• ABDM and NHA Integration</span>
                          </Link>
                        </li>
                      </ul>
                    </div>

                    {/* 2. e_Drishti */}
                    <div className="bg-white p-3 rounded-xl border border-orange-100 space-y-1">
                      <div className="flex items-center justify-between">
                        <Link
                          to="/products/e-drishti"
                          onClick={onClose}
                          className="text-xs font-black text-[#FF4D27] hover:underline"
                        >
                          e_Drishti
                        </Link>
                        <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-orange-50 text-[#FF4D27]">
                          Eye Care EMR
                        </span>
                      </div>
                      <ul className="text-[10px] text-slate-600 space-y-1 pl-1">
                        <li>
                          <Link
                            to="/products/e-drishti#enterprise-eye-hospital"
                            onClick={onClose}
                            className="hover:text-[#FF4D27] transition-colors flex items-center gap-1"
                          >
                            <span>• Enterprise Eye Hospital</span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/products/e-drishti#registration-inventory-management"
                            onClick={onClose}
                            className="hover:text-[#FF4D27] transition-colors flex items-center gap-1"
                          >
                            <span>• Registration to Inventory Management</span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/products/e-drishti#comprehensive-eye-emr"
                            onClick={onClose}
                            className="hover:text-[#FF4D27] transition-colors flex items-center gap-1"
                          >
                            <span>• Comprehensive Eye EMR</span>
                          </Link>
                        </li>
                      </ul>
                    </div>

                    {/* 3. Lite Products */}
                    <div className="bg-white p-3 rounded-xl border border-emerald-100 space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-black text-emerald-800">
                          Lite Products
                        </span>
                        <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700">
                          Clinic Suite
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-1.5 pt-0.5">
                        <Link
                          to="/products/e-kshitiz-lite"
                          onClick={onClose}
                          className="p-1.5 rounded-lg bg-emerald-50 text-[10px] font-bold text-emerald-800 text-center hover:bg-emerald-100"
                        >
                          e_Kshitiz Lite
                        </Link>
                        <Link
                          to="/products/e-drishti-lite"
                          onClick={onClose}
                          className="p-1.5 rounded-lg bg-emerald-50 text-[10px] font-bold text-emerald-800 text-center hover:bg-emerald-100"
                        >
                          e_Drishti Lite
                        </Link>
                      </div>
                    </div>

                    {/* 4. e_Kshitiz */}
                    <div className="bg-white p-3 rounded-xl border border-blue-100 space-y-1">
                      <div className="flex items-center justify-between">
                        <Link
                          to="/products/e-kshitiz"
                          onClick={onClose}
                          className="text-xs font-black text-blue-700 hover:underline"
                        >
                          e_Kshitiz
                        </Link>
                        <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-blue-700">
                          Hospital HIMS
                        </span>
                      </div>
                      <ul className="text-[10px] text-slate-600 space-y-1 pl-1">
                        <li>
                          <Link
                            to="/products/e-kshitiz#workforce-smb-healthcare"
                            onClick={onClose}
                            className="hover:text-blue-700 transition-colors flex items-center gap-1"
                          >
                            <span>• Workforce / SMB Healthcare</span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Mobile Action Buttons: Login & Request Live Demo */}
        <div className="pt-4 border-t border-slate-200 space-y-2.5">
          <a
            href="https://apps.hamsasoham.com/portal/index.xhtml"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 rounded-full border border-slate-200 hover:border-slate-300 bg-slate-50 hover:bg-slate-100 text-[#0B132B] font-bold text-sm flex items-center justify-center transition-all cursor-pointer"
          >
            <span>Login</span>
          </a>

          <a
            href="https://apps.hamsasoham.com/portal/index.xhtml"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 rounded-full bg-[#0B132B] hover:bg-slate-800 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer"
          >
            <span>Request Live Demo</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileDrawer;
