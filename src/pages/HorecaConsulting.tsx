// src/pages/HorecaConsulting.tsx
import { Link } from "react-router-dom";

export default function HorecaConsulting() {
  return (
    <div className="max-w-6xl mx-auto py-16 px-6 space-y-16">
      {/* HERO / INTRO */}
      <header className="text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-blue-600">
          Consulenze e Soluzioni Operative
        </h1>
        <p className="mt-4 text-gray-700 text-lg">
          Analisi, strategia sul campo, organizzazione del personale, coaching.
          Strumenti digitali concreti, non brochure.
        </p>
      </header>

      {/* PACCHETTI HORECA */}
      <section aria-labelledby="horeca-title">
        <h2 id="horeca-title" className="text-2xl font-bold mb-6">
          Ho.Re.Ca. — pacchetti
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <article className="p-6 border rounded-xl shadow hover:shadow-lg transition bg-white">
            <h3 className="text-xl font-semibold">Base</h3>
            <p className="mt-2 text-gray-600">
              500€ • 30 ore onsite + 10 ore marketing • Sito aziendale base.
            </p>
            <p className="mt-1 text-sm text-blue-600">Abbonamento: 50€/mese (aggiornamenti sito per 3 anni)</p>
          </article>

          <article className="p-6 border rounded-xl shadow hover:shadow-lg transition bg-white">
            <h3 className="text-xl font-semibold">Premium</h3>
            <p className="mt-2 text-gray-600">
              1500€ • Tutto del Base + grafica menu, campagne social.
            </p>
            <p className="mt-1 text-sm text-blue-600">Abbonamento: 40€/mese (aggiornamenti sito)</p>
            <p className="mt-1 text-xs text-gray-500">Costi adv esclusi.</p>
          </article>

          <article className="p-6 border rounded-xl shadow hover:shadow-lg transition bg-white">
            <h3 className="text-xl font-semibold">Luxury</h3>
            <p className="mt-2 text-gray-600">
              3500€ • Tutto del Premium + web app ordini/fornitori, magazzino, notifiche.
            </p>
            <p className="mt-1 text-sm text-blue-600">Timing: ~1 mese sviluppo</p>
          </article>
        </div>
      </section>

      {/* SERVIZI PER CONDOMINI */}
      <section aria-labelledby="condomini-title">
        <div className="flex items-center justify-between gap-4 mb-6">
          <h2 id="condomini-title" className="text-2xl font-bold">
            Condomini — gestione digitale trasparente
          </h2>
          <span className="px-3 py-1 text-xs rounded-full bg-blue-50 text-blue-700 border border-blue-200">
            Nuovo
          </span>
        </div>

        <p className="text-gray-700 mb-8">
          Piattaforma con area amministratori e pagina pubblica per i condomini. Visione fatture, bilanci,
          convocazioni e documenti. Excel/DB aggiornato lato back office, HTML statico chiaro lato condòmini.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Base */}
          <article className="p-6 border rounded-2xl shadow-sm hover:shadow-md bg-white">
            <div className="flex items-baseline justify-between">
              <h3 className="text-xl font-semibold">Base</h3>
              <span className="text-2xl font-extrabold text-blue-600">5€</span>
            </div>
            <p className="text-sm text-gray-500">al mese per condòmino</p>

            <ul className="mt-4 space-y-2 text-gray-700 text-sm">
              <li>• Area pubblica HTML: bilanci, convocazioni, bollette, fatture</li>
              <li>• Back office Excel/DB per amministratori</li>
              <li>• Upload documenti e archivio semplice</li>
            </ul>
          </article>

          {/* Premium */}
          <article className="p-6 border rounded-2xl shadow-sm hover:shadow-md bg-white">
            <div className="flex items-baseline justify-between">
              <h3 className="text-xl font-semibold">Premium</h3>
              <span className="text-2xl font-extrabold text-blue-600">15€</span>
            </div>
            <p className="text-sm text-gray-500">al mese per condòmino</p>

            <ul className="mt-4 space-y-2 text-gray-700 text-sm">
              <li>• Tutto del Base</li>
              <li>• Statistiche entrate/uscite con grafici</li>
              <li>• Notifiche email per nuove pubblicazioni</li>
              <li>• Ricerca documenti e filtri per anno/voce</li>
            </ul>
          </article>

          {/* Luxury */}
          <article className="p-6 border rounded-2xl shadow-sm hover:shadow-md bg-white">
            <div className="flex items-baseline justify-between">
              <h3 className="text-xl font-semibold">Luxury</h3>
              <span className="text-2xl font-extrabold text-blue-600">20€</span>
            </div>
            <p className="text-sm text-gray-500">al mese per condòmino</p>

            <ul className="mt-4 space-y-2 text-gray-700 text-sm">
              <li>• Tutto del Premium</li>
              <li>• Consulenza bollette inclusa</li>
              <li>• Codici promo per servizi: YouTube, Netflix, Internet</li>
              <li>• Reportistica avanzata e storico illimitato</li>
            </ul>
          </article>
        </div>

        {/* Note legali e privacy */}
        <div className="mt-8 rounded-xl bg-gray-50 border p-4 text-sm text-gray-600">
          <p>
            <strong>Note:</strong> prezzi IVA esclusa. I dati dei condòmini sono trattati nel rispetto
            della normativa privacy. Le integrazioni con fornitori esterni e i canali promo possono
            richiedere accordi separati.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-10 flex flex-col md:flex-row items-center gap-4">
          <Link
            to="/contatti"
            className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-700 transition"
          >
            Richiedi demo condominio
          </Link>
          <p className="text-sm text-gray-500">
            Attivazione rapida, caricamento documenti iniziali incluso.
          </p>
        </div>
      </section>
    </div>
  );
}
