import logo from "./assets/logo.png";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans bg-gray-50">
        {/* NAVBAR */}
        <nav className="sticky top-0 bg-white/90 backdrop-blur-md shadow z-50">
          <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src={logo} alt="WebOnDay logo" className="h-10 w-auto" />
              <span className="text-xl font-bold text-blue-600">WebOnDay</span>
            </div>
            <ul className="hidden md:flex gap-6 font-medium text-gray-700">
              <li>
                <Link to="/" className="hover:text-blue-600 transition">Home</Link>
              </li>
              <li>
                <Link to="/consulenza-horeca" className="hover:text-blue-600 transition">Consulenze</Link>
              </li>
              <li>
                <Link to="/chi-siamo" className="hover:text-blue-600 transition">Chi Siamo</Link>
              </li>
              <li>
                <Link to="/contatti" className="hover:text-blue-600 transition">Contatti</Link>
              </li>
            </ul>
            <Link
              to="/contatti"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Contattaci
            </Link>
          </div>
        </nav>

        {/* CONTENUTO DELLE PAGINE */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/consulenza-horeca" element={<HorecaConsulting />} />
            <Route path="/chi-siamo" element={<ChiSiamo />} />
            <Route path="/contatti" element={<Contatti />} />
          </Routes>
        </main>

        {/* FOOTER */}
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
                <li><a href="tel:+393801888965" className="hover:text-white">+39 3801888965</a></li>
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
