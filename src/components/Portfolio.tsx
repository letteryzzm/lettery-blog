import React, { useState } from 'react';
import { X } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A fully-featured online store built with React and Node.js',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A productivity app with real-time collaboration features',
    image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80',
  },
  {
    id: 3,
    title: 'AI-powered Chatbot',
    description: 'An intelligent chatbot for customer support',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1206&q=80',
  },
  // Add more projects as needed
];

const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <div id="portfolio" className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Portfolio</h2>
          <p className="mt-4 text-xl text-gray-500">Check out some of my recent projects</p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition duration-300 hover:scale-105"
              onClick={() => setSelectedProject(project)}
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
                <p className="mt-2 text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full">
            <div className="relative">
              <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-64 object-cover rounded-t-lg" />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-2 right-2 bg-white rounded-full p-1"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-900">{selectedProject.title}</h3>
              <p className="mt-4 text-gray-600">{selectedProject.description}</p>
              <div className="mt-6 flex justify-end">
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-300">
                  View Project
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;