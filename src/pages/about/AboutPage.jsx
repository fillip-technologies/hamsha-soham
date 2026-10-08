import React from "react";
import { AboutHero } from "./AboutHero";
import { AboutStory } from "./AboutStory";
import { AboutStats } from "./AboutStats";
import { AboutValues } from "./AboutValues";
import { AboutCTA } from "./AboutCTA";
import { SEO } from "../../components/common/SEO";

export const AboutPage = () => {
  return (
    <div className="w-full bg-[#FAFCFF] min-h-screen text-slate-900 font-sans">
      {/* Page Meta Title & Description */}
      <SEO
        title="Guiding Principles | Hospital ERP Software India"
        description="Discover how our mission, vision, & values in software engineering, client support, and product innovation make us a trusted leader in hospital ERP software India."
      />

      <AboutHero />
      <AboutStory />
      <AboutStats />
      <AboutValues />
      <AboutCTA />
    </div>
  );
};

export default AboutPage;
