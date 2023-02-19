import React from "react";
import InputName from "./form/InputName";

export default class StartGame extends React.Component {
    constructor(props) {
        super(props);
        this.passValue = this.passValue.bind(this);
    }

    passValue(name) {
        console.log('estoy en passValue en startgame paso el valor al padre', name)
        this.props.getname(name, true)
    }

    render() {
        return (
            <div className="h100 w100 m-5 p-5 border-1 rounded text-white start">
                <h1>Wellcome to my Memory Card Game</h1>

                <form className="m-2">
                    <div className="form-group">
                        <InputName passValue={this.passValue}></InputName>
                    </div>
                </form>
            </div >
        )
    }
}