import { useState, useEffect } from "react";
import { Globe, Briefcase, Dumbbell } from "lucide-react";

// Testi dei servizi
const services = [
  {
    text: "Creazione siti web rapidi ed efficaci",
    bg: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=1600&q=80",
  },
  {
    text: "Consulenze digitali per il settore Ho.Re.Ca.",
    bg: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1600&q=80",
  },
  {
    text: "Personal Training & Coaching aziendale",
    bg: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1600&q=80",
  },
];

function App() {
  const [index, setIndex] = useState(0);

  // cambio slide ogni 5 secondi
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % services.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50">
      {/* NAVBAR */}
      <nav className="sticky top-0 bg-white/90 backdrop-blur-md shadow z-50">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="WebOnDay logo" className="h-10 w-auto" />
            <span className="text-xl font-bold text-blue-600">WebOnDay</span>
          </div>
          <ul className="hidden md:flex gap-6 font-medium text-gray-700">
            <li><a href="#siti" className="hover:text-blue-600 transition">Siti Web</a></li>
            <li><a href="#consulenze" className="hover:text-blue-600 transition">Consulenze</a></li>
            <li><a href="#pt" className="hover:text-blue-600 transition">Personal Training</a></li>
          </ul>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Contattaci
          </button>
        </div>
      </nav>

      {/* HERO rotante con 3 background */}
      <header className="relative h-[80vh] flex items-center justify-center text-center overflow-hidden">
        <img
          src={services[index].bg}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-white px-6">
          <p className="text-3xl md:text-4xl font-semibold drop-shadow-lg">
            {services[index].text}
          </p>
        </div>
      </header>

      {/* SEZIONI */}
      <main className="py-20 px-6 max-w-6xl mx-auto grid gap-12">
        <h2 className="text-3xl font-bold text-center mb-12">I nostri servizi</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div id="siti" className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-transform flex flex-col items-center text-center">
            <Globe className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Siti Web</h3>
            <p className="text-gray-600">Creiamo siti professionali e leggeri. Email aziendale inclusa.</p>
          </div>

          <div id="consulenze" className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-transform flex flex-col items-center text-center">
            <Briefcase className="w-12 h-12 text-gray-700 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Consulenze Ho.Re.Ca.</h3>
            <p className="text-gray-600">Soluzioni digitali per hotel, ristorazione e condomini.</p>
          </div>

          <div id="pt" className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-transform flex flex-col items-center text-center">
            <Dumbbell className="w-12 h-12 text-emerald-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Personal Training</h3>
            <p className="text-gray-600">Il tuo coach sempre disponibile, anche in azienda.</p>
          </div>
        </div>
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
  );
}

export default App;
