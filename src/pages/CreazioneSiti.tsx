// src/pages/CreazioneSiti.tsx
import { useState } from "react";
import { Link } from "react-router-dom";

const steps = [
  { title: "Consulenza in presenza", desc: "Incontriamo te e il tuo team direttamente nella tua azienda. Qui analizziamo come lavori e cosa ti distingue dai tuoi competitors." },
  { title: "La tua Roadmap", desc: "Disegniamo un progetto che valorizza i tuoi servizi più forti e ti posiziona come riferimento per i tuoi clienti." },
  { title: "Idee dall’esterno", desc: "Portiamo un punto di vista fresco e creativo per rendere la tua offerta unica, completa e inimitabile." },
  { title: "Architettura su misura", desc: "L’architettura del sito diventa il tuo biglietto da visita digitale. Una struttura pensata per durare e farti emergere nel tempo." },
  { title: "Contenuti personalizzati", desc: "Ti forniamo un link privato dove potrai caricare immagini, testi e logo. Non hai un logo? Te ne creiamo uno gratuitamente." },
  { title: "Creazione del sito", desc: "Passiamo allo sviluppo: dominio semplice, programmazione veloce, ottimizzazione SEO e indicizzazione sui motori di ricerca." },
  { title: "Dominio e email professionali", desc: "Il pacchetto include dominio, spazio web e configurazione di email aziendali (es. info@tuaazienda.it)." },
  { title: "Assistenza tecnica", desc: "Il primo anno di supporto è incluso. In seguito, interventi gestiti con costi chiari e trasparenti." },
  { title: "Web design & UX", desc: "Un designer curerà grafica ed esperienza di navigazione per un sito elegante e intuitivo." },
  { title: "Consegna & pubblicazione", desc: "Ti presentiamo il progetto finito, lo testiamo insieme e poi lo pubblichiamo online." },
];

export default function CreazioneSiti() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleStep = (index: number) => setOpenIndex(openIndex === index ? null : index);

  return (
    <div className="futuristic-bg">
    <div className="futuristic-gradient" />
  
      {/* sfondo con gradienti digitali */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 opacity-50 pointer-events-none" />

      {/* HEADER centrale */}
      <header className="relative text-center py-16">
        <h1 className="text-5xl md:text-6xl font-extrabold text-blue-700 drop-shadow-lg">
          WebOnDay
        </h1>
        <p className="text-gray-700 mt-4 max-w-2xl mx-auto text-lg">
          <strong>La nostra specialità in dieci passi</strong><br />
          La nostra proposta migliore sul web?{" "}
          <span className="text-blue-600 font-semibold">SEI TU!</span>
        </p>
      </header>

      <main className="relative max-w-6xl mx-auto px-6 pb-20 space-y-20">
        {/* Accordion */}
        <section>
          <div className="space-y-4">
            {steps.map((step, i) => (
              <div key={i} className="rounded-2xl bg-white/70 backdrop-blur shadow-md">
                <button
                  onClick={() => toggleStep(i)}
                  className="w-full text-left px-6 py-4 flex justify-between items-center hover:bg-blue-50/50 transition rounded-2xl"
                >
                  <span className="text-lg font-semibold text-gray-800">
                    {step.title}
                  </span>
                  <span className="text-blue-600 text-xl">
                    {openIndex === i ? "−" : "+"}
                  </span>
                </button>
                {openIndex === i && (
                  <div className="px-6 pb-6 text-gray-600 animate-fadeIn">
                    {step.desc}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Pacchetti e Soluzioni */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-700">
            Pacchetti e Soluzioni
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* BASE */}
            <div className="card bg-white/80 backdrop-blur-lg flex flex-col">
              <h3 className="text-xl font-semibold mb-2">
                Base 850 € <span className="text-gray-500 text-sm">(sconto 25% → 640 €)</span><br />+ 10 €/mese
              </h3>
              <p className="text-gray-600 flex-grow">
                Sito vetrina chiaro, mobile responsive, blocchi informativi, servizi principali e contatti rapidi.
              </p>
              <Link to="/dettagli-base" className="btn-primary mt-4 text-center">
                Vedi dettagli
              </Link>
            </div>

            {/* PROFESSIONAL */}
            <div className="card bg-white/80 backdrop-blur-lg flex flex-col">
              <h3 className="text-xl font-semibold mb-2">
                Professional 1250 € <span className="text-gray-500 text-sm">(sconto 25% → 938 €)</span><br />+ 15 €/mese
              </h3>
              <p className="text-gray-600 flex-grow">
                Sito aziendale completo con SEO base, form contatti avanzato, reportistica e supporto evolutivo.
              </p>
              <Link to="/dettagli-professional" className="btn-primary mt-4 text-center">
                Vedi dettagli
              </Link>
            </div>

            {/* ADVANCED */}
            <div className="card bg-white/80 backdrop-blur-lg flex flex-col">
              <h3 className="text-xl font-semibold mb-2">
                Advanced 2200 € <span className="text-gray-500 text-sm">(sconto 25% → 1650 €)</span><br />+ 100 €/mese
              </h3>
              <p className="text-gray-600 flex-grow">
                Portale completo con database, login Google, e-commerce integrato e assistenza prioritaria.
              </p>
              <Link to="/dettagli-advanced" className="btn-primary mt-4 text-center">
                Vedi dettagli
              </Link>
            </div>

            {/* HORECA */}
            <div className="card bg-white/80 backdrop-blur-lg flex flex-col">
              <h3 className="text-xl font-semibold mb-2">Speciale HoReCa</h3>
              <p className="text-gray-600 flex-grow">
                Soluzione dedicata a bar, ristoranti e hotel: prenotazioni, menù digitale e gestione clienti integrata.
              </p>
              <Link to="/dettagli-horeca" className="btn-primary mt-4 text-center">
                Vedi dettagli
              </Link>
            </div>

          </div>
        </section>
      </main>
    </div>
  );
}
