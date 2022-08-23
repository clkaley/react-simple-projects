import React from 'react'
import { Link } from 'react-router-dom'
import '../Product/index.css'
function Product() {
  return (
    <div>
      <Link className='btn' to="/">Go Back</Link>
      <h3>Product</h3>
    </div>
  )
}

export default Product