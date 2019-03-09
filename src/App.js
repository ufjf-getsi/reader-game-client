import React, { Component } from "react";
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import PlayScreen from "./components/PlayScreen"
import EntryScreen from './components/EntryScreen'
import CriarSala from './components/CriarSala'
import Error from './components/Error'
import "./App.css";

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={EntryScreen} exact />
          <Route exact path='/jogar/' component={PlayScreen} />
          <Route exact path='/criar/' component={CriarSala} />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
