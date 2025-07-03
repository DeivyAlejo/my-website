import React from 'react'
import ProjectCard from '../components/ProjectCard'

const projectData = [
  {
    title: 'ESP32 Temperature Logger',
    description: 'Reads temperature and humidity using DHT11, displays data on OLED, and publishes via MQTT.',
    tech: 'ESP32, DHT11, MQTT, OLED, Arduino',
    link: 'https://github.com/yourusername/esp32-logger'
  },
  {
    title: 'Motor Control with PWM',
    description: 'Controls DC motor speed and direction using PWM and H-bridge driver.',
    tech: 'STM32, C, PWM, Motor Driver, FreeRTOS',
    link: 'https://github.com/yourusername/esp32-logger'
  },
  {
    title: 'Custom PCB Signal Generator',
    description: 'Twin-T oscillator circuit designed in KiCad and prototyped to generate a 22kHz signal.',
    tech: 'KiCad, Op-Amps, Oscillator Design, Analog Electronics',
    link: 'https://github.com/yourusername/esp32-logger'
  },
  {
    title: 'ESP32 Temperature Logger',
    description: 'Reads temperature and humidity using DHT11, displays data on OLED, and publishes via MQTT.',
    tech: 'ESP32, DHT11, MQTT, OLED, Arduino',
    link: 'https://github.com/yourusername/esp32-logger'
  },
  {
    title: 'Motor Control with PWM',
    description: 'Controls DC motor speed and direction using PWM and H-bridge driver.',
    tech: 'STM32, C, PWM, Motor Driver, FreeRTOS',
    link: 'https://github.com/yourusername/esp32-logger'
  },
  {
    title: 'Custom PCB Signal Generator',
    description: 'Twin-T oscillator circuit designed in KiCad and prototyped to generate a 22kHz signal.',
    tech: 'KiCad, Op-Amps, Oscillator Design, Analog Electronics',
    link: 'https://github.com/yourusername/esp32-logger'
  }
]

const Projects = () => {
  return (
    <div className="pt-20 min-h-screen text-black px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mt-4 mb-6 text-center">My Projects</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projectData.map((proj, index) => (
            <ProjectCard
              key={index}
              title={proj.title}
              description={proj.description}
              tech={proj.tech}
              link={proj.link}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
