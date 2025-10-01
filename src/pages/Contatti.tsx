import HeaderSection from "../components/HeaderSection";

export default function Contatti() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* HEADER LUMINESCENTE */}
      <HeaderSection 
        title="Contattaci" 
        subtitle="Siamo a tua disposizione per qualsiasi informazione" 
      />

      {/* CONTENUTO */}
      <div className="p-10 max-w-3xl mx-auto text-center relative z-10">
        <h2 className="text-2xl font-semibold text-blue-700 mb-6">
          Parla con noi
        </h2>
        <p className="text-gray-700">
          Scrivi a{" "}
          <a href="mailto:info@webonday.it" className="text-blue-600 hover:underline">
            info@webonday.it
          </a>
        </p>
        <p className="mt-2 text-gray-700">
          Oppure chiamaci al{" "}
          <a href="tel:+393801888965" className="text-blue-600 hover:underline">
            +39 380 1888965
          </a>
        </p>

        {/* CTA con bottone */}
        <div className="mt-6">
          <a 
            href="mailto:info@webonday.it" 
            className="btn-primary"
          >
            Invia Email
          </a>
        </div>
      </div>
    </div>
  );
}
