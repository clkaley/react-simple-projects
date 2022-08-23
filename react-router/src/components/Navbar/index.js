import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div>
        <nav className='navbar'>
            <Link className='btn' to="/">Home</Link>
            <Link className='btn' to="/about">About</Link>
            <Link className='btn' to="/product">Product</Link>
        </nav>
    </div>
  )
}

export default Navbar