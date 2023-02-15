import React from "react";
import characterLuffy from "../img/Luffy.jpg";
import characterZorro from "../img/Zorro.jpg";
import characterSanji from "../img/Sanji.jpg";
import cardBack from "../img/back.jpg";

export default class Carta extends React.Component {
    id;
    number;
    cardState;

    constructor(props) {
        super(props);
        this.number = props.number;
        this.id = props.id;
        this.cardState = props.cardState;

        this.state = {
            cardState: "hidden",
        }

        //el bind debe ir al final del constructor
        this.handleOnClick = this.handleOnClick.bind(this);
    }


    handleOnClick() {
        let stateCard;
        if (this.state.cardState === "hidden") {
            //this.state.cardState = "shown" ;
            this.setState({ cardState: "shown" });
            stateCard = 'shown';

        } else if (this.state.cardState === "shown") {
            this.setState({ cardState: "hidden" });
            stateCard = 'hidden';

        } else {
            //resolved
            //stateCard = 'resolved';
        }
        //console.log(this.state.cardState);
        this.props.handleOnClickCard(this.id, stateCard);

    }



    createCharacter(character) {
        let card = '';
        let message = 'character';

        if (this.state.cardState === "hidden") {
            card = <img width='25%' height='30%' src={cardBack} alt={message} onClick={this.handleOnClick} />
        } else if (this.state.cardState === "shown") {
            card = <img width='25%' height='30%' src={character} alt={message} onClick={this.handleOnClick} />;
        } else {
            // resolved
        }
        return card;
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