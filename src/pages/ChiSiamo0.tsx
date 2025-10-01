// src/pages/ChiSiamo.tsx
import founderImg from "../assets/founder.png"; // salva qui la foto del founder

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
    <div className="bg-gray-50">
      {/* HERO HEADER */}
      <div className="relative h-[75vh] flex items-center justify-center text-center overflow-hidden">
        <img
          src="/WebOnDayHeader.png"
          alt="WebOnDay Header"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <h1 className="relative z-10 text-5xl font-extrabold text-white drop-shadow-lg">
          Chi Siamo
        </h1>
      </div>

      <div className="py-20 px-6 max-w-6xl mx-auto space-y-20">
        {/* FOUNDER */}
        <section className="flex flex-col md:flex-row items-center gap-10 bg-white shadow-lg rounded-2xl p-8">
          <div className="flex-shrink-0">
            <img
              src={founderImg}
              alt="Francesco Maggi Founder WebOnDay"
              className="w-40 h-40 object-cover rounded-full shadow-md"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-blue-600 mb-2">
              Francesco Maggi
            </h2>
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              Founder & Visionary di WebOnDay
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Con un approccio pratico e innovativo, unisco creatività e
              tecnologia per accompagnare aziende e professionisti nella
              trasformazione digitale. Ho fondato WebOnDay per rendere la
              digitalizzazione accessibile, concreta e su misura: dallo sviluppo
              di siti web alle web app, fino a soluzioni integrate per marketing
              e gestione aziendale. La mia missione è trasformare idee in
              strumenti reali, capaci di migliorare processi e ampliare le
              opportunità di business.
            </p>
          </div>
        </section>

        {/* TIMELINE METODO */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-600">
            Il nostro metodo
          </h2>
          <div className="relative border-l-4 border-blue-600 pl-8 space-y-12">
            {steps.map((step, i) => (
              <div key={i} className="relative">
                <div className="absolute -left-5 top-1 w-8 h-8 flex items-center justify-center bg-blue-600 text-white rounded-full font-bold">
                  {i + 1}
                </div>
                <h3 className="text-2xl font-semibold flex items-center gap-2">
                  <span>{step.icon}</span> {step.title}
                </h3>
                <p className="text-gray-600 mt-2">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* OBIETTIVO */}
        <section className="text-center">
          <h3 className="text-2xl font-bold mb-4">Il nostro obiettivo</h3>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Offrire consulenze mirate e soluzioni digitali immediate per far
            crescere la tua attività, con trasparenza, innovazione e passione.
          </p>
        </section>
      </div>
    </div>
  );
}
