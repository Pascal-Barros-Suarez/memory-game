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
        let stateCard;
        if (this.props.cardState === "hidden") {
            stateCard = 'shown';

        } else if (this.props.cardState === "shown") {
            stateCard = 'hidden';

        } /* else {
            //resolved
            //stateCard = 'resolved';
        } */
        //console.log(this.props.cardState);
        this.props.handleOnClickCard(this.props.id, stateCard);


    }

    /* componentDidUpdate(props, prevProps) {
        console.log(prevProps);
        if (prevProps != null) {
            if (this.props.cardState !== prevProps.cardState) {
                this.cardState = props.cardState;

            }
        }
    } */

    createCharacter(character) {
        let card = '';
        let message = 'character';

        if (this.props.cardState === "hidden") {
            card = <img className="img-thumbnail rounded" src={cardBack} alt={message} onClick={this.handleOnClick} />
        } else if (this.props.cardState === "shown") {
            card = <img className="img-thumbnail rounded" src={character} alt={message} onClick={this.handleOnClick} />
        } else {
            // resolved
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