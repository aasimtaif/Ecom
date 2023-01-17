import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { loadCategries } from '../../redux/categories';
import CategoriesLink from '../CategoriesLink';
import ToggleCart from '../ToggleCart';
import styles from './Categories.module.css'


function Categories() {
    const dispatch = useDispatch()
    const categories = useSelector(state => state.categories)
    useEffect(() => {
        // dispatch(categoriesLoading())
        // async function loadCategries() {
        //     try {
        //         const responce = await fetch('http://localhost:3001/categories');
        //         if(responce.ok){
        //             const json = await responce.json();
        //             dispatch(categoriesLoaded(json))
        //         }else{
        //         dispatch(categoriesFailed(new Error(responce.statusText)));

        //         }

        //     } catch (error) {
        //         dispatch(categoriesFailed(error));
        //     }
        // }

        dispatch(loadCategries());
    }, []);

    if (categories.isLoading) {
        return <div>Loading Categories...</div>;
    } else if (categories.error) {
        return <div>Failed to load categories</div>
    } else {
        return (
            <div className={styles.root}>
                <ul className={styles.list}>
                    {categories.categories.map(category => (
                        <CategoriesLink key={category.id} category={category} />
                    ))}
                </ul>
                <ToggleCart />
            </div>
        );
    }
}

export default Categories;