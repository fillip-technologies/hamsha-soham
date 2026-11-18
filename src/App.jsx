import { useEffect, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Navbar } from "./components/partials/navbar/Navbar";
import { Footer } from "./components/partials/footer/Footer";
import { Home } from "./pages/home/Home";

// All non-home pages are lazy-loaded so first-time visitors only download the home page bundle.
// Product Pages
const EDrishtiPage = lazy(() => import("./pages/portfolio/e-drishti/EDrishtiPage"));
const EDrishtiLitePage = lazy(() => import("./pages/portfolio/e-drishti-lite/EDrishtiLitePage"));
const EKshitizPage = lazy(() => import("./pages/portfolio/e-kshitiz/EKshitizPage"));
const EKshitizLitePage = lazy(() => import("./pages/portfolio/e-kshitiz-lite/EKshitizLitePage"));
const HwaiPage = lazy(() => import("./pages/portfolio/hwai/HwaiPage"));

// Solutions, Integrations, About, Contact Pages
const SolutionsPage = lazy(() => import("./pages/solutions/SolutionsPage"));
const IntegrationsPage = lazy(() => import("./pages/integrations/IntegrationsPage"));
const AboutPage = lazy(() => import("./pages/about/AboutPage"));
const ContactPage = lazy(() => import("./pages/contact/ContactPage"));

// Auth & Admin Pages
const LoginPage = lazy(() => import("./pages/login/LoginPage"));
const SignupPage = lazy(() => import("./pages/signup/SignupPage"));
const AdminPage = lazy(() => import("./pages/admin/AdminPage"));

const PageFallback = () => <div className="min-h-screen" aria-busy="true" />;

// Scroll To Top on Route Navigation Component
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const timer = setTimeout(() => {
        const elem = document.getElementById(id);
        if (elem) {
          elem.scrollIntoView({ behavior: "smooth" });
        }
      }, 150);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname, hash]);

  return null;
};

export function AppContent() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans relative [overflow-x:clip]">
      <ScrollToTop />
      {/* Production Master Navbar Partial (Hidden on Admin Routes) */}
      {!isAdminRoute && <Navbar />}

      {/* Main Page Content with React Router Routes */}
      <main className="flex-1">
        <Suspense fallback={<PageFallback />}>
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
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="*" element={<Home />} />
        </Routes>
        </Suspense>
      </main>


      {/* Production Master Footer Partial (Hidden on Admin Routes) */}
      {!isAdminRoute && <Footer />}
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
