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
