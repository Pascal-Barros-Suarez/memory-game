import React from "react";
import characterLuffy from "../img/Luffy.webp";
import characterZorro from "../img/Zorro.jfif";
import characterSanji from "../img/Sanji.jpg";
import cardBack from "../img/back.jpg";

export default class Carta extends React.Component {
    id;
    number;

    constructor(props) {
        super(props);
        this.number = props.number;
        this.id = props.id;

        //el bind debe ir al final del constructor
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    state = {
        cardState: "hidden"
    }

    createCharacter(character) {
        let card = '';
        let message = 'character';

        if (this.state.cardState === "hidden") {
            card = <img width='25%' height='30%' src={cardBack} alt={message} onClick={this.handleOnClick} />;
        } else if (this.state.cardState === "shown") {
            card = <img width='25%' height='30%' src={this.character} alt={message} onClick={this.handleOnClick} />;
        } else {
            // resolved
        }
        return card;
    }

    handleOnClick() {
        if (this.state.cardState === "hidden") {
            this.setState({ cardState: "shown" });
        } else if (this.state.cardState === "shown") {
            this.setState({ cardState: "hidden" });
        } else {
            //resolved
        }

    }

    render() {
        let characterCard = '';

        if (this.number === 0) {
            characterCard = this.createCharacter(characterLuffy);

        } else if (this.number === 1) {
            characterCard = this.createCharacter(characterZorro);

        } else {
            characterCard = this.createCharacter(characterSanji);
        }

        return (
            <div>
                {characterCard}
            </div >
        )
    }
}