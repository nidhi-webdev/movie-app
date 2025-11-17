import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 shadow-lg sticky top-0 z-50'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex justify-between items-center h-16'>
                    <div className='flex-shrink-0'>
                        <Link 
                            to="/" 
                            className='text-2xl font-bold text-white hover:text-yellow-400 transition-colors duration-300 flex items-center'
                        > 
                            <span className='mr-2 text-3xl'>🎬</span>
                            Movie App 
                        </Link>
                    </div>
                    <div className='flex space-x-8'>
                        <Link 
                            to="/" 
                            className='text-white hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 hover:bg-white/10'
                        > 
                            Home 
                        </Link>
                        <Link 
                            to="/fav" 
                            className='text-white hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 hover:bg-white/10 flex items-center'
                        > 
                            <span className='mr-1'>❤️</span>
                            Favorites 
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
