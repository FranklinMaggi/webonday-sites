export default function ChiSiamo() {
  const steps = [
    {
      title: "Analisi iniziale",
      desc: "Studiamo la tua attività, individuiamo i punti di forza e le aree di miglioramento.",
      icon: "🔍",
    },
    {
      title: "Strategia on the job",
      desc: "Siamo presenti in azienda per osservare i processi e capire dove intervenire.",
      icon: "📋",
    },
    {
      title: "Organizzazione del personale",
      desc: "Supportiamo titolari e collaboratori con coaching motivazionale e formazione pratica.",
      icon: "👥",
    },
    {
      title: "Innovazione digitale",
      desc: "Ti forniamo strumenti concreti: dal sito web aziendale alle web app per la gestione.",
      icon: "💻",
    },
    {
      title: "Crescita continua",
      desc: "Non un progetto una tantum, ma un percorso evolutivo con aggiornamenti costanti.",
      icon: "🚀",
    },
  ];

  return (
    <div className="py-20 px-6 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-10 text-blue-600">Chi Siamo</h1>
      <p className="text-center text-lg text-gray-700 mb-16">
        WebOnDay nasce per trasformare le idee in realtà digitali e concrete, 
        unendo consulenza, creatività e tecnologia. Il nostro metodo è una roadmap chiara e pratica:
      </p>

      <div className="relative border-l-4 border-blue-600 pl-8 space-y-12">
        {steps.map((step, i) => (
          <div key={i} className="relative">
            {/* Punto sulla timeline */}
            <div className="absolute -left-5 top-1 w-8 h-8 flex items-center justify-center bg-blue-600 text-white rounded-full font-bold">
              {i + 1}
            </div>
            <h2 className="text-2xl font-semibold flex items-center gap-2">
              <span>{step.icon}</span> {step.title}
            </h2>
            <p className="text-gray-600 mt-2">{step.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h3 className="text-2xl font-bold mb-4">Il nostro obiettivo</h3>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Offrire consulenze mirate e soluzioni digitali immediate per far crescere la tua attività, 
          con trasparenza, innovazione e passione.
        </p>
      </div>
    </div>
  );
}
