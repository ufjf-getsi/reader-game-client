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
      <div>
        <BrowserRouter basename={'/reader-game-client'}>
          <Switch>
            <Route exact path={`${process.env.PUBLIC_URL}/`} component={TelaInicial} />
            <Route exact path={`${process.env.PUBLIC_URL}/jogar/:id`} component={TelaJogar} />
            <Route exact path={`${process.env.PUBLIC_URL}/criar`} component={CriarSala} />
            <Route component={Error} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
