import React from 'react'
import Product from './Product'
import products from "../products.json"
function ProductList() {
  return (
    <div className='container products'>
        {products.map(product=>(
            <Product key={product.id} product={product}></Product>
        ))}

    </div>
  )
}

export default ProductList