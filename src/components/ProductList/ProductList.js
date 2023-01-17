import { memo, useEffect, useState } from "react";

import ProductCard from "../ProductCard/Product";



function ProductList({ categoryId }) {
    console.log('ProductList rendered');

    const [isLoading, setIsLoading] = useState(true);


    const [products, setProducts] = useState([]);

    const [error, setError] = useState(null);


    useEffect(() => {


        async function loadProducts(a) {
            try {
                const response = await fetch(
                    `http://localhost:3001/categories/${categoryId}/products`
                );
                const result = await response.json();
                setIsLoading(false);
                setProducts(result);
            } catch (error) {
                console.log('Error');
                setError(error);
            }
        }

        if (!categoryId) return;

        loadProducts();
    }, [categoryId]);

    if (!categoryId) {
        return <div>Select a category</div>
    } else if (error) {
        return <div>{error.message}</div>;
    } else if (isLoading) {
        return <div>Loading...</div>;
    } else if (products.length > 0) {
        return (
            <div>
                {/* [Nodes] */}
                {
                    products.map(function (product) {
                        return (
                            <ProductCard
                                key={product.id}
                                product={product}
                            />
                        )
                    })
                }
            </div>
        );
    } else {
        return <div>No products found. Try different category!</div>
    }
}

export default memo(ProductList);
