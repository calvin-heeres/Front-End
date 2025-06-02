import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import projectsData from "../data/projects.json";
import Pagination from "../components/Pagination";
import ProjectCard from "../components/ProjectCard";
import { Link } from "react-router-dom";

const ProjectsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [viewMode, setViewMode] = useState("list"); // "list" or "card"
  const projectsPerPage = viewMode === "list" ? 5 : 6;

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
        {/* View Toggle */}
        <div className="flex justify-end mb-8">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button
              type="button"
              onClick={() => setViewMode("list")}
              className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
                viewMode === "list"
                  ? "bg-red-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              } border border-gray-200`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => setViewMode("card")}
              className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
                viewMode === "card"
                  ? "bg-red-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              } border border-gray-200`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </button>
          </div>
        </div>

        {viewMode === "list" ? (
          // List View
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
                    className="w-full h-full object-cover"
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

                  <Link
                    to={`/projecten/${indexOfFirstProject + index}`}
                    className="text-red-600 hover:underline text-sm md:text-base mt-2 inline-block font-semibold"
                  >
                    Meer informatie
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Card View
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentProjects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                imageUrl={project.imageUrl}
                description={project.description}
                index={indexOfFirstProject + index}
              />
            ))}
          </div>
        )}

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
