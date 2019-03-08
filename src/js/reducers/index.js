// Import actionTypes from ../constants
import { ADD_PLAYER, REMOVE_PLAYER, SORT_PLAYERS } from "../constants/actionTypes";


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
                arr: state.arr.filter(i => i != action.payload)
            }

        case SORT_PLAYERS:
            var newState = {
                ...state
            }

            let playerNames = []
            let playerInit = []

            for (var h = 0; h < newState.arr.length; h++) {
                playerNames.push(newState.arr[h][0])
                playerInit.push(newState.arr[h][1])
            };

            let list = []
            for (var j = 0; j < playerNames.length; j++) {
                list.push({ 'name': playerNames[j], 'init': playerInit[j] });
            }


            list.sort(function (a, b) {
                return ((a.init < b.init) ? -1 : ((a.init == b.init) ? 0 : 1));
            });

            for (var k = 0; k < list.length; k++) {
                playerNames[k] = list[k].name;
                playerInit[k] = list[k].init;
            }
            var arr = []
            for (var i = 0; i < playerNames.length; i++) {
                arr.push([playerNames[i], playerInit[i]])
            }
            return {
                arr
            }


        default:
            return state;
    }
}

export default rootReducer;