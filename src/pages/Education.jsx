import React from 'react'

const educationData = [
  {
    jobTitle: 'Failure Analisys Technitian',
    company: 'Evertz',
    dates: 'Jan 2024 to present',
    skills: 'ESP32, DHT11, MQTT, OLED, Arduino',
    responsibilities: ['Reads temperature and humidity using DHT11, displays data on OLED, and publishes via MQTT.', 'Send data to multiple parts of the project'],
  },
  {
    jobTitle: 'Software Developer',
    company: 'Evertz',
    dates: 'Jan 2024 to present',
    skills: 'ESP32, DHT11, MQTT, OLED, Arduino',
    responsibilities: ['Reads temperature and humidity using DHT11, displays data on OLED, and publishes via MQTT.', 'Send data to multiple parts of the project'],
  }
]

function Education() {
  return (
    <div className="pt-20 min-h-screen text-black px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mt-4 mb-6 text-center">My Education</h2>
        <div className="flex flex-col space-y-6">
        </div>
      </div>
    </div>
  )
}

export default Education