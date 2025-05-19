import React from "react";

const Homepage = () => (
  <main>
    {/* Header/Hero Section */}
    <section className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-4">
          Project Management Bureau Amsterdam
        </h1>
        <p className="text-lg mb-6">
          Het Project Management Bureau (PMB) is een professionele organisatie
          die projecten realiseert voor de gemeente Amsterdam. Wij zijn
          gespecialiseerd in het managen van complexe projecten in de openbare
          ruimte en maatschappelijk vastgoed.
        </p>
        <button className="bg-red-600 text-white px-6 py-3 rounded-md">
          Meer over ons
        </button>
      </div>
    </section>

    {/* Onze diensten Section */}
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8">Onze diensten</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service Item 1 */}
          <div className="flex items-start gap-4">
            {/* Red icon placeholder */}
            <div className="flex-shrink-0 w-8 h-8 bg-red-600 transform rotate-45 mt-1"></div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Projectmanagement</h3>
              <p className="text-gray-700">
                Wij begeleiden projecten van initiatief tot en met realisatie en
                nazorg. Onze projectmanagers zorgen voor een efficiënte en
                effectieve uitvoering.
              </p>
            </div>
          </div>
          {/* Service Item 2 */}
          <div className="flex items-start gap-4">
            {/* Red icon placeholder */}
            <div className="flex-shrink-0 w-8 h-8 bg-red-600 transform rotate-45 mt-1"></div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Advies en expertise</h3>
              <p className="text-gray-700">
                Onze adviseurs bieden specialistische kennis op het gebied van
                bouwmanagement, vastgoed, en duurzaamheid voor complexe projecten.
              </p>
            </div>
          </div>
          {/* Service Item 3 */}
          <div className="flex items-start gap-4">
            {/* Red icon placeholder */}
            <div className="flex-shrink-0 w-8 h-8 bg-red-600 transform rotate-45 mt-1"></div>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Maatschappelijk vastgoed
              </h3>
              <p className="text-gray-700">
                Wij ontwikkelen en realiseren maatschappelijk vastgoed zoals
                scholen, sportaccommodaties en culturele voorzieningen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Recente projecten Section */}
    <section className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8">Recente projecten</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Project Item 1 */}
          <div className="bg-white p-6 rounded-md shadow">
            {/* Image placeholder */}
            <div className="w-full h-40 bg-gray-200 mb-4"></div>
            <h3 className="text-xl font-semibold mb-2">
              Renovatie Stadsschouwburg
            </h3>
            <p className="text-gray-700 mb-4">
              Grootschalige renovatie van de Stadsschouwburg Amsterdam met
              behoud van historische elementen.
            </p>
            <a href="#" className="text-red-600 hover:underline">
              Meer informatie
            </a>
          </div>
          {/* Project Item 2 */}
          <div className="bg-white p-6 rounded-md shadow">
            {/* Image placeholder */}
            <div className="w-full h-40 bg-gray-200 mb-4"></div>
            <h3 className="text-xl font-semibold mb-2">
              Nieuwbouw Basisschool De Horizon
            </h3>
            <p className="text-gray-700 mb-4">
              Duurzame nieuwbouw van een basisschool in Amsterdam Noord met
              moderne faciliteiten.
            </p>
            <a href="#" className="text-red-600 hover:underline">
              Meer informatie
            </a>
          </div>
          {/* Project Item 3 */}
          <div className="bg-white p-6 rounded-md shadow">
            {/* Image placeholder */}
            <div className="w-full h-40 bg-gray-200 mb-4"></div>
            <h3 className="text-xl font-semibold mb-2">
              Herinrichting Oosterpark
            </h3>
            <p className="text-gray-700 mb-4">
              Herinrichting van het Oosterpark met focus op klimaatadaptatie en
              verbeterde recreatiemogelijkheden.
            </p>
            <a href="#" className="text-red-600 hover:underline">
              Meer informatie
            </a>
          </div>
        </div>
        <div className="text-center">
          <button className="bg-red-600 text-white px-6 py-3 rounded-md">
            Alle projecten bekijken
          </button>
        </div>
      </div>
    </section>
  </main>
);

export default Homepage;
