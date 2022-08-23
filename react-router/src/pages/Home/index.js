import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import "../Home/index.css"
function Home() {
  return (
    <div style={{textAlign:"center"}}>
      <Navbar/>
      <Outlet/>
    
    </div>
  )
}

export default Home

{/* <div  className='home-link'>
<Link className='btn' to="/about">About</Link>
<Link className='btn' to="/product">Product</Link>
</div> */}