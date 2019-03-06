import React, { Component } from "react";
import { connect } from "react-redux";
import { addPlayer } from "../actions/index.js";
import store from "../store/index.js";

function mapDispatchToProps(dispatch) {
    return {
        addPlayer: arr => dispatch(addPlayer(arr))
    };
}

class ConnectedForm extends Component {
    constructor() {
        super();

        this.state = {
            playerName: ""
        };

        this.handleAddClick = this.handleAddClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    };

    handleAddClick(event) {
        event.preventDefault();
        const { playerName } = this.state;
        this.props.addPlayer([playerName, null]);
        console.log(this.state.playerName)
        this.setState({ playerName: playerName });
        
    };

    handleChange(event) {
        this.setState({[event.target.id]: event.target.value});
    }

    render() {
        return (
            <form autoComplete="off" onSubmit={this.handleAddClick}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        id="playerName"
                        value={this.state.playerName}
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