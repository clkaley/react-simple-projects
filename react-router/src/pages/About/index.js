import React from 'react'
import { Link } from 'react-router-dom'
import '../About/index.css'
function About() {
  return (
    <div>
      <Link className='btn' to="/">Go Back</Link>
      <h3>About</h3>
    </div>
  )
}

export default About