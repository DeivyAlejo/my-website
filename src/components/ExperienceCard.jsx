import React from 'react'
import { useState } from 'react';

const ExperienceCard = ({ jobTitle, company, dates, skills, responsibilities }) => {
    const [showDescription, setShowDescription] = useState(false);
    return (
        <div className=" text-black rounded-xl shadow-sm p-4 transform transition-transform duration-300 hover:shadow-md cursor-pointer"
            onClick={() => setShowDescription(!showDescription)}
        >
            <div className='flex flex-row justify-between items-center mb-2'>
                <h3 className="text-xl font-semibold">{jobTitle}</h3>
                <p className="text-sm text-gray-900 italic">{dates}</p>
            </div>
            <div className='text-sm text-gray-900 flex flex-row space-x-1 mb-2'>
                <p className='font-bold'>Company:</p>
                <p className="text-gray-800 text-sm">{company}</p>
            </div>

            <div className='text-sm text-gray-900 flex flex-row space-x-1 mb-2'>
                <p className='font-bold'>Skills:</p>
                <p className="italic">{skills}</p>
            </div>

            {showDescription && (
                <ul className="list-disc pl-6 text-xs text-gray-900 italic mb-2 space-y-1">
          {responsibilities.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
            )}

            <p className="text-sm font-bold text-blue-1200 underline">
                {showDescription ? 'Hide responsibilities' : 'See responsibilities'}
            </p>
        </div>
    )
}

export default ExperienceCard