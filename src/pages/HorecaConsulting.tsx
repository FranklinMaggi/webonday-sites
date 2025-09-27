export default function HorecaConsulting() {
  return (
    <div className="max-w-5xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Consulenza Ho.Re.Ca.</h1>
      <p className="mb-10 text-gray-700 text-lg">
        Il nostro metodo: analisi, strategia, organizzazione e coaching. 
        Offriamo tre pacchetti pensati per le diverse esigenze del settore.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="p-6 border rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">Pacchetto Base</h2>
          <p className="text-gray-600">500€ • 30 ore onsite + 10 ore marketing</p>
          <p className="text-sm text-blue-600 mt-2">Abbonamento: 50€/mese</p>
        </div>

        <div className="p-6 border rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">Pacchetto Premium</h2>
          <p className="text-gray-600">1500€ • Base + grafica menu, social ads</p>
          <p className="text-sm text-blue-600 mt-2">Abbonamento: 40€/mese</p>
        </div>

        <div className="p-6 border rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">Pacchetto Luxury</h2>
          <p className="text-gray-600">3500€ • Premium + WebApp per ordini e magazzino</p>
          <p className="text-sm text-blue-600 mt-2">1 mese sviluppo incluso</p>
        </div>
      </div>
    </div>
  );
}
