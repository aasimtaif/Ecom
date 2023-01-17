import React from 'react'
import Cart from '../../components/Cart'
import CheckoutButton from '../../components/CheckoutButton'
import { Link } from 'react-router-dom'
function CartPage() {
    return (
        <div>
            <Link to="/categories/1">Go to Home</Link>
            <Cart />
            <CheckoutButton/>
        </div>
    )
}

export default CartPage