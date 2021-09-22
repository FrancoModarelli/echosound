
const INITIAL_STATE = {
    items: [],
    total: 0,
}

const sumTotal = (list) => list.map(item => item.quantity*item.price).reduce((a,b) => a + b, 0)

const CartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case ADD_ITEM:
            const indexItem = state.items.findIndex(item => item.id === action.item.id)
            
            if(indexItem === -1){
                const item = {...action.item, quantity: 1}
                const updateCart = { ...state.items, item}
                return {...state, items: updateCart, total: sumTotal(updateCart)}
            }
            
            const items = [...state.items].map(item => {
                if(item.id === action.item.id) item.quantity ++
                return items
            })
            return{
                ...state,
                items: state.items.concat(action.item),
                total: sumTotal(items)
            }
        case REMOVE_ITEM:
            const clearCart = state.items.filter(item => item.id !== action.itemID)
            return{
                ...state,
                items: clearCart,
                total: sumTotal(clearCart)
            }
        case CONFIRM_CART:
            return{
                ...state,
                items:[],
            }
        default:
            return state;
    }
}

export default CartReducer;