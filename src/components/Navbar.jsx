import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='navbar-brand'>
                <Link to= "/"> Movie App </Link>
            </div>
        </nav>
    )
}

export default Navbar
