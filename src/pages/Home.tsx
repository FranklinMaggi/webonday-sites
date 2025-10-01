import { useState, useEffect } from "react";
import { Globe, Briefcase, Dumbbell } from "lucide-react";
import { Link } from "react-router-dom";

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
          className=" absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-white px-6">
          <p className="text-3xl md:text-5xl font-bold drop-shadow-lg">
            {services[index].text}
          </p>
        </div>
      </header>

      {/* SEZIONE SERVIZI */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-600">
          I nostri servizi
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         {/* Siti Web */}
<div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition flex flex-col items-center text-center">
  <Globe className="w-12 h-12 text-blue-600 mb-4" />
  <h3 className="text-xl font-semibold mb-2">Siti Web</h3>
  <p className="text-gray-600 mb-4">
    Pacchetto base: sviluppo siti rapidi, leggeri e professionali. Email aziendale inclusa.
  </p>
  <Link
    to="/creazione-siti" 
    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
  >
    Scopri di più
  </Link>
</div>

          {/* Digital Marketing */}
          <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition flex flex-col items-center text-center">
            <Briefcase className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Digital Marketing</h3>
            <p className="text-gray-600 mb-4">
              Consulenze strategiche: branding, SEO, social ads, roadmap digitale.
            </p>
            <Link
              to="/digital-marketing"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Scopri di più
            </Link>
          </div>

          {/* Personal Training */}
          <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition flex flex-col items-center text-center">
            <Dumbbell className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Personal Training</h3>
            <p className="text-gray-600 mb-4">
              Collaborazioni per palestre e coach: servizi digitali e organizzativi.
            </p>
            <Link
              to="/personal-training"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Scopri di più
            </Link>
          </div>
        </div>
      </section>

    

      {/* PARTNERS */}
      <section className="py-16 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-10">I nostri Partners</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="p-4 bg-white shadow rounded-lg">Firestore</div>
          <div className="p-4 bg-white shadow rounded-lg">PayPal</div>
          <div className="p-4 bg-white shadow rounded-lg">Sportal</div>
          <div className="p-4 bg-white shadow rounded-lg">PalApps</div>
        </div>
      </section>
    </div>
  );
}
