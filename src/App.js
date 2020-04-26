import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };

    // this.handleChange = this.handleChange.bind(this); -- verbose way of binding. Use anonymous function instead - see below
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then (users=> this.setState({ monsters: users }));
  }

  // if just handleChange = {...} then we would need the explicit bind above
  // the anonymous function e => or (e) => gets run when the code is parsed out and this is assigne
  // to the lexical context in which it is running the anonymous function - which is at the app component
  // so that the anonymous function executes and returns the pointer function to handleChange already bound
  // to the correct lexical scope of the app component. Any references to 'this' are set to the currently 
  // executing lexical scope. Which would be the app component.
  // for example, going to the browser devtools console and typing
  // const newFunct = () => console.log(this) and then newFunc() would show the context as Window
  // since this was at the Window level
  // https://reactjs.org/docs/handling-events.html
  handleChange = (e) => { 
    this.setState({ searchField: e.target.value })
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
      <div className="App">
        <h1> Monsters Rolodex </h1>
        <SearchBox
          placeholder='search monsters'
          handleChange={ this.handleChange } /> {/* equivalent to e => this.handleChange */}
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
