
import { types } from "../types/types";

const initialState = {
    name: ''
}

export const reducer = (state = initialState, action) =>{
    switch (action.type) {
        case types.name:
            
            return {
                name: action.payload.name
            }
    
        default:
            return state
    }
}