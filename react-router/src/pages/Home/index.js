import React from 'react'
import { Link } from 'react-router-dom'
import "../Home/index.css"
function Home() {
  return (
    <div style={{textAlign:"center"}}>
      <div  className='home-link'>
      <Link className='btn' to="/about">About</Link>
      <Link className='btn' to="/product">Product</Link>
      </div>
      <h2>Home Page</h2>
   
    </div>
  )
}

export default Home