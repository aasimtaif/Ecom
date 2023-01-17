import { createStore,combineReducers,applyMiddleware } from "redux";
import thunk from "redux-thunk";

import cartReducer from "./store";
import categoriesReducer from "./categories";


const rootReducer = combineReducers({
  cart: cartReducer,
  categories: categoriesReducer
});


const store = createStore(rootReducer, applyMiddleware(thunk))
export default store;