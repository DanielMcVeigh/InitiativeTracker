import React from "react";
import { connect } from "react-redux";
//import "../../styles/InitList.css";

const mapStateToProps = state => {
    return { arr: state.arr };
};

const ConnectedList = ({ arr }) => (
    arr.map(player => (
        <div className="playerInit">
            {player[1]}
        </div>
    ))
)

const InitList = connect(mapStateToProps)(ConnectedList);

export default InitList;