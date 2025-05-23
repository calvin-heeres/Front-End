import React from "react";
import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import projectsData from "../data/projects.json";

const ProjectsSection = () => (
  <section className="bg-gray-100 py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold mb-8">Recente projecten</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {projectsData.slice(0, 3).map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            imageUrl={project.imageUrl}
            description={project.description}
            linkHref={project.linkHref}
            linkText={project.linkText}
          />
        ))}
      </div>
      <div className="text-center">
        <Link to="/projecten" className="inline-block bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700">
          Alle projecten bekijken
        </Link>
      </div>
    </div>
  </section>
);

export default ProjectsSection;
