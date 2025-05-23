import React from "react";
import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import ProjectsSection from "../components/ProjectsSection";

const Homepage = () => (
  <main>
    <HeroSection
      title="Project Management Bureau Amsterdam"
      description="Het Project Management Bureau (PMB) is een professionele organisatie die projecten realiseert voor de gemeente Amsterdam. Wij zijn gespecialiseerd in het managen van complexe projecten in de openbare ruimte en maatschappelijk vastgoed."
    />
    <ServicesSection />
    <ProjectsSection />
  </main>
);

export default Homepage;
