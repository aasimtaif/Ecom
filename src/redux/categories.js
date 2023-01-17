
const LOAD_CATEGORIES_START = 'LOAD_CATEGORIES_START';
const LOAD_CATEGORIES_DONE = 'LOAD_CATEGORIES_DONE';
const LOAD_CATEGORIES_ERROR = 'LOAD_CATEGORIES_ERROR';

export function categoriesLoading() {
    return {
        type: LOAD_CATEGORIES_START
    }
}

export function categoriesLoaded(categories) {
    return {
        type: LOAD_CATEGORIES_DONE,
        payload: categories
    }
}

export function categoriesFailed(error) {
    return {
        type: LOAD_CATEGORIES_ERROR,
        payload: error
    }
}

export function loadCategries() {
    return async (dispatch,getState)=>{
        const { categories } = getState();
        if(categories.isLoading) return;
        dispatch(categoriesLoading())
        try {
            const responce = await fetch('http://localhost:3001/categories');
            if (responce.ok) {
                const json = await responce.json();
                dispatch(categoriesLoaded(json))
            } else {
                dispatch(categoriesFailed(new Error(responce.statusText)));
            }
        } catch (error) {
            dispatch(categoriesFailed(error));
        }

    }
}

export function categoriesReduce(state = {
    isLoading: false,
    error: null,
    categories: [],
    selectedCategoryId: null,
}, action) {
    switch (action.type) {
        case 'SET_SELECTED_CATEGORY':
            return {
                ...state,
                selectedCategoryId: action.payload
            }
        case LOAD_CATEGORIES_START:
            return {
                ...state,
                isloading: true,
            }
        case LOAD_CATEGORIES_DONE:
            return {
                ...state,
                isLoading: false,
                categories: action.payload
            }
        case LOAD_CATEGORIES_ERROR:
            return {
                ...state,
                isloading: false,
                error: action.payload
            }
        default:
            return state
    }
}


export default categoriesReduce