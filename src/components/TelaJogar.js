import React, { Component } from "react";
import ImageGraph from "./images/ImageGraph"
import MicButton from "./MicButton";
import Typography from "@material-ui/core/Typography";
import Axios from "axios";

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
    this.gamestatus = Axios.create({
      baseURL: process.env.REACT_APP_GAME_SERVER_BASE_URL,
      timeout: 1000,
      //headers: { "x-apikey": process.env.REACT_APP_GAME_SERVER_API_KEY }
    });
  }
  addTry(newTry) {
    let newState = Object.assign({}, this.state, { tries: this.state.tries.concat(newTry) });
    this.setState(newState);
  }
  componentDidMount() {
    
    this.gamestatus.get("abcdef").then(res => {
      console.log("then:", res);
      this.setState(res.data);

    }
    ).catch(err => {
      console.log("err:", err);
    })
  }

  componentWillMount() {

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
        <MicButton words={this.state.words} gamestatus={this.state} geraWord={this.geraWords} addTry={this.addTry.bind(this)} />
      </div>
    );
  }
}


export default PlayScreen;
