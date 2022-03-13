import { Component } from "react";
import "./card-list.styles.css";
import Card from "../card/card.component";

class CardList extends Component {

    render() {
        const { monsters, className } = this.props;
        console.log('render');
        return (
            <div className={className}>
                {monsters.map(monster =>
                    <Card className={`card-container`} monster={monster} />)}
            </div>
        );
    }
}

export default CardList;