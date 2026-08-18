import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { navConfig } from "../../../config/navigation.config";
import { ChevronDown, ArrowRight } from "lucide-react";

export const MobileDrawer = ({ isOpen, onClose, onRequestDemo }) => {
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

                {/* Mobile Dropdown Items */}
                {item.hasDropdown && isExpanded && item.dropdownData && (
                  <div className="pl-4 pr-2 py-2 space-y-2 bg-slate-50 rounded-xl mt-1 border border-slate-100">
                    {item.dropdownData.categories.map((cat, idx) => (
                      <Link
                        key={idx}
                        to={cat.link}
                        onClick={onClose}
                        className="block text-xs font-semibold text-slate-700 hover:text-[#FF4D27] py-1.5"
                      >
                        {cat.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Mobile Request Live Demo Action Button */}
        <div className="pt-4 border-t border-slate-200">
          <button
            onClick={() => {
              onClose();
              if (onRequestDemo) onRequestDemo();
            }}
            className="w-full py-3.5 rounded-full bg-[#0B132B] hover:bg-slate-800 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer"
          >
            <span>Request Live Demo</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileDrawer;
