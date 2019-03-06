// Import actionTypes from ../constants
import { ADD_PLAYER, REMOVE_PLAYER } from "../constants/actionTypes";

export function addPlayer(payload) {
    return {
        type: ADD_PLAYER,
        payload
    }
};

export function removePlayer(payload) {
    return {
        type: REMOVE_PLAYER,
        payload
    }
};