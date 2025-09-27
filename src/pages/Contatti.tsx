export default function Contatti() {
    return (
      <div className="p-10 max-w-3xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-6">Contattaci</h1>
        <p className="text-gray-700">
          Scrivi a <a href="mailto:info@webonday.it" className="text-blue-600">info@webonday.it</a>
        </p>
        <p className="mt-2 text-gray-700">
          Oppure chiama:{" "}
          <a href="tel:+393801888965" className="text-blue-600">
            +39 380 1888965
          </a>
        </p>
      </div>
    );
  }
  