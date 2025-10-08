import React from "react";
import { Link } from "react-router-dom";
import HeaderSection from "../components/HeaderSection";

export default function DettagliProfessional() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <HeaderSection
        title="Pacchetto Professional — Presenza Digitale Completa"
        subtitle={
          <>
            Sito aziendale evoluto a{" "}
            <span className="font-bold">680€</span> +{" "}
            <span className="font-bold text-blue-600">12€/mese</span> per gestione e supporto continuo.
          </>
        }
      />

      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Hero */}
        <section className="grid md:grid-cols-2 gap-8 items-center mb-12">
          <div>
            <h2 className="text-2xl font-bold mb-3">Perché costa 680€?</h2>
            <p className="text-gray-600 mb-4">
              Il pacchetto Professional è pensato per imprese, professionisti e studi che vogliono un sito non solo
              bello ma anche funzionale, con una base di automazione e marketing integrata. I 680€ coprono analisi,
              progettazione, sviluppo avanzato, personalizzazione grafica, ottimizzazione SEO e configurazione strumenti di tracking e newsletter.
            </p>

            <ul className="grid gap-2 text-gray-700">
              <li>• Design personalizzato su misura (no template predefiniti)</li>
              <li>• Fino a 10 pagine professionali</li>
              <li>• SEO avanzato + integrazione Google Analytics & Search Console</li>
              <li>• Configurazione newsletter / raccolta lead</li>
              <li>• Moduli di contatto evoluti (form multipli, preventivi, booking)</li>
              <li>• Email aziendali professionali (fino a 3 indirizzi)</li>
              <li>• Setup dominio incluso (se richiesto)</li>
              <li>• Ottimizzazione velocità e sicurezza</li>
            </ul>

            <div className="mt-6 flex gap-3">
              <Link to="/contatti" className="btn-primary">
                Richiedi il preventivo
              </Link>
              <a
                href="/WebOnDayHeader.png"
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
              >
                Vedi esempio (WebOnDay)
              </a>
            </div>
          </div>

          <div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src="/WebOnDayHeader.png"
                alt="Esempio Professional"
                className="w-full object-cover h-56 md:h-72"
              />
            </div>
            <p className="text-sm text-gray-500 mt-2">
              Anteprima: esempio di struttura professionale WebOnDay.
            </p>
          </div>
        </section>

        {/* Perché 12€/mese */}
        <section className="mb-12">
          <h3 className="text-xl font-semibold mb-3">Perché 12€/mese?</h3>
          <p className="text-gray-600 mb-4">
            I 12€/mese includono un servizio continuativo: hosting performante, monitoraggio,
            aggiornamenti, sicurezza proattiva e piccole modifiche mensili.
            È un piano pensato per chi vuole un sito sempre online, veloce e aggiornato senza doverci pensare.
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-white rounded-lg shadow">
              <h4 className="font-semibold">Hosting Premium</h4>
              <p className="text-sm text-gray-600">Server ottimizzato, CDN e SSL inclusi.</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow">
              <h4 className="font-semibold">Aggiornamenti & Sicurezza</h4>
              <p className="text-sm text-gray-600">Monitoraggio vulnerabilità e backup giornalieri.</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow">
              <h4 className="font-semibold">Supporto tecnico</h4>
              <p className="text-sm text-gray-600">Fino a 1h di assistenza o micro modifiche al mese.</p>
            </div>
          </div>
        </section>

        {/* Pagamento */}
        <section className="mb-12">
          <h3 className="text-xl font-semibold mb-3">Come funziona il pagamento</h3>

          <ol className="list-decimal list-inside space-y-3 text-gray-700">
            <li>
              <strong>Acconto</strong>: 30% al via (204 €) per iniziare la progettazione.
            </li>
            <li>
              <strong>Saldo</strong>: 476 € alla consegna del sito approvato.
            </li>
            <li>
              <strong>Servizio mensile</strong>: 12 €/mese per hosting e gestione,
              fatturati e pagabili con carta o bonifico automatico.
            </li>
            <li>
              Possibilità di upgrade o aggiunta moduli personalizzati in qualsiasi momento.
            </li>
          </ol>

          <div className="mt-4 flex gap-3">
            <Link to="/contatti" className="btn-primary">
              Prenota una consulenza
            </Link>
            <Link to="/creazione-siti" className="btn-secondary">
              Scopri gli altri pacchetti
            </Link>
          </div>
        </section>

        {/* Cosa include in più */}
        <section className="mb-12">
          <h3 className="text-xl font-semibold mb-3">Cosa include in più rispetto al Pacchetto Base</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>Analisi UX e architettura delle informazioni</li>
            <li>SEO avanzata e report iniziale</li>
            <li>Google My Business e scheda aziendale ottimizzata</li>
            <li>Integrazione CRM / email marketing (Mailchimp, Brevo, ecc.)</li>
            <li>Form preventivi dinamici o prenotazioni</li>
            <li>Statistiche avanzate (GA4 + heatmap opzionale)</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mb-20">
          <h3 className="text-xl font-semibold mb-3">Domande frequenti</h3>

          <div className="space-y-4">
            <details className="p-4 bg-white rounded-lg shadow">
              <summary className="font-medium cursor-pointer">
                Quanto tempo serve per completarlo?
              </summary>
              <p className="mt-2 text-gray-600">
                Circa 2–3 settimane, compresa revisione e setup SEO.
              </p>
            </details>

            <details className="p-4 bg-white rounded-lg shadow">
              <summary className="font-medium cursor-pointer">
                Posso integrare un e-commerce più avanti?
              </summary>
              <p className="mt-2 text-gray-600">
                Sì. Il pacchetto Professional è pensato per crescere: possiamo aggiungere moduli
                e-commerce o catalogo prodotti senza rifare tutto da zero.
              </p>
            </details>

            <details className="p-4 bg-white rounded-lg shadow">
              <summary className="font-medium cursor-pointer">
                Chi gestisce gli aggiornamenti tecnici?
              </summary>
              <p className="mt-2 text-gray-600">
                WebOnDay li gestisce per te. Tu pensi al business, noi pensiamo al sito.
              </p>
            </details>
          </div>
        </section>

        {/* CTA finale */}
        <section className="text-center py-8 border-t">
          <p className="text-gray-700 mb-4">
            Fatti trovare online con un sito professionale, veloce e curato.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/contatti" className="btn-primary">Inizia ora</Link>
            <Link to="/dettagli-base" className="btn-secondary">Confronta con Base</Link>
          </div>
        </section>
      </main>
    </div>
  );
}
