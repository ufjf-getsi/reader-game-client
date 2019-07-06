import React, { Component } from "react";
import ImageGraph from "./images/ImageGraph"
import MicButton from "./MicButton";
import Typography from "@material-ui/core/Typography";
import Axios from "axios";
import "./TelaJogar.css";
const DADOS = {
  opcoes: {},
  room: "abc001",
  player: "Player 1",
  words: { list: ["Palitó", "Pálido", "Palito", "Palíndromo"] },
  tries: [],
  nodes: "[]",
  items: [],
  jogadores:[{nome:"..."}],
  currentPlayer:0
};


class PlayScreen extends Component {
  classes;
  constructor(props) {
    super(props);
    this.state = DADOS;
    this.classes = props;
    this.gamestatus = Axios.create({
      baseURL: process.env.REACT_APP_GAME_SERVER_BASE_URL + process.env.REACT_APP_GAME_SERVER_GAME_STATUS_URL,
      timeout: 1000,
      //headers: { "x-apikey": process.env.REACT_APP_GAME_SERVER_API_KEY }
    });
    this.room = props.match.params.id;
  }
  addTry(newTry) {
    let newState = Object.assign({}, this.state, { tries: this.state.tries.concat(newTry) });
    this.setState(newState);
  }
  componentDidMount() {

    this.gamestatus.get(this.room).then(res => {
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

    let jogador = this.state.jogadores[this.state.currentPlayer];
    
    return (
      <div className={this.classes.root}>
        <Typography variant="h6" color="inherit">
          {jogador.name}
        </Typography>
        <dl id="stash">
          <div className="ruby">
            <dt role="img">💎</dt>
            <dd>0</dd>
          </div>
          <div className="emerald">
            <dt role="img">💎</dt>
            <dd>0</dd>
          </div>
          <div className="saphire">
            <dt role="img">💎</dt>
            <dd>0</dd>
          </div>
        </dl>
        <ImageGraph gamestatus={this.state} />
        <MicButton words={this.state.opcoes} gamestatus={this.state} geraWord={this.geraWords} addTry={this.addTry.bind(this)} />
      </div>
    );
  }
}


export default PlayScreen;
