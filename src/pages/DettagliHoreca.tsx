// src/pages/DettagliHoreca.tsx
import { Link } from "react-router-dom";
import HeaderSection from "../components/HeaderSection";

export default function DettagliHoreca() {
  return (
    <div className="min-h-screen bg-gray-100 relative overflow-hidden">
      {/* Sfondo luminoso come CreazioneSiti */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-100 via-yellow-50 to-red-100 opacity-60 pointer-events-none" />

      {/* HEADER */}
      <HeaderSection
        title="WebOnDay HoReCa"
        subtitle="Soluzioni digitali per Ristoranti, Hotel e B&B — nessuna percentuale, solo commissioni trasparenti e tecnologia Advanced."
      />

      <main className="relative max-w-6xl mx-auto px-6 pb-20 space-y-20">
        {/* HOTEL E B&B */}
        <section>
          <h2 className="text-3xl font-bold text-blue-700 text-center mb-10">
            WebOnDay Hotel & B&B
          </h2>
          <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto text-lg">
            Tre piani su misura per strutture ricettive: prenotazioni dirette, notifiche WhatsApp
            e pagamenti integrati. Nessun intermediario, nessuna percentuale.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* BASE */}
            <div className="rounded-2xl bg-white/80 backdrop-blur-lg shadow-md hover:shadow-lg transition flex flex-col p-8 border border-blue-100">
              <h3 className="text-2xl font-semibold text-blue-600 mb-2">Base</h3>
              <p className="text-gray-700 mb-4 flex-grow">
                Sito con piattaforma di prenotazioni, calendario e tabella clienti.
                Notifica WhatsApp automatica e invio scheda ospite in Questura.
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1">
                <li>Prezzo: <s>2200 €</s> → <strong>1600 €</strong></li>
                <li>Commissione: 3 € per pagamento (rimborsabile)</li>
                <li>Pagamenti immediati sul tuo conto</li>
              </ul>
              <Link to="/contatti" className="btn-primary text-center mt-auto">
                Attiva piano Base
              </Link>
            </div>

            {/* PREMIUM */}
            <div className="rounded-2xl bg-white/80 backdrop-blur-lg shadow-md hover:shadow-lg transition flex flex-col p-8 border-2 border-blue-300">
              <h3 className="text-2xl font-semibold text-blue-700 mb-2">Premium</h3>
              <p className="text-gray-700 mb-4 flex-grow">
                Tutto del piano Base + pagamento in-app con Stripe e invio automatico della
                fattura PDF via WhatsApp API ed EmailJS.
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1">
                <li><s>2400 €</s> → <strong>1800 €</strong></li>
                <li>Link di pagamento con conferma disponibilità</li>
                <li>Fattura PDF automatica e notifiche integrate</li>
              </ul>
              <Link to="/contatti" className="btn-primary text-center mt-auto">
                Attiva piano Premium
              </Link>
            </div>

            {/* LUXURY */}
            <div className="rounded-2xl bg-white/80 backdrop-blur-lg shadow-md hover:shadow-lg transition flex flex-col p-8 border border-blue-100">
              <h3 className="text-2xl font-semibold text-blue-800 mb-2">Luxury</h3>
              <p className="text-gray-700 mb-4 flex-grow">
                Tutto del piano Premium + sincronizzazione con Booking e OTA,
                pagamenti PayPal “Pay in 3” e dashboard personalizzata.
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1">
                <li><s>2700 €</s> → <strong>2000 €</strong></li>
                <li>Integrazione Booking / Channel Manager</li>
                <li>Pagamenti PayPal a rate</li>
              </ul>
              <Link to="/contatti" className="btn-primary text-center mt-auto">
                Attiva piano Luxury
              </Link>
            </div>
          </div>
        </section>

        {/* RISTORANTI */}
        <section>
          <h2 className="text-3xl font-bold text-orange-600 text-center mb-10">
            WebOnDay Food Promotion 🍽️ — Ristoranti & Locali
          </h2>
          <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto text-lg">
            La piattaforma delivery che rispetta chi cucina: nessuna percentuale sui ricavi, 
            solo una commissione simbolica di 3 €, con pagamenti diretti sul tuo conto.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* BASE */}
            <div className="rounded-2xl bg-white/80 backdrop-blur-lg shadow-md hover:shadow-lg transition flex flex-col p-8 border border-orange-100">
              <h3 className="text-2xl font-semibold text-orange-600 mb-2">Base</h3>
              <p className="text-gray-700 mb-4 flex-grow">
                Piattaforma delivery gratuita con 200 € di credito iniziale.  
                Gestione ordini, clienti e notifiche WhatsApp integrate.
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1">
                <li>Costo: <strong>0 €</strong> (con 200 € di credito)</li>
                <li>Pagamenti diretti via Stripe sul tuo conto</li>
                <li>Fee: 3 € per ordini sopra 20 €</li>
              </ul>
              <p className="text-gray-500 text-sm mb-4">
                Il credito iniziale copre le prime 200 € di commissioni.
              </p>
              <Link to="/contatti" className="btn-primary text-center mt-auto">
                Attiva piano Base
              </Link>
            </div>

            {/* PREMIUM */}
            <div className="rounded-2xl bg-white/80 backdrop-blur-lg shadow-md hover:shadow-lg transition flex flex-col p-8 border-2 border-orange-300">
              <h3 className="text-2xl font-semibold text-orange-700 mb-2">Premium</h3>
              <p className="text-gray-700 mb-4 flex-grow">
                Tutto del piano Base + personalizzazioni backend, analisi vendite, 
                coupon e gestione multisede per catene e dark kitchen.
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1">
                <li><strong>3200 €</strong> una tantum + 200 € di credito</li>
                <li>Fee 3 € per ordini sopra 20 €</li>
                <li>50% attività / 50% cliente</li>
              </ul>
              <Link to="/contatti" className="btn-primary text-center mt-auto">
                Attiva piano Premium
              </Link>
            </div>
          </div>
        </section>

        {/* FOOTER NOTE */}
        <section className="bg-white/80 rounded-2xl shadow p-6 text-sm text-gray-600 text-center">
          <h3 className="text-lg font-semibold mb-2">Commissione piattaforma</h3>
          <p className="max-w-2xl mx-auto">
            Ogni transazione superiore a 20 € include una fee piattaforma di 3 € divisa equamente:
            <strong> 1,50 € cliente</strong> + <strong>1,50 € attività</strong>.  
            Nessuna percentuale sui ricavi, nessun costo nascosto.  
            Le prime 200 € di commissioni sono gratuite all’attivazione.
          </p>
        </section>
      </main>
    </div>
  );
}
