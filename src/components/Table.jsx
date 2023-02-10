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
            this.state.cards.push({ id: i, number: j, })
            i++;
            this.state.cards.push({ id: i, number: j, })
            j++;
        }

        this.setState({
            cards: this.shuffle(this.state.cards)
        });
    }

    render() {

        return (
            <div>
                <h1>Bienvenido</h1>
                {this.state.cards.map(c => {
                    return (
                        <Card key={c.id.toString()} id={c.id} number={c.number} ></Card>);
                })
                }
            </div>
        );
    }

}