import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Navbar } from "./components/partials/navbar/Navbar";
import { Footer } from "./components/partials/footer/Footer";
import { Home } from "./pages/home/Home";

// Product Pages
import { EDrishtiPage } from "./pages/portfolio/e-drishti/EDrishtiPage";
import { EDrishtiLitePage } from "./pages/portfolio/e-drishti-lite/EDrishtiLitePage";
import { EKshitizPage } from "./pages/portfolio/e-kshitiz/EKshitizPage";
import { EKshitizLitePage } from "./pages/portfolio/e-kshitiz-lite/EKshitizLitePage";
import { HwaiPage } from "./pages/portfolio/hwai/HwaiPage";

// Solutions Page
import { SolutionsPage } from "./pages/solutions/SolutionsPage";

// Integrations Page
import { IntegrationsPage } from "./pages/integrations/IntegrationsPage";

// About Page
import { AboutPage } from "./pages/about/AboutPage";

// Contact Page
import { ContactPage } from "./pages/contact/ContactPage";

// Scroll To Top on Route Navigation Component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
};

export function AppContent() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans relative">
      <ScrollToTop />
      {/* Production Master Navbar Partial */}
      <Navbar />

      {/* Main Page Content with React Router Routes */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* Primary Products Routes */}
          <Route path="/products/e-drishti" element={<EDrishtiPage />} />
          <Route path="/products/e-drishti-lite" element={<EDrishtiLitePage />} />
          <Route path="/products/e-kshitiz" element={<EKshitizPage />} />
          <Route path="/products/e-kshitiz-lite" element={<EKshitizLitePage />} />
          <Route path="/products/hwai" element={<HwaiPage />} />

          {/* Backward-Compatible /portfolio Aliases */}
          <Route path="/portfolio/e-drishti" element={<EDrishtiPage />} />
          <Route path="/portfolio/e-drishti-lite" element={<EDrishtiLitePage />} />
          <Route path="/portfolio/e-kshitiz" element={<EKshitizPage />} />
          <Route path="/portfolio/e-kshitiz-lite" element={<EKshitizLitePage />} />
          <Route path="/portfolio/hwai" element={<HwaiPage />} />

          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/integrations" element={<IntegrationsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>


      {/* Production Master Footer Partial */}
      <Footer />
    </div>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
