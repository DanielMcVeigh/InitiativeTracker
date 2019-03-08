// Import actionTypes from ../constants
import { ADD_PLAYER, REMOVE_PLAYER, SORT_PLAYERS } from "../constants/actionTypes";

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

export function sortPlayers(payload) {
    return {
        type: SORT_PLAYERS,
        payload
    }
};