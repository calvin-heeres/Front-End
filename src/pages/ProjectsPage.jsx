import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import projectsData from "../data/projects.json";
import Pagination from "../components/Pagination";

const ProjectsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 5; // As seen in the design

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projectsData.slice(indexOfFirstProject, indexOfLastProject);

  const totalPages = Math.ceil(projectsData.length / projectsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Scroll to the top of the project list when the page changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main>
      <HeroSection
        title="Opdrachten en Projecten"
        description="PMB Amsterdam realiseert diverse projecten in de openbare ruimte en maatschappelijk vastgoed. Hieronder vindt u een overzicht van onze lopende en afgeronde projecten."
      />
      <section className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 gap-10">
          {currentProjects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden"
            >
              {/* Project Image */}
              <div className="w-full md:w-1/3 flex-shrink-0">
                <img
                  src={project.imageUrl}
                  alt={`Image for ${project.title}`}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Project Details */}
              <div className="w-full md:w-2/3 p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
                    {project.title}
                  </h2>
                  <p className="text-gray-700 mb-4 text-sm md:text-base">
                    {project.description}
                  </p>

                  {/* Looptijd, Status, Categorie */}
                  <div className="text-gray-500 text-xs md:text-sm mb-4 flex flex-wrap gap-x-4 gap-y-1">
                    <p>Looptijd: {project.looptijd}</p>
                    <p>Status: {project.status}</p>
                    <p>Categorie: {project.categorie}</p>
                  </div>
                </div>

                <a
                  href={project.linkHref}
                  className="text-red-600 hover:underline text-sm md:text-base mt-2 inline-block font-semibold"
                >
                  {project.linkText}
                </a>
              </div>
            </div>
          ))}
        </div>
        {/* Pagination Component */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </section>
    </main>
  );
};

export default ProjectsPage;
