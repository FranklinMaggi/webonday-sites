// src/pages/ChiSiamo.tsx
import founderImg from "../assets/founder.png";

export default function ChiSiamo() {
  return (
    <div className="bg-gray-50">
      {/* HERO HEADER */}
      <div className="relative h-[75vh] flex items-center justify-center text-center overflow-hidden">
        <img
          src="/WebOnDayHeader.png"
          alt="WebOnDay Header"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
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
            <h2 className="text-2xl font-bold text-blue-600 mb-2">Chi sono</h2>
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              Francesco Maggi — Founder di WebOnDay
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Ho lavorato per molti anni nella <strong>ristorazione</strong>, un ambiente che mi ha
              insegnato concretezza, creatività e capacità di affrontare le sfide quotidiane.  
              Successivamente ho conseguito il diploma di <strong>tecnico alberghiero</strong>, 
              che mi ha permesso di perfezionare e consolidare le mie competenze e di ottenere 
              la qualifica per gestire attività in autonomia.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Parallelamente mi sono appassionato al <strong>fitness e al bodybuilding</strong>, 
              esperienze che mi hanno trasmesso disciplina, costanza e orientamento agli obiettivi.  
              Dopo un incidente che mi ha costretto a fermarmi, ho deciso di dedicarmi pienamente 
              a un’altra passione che avevo sin da ragazzo: l’informatica.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Dai primi esperimenti con <strong>HTML e Java</strong> sono arrivato a specializzarmi in 
              <strong> JavaScript, TypeScript, React e database</strong>.  
              Oggi WebOnDay è l’estensione diretta delle mie competenze: ciò che so fare io, 
              lo fa anche la mia azienda. Non offro servizi impersonali, ma soluzioni pratiche, 
              umane e tecniche, costruite su misura.
            </p>
          </div>
        </section>

        {/* OBIETTIVO */}
        <section className="text-center">
          <h3 className="text-2xl font-bold mb-4">Il mio obiettivo</h3>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Offrire consulenze mirate e soluzioni digitali immediate per far crescere la tua attività, 
            con trasparenza, innovazione e passione.  
            WebOnDay non è un’azienda impersonale: è il mio percorso, messo al servizio del tuo progetto.
          </p>
        </section>
      </div>
    </div>
  );
}
