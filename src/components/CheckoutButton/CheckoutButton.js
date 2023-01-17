import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { checkoutSuccess, placeOrder } from '../../redux/store';

function CheckoutButton() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isSubmitting = useSelector(state => state.cart.isSubmitting);
    const isSuccess = useSelector(state => state.cart.isSubmitSuccess);

    function handlePlaceOrder() {
        dispatch(placeOrder());
    }

    useEffect(() => {
        // Navigate to /orders
        if (isSuccess) {
            navigate(`/orders/`);
            dispatch(checkoutSuccess());
        }
    }, [isSuccess]);

    return (
        <>
            <button onClick={handlePlaceOrder}>Place Order</button>
            {isSubmitting && <div>Placing order...</div>}
        </>
    )
}

export default CheckoutButton;