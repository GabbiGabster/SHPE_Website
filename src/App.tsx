import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Navbar } from "./components/Navbar";
import { ScrollToTop } from "./components/ScrollToTop";

const Home = lazy(() => import("./pages/Home").then((m) => ({ default: m.Home })));
const Members = lazy(() => import("./pages/Members").then((m) => ({ default: m.Members })));
const Sponsorship = lazy(() => import("./pages/Sponsorship").then((m) => ({ default: m.Sponsorship })));
const GetPluggedIn = lazy(() => import("./pages/GetPluggedIn").then((m) => ({ default: m.GetPluggedIn })));
const Leadership = lazy(() => import("./pages/Leadership").then((m) => ({ default: m.Leadership })));

const routerBasename = import.meta.env.BASE_URL.replace(/\/$/, "") || undefined;

function PageLoader() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center">
      <div
        className="h-10 w-10 animate-spin rounded-full border-4 border-[#1B365D] border-t-transparent"
        role="status"
        aria-label="Loading page"
      />
    </div>
  );
}

export default function App() {
  return (
    <Router basename={routerBasename}>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <Navbar />
        <main id="main-content">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/members" element={<Members />} />
              <Route path="/sponsorship" element={<Sponsorship />} />
              <Route path="/get-plugged-in" element={<GetPluggedIn />} />
              <Route path="/leadership" element={<Leadership />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </Router>
  );
}
