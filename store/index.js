import { createStore, combineReducers } from 'redux' 
import CategoryReducer from './reducers/category.reducer'
import ProductReducer from './reducers/products.reducer'

//configuracion de los reducers
const RootReducer = combineReducers({
    categories: CategoryReducer,
    products: ProductReducer,
});

export default createStore(RootReducer);