import React, { Component } from 'react';
import { ReactMic } from 'react-mic';
import QuestionButtons from './QuestionButtons';
 
export class MicButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      record: false
    }
 
  }
 
  startRecording = (word) => {
    console.log("START "+word);
    
    this.setState({
      record: true,
      lastWord: word,
      lastBlob: null
    });
  }
  
  stopRecording = (word) => {
    console.log("STOP "+word);
    this.setState({
      record: false,
      lastWord: this.state.lastWord
    });
    this.props.addTry({
      blob: this.state.lastBlob,
      word: this.state.lastWord
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
    
  }
 
  render() {
    return (
      <div>
        <ReactMic
          record={this.state.record}
          className="sound-wave"
          onStop={this.onStop.bind(this)}
          onData={this.onData}
          strokeColor="#000000"
          backgroundColor="#FF4081" />
        <QuestionButtons words={this.props.words} onStartRecording={this.startRecording} onStopRecording={this.stopRecording}/>
      </div>
    );
  }
}
export default MicButton;