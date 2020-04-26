import React, { Component } from 'react';
import { CardListOriginal } from './components/card-list/card-list-original.component';
import logo from './logo.svg';
import './App.css';

class AppOriginal extends Component{
  constructor(){
    super();

    this.state = {
      name: 'Hello master, Jeff Patrick',
      monsters: [
        {
          name: 'Frankenstein',
          id: 'asc1'
        },
        {
          name: 'Dracula',
          id: 'asc2'
        },
        {
          name: 'Zombie',
          id: 'asc3'
        }
      ]
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then (users=> this.setState({ monsters: users }))
  }

  render(){
    return (
      <div className="App">
      <CardListOriginal name="jeff">Micah, Brenda, Samuel, Tasha</CardListOriginal>
      <CardListOriginal name='monsters'>
        {this.state.monsters.map(monster => (
          <h1 key={monster.id}> {monster.name} </h1>
        ))}
      </CardListOriginal>
      {
        this.state.monsters.map(monster => (
          <h1 key={monster.id}> {monster.name}</h1>
        ))
      }
      {
        /*
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello Jeff Patrick
          </p>
          <p>
            {this.state.name}          
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <button onClick={() => this.setState({ name: 'Hello my master'})}>Change Text</button>
        </header>
      */
      }
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <p>booger
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default AppOriginal;
