// src/pages/DettagliBase.tsx
import React from "react";
import { Link } from "react-router-dom";
import HeaderSection from "../components/HeaderSection";

export default function DettagliBase() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <HeaderSection
        title="Pacchetto Base — Sito Vetrina"
        subtitle={
          <>
            Sito vetrina professionale a <span className="font-bold">380€</span> +{" "}
            <span className="font-bold text-blue-600">9€/mese</span> per hosting e manutenzione.
          </>
        }
      />

      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Hero / preview */}
        <section className="grid md:grid-cols-2 gap-8 items-center mb-12">
          <div>
            <h2 className="text-2xl font-bold mb-3">Perché costa 380€?</h2>
            <p className="text-gray-600 mb-4">
              380€ è il prezzo del lavoro di progettazione e realizzazione: design
              responsive, struttura SEO-base, contenuti iniziali, setup email aziendale
              e consegna del sito pronto. Non è un template buttato via: è un sito
              costruito su misura, testato e pronto per il tuo business.
            </p>

            <ul className="grid gap-2 text-gray-700">
              <li>• Design responsive (mobile + desktop)</li>
              <li>• Fino a 5 pagine (Home, Chi Siamo, Servizi, Contatti, Blog/Portfolio)</li>
              <li>• Modulo contatti e integrazione email aziendale</li>
              <li>• Ottimizzazione base SEO (metatag, velocità, immagini ottimizzate)</li>
              <li>• Installazione certificato HTTPS (se hosting lo permette)</li>
              <li>• Guida rapida per aggiornare contenuti</li>
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
                alt="Esempio WebOnDay"
                className="w-full object-cover h-56 md:h-72"
              />
            </div>
            <p className="text-sm text-gray-500 mt-2">
              Anteprima: sito vetrina d'esempio realizzato da WebOnDay.
            </p>
          </div>
        </section>

        {/* Perché 9€/mese */}
        <section className="mb-12">
          <h3 className="text-xl font-semibold mb-3">Perché 9€/mese?</h3>
          <p className="text-gray-600 mb-4">
            I 9€/mese coprono l'infrastruttura e i servizi minimi che mantengono il sito
            sano e visibile: hosting leggero, backup settimanali, aggiornamenti di sicurezza,
            monitor uptime e piccoli interventi (es. cambio testo, aggiornamento contatti).
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-white rounded-lg shadow">
              <h4 className="font-semibold">Hosting & Uptime</h4>
              <p className="text-sm text-gray-600">Server ottimizzato per siti vetrina.</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow">
              <h4 className="font-semibold">Backup & Sicurezza</h4>
              <p className="text-sm text-gray-600">Backup settimanali + patch di sicurezza.</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow">
              <h4 className="font-semibold">Aggiornamenti minori</h4>
              <p className="text-sm text-gray-600">Fino a 30 minuti di intervento/mese inclusi.</p>
            </div>
          </div>
        </section>

        {/* Pagamento */}
        <section className="mb-12">
          <h3 className="text-xl font-semibold mb-3">Come funziona il pagamento</h3>

          <ol className="list-decimal list-inside space-y-3 text-gray-700">
            <li>
              <strong>Acconto</strong>: al via progetto chiediamo il <strong>30%</strong> (114€)
              come acconto per bloccare la slot di lavoro e avviare il design.
            </li>
            <li>
              <strong>Consegna e saldo</strong>: alla consegna del sito (approvazione finale)
              si paga il saldo restante (266€).
            </li>
            <li>
              <strong>Quota mensile</strong>: il piano hosting/maintenance di 9€/mese è pagato
              con addebito card o bonifico ricorrente (può essere disattivato con preavviso).
            </li>
            <li>
              <strong>Fattura</strong>: forniamo fattura a fine pagamento o mensilmente su richiesta.
            </li>
          </ol>

          <div className="mt-4 flex gap-3">
            <Link to="/contatti" className="btn-primary">
              Prenota ora — slot limitati
            </Link>
            <a href="/docs/contratto-esempio.pdf" className="btn-secondary">
              Scarica contratto esempio
            </a>
          </div>
        </section>

        {/* Cosa non è incluso */}
        <section className="mb-12">
          <h3 className="text-xl font-semibold mb-3">Cosa non è incluso</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>Produzione contenuti estesi (testi + foto professionali)</li>
            <li>E-commerce, gestionali complessi o integrazioni personalizzate</li>
            <li>Campagne ads (può essere aggiunto come servizio a parte)</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mb-20">
          <h3 className="text-xl font-semibold mb-3">FAQ rapide</h3>

          <div className="space-y-4">
            <details className="p-4 bg-white rounded-lg shadow">
              <summary className="font-medium cursor-pointer">Quanto dura la realizzazione?</summary>
              <p className="mt-2 text-gray-600">Di solito 7–14 giorni lavorativi dal ricevimento dei contenuti.</p>
            </details>

            <details className="p-4 bg-white rounded-lg shadow">
              <summary className="font-medium cursor-pointer">Posso aggiornare da solo i contenuti?</summary>
              <p className="mt-2 text-gray-600">Sì: forniamo una guida rapida. Per cambi veloci puoi usare i 30 minuti mensili inclusi.</p>
            </details>

            <details className="p-4 bg-white rounded-lg shadow">
              <summary className="font-medium cursor-pointer">Posso passare a un piano superiore?</summary>
              <p className="mt-2 text-gray-600">Certo: migrazione semplice verso pacchetti Advanced o Professional.</p>
            </details>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="text-center py-8 border-t">
          <p className="text-gray-700 mb-4">Pronto a partire? I nostri slot sono limitati ogni mese.</p>
          <div className="flex justify-center gap-4">
            <Link to="/contatti" className="btn-primary">Richiedi consulenza</Link>
            <Link to="/creazione-siti" className="btn-secondary">Scopri altri pacchetti</Link>
          </div>
        </section>
      </main>
    </div>
  );
}
