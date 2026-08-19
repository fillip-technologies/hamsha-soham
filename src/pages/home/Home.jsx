import React from "react";
import { HeroSection } from "./HeroSection";
import { ApprovedBySection } from "./ApprovedBySection";
import { SegmentSolutionsSection } from "./SegmentSolutionsSection";
import { FeaturesSection } from "./FeaturesSection";
import { AboutSection } from "./AboutSection";
import { PortfolioSection } from "./PortfolioSection";
import { WhyHamsaSection } from "./WhyHamsaSection";
import { ClientsSection } from "./ClientsSection";
import { TestimonialsSection } from "./TestimonialsSection";

export const Home = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* 1. Homepage Hero Section */}
      <HeroSection />

      {/* 2. Official Approvals & Certifications (ABDM / Safe-to-Host / VAPT) */}
      <ApprovedBySection />

      {/* 3. Healthcare Solutions for Every Organization (Target Segmentation) */}
      <SegmentSolutionsSection />

      {/* 3. Hamsa Soham Core Features & Value Pillars Section */}
      <FeaturesSection />

      {/* 4. About Us, Brand Story & Mission/Vision Section */}
      <AboutSection />

      {/* 5. Flagship HIMS Products Portfolio Showcase */}
      <PortfolioSection />

      {/* 6. Why Hamsa Soham? Section */}
      <WhyHamsaSection />

      {/* 7. Our Partners & Clients Section */}
      <ClientsSection />

      {/* 8. Client Testimonials & Reviews Section */}
      <TestimonialsSection />
    </div>
  );
};

export default Home;
