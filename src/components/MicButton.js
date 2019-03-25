import React, { Component } from 'react';
import { ReactMic } from 'react-mic';
import QuestionButtons from './QuestionButtons';
import axios from 'axios';

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
    console.log('chunk of real-time data is: ', recordedBlob);
  }

  onStop(recordedBlob) {
    console.log('recordedBlob is: ', recordedBlob);
    const newState = { record: this.state.record, lastWord: this.state.lastWord, lastBlob: recordedBlob };
    this.setState(newState);
    console.log(newState);
    this.saveData(newState);
    //this.props.geraWord();
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
          backgroundColor="#BAD8EB" />
        <QuestionButtons words={this.props.words} onStartRecording={this.startRecording} onStopRecording={this.stopRecording} />
      </div>
    );
  }
}
export default MicButton;