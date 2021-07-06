import React, {useState} from 'react';
import { Route, Router, Switch } from "react-router";
import { createBrowserHistory } from "history";
import Home from './pages/home';
import AddMoviePage from "./pages/addMoviePage/AddMoviePage";
import './App.css';


const history = createBrowserHistory();
const App = () => {
  return (
      <Router history={history}>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
