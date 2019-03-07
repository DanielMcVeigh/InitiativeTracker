import React from "react";
import { connect } from "react-redux";
import "../../styles/PlayerList.css";

const mapStateToProps = state => {
    return { arr: state.arr };
};

const ConnectedList = ({ arr }) => (
    arr.map(player => (
        <div className="parent">
            <div className="playerName">
                {player[0]}
            </div>
            <div className="playerInit">
                {player[1]}
            </div>
        </div>
    ))
)

const PlayerList = connect(mapStateToProps)(ConnectedList);

export default PlayerList;