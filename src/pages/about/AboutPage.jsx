import React from "react";
import { AboutHero } from "./AboutHero";
import { AboutStory } from "./AboutStory";
import { AboutStats } from "./AboutStats";
import { AboutValues } from "./AboutValues";
import { AboutCTA } from "./AboutCTA";

export const AboutPage = () => {
  return (
    <div className="w-full bg-[#FAFCFF] min-h-screen text-slate-900 font-sans">
      <AboutHero />
      <AboutStory />
      <AboutStats />
      <AboutValues />
      <AboutCTA />
    </div>
  );
};

export default AboutPage;
