import React from 'react'
import { NavLink } from 'react-router-dom'
import './index.css'

function StyledNavbar() {
  return (
    <div>
        <nav className='navbar'>
            <NavLink  to="/"
            >Home</NavLink>
            <NavLink className='btn' to="/about">About</NavLink>
            <NavLink className='btn' to="/product">Product</NavLink>
        </nav>
    </div>
  )
}

export default StyledNavbar