import { Component } from "react";
import "./card.styles.css";

class Card extends Component {
    render() {
        const { id, name, email } = this.props.monster;
        const { className } = this.props;
        return (
            <div key={id} className={className}>
                <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2?size=180x180`} />
                <h1>{name}</h1>
                <p>{email}</p>
            </div>
        );
    }
}

export default Card;
