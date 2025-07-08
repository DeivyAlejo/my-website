import React from 'react'
import { Link } from 'react-router-dom'

const ProjectCard = ({ title, description, tech, github, demoPage }) => {
  return (
    <div className=" text-black rounded-xl shadow-sm p-6 transform transition-transform duration-300 hover:shadow-md flex flex-col h-full">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-800 text-sm mb-4">{description}</p>
      <p className="text-xs text-gray-900 mb-4 italic">{tech}</p>
      <div className='flex flex-row justify-around items-center mt-auto text-sm font-bold'>
        <Link
          to={github}
          target="_blank"
          rel="noopener noreferrer"
          className=" text-white px-4 py-1 bg-black rounded-full"
        >
          Github
        </Link>
        <Link
        to={demoPage}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-1200 px-4 py-1 border border-black rounded-full"
          >
            Demo
        </Link>
      </div>
      
    </div>
  )
}

export default ProjectCard
