import React, { useState } from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { toggleCart } from './redux/store';
import ProductList from './components/ProductList/ProductList';
import Cart from './components/Cart';
import CartContext from './context/CartContext';
import Categories from './components/Categories/Categories';
import {Routes , Route} from  "react-router-dom"

import ProductPage from './pages/ProductPage/ProductPage';
import CartPage from './pages/CartPage/CartPage';
import ToggleCart from './components/ToggleCart';






function App() {
const  isCartOpen = useSelector(state => state.cart.isCartOpen);
console.log(isCartOpen)
const dispatch = useDispatch();
  const [cart, setCart] = useState({});
  const [showCart, setShowCart] = useState(false);
  function increaseQuantity(product) {
    // const newCart = { ...cart };



    // if (!newCart[product.id]) {
    //   newCart[product.id] = {
    //     id: product.id,
    //     title: product.title,
    //     price: product.price,
    //     quantity: 0,
    //   }
    // }

    // newCart[product.id].quantity += 1;

    // setCart(newCart);
  }
  const  cartToggle = () =>{
    setShowCart(!showCart)
    dispatch(toggleCart(!showCart))
  }
  function decreaseQuantity(product) {
    const newCart = { ...cart };

    if (!newCart[product.id]) return;

    newCart[product.id].quantity -= 1;

    if (newCart[product.id].quantity <= 0) {
      delete newCart[product.id];
    }

    setCart(newCart);
  }

  console.log('App rendered');

  return (
    <CartContext.Provider
      value={{ cart, increaseQuantity, decreaseQuantity }}
    >

      
      <div>
<ToggleCart/>

    <Routes>
      <Route exact = {true} path='/cart' element = {<CartPage />}/>
      
        {/* <button onClick={cartToggle} >
          {isCartOpen? "close Cart" : "open cart"}
        </button>
        {
          isCartOpen? <Cart /> : null
        } */}
        <Route  path='/' element = { <ProductPage />}/>
        <Route path = '/categories/:categoryId' element = { <ProductPage />}/>
        </Routes>
      </div>
    </CartContext.Provider>
  )
}
//CartContext is used to understand the usecontext hook the cart is developed using the react-redux 
export default App;
