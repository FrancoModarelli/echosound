import { CATEGORIES } from '../../data/categories';
import { SELECT_CATEGORY } from '../actions/category.action';

//Inicializamos estado de Categorias
const initialState = {
    list: CATEGORIES,
    selectedID: null,
}

const CategoryReducer = (state = initialState, action) => {
    switch(action.type){
        case SELECT_CATEGORY:
            return {
                ...state, 
                selectedID: action.categoryID,
            }
        default:
            return state
    }
}

export default CategoryReducer