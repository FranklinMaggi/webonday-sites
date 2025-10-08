import React from "react";
import { Link } from "react-router-dom";
import HeaderSection from "../components/HeaderSection";

export default function DettagliAdvanced() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <HeaderSection
        title="Pacchetto Advanced — Portale Dinamico con E-commerce"
        subtitle={
          <>
            Soluzione completa a{" "}
            <span className="font-bold">1080€</span> +{" "}
            <span className="font-bold text-blue-600">30€/mese</span>{" "}
            per gestione server, sicurezza e aggiornamenti.
          </>
        }
      />

      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Hero */}
        <section className="grid md:grid-cols-2 gap-8 items-center mb-12">
          <div>
            <h2 className="text-2xl font-bold mb-3">Perché costa 1080€?</h2>
            <p className="text-gray-600 mb-4">
              Il pacchetto Advanced è un vero e proprio portale interattivo:
              database integrato, area riservata per utenti, autenticazione Google
              e sistema di pagamento online. I 1080€ coprono progettazione full-stack,
              sviluppo backend e frontend, integrazione API e test di sicurezza.
            </p>

            <ul className="grid gap-2 text-gray-700">
              <li>• Portale con database e gestione utenti</li>
              <li>• Accesso privato con Google Authentication (OAuth 2.0)</li>
              <li>• E-commerce integrato (Stripe / PayPal)</li>
              <li>• Pannello admin per gestione prodotti e ordini</li>
              <li>• Dashboard statistiche e report</li>
              <li>• Hosting dedicato + HTTPS + dominio personalizzato</li>
              <li>• Backup giornalieri e sicurezza avanzata</li>
              <li>• SEO tecnico e schema markup</li>
            </ul>

            <div className="mt-6 flex gap-3">
              <Link to="/contatti" className="btn-primary">
                Richiedi una demo
              </Link>
              <a
                href="/WebOnDayHeader.png"
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
              >
                Vedi portale d'esempio
              </a>
            </div>
          </div>

          <div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src="/WebOnDayHeader.png"
                alt="Esempio Advanced"
                className="w-full object-cover h-56 md:h-72"
              />
            </div>
            <p className="text-sm text-gray-500 mt-2">
              Anteprima: portale dinamico WebOnDay — accesso utente + area privata.
            </p>
          </div>
        </section>

        {/* Perché 30€/mese */}
        <section className="mb-12">
          <h3 className="text-xl font-semibold mb-3">Perché 30€/mese?</h3>
          <p className="text-gray-600 mb-4">
            I 30€/mese coprono la gestione server, l’infrastruttura cloud, 
            la sicurezza, l’aggiornamento costante delle dipendenze e 
            il monitoraggio proattivo. È un piano di manutenzione vera, 
            non solo hosting: garantisce stabilità, performance e supporto tecnico.
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-white rounded-lg shadow">
              <h4 className="font-semibold">Server dedicato e database</h4>
              <p className="text-sm text-gray-600">Ottimizzato per app e-commerce e login utenti.</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow">
              <h4 className="font-semibold">Manutenzione & Sicurezza</h4>
              <p className="text-sm text-gray-600">Aggiornamenti software, SSL, patch e monitor continuo.</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow">
              <h4 className="font-semibold">Supporto avanzato</h4>
              <p className="text-sm text-gray-600">Interventi tecnici fino a 2 ore mensili inclusi.</p>
            </div>
          </div>
        </section>

        {/* Pagamento */}
        <section className="mb-12">
          <h3 className="text-xl font-semibold mb-3">Come funziona il pagamento</h3>

          <ol className="list-decimal list-inside space-y-3 text-gray-700">
            <li>
              <strong>Acconto</strong>: 40% all’avvio (432 €) per bloccare la fase di sviluppo backend.
            </li>
            <li>
              <strong>Saldo</strong>: 648 € alla consegna e messa online del portale.
            </li>
            <li>
              <strong>Servizio mensile</strong>: 30 €/mese con fatturazione automatica e disdetta libera.
            </li>
            <li>
              <strong>Opzioni extra</strong>: moduli personalizzati, app mobile o multi-dominio su preventivo.
            </li>
          </ol>

          <div className="mt-4 flex gap-3">
            <Link to="/contatti" className="btn-primary">
              Prenota una consulenza
            </Link>
            <Link to="/creazione-siti" className="btn-secondary">
              Confronta i pacchetti
            </Link>
          </div>
        </section>

        {/* Cosa include in più */}
        <section className="mb-12">
          <h3 className="text-xl font-semibold mb-3">Cosa include in più rispetto al Professional</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>Database dedicato e area riservata utenti</li>
            <li>Login social (Google / Apple / Facebook)</li>
            <li>Gestione ordini, magazzino e pagamenti</li>
            <li>Integrazione gateway (Stripe / PayPal / Satispay)</li>
            <li>Admin panel per contenuti dinamici</li>
            <li>Cloud storage e CDN ottimizzata</li>
            <li>API REST / GraphQL per connessioni esterne</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mb-20">
          <h3 className="text-xl font-semibold mb-3">Domande frequenti</h3>

          <div className="space-y-4">
            <details className="p-4 bg-white rounded-lg shadow">
              <summary className="font-medium cursor-pointer">Posso collegare un dominio personale?</summary>
              <p className="mt-2 text-gray-600">Sì, gestiamo setup DNS e SSL per il dominio che preferisci.</p>
            </details>

            <details className="p-4 bg-white rounded-lg shadow">
              <summary className="font-medium cursor-pointer">È possibile avere un’App mobile?</summary>
              <p className="mt-2 text-gray-600">Certo, il portale Advanced può essere esteso con app mobile PWA o Flutter.</p>
            </details>

            <details className="p-4 bg-white rounded-lg shadow">
              <summary className="font-medium cursor-pointer">Che tipo di pagamenti online supportate?</summary>
              <p className="mt-2 text-gray-600">Stripe, PayPal, Satispay e bonifici diretti. Integrazione pronta out-of-the-box.</p>
            </details>
          </div>
        </section>

        {/* CTA finale */}
        <section className="text-center py-8 border-t">
          <p className="text-gray-700 mb-4">
            Hai bisogno di un portale dinamico e professionale? Noi costruiamo l’infrastruttura per la tua crescita digitale.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/contatti" className="btn-primary">Richiedi una demo</Link>
            <Link to="/dettagli-professional" className="btn-secondary">Confronta con Professional</Link>
          </div>
        </section>
      </main>
    </div>
  );
}
