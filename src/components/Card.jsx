import React from "react";
import characterLuffy from "../img/Luffy.jpg";
import characterZorro from "../img/Zorro.jpg";
import characterSanji from "../img/Sanji.jpg";
import cardBack from "../img/back.jpg";

export default class Carta extends React.Component {

    constructor(props) {
        super(props);
        //el bind debe ir al final del constructor
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick() {
        //console.log(this.props.cardState);

        let stateCard;
        if (this.props.cardState === "hidden") {
            stateCard = 'shown';
        } else if (this.props.cardState === "shown") {
            stateCard = 'hidden';
        }

        this.props.handleOnClickCard(this.props.id, stateCard);
    }

    createCharacter(character) {
        let card = '';
        let message = 'character';

        if (this.props.cardState === "hidden") {
            card = <img className="img-thumbnail rounded" src={cardBack} alt={message} onClick={this.handleOnClick} />
        } else if (this.props.cardState === "shown") {
            card = <img className="img-thumbnail rounded" src={character} alt={message} onClick={this.handleOnClick} />
        } else {
            card = <img className="img-thumbnail rounded" src={character} alt={message} />
        }
        return card;
    }

    render() {
        let characterCard = '';

        if (this.props.number === 0) {
            characterCard = this.createCharacter(characterLuffy);

        } else if (this.props.number === 1) {
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