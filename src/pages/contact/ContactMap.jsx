import React from "react";
import { MapPin, Clock, Building } from "lucide-react";

export const ContactMap = () => {
  return (
    <section className="py-16 sm:py-24 bg-white border-t border-slate-200/80 select-none">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 space-y-12">

        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <h2 className="text-3xl sm:text-5xl font-black text-[#0B132B] tracking-tight uppercase">
            Visit Our <span className="bg-gradient-to-r from-[#FF4D27] via-amber-500 to-sky-600 bg-clip-text text-transparent">Headquarters</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
            Experience live product demonstrations and meet our healthcare software architecture team.
          </p>
        </div>

        {/* Map Container + Location Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* Interactive Google Map Frame (8 columns) */}
          <div className="lg:col-span-8 rounded-3xl overflow-hidden border border-slate-200/90 shadow-xl min-h-[380px] sm:min-h-[450px] relative group">
            <iframe
              title="Hamsa Soham Healthcare Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.8973575541645!2d85.0735369751778!3d25.608326777448635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed57743e6b75f9%3A0x81e3cf6a28c29649!2sMayank%20Manan%20Apartment!5e0!3m2!1sen!2sin!4v1789123083942!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "380px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              className="w-full h-full filter contrast-[105%] transition-all duration-500"
            />
          </div>

          {/* Location Info Card (4 columns) */}
          <div className="lg:col-span-4 bg-[#F8FAFD] rounded-3xl p-8 border border-slate-200/90 shadow-md flex flex-col justify-between space-y-6 text-left">
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FF4D27] to-amber-500 text-white flex items-center justify-center shadow-lg shadow-[#FF4D27]/20 shrink-0">
                  <Building className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-[#0B132B]">Head Office</h3>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Hamsa Soham Healthcare</span>
                </div>
              </div>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#FF4D27] shrink-0 mt-0.5" />
                  <div className="text-sm text-slate-700 leading-relaxed font-normal">
                    Flat No. 3B, Mayank Manan, Ashokpuri, Khajpura, Patna, Bihar – 800025, India
                  </div>
                </div>

                <div className="flex items-center gap-3 text-sm text-slate-700">
                  <Clock className="w-5 h-5 text-sky-600 shrink-0" />
                  <span>Monday - Saturday: 9:00 AM - 7:00 PM</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactMap;
