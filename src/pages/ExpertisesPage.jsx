import React from "react";
import HeroSection from "../components/HeroSection";

const ExpertisesPage = () => (
  <>
    <main>
      <HeroSection
        title="Onze Expertises"
        description="Met meer dan 500 medewerkers verzorgen wij het projectmanagement van complexe multidisciplinaire en integrale projecten in het sociale, fysieke en economische domein. Dat doen wij in opdracht van en samen met andere afdelingen, stadsdelen, wijken en buurten van de gemeente Amsterdam, andere gemeenten en de regio."
      />
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Team Wibaut
              </h3>
              <p className="text-gray-600 mb-4">
                Multidisciplinaire projecten, programma's en vraagstukken in het ruimtelijk en sociale domein en bedrijfsvoering vragen om ervaring en kennis op het hoogste niveau. Vanuit het Projectmanagementbureau biedt team Wibaut topadviseurs die op interim-basis de functie van manager, regisseur en project- of programmadirecteur vervullen.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Project- & Programmamanagement
              </h3>
              <p className="text-gray-600 mb-4">
                Onze projectmanagers maken heldere en haalbare afspraken en sturen op het resultaat dat u wilt bereiken. Zij houden de beheersaspecten op orde (financiën, organisatie, planning, informatie en communicatie) en betrekken de juiste belanghebbenden bij het project.
              </p>
              <p className="text-gray-600">
                Voor veranderopgaves, strategiewijzigingen of complexe beleidsopgaves helpen onze programmanagers u doelgericht bij de realisatie of uitvoering daarvan.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Proces- & Bouwmanagement
              </h3>
              <p className="text-gray-600 mb-4">
                Onze procesmanagers organiseren en begeleiden de interactie tussen organisaties/partijen voor een goede samenwerking. Van de analyse tot en met de evaluatie en altijd onafhankelijk.
              </p>
              <p className="text-gray-600">
                Voor (her)huisvesting, kantoren, scholen en sportcomplexen kennen onze bouwmanagers de specifieke Amsterdamse situatie en regels. Zij begeleiden het gehele proces van voorbereiding tot uitvoering.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Vastgoed & Planning
              </h3>
              <p className="text-gray-600 mb-4">
                Onze maatschappelijk vastgoed adviseurs ontwikkelen voorzieningenprogramma's voor transformatie- en stedelijke vernieuwingsgebieden, programma's van eisen voor maatschappelijke voorzieningen en beheer- en exploitatieplannen.
              </p>
              <p className="text-gray-600">
                De planningsadviseurs bieden altijd een helder en gestructureerd overzicht van uw project, van 'quick-scan' tot gedetailleerde variantenstudies.
              </p>
            </div>
          </div>

          <div className="mt-12 bg-gray-50 p-8 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Meer informatie over inhuur
            </h3>
            <p className="text-gray-600">
              Voor meer informatie over het inhuren van onze projectmanagers, bouwmanagers, planningsadviseurs of topadviseurs van de Wibautgroep kunt u contact opnemen met onze afdeling Matching & Accountmanagement, via:{" "}
              <a href="mailto:mg_pmb.matchingenaccountmanagement@amsterdam.nl" className="text-red-600 hover:text-red-800">
                mg_pmb.matchingenaccountmanagement@amsterdam.nl
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  </>
);

export default ExpertisesPage;
