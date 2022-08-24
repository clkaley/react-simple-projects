import React from 'react'
import { Link } from 'react-router-dom'
import '../Product/index.css'
import products from '../../data'
function Product() {
  return (
    <div>
      <h3>Products</h3>
      <div className='products'>
        {products.map((product)=>{
          return (
            <div key={product.id}>
              <h1>{product.name}</h1>
              <Link to={`/product/${product.id}`} >More Info</Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Product