import { useContext,createContext,useState, useEffect } from "react";
const CartContext=createContext();

export const CartProvider=({children})=>{
    const[cart,setCart]=useState([])
    const[total,setTotal]=useState(0)
    
    useEffect(()=>{
        setTotal(cart.reduce((acc,item)=>{
          return acc + (item.amount) *(item.price)
        },0))

        console.log(cart)
    },[cart])

    const addCart=(product)=>{
        const checkedCart=cart.find(item=>item.id===product.id)
        const newProduct={
            id:product.id,
            name:product.title,
            price:product.price,
            amount:1
        }
        if(checkedCart){
            checkedCart.amount+=1
            setCart([...cart.filter(item=>item.id!==product.id),checkedCart])
        }
        else{
            setCart([...cart,newProduct])
        }
    }
    const removeCart=(product)=>{
        const checkedCart=cart.find(item=>item.id===product.id)
        const cartWithoutCurrent=cart.filter(item=>item.id !==product.id)
        checkedCart.amount-=1
        if(checkedCart.amount === 0){
            setCart([...cartWithoutCurrent])
          }
          else{
            setCart([...cartWithoutCurrent,checkedCart],)
          }
    }
    const values={cart,setCart,total,setTotal,addCart,removeCart}

    return <CartContext.Provider value={values}>{children}</CartContext.Provider>

}

export const useCart=()=>useContext(CartContext)