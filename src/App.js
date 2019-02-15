import React, { Component } from "react";
import NavBar from "./components/NavBar";
import ImageGraph from "./components/ImageGraph";
import MicButton from "./components/MicButton";
import "./App.css";

const DADOS = {
  room: "abc001",
  player: "Player 1",
  words: { list: ["Palitó", "Pálido", "Palito", "Palíndromo"] },
  tries: []
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = DADOS;
  }
  addTry(newTry) {
    let newState = Object.assign({}, this.state, { tries: this.state.tries.concat(newTry) });
    this.setState(newState);
  }
  componentDidMount() {
    this.setState(DADOS);
  }

  geraWords = () => {
    let newWords = { words: { list: ["Tempero", "Tempera", "Têmpera", "Temperar"] }}
    this.setState(newWords);
  }

  render() {
    return (
      <div>
        <NavBar />
        <h1>{this.state.player}'s turn</h1>
        <ImageGraph />
        <MicButton words={this.state.words}  geraWord={this.geraWords} addTry={this.addTry.bind(this)} />
      </div>
    );
  }
}

export default App;
