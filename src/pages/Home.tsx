// Home.tsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Globe, Briefcase, Dumbbell, Star } from "lucide-react";

const services = [
  {
    text: "Creazione siti web rapidi ed efficaci",
    bg: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=1600&q=80",
  },
  {
    text: "Consulenze Digital Marketing & Know-How",
    bg: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1600&q=80",
  },
  {
    text: "Personal Training & Coaching aziendale",
    bg: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1600&q=80",
  },
];

export default function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % services.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* HERO rotante */}
      <header className="relative h-[40vh] flex items-center justify-center text-center overflow-hidden">
        <img
          src={services[index].bg}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-white px-6">
          <p className="text-3xl md:text-5xl font-bold drop-shadow-lg">
            {services[index].text}
          </p>
        </div>
      </header>

      {/* HEADER PROMO */}
      <section className="py-16 bg-gray-100 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-4">
          WebOnDay
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Attiva <span className="font-bold text-blue-600">WebOn25</span> e ottieni il{" "}
          <span className="font-bold">25% di sconto</span> sulla nostra consulenza
          e su tutti i servizi, se attivi entro il{" "}
          <span className="text-red-600 font-semibold">31/12/2025</span>.
        </p>
      </section>

      {/* SEZIONE SERVIZI */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-600">
          I nostri servizi
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Siti Web */}
          <div className="p-6 bg-white rounded-2xl shadow flex flex-col text-center hover:shadow-lg hover:scale-105 transition">
            <Globe className="w-12 h-12 text-blue-600 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Siti Web</h3>
            <p className="text-gray-600 flex-grow">
              Pacchetto base da 100€ + 3€/mese. Email aziendale inclusa.
            </p>
            <Link to="/creazione-siti" className="btn-primary mt-4">
              Scopri di più
            </Link>
          </div>

          {/* Consulenza Digitale */}
          <div className="p-6 bg-white rounded-2xl shadow flex flex-col text-center hover:shadow-lg hover:scale-105 transition">
            <Briefcase className="w-12 h-12 text-blue-600 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Consulenza Digitale</h3>
            <p className="text-gray-600 flex-grow">
              Branding, SEO, social ads, roadmap. Da 80€, scontato a 50€ fino al 2026.
            </p>
            <Link to="/digital-marketing" className="btn-primary mt-4">
              Scopri di più
            </Link>
          </div>

          {/* Personal Training */}
          <div className="p-6 bg-white rounded-2xl shadow flex flex-col text-center hover:shadow-lg hover:scale-105 transition">
            <Dumbbell className="w-12 h-12 text-blue-600 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Personal Training</h3>
            <p className="text-gray-600 flex-grow">
              Collaborazioni per palestre e coach. Da 120€/mese per sempre.
            </p>
            <Link to="/personal-training" className="btn-primary mt-4">
              Scopri di più
            </Link>
          </div>

          {/* Sponsorship */}
          <div className="p-6 bg-white rounded-2xl shadow flex flex-col text-center hover:shadow-lg hover:scale-105 transition">
            <Star className="w-12 h-12 text-blue-600 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Sponsorship</h3>
            <p className="text-gray-600 flex-grow">
              Da 50€/mese. Incluso pacchetto base + 5 consulenze digitali annue per i tuoi contatti.
            </p>
            <Link to="/sponsorship" className="btn-primary mt-4">
              Scopri di più
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
