import {createContext,useContext,useState} from "react"

const BudgetContext = createContext();

export const BudgetProvider=({children})=>{
    const[money,setMoney]=useState(10000)
    const values={money,setMoney}
    return <BudgetContext.Provider value={values}>{children}</BudgetContext.Provider>
}

export const useBudget=()=>useContext(BudgetContext)