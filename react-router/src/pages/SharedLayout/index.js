import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import StyledNavbar from '../../components/StyledNavbar'
import '../SharedLayout/index.css'

function SharedLayout() {
  return (
      <div className='shared-link'>
      {/* <Navbar/> */}
      <StyledNavbar/>
      <Outlet/>

      </div>
  )
}

export default SharedLayout