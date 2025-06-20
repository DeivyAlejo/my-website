import React from 'react'
import { Link } from 'react-router-dom'

const ProjectCard = ({ title, description, tech, link }) => {
  return (
    <div className=" text-black rounded-xl shadow-sm p-6 transform transition-transform duration-300 hover:scale-102 flex flex-col h-full">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-800 text-sm mb-4">{description}</p>
      <p className="text-xs text-gray-900 mb-4 italic">{tech}</p>
      {link && (
        <Link
          to={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-sm font-bold text-blue-1200 hover:underline mt-auto"
        >
          View Project →
        </Link>
      )}
    </div>
  )
}

export default ProjectCard
