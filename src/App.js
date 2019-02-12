import React, { Component} from 'react';
import NavBar from './components/NavBar'
import ImageGraph from './components/ImageGraph'
import QuestionButtons from './components/QuestionButtons'
import MicButton from './components/MicButton'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
          <NavBar/>         
          <ImageGraph/>
          <QuestionButtons/>
          <MicButton/>
      </div>
    );
  }
}

export default App;
