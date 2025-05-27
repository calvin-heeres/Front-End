import React from "react";
import HeroSection from "../components/HeroSection";
import TeamMemberCard from "../components/TeamMemberCard";

// Import images
import jurjenMellemaImg from "../data/img/jurjen_mellema_1_foto_marjolijn_pokorny.jpg";
import annekeDeZwartImg from "../data/img/anneke_de_zwart_04_def_foto_edwin_van_eis_2.jpg";
import carolineHusztiImg from "../data/img/caroline_huszti_foto_alphons_nieuwenhuis.jpg";
import marianneVolkersImg from "../data/img/marianne_volkers_08_foto_edwin_van_eis.jpg";
import davidBrandwachtImg from "../data/img/david_brandwacht_def_foto_edwin_van_eis-gecomprimeerd.jpg";
import carolineVRhijnImg from "../data/img/caroline_v_rhijn_def-web_foto_edwin_van_eis.jpg";
import hesterOmbreImg from "../data/img/hester_ombre_2_foto_marjolijn_pokorny.jpg";
import sjaakHuijsmanImg from "../data/img/pmbweb_sjaak_huijsman_def_marjolijn_pokorny-gecomprimeerd.jpg";

const MensenPage = () => (
  <main>
    <HeroSection
      title="Onze mensen"
      description="Maak kennis met het team van PMB Amsterdam. Onze professionals werken samen aan het realiseren van projecten die bijdragen aan een betere stad."
    />

    {/* Management Team (White Background) */}
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8">Management Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Management Team Members */}
          <TeamMemberCard name="Jurjen Mellema" title="Directeur" imageUrl={jurjenMellemaImg} />
          <TeamMemberCard name="Anneke de Zwart" title="Adjunct Directeur" imageUrl={annekeDeZwartImg} />
          <TeamMemberCard name="Caroline Huszti" title="Hoofd Financiën" imageUrl={carolineHusztiImg} />
        </div>
      </div>
    </section>

    {/* Project Managers (Grey Background) */}
    <section className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8">Project Managers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Project Managers */}
          <TeamMemberCard name="Marianne Volkers" title="Senior Project Manager" imageUrl={marianneVolkersImg} />
          <TeamMemberCard name="David Brandwacht" title="Project Manager" imageUrl={davidBrandwachtImg} />
          <TeamMemberCard name="Caroline v Rhijn" title="Project Manager" imageUrl={carolineVRhijnImg} />
        </div>
      </div>
    </section>

    {/* Adviseurs (White Background) */}
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8">Adviseurs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Adviseurs */}
          <TeamMemberCard name="Hester Ombre" title="Adviseur Duurzaamheid" imageUrl={hesterOmbreImg} />
          <TeamMemberCard name="Sjaak Huijsman" title="Adviseur Bouwmanagement" imageUrl={sjaakHuijsmanImg} />
          <TeamMemberCard name="Lotte van Dijk" title="Adviseur Vastgoed" />
        </div>
      </div>
    </section>
  </main>
);

export default MensenPage;
