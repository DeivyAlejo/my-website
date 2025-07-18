import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = ({ handleClick }) => {

    const buttonClasses = 'font-semibold text-lg px-4 py-1 border border-white hover:border-black rounded-full transition duration-300'
    return (
        <>
            <NavLink to="/my-website/education" className={({ isActive }) =>
                `${buttonClasses} ${isActive ? 'bg-black text-gray-100' : ''}`} onClick={handleClick}>Education</NavLink>
            <NavLink to="/my-website/experience" className={({ isActive }) =>
                `${buttonClasses} ${isActive ? 'bg-black text-gray-100' : ''}`} onClick={handleClick}>Experience</NavLink>
                <NavLink to="/my-website/projects" className={({ isActive }) =>
                `${buttonClasses} ${isActive ? 'bg-black text-gray-100' : ''}`} onClick={handleClick}>Projects</NavLink>
            <NavLink to="/my-website/contact" className={({ isActive }) =>
                `${buttonClasses} ${isActive ? 'bg-black text-gray-100' : ''}`} onClick={handleClick}>Contact</NavLink>
        </>
    )
}

export default Nav