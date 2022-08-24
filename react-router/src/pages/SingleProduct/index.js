import React from 'react'
import { Link, useParams } from 'react-router-dom'
import './index.css'
function SingleProduct() {
   const {productID}=useParams();
  return (
    <>
    <div className='container'>Single Product
    </div>
    <Link to='/product' className="btn">Back To Product</Link>
    </>
  )
}

export default SingleProduct