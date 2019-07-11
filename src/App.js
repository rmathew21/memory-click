import React, { Component } from 'react';
import Jcard from './components/Jcard';
import Wrapper from "./components/Wrapper";
import Scoreboard from "./components/Scoreboard/scoreboard";
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
        <div className="navbar-brand">
          Bootstrap
        </div>
      </nav>
      <header className="App-header">
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Click on a pair of J's to start!</h1>
            <p className="lead">Keep clicking on a different pair to earn points. IF you choose the same pair twice, YOU LOSE and start fresh! First to 12 wins</p>
          </div>
          <div className="scoreBoard">
            <Scoreboard score={this.state.score} highScore={this.state.highScore} />
          </div>
        </div>
        </header>

        <div className="container">
          <div className="row">
            {shoes.map(image =>(
              <Jcard
              handleClick={this.handleClick}
              id={image.id}
              name={image.name}
              image={image.image}
              />
            ))}
          </div>
        </div>
        <footer className="container-fluid">
          <p>Robin Mathew</p>
        </footer>
    </div>
  );
}
  
}

export default App;
