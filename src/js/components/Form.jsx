import React, { Component } from "react";
import { connect } from "react-redux";
import { addPlayer } from "../actions/index.js";

function mapDispatchToProps(dispatch) {
    return {
        addPlayer: arr => dispatch(addPlayer(arr))
    };
}

class ConnectedForm extends Component {
    constructor() {
        super();

        this.state = {
            playerName: "",
            playerInit: ""
        };

        this.handleAddClick = this.handleAddClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    };

    handleAddClick(event) {
        event.preventDefault();
        const { playerName, playerInit } = this.state;
        this.props.addPlayer([playerName, playerInit]);
        this.setState({ playerName: "" , playerInit: ""});
        document.getElementById("playerName").focus();

    };

    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
    }

    render() {
        return (
            <form autoComplete="off" onSubmit={this.handleAddClick}>
                <div className="form-group">
                    <label htmlFor="title">Name: </label>
                    <input
                        type="text"
                        id="playerName"
                        value={this.state.playerName}
                        onChange={this.handleChange.bind(this)}
                    />
                    <label htmlFor="title">Initiative: </label>
                    <input
                        type="text"
                        id="playerInit"
                        value={this.state.playerInit}
                        onChange={this.handleChange.bind(this)}
                    />
                </div>
                <button type="submit" className="btn btn-success btn-lg">
                    SAVE
            </button>
            </form>
        )
    }

}
const Form = connect(null, mapDispatchToProps)(ConnectedForm);
export default Form;