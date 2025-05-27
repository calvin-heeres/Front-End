import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import projectsData from '../data/projects.json';
import HeroSection from '../components/HeroSection';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectsData[parseInt(id)];

  if (!project) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-2xl font-bold text-red-600">Project niet gevonden</h1>
        <button
          onClick={() => navigate('/projecten')}
          className="mt-4 text-red-600 hover:underline"
        >
          Terug naar projecten
        </button>
      </div>
    );
  }

  return (
    <div>
      <HeroSection title={project.title} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Project Image */}
          <div>
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-[500px] object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Project Details */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-2">Project Details</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-700">Categorie</h3>
                  <p className="text-gray-600">{project.categorie}</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-700">Looptijd</h3>
                  <p className="text-gray-600">{project.looptijd}</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-700">Status</h3>
                  <p className="text-gray-600">{project.status}</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-2">Beschrijving</h2>
              <p className="text-gray-600">{project.description}</p>
            </div>

            <button
              onClick={() => navigate('/projecten')}
              className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition-colors"
            >
              Terug naar projecten
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail; 