import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import '../SharedLayout/index.css'
function SharedLayout() {
  return (
      <div className='shared-link'>
      <Navbar/>
      <Outlet/>
      </div>
  )
}

export default SharedLayout