import React from "react";
import PlayerList from "./PlayerList";
import InitList from "./InitList";
import RemoveList from "./RemoveList";
import Form from "./Form";
import "../../styles/App.css";

const App = () => (
    <div>
        <div>
            <h2>Add a new player</h2>
            <Form />
        </div>
        <h2>Players</h2>
        <div class="parent">
            <div>
                <h3>Name</h3>
                <PlayerList />
            </div>
            <div>
                <h3>Initiative</h3>
                <InitList />
            </div>
            <div>
                <h3>Remove</h3>
                <RemoveList />
            </div>
        </div>
    </div>
);

export default App;