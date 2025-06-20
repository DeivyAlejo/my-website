import React from 'react'
import ExperienceCard from '../components/ExperienceCard'

const experienceData = [
  {
    jobTitle: 'Failure Analisys Technitian',
    company: 'Evertz',
    dates: 'Jan 2024 to present',
    skills: 'ESP32, DHT11, MQTT, OLED, Arduino',
    description: 'Reads temperature and humidity using DHT11, displays data on OLED, and publishes via MQTT.',
  },
  {
    jobTitle: 'Software Developer',
    company: 'Evertz',
    dates: 'Jan 2024 to present',
    skills: 'ESP32, DHT11, MQTT, OLED, Arduino',
    description: 'Reads temperature and humidity using DHT11, displays data on OLED, and publishes via MQTT.',
  }
]

const Experience = () => {
  return (
    <div className="pt-20 min-h-screen text-black px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center">My Experience</h2>
        <div className="flex flex-col space-y-6">
          {experienceData.map((exp, index) => (
            <ExperienceCard
              key={index}
              jobTitle={exp.jobTitle}
              company={exp.company}  
              dates={exp.dates}
              skills={exp.skills}
              description={exp.description}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Experience