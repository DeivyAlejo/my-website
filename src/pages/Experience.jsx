import React from 'react'
import ExperienceCard from '../components/ExperienceCard'

import profileData from '../profileData.json'

const Experience = () => {
  return (
    <div className="pt-20 min-h-screen text-black px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mt-4 mb-6 text-center">My Experience</h2>
        <div className="flex flex-col space-y-6">
          {profileData.experience.map((exp, index) => (
            <ExperienceCard
              key={index}
              jobTitle={exp.jobTitle}
              company={exp.company}  
              dates={exp.dates}
              location={exp.location}
              skills={exp.skills}
              responsibilities={exp.responsibilities}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Experience