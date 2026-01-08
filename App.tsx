import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Members } from "./pages/Members";
import { Sponsorship } from "./pages/Sponsorship";
import { GetPluggedIn } from "./pages/GetPluggedIn";
import { Leadership } from "./pages/Leadership";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Navbar />
        <div id="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/members" element={<Members />} />
            <Route path="/sponsorship" element={<Sponsorship />} />
            <Route path="/get-plugged-in" element={<GetPluggedIn />} />
            <Route path="/leadership" element={<Leadership />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}