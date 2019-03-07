import React from "react";
import PlayerList from "./PlayerList";
import Form from "./Form";
import "../../styles/App.css";

const App = () => (
    <div>
        <div>
            <h2>Add a new player</h2>
            <Form />
        </div>
        <h2>Players</h2>
        <div>
            <div className="titles">
                <div className="title"> Name: </div>
                <div className="title"> Init: </div>
            </div>
            <PlayerList />
        </div>
    </div>
);

export default App;