import React from "react";
import PlayerList from "./PlayerList";

const App = () => (
    <div className="row mt-5">
        <div className="col-md-4 offset-md-1">
            <h2> Players </h2>
            <PlayerList />
        </div>
    </div>
);

export default App;