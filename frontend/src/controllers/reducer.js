import { ADD_CART ,REMOVE, REMOVE_ITEM} from "./type";

const initialStore = {
    carts : [],
}

export const cartReducer = (state = initialStore, action)=>{
    switch (action.type) {
        case ADD_CART:
            /*return{
                ...state,
                carts :[...state.carts,action.payload],
            }*/
            const itemIndex = state.carts.findIndex((item)=> item.codigo === action.payload.codigo)
            if (itemIndex >= 0){
                state.carts[itemIndex].cantidad += 1
            }else{
                const temp = { ...action.payload, cantidad:1}
                return {
                    ...state,
                    carts:[...state.carts,temp],
                }
            }
            case REMOVE:
                const data = state.carts.filter((el)=> el.codigo !== action.payload)
                return {
                    ...state,
                    carts: data,
                }
            case REMOVE_ITEM :
                const itemIndex_desc = state.carts.findIndex((item)=> item.codigo === action.payload.codigo)
                if (state.carts[itemIndex_desc].cantidad >= 1){
                    const delete_item = (state.carts[itemIndex_desc].cantidad -= 1)
                    return {
                        ...state,
                        carts: [...state.carts],
                    }
                }else if (state.carts[itemIndex_desc].cantidad === 1){
                    const data = state.carts.filter((el)=>el.codigo !== action.payload.codigo)
                    return {
                        ...state,
                        carts : data,
                    }
                }

        default:
            return state    
        }
}