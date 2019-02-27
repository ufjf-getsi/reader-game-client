import React, { Component } from "react";
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import PlayScreen from "./components/PlayScreen"
import EntryScreen from './components/EntryScreen'
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path ='/' component={EntryScreen}/>
          <Route exact path='/jogar/' component={PlayScreen}/> 
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
