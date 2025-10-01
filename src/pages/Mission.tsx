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
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-950 text-white min-h-screen relative">
      {/* HERO ROTANTE FUTURISTICO */}
      <div className="relative h-[70vh] overflow-hidden">
        <img
          src={heroSlides[index].img}
          alt="Mission Hero"
          className="absolute inset-0 w-full h-full object-cover opacity-70 transition-opacity duration-1500"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-800/70 via-blue-800/70 to-pink-800/70 mix-blend-overlay"></div>
        <div className="absolute inset-0 animate-pulse bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.2),transparent_70%)]"></div>
      </div>

      {/* TITOLO */}
      <div className="text-center py-12 relative z-10">
        <h1 className="text-5xl md:text-6xl font-extrabold neon-title mb-4">
          Mission 2025
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto neon-bubble">
          Nel 2025 costruiamo strumenti digitali concreti, con lo sguardo già
          proiettato verso il 2045: un mondo in cui **business e metaverso** si
          intrecciano senza confini.
        </p>
      </div>

      {/* CONTENUTO */}
      <div className="max-w-5xl mx-auto px-6 py-20 space-y-16">
        {/* Intro */}
        <section className="text-center">
          <p className="text-lg leading-relaxed text-gray-300 neon-bubble inline-block">
            Crediamo in una digitalizzazione{" "}
            <span className="text-cyan-400 font-semibold">etica e sostenibile</span>, 
            che parte da oggi ma guarda al futuro.  
            Nel 2045 la tecnologia non sarà più solo uno strumento: sarà una
            **dimensione condivisa** dove aziende e persone potranno incontrarsi,
            creare valore e comunicare senza barriere.
          </p>
        </section>

        {/* Valori */}
        <section className="grid md:grid-cols-2 gap-10">
          <div className="p-8 rounded-2xl border border-cyan-400 neon-panel">
            <h2 className="text-2xl font-bold text-cyan-300 mb-3">🌱 Green by Design</h2>
            <p className="text-gray-300">
              Ogni scelta digitale riduce sprechi e ottimizza risorse.  
              Nel 2045 il digitale sarà il nostro ecosistema più pulito.
            </p>
          </div>
          <div className="p-8 rounded-2xl border border-pink-400 neon-panel">
            <h2 className="text-2xl font-bold text-pink-300 mb-3">🤝 Human Touch</h2>
            <p className="text-gray-300">
              Anche nel metaverso la vera forza resta l’empatia: 
              tecnologie futuristiche al servizio di relazioni autentiche.
            </p>
          </div>
          <div className="p-8 rounded-2xl border border-indigo-400 neon-panel">
            <h2 className="text-2xl font-bold text-indigo-300 mb-3">💻 Remote & Meta-Ready</h2>
            <p className="text-gray-300">
              Dal 2025 costruiamo strumenti che funzionano ovunque: domani li useremo 
              anche negli spazi virtuali immersivi.
            </p>
          </div>
          <div className="p-8 rounded-2xl border border-amber-400 neon-panel">
            <h2 className="text-2xl font-bold text-amber-300 mb-3">🌍 Ecosistemi Ibridi</h2>
            <p className="text-gray-300">
              Oggi integriamo siti, app e database; domani integreremo universi digitali 
              e realtà parallele.
            </p>
          </div>
        </section>

        {/* Closing */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-fuchsia-300 neon-title mb-4">
            Un futuro digitale inizia adesso
          </h2>
          <p className="text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Siamo nel 2025, ma lavoriamo come se fossimo già nel 2045.  
            Ogni progetto è un ponte tra presente e futuro, tra realtà e metaverso.  
            Con WebOnDay ogni scelta digitale diventa un passo concreto 
            verso un domani senza limiti.
          </p>
        </section>
      </div>
    </div>
  );
}
