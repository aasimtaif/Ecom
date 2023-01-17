import React from 'react';
// import AddToCart from '../AddToCart';
import ReduxAddToCart from '../ReduxAddToCart';
import  './ProductCard.css';


    function ProductCard({ product }) {
        console.log('ProductCard rendered', product.id);

        return (

            <div className="card">
                
                <h3>{product.title}</h3>
                <h5>₹{product.price}</h5>
               
                <ReduxAddToCart product={product} />
            </div>
        );
    }

// Add to cart
export default ProductCard;