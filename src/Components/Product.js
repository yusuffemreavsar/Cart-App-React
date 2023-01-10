import React from 'react'
import { useCart } from '../Context/CartContext'
import { useBudget } from '../Context/BudgetContext'
function Product({product}) {
  const {cart,addCart,removeCart,total}=useCart()
  const {money}=useBudget()
  const CartItem=cart.find(item=>item.id===product.id)
  
  return (
    <div className='product'>
        <img src={product.image} alt="#"/>
        <h6>{product.title}</h6>
        <div className='price'>{product.price}$</div>
        <div className='actions'>
            <button disabled={total + product.price>money}className='buy-btn' onClick={()=>addCart(product)} >Buy</button>
            <span className='amount'>{CartItem && CartItem.amount || 0}</span>
            <button disabled={!CartItem} className='sell-btn' onClick={()=>removeCart(product)} >Sell</button>
        </div>
    </div>
  )
}

export default Product