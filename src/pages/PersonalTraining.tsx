export default function PersonalTraining() {
    return (
      <div className="max-w-6xl mx-auto py-16 px-6 space-y-12">
        <header className="text-center">
          <h1 className="text-4xl font-extrabold text-emerald-600">Personal Training</h1>
          <p className="mt-4 text-gray-700 text-lg">
            Pacchetti digitali e organizzativi per palestre e personal trainer.
          </p>
        </header>
  
        <div className="grid md:grid-cols-3 gap-8">
          <article className="p-6 border rounded-xl shadow bg-white">
            <h2 className="text-xl font-semibold">Base</h2>
            <p className="mt-2 text-gray-600">
              Sito web vetrina + consulenza di immagine.  
              Presenza minima online.
            </p>
          </article>
  
          <article className="p-6 border rounded-xl shadow bg-white">
            <h2 className="text-xl font-semibold">Professional</h2>
            <p className="mt-2 text-gray-600">
              Supporto operativo + strategia clienti.  
              Roadmap digitale + organizzazione lavoro.
            </p>
          </article>
  
          <article className="p-6 border rounded-xl shadow bg-white">
            <h2 className="text-xl font-semibold">Premium</h2>
            <p className="mt-2 text-gray-600">
              Tutto incluso + presenza onsite in palestra, gestione front desk, allineamento team.
            </p>
          </article>
        </div>
      </div>
    );
  }
  