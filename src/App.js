import React, { Component } from "react";
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import TelaJogar from "./components/TelaJogar"
import TelaInicial from './components/TelaInicial'
import CriarSala from './components/CriarSala'
import Error from './components/Error'
import "./App.css";

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={TelaInicial} exact />
          <Route exact path='/jogar/' component={TelaJogar} />
          <Route exact path='/criar/' component={CriarSala} />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
