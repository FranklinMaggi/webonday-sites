// src/pages/CreazioneSiti.tsx
import { useState } from "react";
import { Link } from "react-router-dom";

const steps = [
  { title: "Consulenza in presenza", desc: "Incontriamo te e il tuo team direttamente nella tua azienda. Qui analizziamo come lavori e cosa ti distingue dai tuoi competitors." },
  { title: "La tua Roadmap", desc: "Disegniamo un progetto che non si limita a 'mettere online una pagina', ma che valorizza i tuoi servizi più forti e ti posiziona come riferimento per i tuoi clienti." },
  { title: "Idee dall’esterno", desc: "Portiamo un punto di vista fresco e creativo per arricchire la tua esperienza, rendendo la tua offerta unica, completa e inimitabile." },
  { title: "Architettura su misura", desc: "L’idea prende forma: l’architettura del sito diventa il tuo biglietto da visita digitale. Una struttura pensata per durare e farti emergere nel tempo." },
  { title: "Contenuti personalizzati", desc: "Ti forniamo un link privato dove potrai caricare immagini, testi e logo. Non hai un logo? Te ne creiamo uno gratuitamente." },
  { title: "Creazione del sito", desc: "Passiamo allo sviluppo: scelta di un dominio semplice e intuitivo, programmazione veloce, ottimizzazione SEO e indicizzazione sui motori di ricerca." },
  { title: "Dominio e email professionali", desc: "Il pacchetto include l’acquisto di dominio e spazio web, più la configurazione di email aziendali personalizzate (es. info@tuaazienda.it)." },
  { title: "Assistenza tecnica", desc: "Il primo anno di supporto è incluso. In seguito, eventuali interventi saranno gestiti con costi ridotti e trasparenti." },
  { title: "Web design & UX", desc: "Un designer curerà la grafica e l’esperienza di navigazione, per un sito intuitivo, elegante e 'full optional'." },
  { title: "Consegna & pubblicazione", desc: "Ti presentiamo il progetto finito, lo testiamo insieme in locale e, con la tua approvazione, avviamo messa online e indicizzazione definitiva." },
];

export default function CreazioneSiti() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleStep = (index: number) => setOpenIndex(openIndex === index ? null : index);

  return (
    <div className="min-h-screen bg-gray-100 relative overflow-hidden">
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
            <div className="card bg-white/80 backdrop-blur-lg flex flex-col">
              <h3 className="text-xl font-semibold mb-2">Base</h3>
              <p className="text-gray-600 flex-grow">
                Sito vetrina semplice: blocco informazioni, servizi principali, contatti rapidi.
              </p>
              <Link to="/dettagli-base" className="btn-primary mt-4 text-center">
                Vedi dettagli
              </Link>
            </div>

            <div className="card bg-white/80 backdrop-blur-lg flex flex-col">
              <h3 className="text-xl font-semibold mb-2">Professional</h3>
              <p className="text-gray-600 flex-grow">
                Sito con menù interattivo e form contatti avanzato con risposta automatica via mail.
              </p>
              <Link to="/dettagli-professional" className="btn-primary mt-4 text-center">
                Vedi dettagli
              </Link>
            </div>

            <div className="card bg-white/80 backdrop-blur-lg flex flex-col">
              <h3 className="text-xl font-semibold mb-2">Advanced</h3>
              <p className="text-gray-600 flex-grow">
                Portale con database, accesso privato con Google Authentication, e-commerce con pagamenti online.
              </p>
              <Link to="/dettagli-advanced" className="btn-primary mt-4 text-center">
                Vedi dettagli
              </Link>
            </div>

            <div className="card bg-white/80 backdrop-blur-lg flex flex-col">
              <h3 className="text-xl font-semibold mb-2">Speciale HoReCa</h3>
              <p className="text-gray-600 flex-grow">
                Soluzione dedicata a bar, ristoranti e hotel: ordini, prenotazioni, gestione database clienti e menù digitale.
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
