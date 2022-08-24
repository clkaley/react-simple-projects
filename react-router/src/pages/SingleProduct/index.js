import React from 'react'
import { Link, useParams } from 'react-router-dom'
import './index.css'
import products  from '../../data'

function SingleProduct() {
   const {productID}=useParams();

   const product=products.find((product)=>product.id===productID)

   console.log(product);
   const{image, name}=product
  return (
    <>
    <div className='container'>
    <h4 className='title'>{name}</h4>
    <img className='img-size' src={image} alt={name} />
    </div>
    <Link to='/product' className="btn">Back To Product</Link>
    </>
  )
}

export default SingleProduct