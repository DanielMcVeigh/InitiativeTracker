import React from "react";
import { connect } from "react-redux";
import { removePlayer } from "../actions/index"
import store from "../store/index";
//import "../../styles/RemoveList.css";

const mapStateToProps = state => {
    return { arr: state.arr };
};

function handleClick(player) {
    console.log(player)
    store.dispatch(removePlayer(player));
}

const ConnectedList = ({ arr }) => (
    arr.map(player => (
        <div className="playerRemove">
            <img src={require("../../assets/times-circle.png")} alt="" height="20em" onClick={() => handleClick(player)} />
        </div>
    ))
)

const RemoveList = connect(mapStateToProps)(ConnectedList);

export default RemoveList;