import React, { Component } from 'react';
import Jcard from './components/Jcard';
import Wrapper from "./components/Wrapper";
import logo from './logo.svg';
import './App.css';
import shoes from "./shoes.json";


class App extends Component {
  state = {
    message: "Click a Jordan to start",
    score: 0,
    highScore: 0,
    shoes
  };

  // Shuffle shoes 
   shuffle = a => {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  // identify the shoe that was clicked
  handleClick = id => {
    // Filter this.state.shoes for shoes with an id not equal to the id being removed
    const shoes = this.state.shoes.filter(shoe => shoe.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ shoes });
  };


render() {
  return (
    <div className="App">
      <nav class="navbar bg-primary">
        Clicky Game!!
      </nav>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
  
}

export default App;
