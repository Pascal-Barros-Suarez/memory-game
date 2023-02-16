import React from "react";
import Card from "./Card";

export default class Tablero extends React.Component {
    maxCards = 6;
    state = {
        cards: []
    }

    constructor(props) {
        super(props);
        this.generadorTablero();

        //binds
        this.handleOnClickCard = this.handleOnClickCard.bind(this);
        this.verifyCardPair = this.verifyCardPair.bind(this);

    }

    shuffle(array) {
        let currentIndex = array.length, temporaryValue, randomIndex;

        // Mientras queden elementos a mezclar...
        while (0 !== currentIndex) {
            // Seleccionar un elemento sin mezclar...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // E intercambiarlo con el elemento actual
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }

    generadorTablero() {
        let i, j = 0;

        for (i = 0; i < this.maxCards; i++) {
            this.state.cards.push({ id: i, number: j, cardState: "hidden" })
            i++;
            this.state.cards.push({ id: i, number: j, cardState: "hidden" })
            j++;
        }

        //this.state.cards = this.shuffle(this.state.cards)
        this.setState({
            cards: this.shuffle(this.state.cards),
        });
    }

    WinGame() {
        console.log('win');
    }

    verifyCardPair() {

        let cartaUp = this.state.cards.filter(c => c.cardState === "shown");

        if (cartaUp.length === 2) {
            if (cartaUp[0].number === cartaUp[1].number) {
                let resolveCards = this.state.cards.map(c => {
                    if (c.cardState === "shown") {
                        c.cardState = "resolved";
                    }
                    return c;
                });

                this.setState({
                    cards: resolveCards,
                });

            } else {

                //let timeForShowCard = setTimeout(() => {
                setTimeout(() => {
                    let hiddenCards = this.state.cards.map(c => {
                        if (c.cardState === "shown") {
                            c.cardState = "hidden";
                        }
                        return c;
                    });
                    this.setState({
                        cards: hiddenCards,
                    })
                }, 3000);
                //clearTimeout(timeForShowCard);

            }
            let win = this.state.cards.every(c => c.cardState === "resolved");
            if (win) {
                this.WinGame();
            }
        }
    }


    handleOnClickCard(id, stateCard) {
        //console.log(id, stateCard);
        let cardUp = this.state.cards.filter(c => c.cardState === "shown");
        if (cardUp.length < 2) {
            let tempCards = this.state.cards.map(c => {
                if (c.id === id) {
                    c.cardState = stateCard;
                }
                return c;
            });

            this.setState({
                cards: tempCards,
            });

            if (cardUp.length === 1) {
                this.verifyCardPair();
            }
        }
    }


    render() {
        return (
            <div>
                <h1>Wellcome to my Memory Card Game</h1>

                <div className="container-fluid">
                    <div className="row">
                        {this.state.cards.map(c => {
                            return (
                                <div key={c.id.toString()} className="col">
                                    <Card key={c.id.toString()} id={c.id} number={c.number} cardState={c.cardState} handleOnClickCard={this.handleOnClickCard}></Card>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        )
    }
}