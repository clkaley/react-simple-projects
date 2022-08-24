import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

function StyledNavbar() {
  return (
    <div>
        <nav className='navbar'>
            <Link  to="/"
            >Home</Link>
            <Link className='btn' to="/about">About</Link>
            <Link className='btn' to="/product">Product</Link>
        </nav>
    </div>
  )
}

export default StyledNavbar