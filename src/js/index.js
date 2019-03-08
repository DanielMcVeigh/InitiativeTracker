import store from "../js/store/index";
// Import actions here
import { addPlayer, removePlayer, sortPlayers } from "./actions/index";

window.store = store;
// Connect actions here
// window.ACTIONNAME = ACTIONNAME
window.addPlayer = addPlayer;
window.removePlayer = removePlayer;
window.sortPlayers = sortPlayers;