import React from "react";
import { Link } from 'react-router-dom';

const ProjectCard = ({ title, imagePlaceholder, description, linkHref, linkText }) => (
  <div className="bg-white p-6 rounded-md shadow">
    {/* Image placeholder */}
    <div className={`w-full h-40 ${imagePlaceholder} mb-4`}></div>
    <h3 className="text-xl font-semibold mb-2">
      {title}
    </h3>
    <p className="text-gray-700 mb-4">
      {description}
    </p>
    <a href={linkHref} className="text-red-600 hover:underline">
      {linkText}
    </a>
  </div>
);

export default ProjectCard; 