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
        //this.cardState = props.cardState;
        // console.log(props);

        this.state = {
            cardState: this.props.cardState,
        }

        //el bind debe ir al final del constructor
        this.handleOnClick = this.handleOnClick.bind(this);
    }



    handleOnClick() {
        let stateCard;
        if (this.state.cardState === "hidden") {
            //this.state.cardState = "shown" ;
            //his.setState({ cardState: "shown" });
            stateCard = 'shown';

        } else if (this.state.cardState === "shown") {
            // this.setState({ cardState: "hidden" });
            stateCard = 'hidden';

        } else {
            //resolved
            //stateCard = 'resolved';
        }
        //console.log(this.state.cardState);
        this.props.handleOnClickCard(this.id, stateCard);


    }

    componentDidUpdate(props, prevProps) {
        if (this.props.cardState !== prevProps.cardState) {
            this.setState({ cardState: props.cardState });
        }
    }

    createCharacter(character) {
        let card = '';
        let message = 'character';

        if (this.state.cardState === "hidden") {
            card = <img width='95%' height='60%' src={cardBack} alt={message} onClick={this.handleOnClick} />
        } else if (this.state.cardState === "shown") {
            card = <img width='95%' height='60%' src={character} alt={message} onClick={this.handleOnClick} />
        } else {
            // resolved
            card = <img width='95%' height='60%' src={character} alt={message} />
        }
        return card;
    }

    render() {
        let characterCard = '';
        //let nuevo= this.props.cardState;
        //this.setState({ cardState: this.props.cardState }); 
        //console.log(this.props.id,this.state.cardState);
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