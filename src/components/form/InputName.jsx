import React from "react";

export default class StartGame extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        let value = event.target.value;
        console.log('estoy en handleChange en input paso el valor al padre', value);
        this.props.passValue(value);
    }

    render() {
        return (
            <div className="form-group m-1">
                <label htmlFor="inputName">Name:</label>
                <input type="text" className="form-control" id="inputName" placeholder="name..." onChange={this.handleChange}></input>
            </div>
        )
    }
}