import React from "react";
import characterLuffy from "../img/Luffy.webp"
import characterZorro from "../img/Zorro.jfif"
import characterSanji from "../img/Sanji.jpg"
import cardBack from "../img/back.jpg"

export default class Carta extends React.Component {
    id;
    number;
    constructor(props) {
        super(props);

        this.number = props.number;
        this.id = props.id;

    }

    render() {
        let characterCard = '';
        let message = 'character';
        if (this.number === 0) {
            characterCard = <img width='25%' height='30%' src={characterLuffy} alt={message} />;
            
        } else if (this.number === 1) {
            characterCard = <img width='25%' height='30%' src={characterZorro} alt={message} />;
            
        } else {
            characterCard = <img width='25%' height='30%' src={characterSanji} alt={message} />;
        }


        return (
            <div>
                {characterCard}
            </div >
        )
    }
}