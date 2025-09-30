import { useState, useEffect } from "react";
import { Globe, Briefcase, Dumbbell } from "lucide-react";

// testi + background per le slide
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

export default function Home() {
  const [index, setIndex] = useState(0);

  // cambia slide ogni 5 secondi
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % services.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* HERO rotante */}
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
          <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-transform flex flex-col items-center text-center">
            <Globe className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Siti Web</h3>
            <p className="text-gray-600">
              Creiamo siti professionali e leggeri. Email aziendale inclusa.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-transform flex flex-col items-center text-center">
            <Briefcase className="w-12 h-12 text-gray-700 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Consulenze Digital Marketing</h3>
<p className="text-gray-600">
  Strategie e know-how per aziende moderne. Visibilità e crescita online.
</p>

          </div>

          <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-transform flex flex-col items-center text-center">
            <Dumbbell className="w-12 h-12 text-emerald-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Personal Training</h3>
            <p className="text-gray-600">
              Il tuo coach sempre disponibile, anche in azienda.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
