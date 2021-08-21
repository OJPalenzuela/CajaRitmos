import { types } from "../types/types"

export const nameType = (name) => {
    return{
        type: types.name,
        payload: {
            name
        }
    }
}