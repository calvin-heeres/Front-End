import React from "react";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-2">Project Management Bureau Amsterdam</h3>
          <p>Weesperstraat 430</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Navigatie</h3>
          <ul>
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Mensen</a></li>
            <li><a href="#" className="hover:underline">Expertise</a></li>
            <li><a href="#" className="hover:underline">Opdrachten en projecten</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Juridisch</h3>
          <ul>
            <li><a href="#" className="hover:underline">Privacy</a></li>
            <li><a href="#" className="hover:underline">Toegankelijkheid</a></li>
            <li><a href="#" className="hover:underline">Cookies</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} Gemeente Amsterdam. Alle rechten voorbehouden.</p>
      </div>
    </footer>
  );
};

export default Footer; 