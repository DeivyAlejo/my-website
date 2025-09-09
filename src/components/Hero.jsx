import { Link } from 'react-router-dom'
import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-white to-gray-100">

      {/* Text */}
      <div className="text-center justify-center">
        <p className="text-gray-600 text-2xl mb-1">Hello, I'm</p>
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Deivy Munoz</h1>
        <h2 className="text-3xl text-gray-700 mb-6">Software Engineer</h2>

        {/* Buttons */}
        <div className="flex justify-center">
          <div className='px-2'>
            <Link
              to="https://drive.google.com/file/d/1izW4-hJN-2DGYEOY0bHYX0sXLcSL83uO/view?usp=sharing" target='_blank'
              className="border border-black px-4 py-2 rounded-full font-medium text-lg hover:bg-gray-100 transition"
            >
              Download CV
            </Link>
          </div>
          <div className='px-2'>
            <Link
            to='/contact'
              className="bg-black text-white px-4 py-2 rounded-full font-medium text-lg hover:opacity-90 transition"
            >
              Contact me
            </Link>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-4 mt-6 text-gray-700">
          <Link to="https://linkedin.com/in/deivymunoz" target="_blank">
            <FaLinkedin size={"30"} className='fill-black'/>
          </Link>
          <Link to="https://github.com/deivyalejo" target="_blank">
            <FaGithub size={"30"} className='fill-black'/>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero
