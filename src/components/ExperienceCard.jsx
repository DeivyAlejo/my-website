import React from 'react'
import { useState } from 'react';

const ExperienceCard = ({ jobTitle, company, dates, skills, description }) => {
    const [showDescription, setShowDescription] = useState(false);
    return (
        <div className=" text-black rounded-xl shadow-sm p-6 transform transition-transform duration-300 hover:scale-101 cursor-pointer"
            onClick={() => setShowDescription(!showDescription)}
        >
            <div className='flex flex-row justify-between items-center mb-2'>
                <h3 className="text-xl font-semibold">{jobTitle}</h3>
                <p className="text-xs text-gray-900 italic">{dates}</p>
            </div>
            <p className="text-gray-800 text-sm mb-4">{company}</p>

            <p className="text-xs text-gray-900 mb-4 italic">{skills}</p>
            {showDescription && (
                <p className="text-xs text-gray-900 italic mb-2">{description}</p>
            )}

            <p className="text-sm font-bold text-blue-1200 underline">
                {showDescription ? 'Hide responsibilities' : 'See responsibilities'}
            </p>
        </div>
    )
}

export default ExperienceCard