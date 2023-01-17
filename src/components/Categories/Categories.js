import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { loadCategries } from '../../redux/categories';
import CategoriesLink from '../CategoriesLink';

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

       dispatch( loadCategries());
    }, []);

    if (categories.isLoading) {
        return (<>
            Laoding Categories.....
        </>)
    } else
        if (categories.error) {
            return (<> 
            Sorry Error ....
            </>)
        } else {
            return (
            <>
                <ul>
                    {categories.categories.map(category => (
                        < CategoriesLink key={category.id} category= {category} />
                    ))}
                </ul>
            </>
            )
        }

}

export default Categories