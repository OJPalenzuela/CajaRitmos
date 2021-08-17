import { createStore } from "redux";

const initialState = {
    music: "Unselected"
};

const frasesReducer = (state = initialState, action) => {
    switch(action.type){
        case 'CHANGE':
            return {
                music: ""
            }
        default:
            return state
    }
}

export default createStore(frasesReducer);