import {ADD_CART,REMOVE, REMOVE_ITEM} from './type'

export const ADD = (item) => {
    return {
        type: ADD_CART,
        payload: item,
    }
}
export const DELETE = (codigo) => {
    return {
        type: REMOVE,
        payload: codigo,
    }
}
export const REMOVE_INT = (item) => {
    return {
        type: REMOVE_ITEM,
        payload: item,
    }
}