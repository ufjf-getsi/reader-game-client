import React, { Component } from 'react';
import { ReactMic } from 'react-mic';
import QuestionButtons from './QuestionButtons';
import axios from 'axios';
import https from 'https'

const agent = new https.Agent({
  rejectUnauthorized: false,
  ca: process.env.REACT_APP_CA_CERT,
  cert: process.env.REACT_APP_CERT,
  key: process.env.REACT_APP_KEY
});

export class MicButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      record: false
    }

  }

  startRecording = (word) => {
    console.log("START " + word);

    this.setState({
      record: true,
      lastWord: word,
      lastBlob: null
    });
  }

  stopRecording = (word) => {
    console.log("STOP " + word);
    this.setState({
      record: false,
      lastWord: this.state.lastWord
    });
    this.props.addTry({
      blob: this.state.lastBlob,
      word: this.state.lastWord
    });
  }

  saveData(newState) {
    var blob = newState.lastBlob
    var word = newState.word
    const data = {
      blob: {
        size: blob.size,
        type: blob.type
      },
      blobURL: blob.blobURL,
      options: {
        audioBitsPerSecond: blob.options.audioBitsPerSecond,
        mimeType: blob.options.mimeType
      },
      startTime: blob.startTime,
      stopTime: blob.stopTime,
      word: word
    }
    axios.post('http://localhost:3002/audioData', data).then(response => {
      console.log("Dados Adicionados no DB");
    });
  }

  onData(recordedBlob) {
    // Não relevante.
    //console.log('chunk of real-time data is: ', recordedBlob);
  }

  onStop(recordedBlob) {
    const newState = { record: this.state.record, lastWord: this.state.lastWord, lastBlob: recordedBlob};
    this.setState(newState);
    const instance = axios.create({
      httpsAgent: agent
    });

    instance
      .post(
        "https://glacial-temple-80235.herokuapp.com/audio",
        //"https://172.18.41.228:8181/reader-game-server/audio",
        //"http://localhost:8080/reader-game-server/audio",
        recordedBlob.blob,
        { headers: { "content-type": "multipart/form-data" },
          httpsAgent: agent }
      )
      .then((response, error) => {
        console.log("PLOG E: ", response, error);
      });
  }

  render() {
    return (
      <div>
        <ReactMic
          record={this.state.record}
          className="sound-wave"
          width="300"
          onStop={this.onStop.bind(this)}
          onData={this.onData}
          strokeColor="#000000"
          backgroundColor="#BAD8EB"
        />
        <QuestionButtons
          words={this.props.words}
          onStartRecording={this.startRecording}
          onStopRecording={this.stopRecording}
        />

        <a
          href={
            this.state.lastBlob
              ? this.state.lastBlob.blobURL
              : ""
          }
          download="teste.webm"
        >
          Download:{" "}
          {this.state.lastBlob
            ? this.state.lastBlob.blobURL
            : ""}
        </a>
      </div>
    );
  }
}
export default MicButton;