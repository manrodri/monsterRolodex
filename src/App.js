import { Component } from 'react';

import './App.css';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.components';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState(() => {
        return { monsters: users };
      })
      );
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase();
    this.setState(() => {
      return { searchField };
    });

  };

  render() {

    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField));

    return (
      <div className="App">
        <h1 className='app-title'>Monster Rolodex</h1>
        <SearchBox onChangeHandler={onSearchChange} placeHolder="search monsters" className="monsters-search-box" />
        <CardList monsters={filteredMonsters} className="card-list" />
      </div>
    );
  }

}

export default App;
