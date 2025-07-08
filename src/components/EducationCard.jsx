import React from 'react'

function EducationCard({ degree, institution, dates,location, programFocus }) {
  return (
        <div className=" text-black rounded-xl shadow-sm p-4 transform transition-transform duration-300 hover:shadow-md"
        >
            <div className='flex flex-row justify-between items-center mb-2'>
                <h3 className="text-2xl font-semibold">{degree}</h3>
                <p className="text-m text-gray-900 italic">{dates}</p>
            </div>
            <div className=' flex flex-row justify-between mb-2'>
                <p className="text-xl text-gray-800 italic">{institution}</p>
                <p className='text-m text-gray-900 italic'>{location}</p>
            </div>

            {/* <div className='text-m text-gray-900 flex flex-row space-x-1 mb-2'>
                <p className='font-bold'>Program Focus:</p>
                <p className="italic">{programFocus}</p>
            </div> */}

            
        </div>
    )

}

export default EducationCard