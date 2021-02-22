import { addToCart, deleteToCart,decrementToCart,formData } from './constants';

const initialState = {
    cartData: [],
    formData:[]
}

export default function addItems(state =initialState, action){
    switch (action.type) {
        case addToCart:
            return {
                ...state,
                cartData: action.data
            }
            case deleteToCart:
                return {
                    ...state,
                    cartData: action.data
                }
                case decrementToCart:
                return {
                    ...state,
                    cartData: action.data
                }
                case formData:
                return {
                    ...state,
                    cartData: action.data
                }

        default:
            return state
    }
}