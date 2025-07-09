import React, { useState } from 'react'
import Nav from './Nav'
import { X, Menu } from 'lucide-react'
import { Link } from 'react-router-dom'


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const closeMenu = () => setIsOpen(false)

    return (
        <nav className='bg-white top-0 z-50 fixed w-full shadow-sm'>
            <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex items-center justify-between h-16'>
                    <div className='flex flex-row w-full justify-between'>
                        <Link to="/" className='text-3xl font-semibold text-gray-900'>
                            Deivy Munoz
                        </Link>
                        <div className='hidden md:block'>
                            <div className='flex ml-10 items-baseline space-x-4'> <Nav /></div>
                        </div>
                    </div>
                    <div className='md:hidden'>
                        <button 
                        onClick={() => { setIsOpen(!isOpen) }} 
                        className='fill-gray-100'
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>

                </div>

            </div>
            {
                isOpen && (
                    <div className='flex flex-col gap-y-2 md:hidden px-4 sm:px-6 pb-2 text-center justify-center transition-all duration-300'>
                        <Nav handleClick={closeMenu} />
                    </div>
                )
            }
        </nav>
    )
}

export default Navbar

// import React, { useState } from 'react'
// import { NavLink } from 'react-router-dom'
// import { Menu, X } from 'lucide-react'

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false)

//   const navLinks = [
//     { name: 'About', path: '/about' },
//     { name: 'Experience', path: '/experience' },
//     { name: 'Projects', path: '/projects' },
//     { name: 'Contact', path: '/contact' },
//   ]

//   const handleNavClick = () => setMenuOpen(false)

//   return (
//     <header className="w-full fixed top-0 z-50 bg-white shadow-sm">
//       <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 md:px-10 py-4">
        
//         {/* Logo / Name */}
//         <h1 className="text-2xl font-semibold text-gray-900">John Doe</h1>

//         {/* Desktop Nav */}
//         <ul className="hidden md:flex items-center space-x-8 text-gray-800 font-medium">
//           {navLinks.map(({ name, path }) => (
//             <li key={name}>
//               <NavLink
//                 to={path}
//                 className={({ isActive }) =>
//                   `hover:text-gray-600 transition ${
//                     isActive ? 'text-black font-semibold' : ''
//                   }`
//                 }
//               >
//                 {name}
//               </NavLink>
//             </li>
//           ))}
//         </ul>

//         {/* Mobile Hamburger */}
//         <div className="md:hidden">
//           <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-700">
//             {menuOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>
//       </nav>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-4 text-gray-800 font-medium">
//           {navLinks.map(({ name, path }) => (
//             <NavLink
//               key={name}
//               to={path}
//               onClick={handleNavClick}
//               className={({ isActive }) =>
//                 `block hover:text-gray-600 transition ${
//                   isActive ? 'text-black font-semibold' : ''
//                 }`
//               }
//             >
//               {name}
//             </NavLink>
//           ))}
//         </div>
//       )}
//     </header>
//   )
// }

// export default Navbar
