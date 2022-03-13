import { Component } from "react";
import './search-box.styles.css';

class SearchBox extends Component {
    render() {
        const { onChangeHandler, placeHolder, className } = this.props;
        return (
            <input
                type='search'
                className={`search-box ${className}`}
                placeholder={placeHolder}
                onChange={onChangeHandler}
            />
        );

    }
}
export default SearchBox;