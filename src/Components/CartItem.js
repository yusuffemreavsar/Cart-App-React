import React from 'react'

function CartItem({item}) {
  return (
    <div>
    <li className="basket-item">
            {item.name} <span>x {item.amount}</span>
        </li>
</div>
  )
}

export default CartItem