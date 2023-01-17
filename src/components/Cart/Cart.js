import React, { useContext, useMemo } from 'react';
import { useSelector } from 'react-redux'
// import CartContext from '../../context/CartContext';
import ReduxAddToCart from '../ReduxAddToCart';
import { Link } from 'react-router-dom';
import './Cart.css';

function Cart() {
    const cart = useSelector(state => {
        return state.cart.items
    })
    console.log(cart)
    // const { cart } = useContext(CartContext);
    const cartList = Object.values(cart);
    function getTotalPrice() {
        let cartTotal = 0
        cartList.forEach(cartItem => {
            cartTotal += cartItem.price * cartItem.quantity
        })
        return cartTotal
    }
    const totalPrice = useMemo(getTotalPrice, [cart])
    console.log('Cart rendered');

    if (cartList.length === 0) {
        return (
            <div className='cart'>No items in the cart!</div>
        );
    } else {
        return (<>
            <ol className='cart'>

                {cartList.map(cartItem => (
                    <li key={cartItem.id} className='cartItem'>
                        <div>{cartItem.title}</div>
                        <div>Quantity: {cartItem.quantity}</div>
                        <div>Price :₹{cartItem.price} x {cartItem.quantity} = ₹{cartItem.price * cartItem.quantity}</div>
                        <ReduxAddToCart product={cartItem} />
                    </li>
                ))}
                <div>Cart Total = ₹{totalPrice}</div>
                
            </ol>
            </>
        )
    }
}

export default Cart;