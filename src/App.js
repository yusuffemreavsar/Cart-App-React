import './App.css';
import { BudgetProvider } from './Context/BudgetContext';
import Header from './Components/Header';
import ProductList from './Components/ProductList';
import { CartProvider } from './Context/CartContext';
import Cart from './Components/Cart';
function App() {
  return (
    <div className="App">
      <BudgetProvider>
        <CartProvider>
          <Header/>
          <ProductList/>
          <Cart/>
        </CartProvider>    
      </BudgetProvider>
    </div>
  );
}

export default App;
