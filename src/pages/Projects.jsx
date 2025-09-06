import React from 'react'
import ProjectCard from '../components/ProjectCard'

const projectData = [
  {
    title: 'Iris Biometrics Recognition',
    description: 'This research created a new iris image dataset using white light to improve recognition for Latin-American eyes. By adapting the EigenIris method and analyzing RGB channels, especially blue, the study achieved strong accuracy without infrared.',
    tech: 'Python, OpenCV, Biometrics Recognition, Image Processing',
    github: 'https://github.com/DeivyAlejo/iris-biometric-recognition',
    demoPage: 'https://revistas.utp.edu.co/index.php/revistaciencia/article/view/22861/16382'
  },
  {
    title: 'ESP32 Temperature Logger',
    description: 'Reads temperature and humidity using DHT11, displays data on OLED, and publishes via MQTT.',
    tech: 'ESP32, DHT11, MQTT, OLED, Arduino, I2C',
    github: 'https://github.com/DeivyAlejo/temp_sensor_esp32',
    demoPage: 'https://github.com/DeivyAlejo/temp_sensor_esp32'
  },
  {
    title: 'Word Search Solver',
    description: 'This Python project solves word search puzzles by finding the sequence of letters that form a target word in the correct direction from a grid',
    tech: 'Python, AWS, Lambda, API Gateway, Apmlify, Data Structures',
    github: 'https://github.com/DeivyAlejo/word_search_solver',
    demoPage: 'https://www.youtube.com/watch?v=PPkMyLJM1gI'
  },
  {
    title: 'Video Cropper',
    description: 'This script lets users select and crop a video region using mouse clicks, then saves the cropped output.',
    tech: 'OpenCV, Python, Tkinter',
    github: 'https://github.com/DeivyAlejo/Video-Cropper',
    demoPage: 'https://github.com/DeivyAlejo/Video-Cropper'
  },
  
]
const Projects = () => {
  return (
    <div className="pt-20 min-h-screen text-black px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mt-4 mb-6 text-center">My Projects</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projectData.map((proj, index) => (
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
