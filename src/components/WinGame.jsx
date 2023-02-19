import React from "react";

export default class WinGame extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="h-100 w-100 bg-success win">
                <h1 >Congratulations {this.props.name}, You Win the game</h1>
                <div class="d-grid gap-2 col-6 mx-auto">
                    <button class="btn btn-outline-warning btn-lg" type="button" onClick={this.props.resetGame}>RESTART GAME</button>
                </div>
            </div >
        )
    }
}