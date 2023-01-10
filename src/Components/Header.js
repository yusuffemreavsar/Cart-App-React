import React from 'react'
import { useBudget } from '../Context/BudgetContext'
function Header() {
   const {money}=useBudget()
  return (
    <div className='header'>
     {<div > Your Budget:<span className='money'>{money}$</span></div>}   
        
    </div>
  )
}

export default Header