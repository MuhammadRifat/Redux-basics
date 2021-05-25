import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartActions";

const initialState = {
    cart: [],
    products: [
        {name: "Lenovo Laptop", Id: 1},
        {name: "Asus Laptop", Id: 2},
        {name: "Dell Laptop", Id: 3},
        {name: "HP Laptop", Id: 4},
        {name: "Toshiba Laptop", Id: 5}
    ]
}

const cartReducers = (state = initialState, action) => {
    switch (action.type){
        case ADD_TO_CART:
            const newItem = {
                productId: action.id,
                productName: action.name,
                cartId: state.cart.length + 1
             }
            return {
                ...state,
                cart: [...state.cart, newItem]
            }
        case REMOVE_FROM_CART:
            const newCart = state.cart.filter(item => item.cartId !== action.id);
            return {...state, cart: newCart};
        default:
            return state;
    }
}

export default cartReducers;