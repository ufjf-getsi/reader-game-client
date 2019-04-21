import React, { Component } from "react";
import ImageGraph from "./Images/ImageGraph"
import MicButton from "./MicButton";
import Typography from "@material-ui/core/Typography";

const DADOS = {
  room: "abc001",
  player: "Player 1",
  words: { list: ["Palitó", "Pálido", "Palito", "Palíndromo"] },
  tries: []
};

class PlayScreen extends Component {
  classes;
  constructor(props) {
    super(props);
    this.state = DADOS;
    this.classes = props;
  }
  addTry(newTry) {
    let newState = Object.assign({}, this.state, { tries: this.state.tries.concat(newTry) });
    this.setState(newState);
  }
  componentDidMount() {
    this.setState(DADOS);
  }

  geraWords = () => {
    let newWords = { words: { list: ["Tempero", "Tempera", "Têmpera", "Temperar"] } }
    this.setState(newWords);
  }

  render() {
    return (
      <div className={this.classes.root}>
        <Typography variant="h6" color="inherit">
          {this.state.player}'s turn
          </Typography>
        <ImageGraph />
        <MicButton words={this.state.words} geraWord={this.geraWords} addTry={this.addTry.bind(this)} />
      </div>
    );
  }
}


export default PlayScreen;
