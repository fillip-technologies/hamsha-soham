import React from "react";
import { MapPin, Navigation, Clock, Building, ExternalLink } from "lucide-react";

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
              title="Hamsa Soham Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.889417088924!2d80.9462!3d26.8467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDUwJzE4LjEiTiA4MMKwNTYnNDYuMyJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "380px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full filter grayscale-[15%] contrast-[105%] group-hover:grayscale-0 transition-all duration-500"
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
                    Hamsa Soham Healthcare Pvt Ltd, Operational Hub & Technology Center, India.
                  </div>
                </div>

                <div className="flex items-center gap-3 text-sm text-slate-700">
                  <Clock className="w-5 h-5 text-sky-600 shrink-0" />
                  <span>Monday - Saturday: 9:00 AM - 7:00 PM</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-200">
              <a
                href="https://maps.google.com/?q=Hamsa+Soham+Healthcare"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 rounded-2xl bg-[#0B132B] hover:bg-slate-900 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer group"
              >
                <Navigation className="w-4.5 h-4.5 text-sky-400 group-hover:rotate-45 transition-transform" />
                <span>Get Directions on Google Maps</span>
                <ExternalLink className="w-4 h-4 text-slate-400" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactMap;
