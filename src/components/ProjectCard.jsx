import React from "react";
import { Link } from 'react-router-dom';

const ProjectCard = ({ title, imageUrl, description, index }) => (
  <div className="bg-white p-6 rounded-md shadow">
    {/* Project Image */}
    <img
      src={imageUrl}
      alt={title}
      className="w-full h-40 object-cover mb-4 rounded-md"
    />
    <h3 className="text-xl font-semibold mb-2">
      {title}
    </h3>
    <p className="text-gray-700 mb-4">
      {description}
    </p>
    <Link to={`/projecten/${index}`} className="text-red-600 hover:underline">
      Meer informatie
    </Link>
  </div>
);

export default ProjectCard; 