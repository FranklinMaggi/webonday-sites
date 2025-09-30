export default function DigitalMarketing() {
  return (
    <div className="max-w-6xl mx-auto py-16 px-6 space-y-12">
      <header className="text-center">
        <h1 className="text-4xl font-extrabold text-blue-600">Consulenze Digital Marketing</h1>
        <p className="mt-4 text-gray-700 text-lg">
          Roadmap, strategie SEO, campagne sponsorizzate, branding e know-how operativo.
        </p>
      </header>

      <div className="grid md:grid-cols-3 gap-8">
        <article className="p-6 border rounded-xl shadow bg-white">
          <h2 className="text-xl font-semibold">Base</h2>
          <p className="mt-2 text-gray-600">
            Sito web aziendale + consulenza SEO di base.  
            Supporto strategico iniziale.
          </p>
        </article>

        <article className="p-6 border rounded-xl shadow bg-white">
          <h2 className="text-xl font-semibold">Professional</h2>
          <p className="mt-2 text-gray-600">
            Campagne social + gestione contenuti.  
            Analisi mensile dei risultati.
          </p>
        </article>

        <article className="p-6 border rounded-xl shadow bg-white">
          <h2 className="text-xl font-semibold">Premium</h2>
          <p className="mt-2 text-gray-600">
            Tutto incluso: SEO avanzata, campagne ADS, branding, strategia di lungo periodo.
          </p>
        </article>
      </div>
    </div>
  );
}
