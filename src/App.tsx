import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import DigitalMarketing from "./pages/DigitalMarketing";
import PersonalTraining from "./pages/PersonalTraining";
import ChiSiamo from "./pages/ChiSiamo";
import Contatti from "./pages/Contatti";
import CreazioneSiti from "./pages/CreazioneSitiWeb";
import Mission from "./pages/Mission";

function App() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // scroll down → nascondi navbar
        setShowNavbar(false);
      } else {
        // scroll up → mostra navbar
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans bg-gray-50">
        {/* NAVBAR con effetto scomparsa */}
        <nav
          className={`fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow z-50 transition-transform duration-300 ${
            showNavbar ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
            <span className="text-xl font-bold text-blue-600">WebOnDay</span>
            <ul className="flex gap-6 font-medium text-gray-700">
              <li>
                <Link to="/" className="hover:text-blue-600 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/chi-siamo" className="hover:text-blue-600 transition">
                  Chi Siamo
                </Link>
              </li>
              <li>
                <Link to="/mission" className="hover:text-blue-600 transition">
                  Mission
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        {/* ROUTES */}
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chi-siamo" element={<ChiSiamo />} />
            <Route path="/mission" element={<Mission />} />
            <Route path="/contatti" element={<Contatti />} />
            <Route path="/digital-marketing" element={<DigitalMarketing />} />
            <Route path="/personal-training" element={<PersonalTraining />} />
            <Route path="/creazione-siti" element={<CreazioneSiti />} />
          </Routes>
        </main>

        {/* FOOTER (rimane uguale) */}
        <footer className="bg-gray-900 text-gray-300 py-10 mt-auto">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
            <div>
              <h4 className="text-white font-semibold mb-3">Chi siamo</h4>
              <p>WebOnDay è la tua realtà digitale per crescere online e offline.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Partners</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Collaborazioni</a></li>
                <li><a href="#" className="hover:text-white">Diventa partner</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Contatti</h4>
              <ul className="space-y-2">
                <li><a href="mailto:info@webonday.it" className="hover:text-white">info@webonday.it</a></li>
                <li><a href="tel:+393801888965" className="hover:text-white">+39 380 1888965</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Location</h4>
              <p>Bari, Puglia, Italia</p>
            </div>
          </div>
          <div className="text-center text-gray-500 text-xs mt-8">
            © {new Date().getFullYear()} WebOnDay — Tutti i diritti riservati
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
