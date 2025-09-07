import React from 'react'
import ProjectCard from '../components/ProjectCard'
import profileData from '../profileData.json'

const Projects = () => {
  return (
    <div className="pt-20 min-h-screen text-black px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mt-4 mb-6 text-center">My Projects</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {profileData.projects.map((proj, index) => (
            <ProjectCard
              key={index}
              title={proj.title}
              description={proj.description}
              tech={proj.tech}
              github={proj.github}
              demoPage={proj.demoPage}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
