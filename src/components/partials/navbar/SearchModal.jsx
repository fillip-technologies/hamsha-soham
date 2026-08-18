import React, { useEffect, useState } from "react";
import { Search, X, CornerDownLeft } from "lucide-react";
import { navConfig } from "../../../config/navigation.config";

export const SearchModal = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) {
          onClose();
        }
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const results = navConfig.items.filter((item) =>
    item.label.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl bg-white border border-slate-200 rounded-2xl soft-card-shadow overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Header Input */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-100 gap-3">
          <Search className="w-5 h-5 text-slate-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search navigation items, case studies, solutions..."
            className="w-full bg-transparent text-slate-900 placeholder-slate-400 text-sm font-medium focus:outline-none"
            autoFocus
          />
          <button
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Search Suggestions & Results */}
        <div className="p-4 max-h-80 overflow-y-auto">
          <div className="text-[10px] font-extrabold uppercase tracking-widest text-[#FF4D27] mb-2">
            Navigation Items
          </div>
          <div className="space-y-1">
            {results.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={onClose}
                className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 text-sm font-semibold text-slate-800 group transition-all"
              >
                <span className="group-hover:text-[#FF4D27] transition-colors">
                  {item.label}
                </span>
                <span className="flex items-center gap-1 text-xs text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  Jump to <CornerDownLeft className="w-3 h-3" />
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-4 py-2.5 bg-slate-50 border-t border-slate-100 text-[11px] text-slate-400 flex items-center justify-between font-medium">
          <span>Quick Navigation</span>
          <div className="flex gap-2">
            <kbd className="bg-white border border-slate-200 px-1.5 py-0.5 rounded shadow-xs">esc</kbd> close
          </div>
        </div>
      </div>
    </div>
  );
};
