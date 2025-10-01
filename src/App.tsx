import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import DigitalMarketing from "./pages/DigitalMarketing";
import PersonalTraining from "./pages/PersonalTraining";
import ChiSiamo from "./pages/ChiSiamo";
import Contatti from "./pages/Contatti";
import CreazioneSiti from "./pages/CreazioneSiti";
import Mission from "./pages/Mission";
import Azienda from "./pages/Azienda"; 
import Sponsorship from "./pages/Sponsorship"; // nuova pagina

function App() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false); // scroll down → nascondi
      } else {
        setShowNavbar(true); // scroll up → mostra
      }
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const toggleMobileMenu = () => setMobileOpen((prev) => !prev);

  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans bg-gray-50">
        {/* NAVBAR */}
        <nav
          className={`fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow z-50 transition-transform duration-300 ${
            showNavbar ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            {/* LOGO */}
            <Link
              to="/"
              className="text-2xl font-extrabold text-blue-600 tracking-tight"
            >
              WebOnDay
            </Link>

            {/* MENU DESKTOP */}
            <ul className="hidden md:flex gap-8 font-medium text-gray-700">
              <li><Link to="/mission" className="hover:text-blue-600">Mission</Link></li>
              <li><Link to="/creazione-siti" className="hover:text-blue-600">Siti Web</Link></li>
              <li><Link to="/digital-marketing" className="hover:text-blue-600">Marketing</Link></li>
              <li><Link to="/personal-training" className="hover:text-blue-600">Training</Link></li>
              <li><Link to="/sponsorship" className="hover:text-blue-600">Sponsorship</Link></li>
              <li><Link to="/contatti" className="hover:text-blue-600">Contatti</Link></li>
            </ul>

            {/* HAMBURGER */}
            <button
              className="md:hidden flex flex-col gap-1.5 focus:outline-none"
              onClick={toggleMobileMenu}
              aria-label="Toggle Menu"
            >
              <span className="w-6 h-0.5 bg-gray-700 rounded"></span>
              <span className="w-6 h-0.5 bg-gray-700 rounded"></span>
              <span className="w-6 h-0.5 bg-gray-700 rounded"></span>
            </button>
          </div>

          {/* MENU MOBILE */}
          <div
            className={`md:hidden bg-white overflow-hidden transition-all duration-300 ${
              mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <ul className="flex flex-col p-4 space-y-3 text-gray-700 font-medium">
              <li><Link to="/mission" onClick={toggleMobileMenu}>Mission</Link></li>
              <li><Link to="/creazione-siti" onClick={toggleMobileMenu}>Siti Web</Link></li>
              <li><Link to="/digital-marketing" onClick={toggleMobileMenu}>Marketing</Link></li>
              <li><Link to="/personal-training" onClick={toggleMobileMenu}>Training</Link></li>
              <li><Link to="/sponsorship" onClick={toggleMobileMenu}>Sponsorship</Link></li>
              <li><Link to="/contatti" onClick={toggleMobileMenu}>Contatti</Link></li>
            </ul>
          </div>
        </nav>

        {/* ROUTES */}
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chi-siamo" element={<ChiSiamo />} />
            <Route path="/azienda" element={<Azienda />} />
            <Route path="/mission" element={<Mission />} />
            <Route path="/contatti" element={<Contatti />} />
            <Route path="/digital-marketing" element={<DigitalMarketing />} />
            <Route path="/personal-training" element={<PersonalTraining />} />
            <Route path="/creazione-siti" element={<CreazioneSiti />} />
            <Route path="/sponsorship" element={<Sponsorship />} />
          </Routes>
        </main>

        {/* FOOTER */}
        <footer className="bg-gray-900 text-gray-300 py-10 mt-auto">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-5 gap-8 text-sm">
            {/* CHI SIAMO */}
            <div>
              <h4 className="text-white font-semibold mb-3">Chi siamo</h4>
              <ul className="space-y-2">
                <li><Link to="/azienda" className="hover:text-white">Azienda</Link></li>
                <li><Link to="/chi-siamo" className="hover:text-white">Founder</Link></li>
              </ul>
            </div>

            {/* PARTNERS */}
            <div>
              <h4 className="text-white font-semibold mb-3">Partners</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Collaborazioni</a></li>
                <li><a href="#" className="hover:text-white">Diventa partner</a></li>
              </ul>
            </div>

            {/* PROGETTI */}
            <div>
              <h4 className="text-white font-semibold mb-3">Progetti</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Crowdfunding</a></li>
                <li><a href="#" className="hover:text-white">DigitalDay</a></li>
              </ul>
            </div>

            {/* CONTATTI */}
            <div>
              <h4 className="text-white font-semibold mb-3">Contatti</h4>
              <ul className="space-y-2">
                <li><a href="mailto:info@webonday.it" className="hover:text-white">info@webonday.it</a></li>
                <li><a href="tel:+393801888965" className="hover:text-white">+39 380 1888965</a></li>
              </ul>
            </div>

            {/* LOCATION */}
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
