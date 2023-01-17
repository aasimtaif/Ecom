import React from 'react'
import Categories from '../../components/Categories/Categories'
import ProductList from '../../components/ProductList/ProductList'
import { useParams } from 'react-router-dom'

function ProductPage() {
    const { categoryId } = useParams()
    console.log(categoryId)
    return (
        <div>
            <Categories />
            <ProductList  categoryId = {categoryId}/>
        </div>
    )
}

export default ProductPage