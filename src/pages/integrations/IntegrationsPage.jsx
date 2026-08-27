import React, { useEffect } from "react";
import { IntegrationsHero } from "./IntegrationsHero";
import { EcosystemSection } from "./EcosystemSection";
import { SecurityComplianceSection } from "./SecurityComplianceSection";
import { IntegrationsCTA } from "./IntegrationsCTA";

export const IntegrationsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans select-none">
      {/* 1. Integrations Hero with Connected Network Highlights */}
      <IntegrationsHero />

      {/* 2. Connected Healthcare Ecosystem (15 Integrations Grid) */}
      <EcosystemSection />

      {/* 3. Security & Compliance (10 Card Formats) */}
      <SecurityComplianceSection />

      {/* 4. Bottom Consultation CTA */}
      <IntegrationsCTA />
    </div>
  );
};

export default IntegrationsPage;
