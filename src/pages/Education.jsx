import React from 'react'
import EducationCard from '../components/EducationCard'

const educationData = [
  {
    degree: 'Computer Systems: Software Support',
    institution: 'Mohawk College',
    dates: 'Sep 2021 to Dec 2024',
    location: 'Hamilton, ON',
    programFocus : '',
  },
  {
    degree: 'MsC Physics and Electronics',
    institution: 'Technological University of Pereira',
    dates: 'Feb 2015 to Dec 2017',
    location: 'Colombia',
    programFocus : '',
  },
  {
    degree: 'BsC Mechatronics Enginnering',
    institution: 'Technological University of Pereira',
    dates: 'Aug 2009 to Dec 2014',
    location: 'Colombia',
    programFocus : '',
  }
]

function Education() {
  return (
    <div className="pt-20 min-h-screen text-black px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mt-4 mb-6 text-center">My Education</h2>
        <div className="flex flex-col space-y-6">
          {educationData.map((exp, index) => (
            <EducationCard
              key={index}
              degree={exp.degree}
              institution={exp.institution}  
              dates={exp.dates}
              location={exp.location}
              programFocus={exp.programFocus}
            />))}
        </div>
      </div>
    </div>
  )
}

export default Education