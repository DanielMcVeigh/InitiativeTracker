// Import actionTypes from ../constants
import { ADD_PLAYER, REMOVE_PLAYER } from "../constants/actionTypes";

// Set initial state
const initialState = {
    arr: []
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        // Set cases here
        case ADD_PLAYER:
            return {
                ...state,
                arr: [...state.arr, action.payload]
            };
        case REMOVE_PLAYER:
            return {
                ...state,
                arr: [...state.arr.splice(0, action.payload),
                ...state.arr.splice(action.payload + 1)]
            };

        default:
            return state;
    }
}

export default rootReducer;