import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
    return { arr: state.arr };
};

const ConnectedList = ({ arr }) => (
    arr.map(player => (
        <div>
            <p>{player[0]} ---- {player[1]}</p>
        </div>
    ))
)

const PlayerList = connect(mapStateToProps)(ConnectedList);

export default PlayerList;