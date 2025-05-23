import React from "react";
import { Link } from 'react-router-dom';

const ServicesSection = () => (
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
);

export default ServicesSection; 