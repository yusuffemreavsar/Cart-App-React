import React from 'react'
import { useCart } from '../Context/CartContext'
import products from "../products.json"
import CartItem from './CartItem'
function Cart() {
    const{cart,setCart,total}=useCart()
    const clearBasket=()=>{
        setCart([])
    }
  return (
    <>
      <div className="basket-container container">
				<h3>Your Cart List</h3>
				<ul>
					{cart.map(item => (
						<CartItem key={item.id} item={item} product={products.find(p => p.id === item.id)}/>
					))}
				</ul>
				<div className="total">
					Total: ${total}
				</div>
				<button className="basket-reset-btn" onClick={clearBasket}>Clear Basket</button>
			</div>
    </>
  )
}

export default Cart