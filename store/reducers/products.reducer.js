import { PRODUCTS } from '../../data/items'
import { SELECT_PRODUCT, FILTER_PRODUCT } from '../actions/product.action'

//const para inicializar estado de Products
const initialState = {
    list: PRODUCTS,
    filteredProduct: [],
    selectedID: null
}

const ProductReducer = (state = initialState, action) => {
    switch(action.type){
        case SELECT_PRODUCT:
            return{
                ...state,
                selectedID: action.productID
            }
        case FILTER_PRODUCT:
            return{
                ...state,
                filteredProduct: state.list.filter(item => item.category === action.categoryID)
            }
        default:
            return state
    }
}

export default ProductReducer