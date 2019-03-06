import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
    return { arr: state.arr };
};

const ConnectedList = ({ arr }) => (
    <ul className="list-group list-group-flush">
    {arr.map(player => (
        <li className="list-group-item" key={player} >
        {player[0] + "-" + player[1]}
        </li>
    ))}
    </ul>
);

const PlayerList = connect(mapStateToProps)(ConnectedList);

export default PlayerList;