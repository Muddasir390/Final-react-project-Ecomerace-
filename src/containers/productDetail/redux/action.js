import { addToCart,deleteToCart,decrementToCart,formData} from './constants';

export const addData = (data) => {
    return {
        type: addToCart,
        data: data
    }
}

export const deleteCart = (data) => {
    return {
        type : deleteToCart,
        data : data
    }
}

export const decrement = (data) => {
    return {
        type : decrementToCart,
        data : data
    }
}

export const addForm = (data) => {
    return {
        type : formData,
        data : data
    }
}