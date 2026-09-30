import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ContactHero } from "./ContactHero";
import { ContactForm } from "./ContactForm";
import { ContactInfo } from "./ContactInfo";
import { ContactMap } from "./ContactMap";

export const ContactPage = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const timer = setTimeout(() => {
        const elem = document.getElementById(id);
        if (elem) {
          elem.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [hash]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans select-none">
      {/* 1. Hero Section */}
      <ContactHero />

      {/* 2. Main Content Grid: Form + Info */}
      <section className="py-16 sm:py-24 max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Form (7 columns) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          {/* Info Side (5 columns) */}
          <div className="lg:col-span-5">
            <ContactInfo />
          </div>

        </div>
      </section>

      {/* 3. Interactive Location Map Section */}
      <ContactMap />
    </div>
  );
};

export default ContactPage;
