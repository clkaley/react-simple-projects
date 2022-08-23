import React from 'react'
import { Link } from 'react-router-dom'
function Error() {
  return (
    <div style={{textAlign:"center"}}>
        <h2>404</h2>
        <p>Page Not Found</p>
        <Link className='btn' to="/">Go Back</Link>
    </div>
  )
}

export default Error