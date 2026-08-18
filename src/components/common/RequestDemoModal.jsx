import React, { useEffect } from "react";
import { X, Sparkles } from "lucide-react";
import { RequestDemoForm } from "./RequestDemoForm";

export const RequestDemoModal = ({ isOpen, onClose, defaultProduct = "" }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/75 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto relative text-slate-900 select-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-200/80">
          <div className="space-y-1 text-left">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#FF4D27]">
              <Sparkles className="w-4 h-4 text-[#FF4D27]" />
              <span>Personalized Demonstration</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#0B132B]">
              Request a Live Demo
            </h3>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close demo modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Embedded Universal Request Demo Form */}
        <RequestDemoForm
          defaultProduct={defaultProduct}
          onSuccess={onClose}
          isInModal={true}
        />
      </div>
    </div>
  );
};

export default RequestDemoModal;
