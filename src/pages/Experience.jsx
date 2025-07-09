import React from 'react'
import ExperienceCard from '../components/ExperienceCard'

const experienceData = [
  {
    jobTitle: 'Failure Analisys Technician',
    company: 'Evertz Microsystems',
    dates: 'Jan. 2024 to Present',
    location: 'Burlington, ON',
    skills: 'Electronics, Failure Analysis, Oscillocope, Multimeter',
    responsibilities: ['Perfomed repairs and component level analysis of cutting edge broadcasting equipment.', 
                        'Oparated an calibrated test equipment to diagnose and reolve production related issues.',
                      'Performed failure analysis and root cause investigations on defects, primarily focusing on Linux based modules, to identify and implement effective corrective actions.'],
  },
  {
    jobTitle: 'Software Developer - Research Assistant',
    company: 'Mohawk College',
    dates: 'Feb. 2022 to Dec. 2023',
    location: 'Hamilton, ON',
    skills: 'C++, Python, OpenCV, Computer Vision, IP Camera',
    responsibilities: ['Developed a backend system using Python, C++, and OpenCV for comprehensive camera control, image processing, and video recording.', 
                        'Researched techniques to process the videos, using computer vision algorithms to extract and analyze insights from visual data.',
                        'Collaborated within a cross-functional team using agile methodology, ensuring continuous delivery and iterative improvement throughout the development lifecycle.',
                        'Conducted and facilitated daily stand-up meetings, planning sessions, backlog grooming sessions, and retrospectives as a routine part of my responsibilities.'],
  },{
    jobTitle: 'Professor - Research Assistant',
    company: 'Technological Universisty of Pereira',
    dates: 'Feb. 2015 to Aug. 2021',
    location: 'Colombia',
    skills: 'Teaching, CAD, Solidworks, Electronics, Image Processing, Matlab, Embedded Systems, 3D printing',
    responsibilities: ['Developed and delivered Mechatronics Engineering courses, including CAD (SolidWorks), Analog Electronics, and Digital Electronics.', 
                        'Created machine learning algorithms using MatLab libraries for different projects such as biometrics identification, altered images, and motion blur images.',
                        'Developed electro-mechanical system prototypes by integrating microcontrollers, sensors, motors, and various electronic components, utilizing SolidWorks for mechanical design, and employing 3D printing to create mechanical prototypes.'],
  }
]

const Experience = () => {
  return (
    <div className="pt-20 min-h-screen text-black px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mt-4 mb-6 text-center">My Experience</h2>
        <div className="flex flex-col space-y-6">
          {experienceData.map((exp, index) => (
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