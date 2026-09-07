import React from "react";
import { CreditCard, Fingerprint, LockKeyhole } from "lucide-react";
import abhaCardImg from "../../assets/abha-card.jpg";

export const AbhaCardSection = () => {
  const infoBlocks = [
    {
      Icon: Fingerprint,
      title: "ABHA Address",
      copy: (
        <>
          An ABHA (Ayushman Bharat Health Account) Address serves as a unique digital handle (a personalized username) allowing you to securely view and share medical records online. Formatted similarly to <span className="font-semibold text-slate-800">'yourname@consentmanager'</span>—such as <span className="font-semibold text-[#FF4D27]">xyz@abdm</span> linked to an ABDM Consent Manager—it facilitates frictionless, consent-driven health data exchange across India's national health network.
        </>
      ),
    },
    {
      Icon: CreditCard,
      title: "ABHA Number",
      copy: "The ABHA Number acts as your primary digital identity across India's connected healthcare ecosystem. This 14-digit personalized identification number securely anchors your verified personal identity, medical history, and clinical health records across all participating facilities.",
    },
  ];

  return (
    <section className="abha-premium-section group/abha relative bg-[#F8FAFC] py-16 sm:py-20 border-b border-slate-200/80 select-none overflow-hidden">
      <style>
        {`
          @keyframes abha-line-draw {
            0% { stroke-dashoffset: 150; opacity: 0.12; }
            45% { opacity: 0.52; }
            100% { stroke-dashoffset: 0; opacity: 0.12; }
          }

          @keyframes abha-card-glow {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }

          @keyframes abha-reflection {
            0% { transform: translateX(-135%) skewX(-18deg); opacity: 0; }
            18% { opacity: 0.48; }
            46%, 100% { transform: translateX(145%) skewX(-18deg); opacity: 0; }
          }

          @keyframes abha-scan-bar {
            0%, 100% { transform: translateY(-120%); opacity: 0; }
            25% { opacity: 0.5; }
            64% { transform: translateY(120%); opacity: 0; }
          }

          @keyframes abha-soft-rise {
            from { opacity: 0; transform: translateY(18px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes abha-icon-pulse {
            0%, 100% { box-shadow: 0 0 0 0 rgba(14, 165, 233, 0.16); }
            50% { box-shadow: 0 0 0 12px rgba(14, 165, 233, 0); }
          }

          .abha-flow-line {
            stroke-dasharray: 14 12;
            animation: abha-line-draw 8s ease-in-out infinite;
          }

          .abha-copy-enter {
            animation: abha-soft-rise 700ms ease-out both;
          }

          .abha-visual-enter {
            animation: abha-soft-rise 760ms ease-out 120ms both;
          }

          .abha-info-card {
            animation: abha-soft-rise 640ms ease-out both;
          }

          .abha-info-icon {
            animation: abha-icon-pulse 3.8s ease-in-out infinite;
          }

          .abha-holo-shell::before {
            content: "";
            position: absolute;
            inset: -2px;
            border-radius: 28px;
            background: conic-gradient(from 90deg, #0ea5e9, #22c55e, #ff4d27, #0ea5e9);
            animation: abha-card-glow 8s linear infinite;
            opacity: 0.54;
          }

          .abha-holo-shell::after {
            content: "";
            position: absolute;
            inset: 12px;
            border-radius: 24px;
            background: rgba(255, 255, 255, 0.88);
            box-shadow: inset 0 0 0 1px rgba(226, 232, 240, 0.95);
          }

          .abha-card-surface {
            transform: perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0);
          }

          .abha-premium-section:hover .abha-card-surface {
            transform: perspective(1000px) rotateX(3deg) rotateY(-5deg) translateY(-8px);
          }

          .abha-card-surface::before {
            content: "";
            position: absolute;
            inset: 0;
            background: linear-gradient(105deg, transparent 18%, rgba(255, 255, 255, 0.78) 46%, transparent 68%);
            animation: abha-reflection 5.4s ease-in-out infinite;
            pointer-events: none;
            z-index: 3;
          }

          .abha-card-surface::after {
            content: "";
            position: absolute;
            inset: 0;
            background: linear-gradient(180deg, transparent 5%, rgba(14, 165, 233, 0.2) 48%, transparent 70%);
            animation: abha-scan-bar 4.2s ease-in-out infinite;
            pointer-events: none;
            z-index: 4;
          }

          .abha-privacy-pill {
            transform: translateY(8px);
            opacity: 0.9;
          }

          .abha-premium-section:hover .abha-privacy-pill {
            transform: translateY(0);
            opacity: 1;
          }

          @media (prefers-reduced-motion: reduce) {
            .abha-flow-line,
            .abha-copy-enter,
            .abha-visual-enter,
            .abha-info-card,
            .abha-info-icon,
            .abha-holo-shell::before,
            .abha-card-surface::before,
            .abha-card-surface::after {
              animation: none !important;
            }

            .abha-premium-section:hover .abha-card-surface,
            .abha-privacy-pill,
            .abha-premium-section:hover .abha-privacy-pill {
              transform: none !important;
            }
          }
        `}
      </style>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(14,165,233,0.06)_0,transparent_28%,rgba(34,197,94,0.055)_52%,transparent_76%,rgba(255,77,39,0.055)_100%)]" />
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 1440 620"
          fill="none"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path className="abha-flow-line" d="M-40 126C210 82 318 238 550 176C782 114 904 92 1098 178C1262 250 1358 202 1482 164" stroke="#0EA5E9" strokeWidth="1.4" />
          <path className="abha-flow-line" d="M-20 474C176 352 360 466 548 392C736 318 842 450 1026 370C1180 304 1320 348 1476 280" stroke="#22C55E" strokeWidth="1.4" style={{ animationDelay: "1.2s" }} />
          <path className="abha-flow-line" d="M176 304C356 220 484 282 652 258C820 234 940 188 1118 250C1248 294 1346 262 1458 222" stroke="#FF4D27" strokeWidth="1.2" style={{ animationDelay: "2.1s" }} />
        </svg>
      </div>

      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-7 text-left abha-copy-enter">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0B132B] tracking-tight leading-tight">
              Ayushman Bharat Health Account (ABHA)
            </h2>

            <div className="mt-7 grid gap-4">
              {infoBlocks.map(({ Icon, title, copy }, idx) => (
                <div
                  key={title}
                  className="abha-info-card group/card rounded-2xl border border-white/80 bg-white/78 p-5 shadow-lg shadow-slate-200/45 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl hover:shadow-sky-100/60"
                  style={{ animationDelay: `${idx * 120 + 180}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="abha-info-icon mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-sky-50 text-sky-600 ring-1 ring-sky-100 transition-colors duration-300 group-hover/card:bg-emerald-50 group-hover/card:text-emerald-600 group-hover/card:ring-emerald-100">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
                        {title}
                      </h3>
                      <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                        {copy}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col items-center justify-center abha-visual-enter">
            <div className="abha-holo-shell relative w-full max-w-lg rounded-[28px] p-3 shadow-2xl shadow-slate-200/75">
              <div className="abha-card-surface relative z-10 overflow-hidden rounded-3xl border border-white/90 bg-white shadow-xl shadow-slate-300/45 transition-all duration-500">
                <img
                  src={abhaCardImg}
                  alt="Ayushman Bharat Health Account (ABHA) Card"
                  className="block h-auto w-full object-contain transition-transform duration-500 group-hover/abha:scale-[1.025]"
                />
                <div className="abha-privacy-pill absolute bottom-4 left-4 flex items-center gap-2 rounded-full border border-white/85 bg-white/90 px-3 py-1.5 text-xs font-black text-slate-700 shadow-lg shadow-slate-300/35 backdrop-blur transition-all duration-300">
                  <LockKeyhole className="h-4 w-4 text-emerald-600" />
                  <span>Consent Secured</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AbhaCardSection;
