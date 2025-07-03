import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = ({ handleClick }) => {

    const buttonClasses = 'font-medium px-4 py-1 border border-white hover:border-black rounded-full transition duration-300'
    return (
        <>
            <NavLink to="/education" className={({ isActive }) =>
                `${buttonClasses} ${isActive ? 'bg-black text-gray-100' : ''}`} onClick={handleClick}>Education</NavLink>
            <NavLink to="/experience" className={({ isActive }) =>
                `${buttonClasses} ${isActive ? 'bg-black text-gray-100' : ''}`} onClick={handleClick}>Experience</NavLink>
                <NavLink to="/projects" className={({ isActive }) =>
                `${buttonClasses} ${isActive ? 'bg-black text-gray-100' : ''}`} onClick={handleClick}>Projects</NavLink>
            <NavLink to="/contact" className={({ isActive }) =>
                `${buttonClasses} ${isActive ? 'bg-black text-gray-100' : ''}`} onClick={handleClick}>Contact</NavLink>
        </>
    )
}

export default Nav