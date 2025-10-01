// src/pages/Azienda.tsx
export default function Azienda() {
    const roadmap = [
      { text: "Creazione pagina web come biglietto da visita", status: "done" },
      { text: "Digitalizzare le prime 50 aziende partners e raccogliere risultati", status: "in-progress" },
      { text: "Piattaforma solida di pagamenti e sicura", status: "pending" },
      { text: "Decentralizzazione di Internet e NFT", status: "pending" },
      { text: "Creazione token personale con white paper", status: "pending" },
      { text: "Piattaforma di exchange per Crypto emergenti (collegamento, creazione di wallets crypto tramite API e Dapps)", status: "pending" },
      { text: "Digitalizzare le prossime 450 aziende e raggiungere 500 partners", status: "pending" },
      { text: "Lanciare sul mercato PalApps (piattaforma di gestione immobiliare) su scala globale", status: "pending" },
      { text: "Creare 2000 posti di lavoro", status: "pending" },
      { text: "Ultimo ma non ultimo: migliorare sempre", status: "pending" },
    ];
  
    const getStepIcon = (status: string, index: number) => {
      switch (status) {
        case "done":
          return (
            <div className="w-8 h-8 rounded-full bg-green-500 border-4 border-white shadow flex items-center justify-center text-white font-bold">
              ✔
            </div>
          );
        case "in-progress":
          return (
            <div className="w-8 h-8 rounded-full bg-yellow-400 border-4 border-white shadow flex items-center justify-center text-white font-bold">
              ⏳
            </div>
          );
        default:
          return (
            <div className="w-8 h-8 rounded-full bg-blue-600 border-4 border-white shadow flex items-center justify-center text-white font-bold">
              {index + 1}
            </div>
          );
      }
    };
  
    return (
      <div className="relative bg-gray-50 min-h-screen overflow-hidden">
        {/* SFONDO LUMINESCENTE */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-20 blur-3xl animate-pulse"></div>
  
        {/* HERO */}
        <div className="relative h-[60vh] flex items-center justify-center text-center overflow-hidden">
          <img
            src="/WebOnDayHeader.png"
            alt="Header Azienda"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <h1 className="relative z-10 text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg">
            La Nostra Azienda
          </h1>
        </div>
  
        {/* INTRO */}
        <div className="relative max-w-4xl mx-auto px-6 py-16 text-center">
          <h2 className="text-3xl font-bold text-blue-600 mb-6">Roadmap</h2>
          <p className="text-gray-700 text-lg">
            Ogni impresa nasce da un’idea, ma cresce con una visione chiara.
            Questa è la nostra roadmap, i passi che vogliamo percorrere insieme
            ai nostri partners e clienti per costruire un futuro digitale solido,
            etico e innovativo.
          </p>
        </div>
  
        {/* TIMELINE */}
        <div className="relative max-w-4xl mx-auto px-6 pb-20">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-200 h-full"></div>
          <ul className="space-y-12 relative z-10">
            {roadmap.map((step, i) => (
              <li
                key={i}
                className={`relative flex items-center ${
                  i % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                <div className="w-1/2"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2">
                  {getStepIcon(step.status, i)}
                </div>
                <div
                  className={`w-1/2 p-6 rounded-xl shadow bg-white ${
                    i % 2 === 0 ? "ml-8 text-left" : "mr-8 text-right"
                  }`}
                >
                  <h3 className="text-lg font-semibold text-blue-700">
                    Step {i + 1}
                  </h3>
                  <p className="text-gray-600 mt-2">{step.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
  