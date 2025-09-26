// src/pages/ConsulenzaHoreca.tsx
export default function HorecaConsulting() {
    return (
      <div className="max-w-4xl mx-auto py-12 px-6">
        <h1 className="text-3xl font-bold mb-6">Consulenza Horeca</h1>
        <p className="mb-6">Il nostro metodo: analisi, strategia, organizzazione e coaching.</p>
  
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 border rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Pacchetto Base</h2>
            <p>500€ • 30 ore onsite + 10 ore marketing</p>
            <p>Abbonamento: 50€/mese</p>
          </div>
          <div className="p-6 border rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Pacchetto Premium</h2>
            <p>1500€ • Base + grafica menu, social ads</p>
            <p>Abbonamento: 40€/mese</p>
          </div>
          <div className="p-6 border rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Pacchetto Luxury</h2>
            <p>3500€ • Premium + WebApp per ordini e magazzino</p>
            <p>1 mese sviluppo incluso</p>
          </div>
        </div>
      </div>
    )
  }
  