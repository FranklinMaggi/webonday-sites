// src/pages/Mission.tsx
import { useState, useEffect } from "react";

const heroSlides = [
        { img: "/WebOnDayHeader.png" },
        { img: "/MissionHeader.png" },
        { img: "/MissionHeader1.png" },
        { img: "/MissionHeader2.png" },
        { img: "/MissionHeader3.png" },
];

export default function Mission() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroSlides.length);
    }, 5000); // cambia slide ogni 5 secondi
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* HERO ROTANTE */}
      <div className="relative h-[80vh] overflow-hidden">
        <img
          src={heroSlides[index].img}
          alt="Mission Hero"
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1500"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* TITOLO SEPARATO */}
      <div className="text-center py-12 bg-gray-50">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-4">
          La nostra Mission
        </h1>
        <p className="text-xl font-medium text-gray-700">
          Digitalizzare in modo etico, sostenibile e comunicativo
        </p>
      </div>

      {/* CONTENT */}
      <div className="max-w-5xl mx-auto px-6 py-20 space-y-16">
        {/* Intro */}
        <section className="text-center">
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Crediamo in una digitalizzazione{" "}
            <span className="text-amber-700 font-semibold">
              pulita, concreta e sostenibile
            </span>
            , capace di creare un ecosistema semplice e comunicativo.  
            La nostra missione è aiutare aziende e professionisti a costruire strumenti digitali 
            che migliorino la relazione con i clienti, anche da remoto, senza mai perdere il lato umano.
          </p>
        </section>

        {/* Valori */}
        <section className="grid md:grid-cols-2 gap-10">
          <div className="p-8 bg-white rounded-2xl shadow">
            <h2 className="text-2xl font-bold text-amber-700 mb-3">🌱 Eco & Green</h2>
            <p className="text-gray-600">
              Riduciamo sprechi e processi ridondanti grazie al digitale, 
              semplificando la gestione e ottimizzando le risorse.
            </p>
          </div>
          <div className="p-8 bg-white rounded-2xl shadow">
            <h2 className="text-2xl font-bold text-amber-700 mb-3">🤝 Comunicazione chiara</h2>
            <p className="text-gray-600">
              Digitalizzare non significa delegare tutto a un computer, 
              ma migliorare la comunicazione e creare rapporti più trasparenti e duraturi.
            </p>
          </div>
          <div className="p-8 bg-white rounded-2xl shadow">
            <h2 className="text-2xl font-bold text-amber-700 mb-3">💻 Remote Ready</h2>
            <p className="text-gray-600">
              Strumenti digitali che funzionano ovunque: gestisci clienti, team e progetti anche a distanza, 
              con la stessa efficienza dell’ufficio.
            </p>
          </div>
          <div className="p-8 bg-white rounded-2xl shadow">
            <h2 className="text-2xl font-bold text-amber-700 mb-3">🌍 Ecosistema digitale</h2>
            <p className="text-gray-600">
              Creiamo piattaforme integrate, dove siti, app e database lavorano insieme, 
              rendendo la tua azienda più fluida e competitiva.
            </p>
          </div>
        </section>

        {/* Closing */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-amber-700 mb-4">
            Un futuro digitale sostenibile
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            La nostra missione è accompagnarti in un percorso digitale etico e concreto, 
            che unisce innovazione e rispetto per l’ambiente.  
            Con WebOnDay, ogni scelta digitale è un passo verso un futuro più pulito e connesso.
          </p>
        </section>
      </div>
    </div>
  );
}
