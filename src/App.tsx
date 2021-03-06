import React from "react";
import { Route, Router, Switch } from "react-router";
import { createBrowserHistory } from "history";
import Home from "./pages/home";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store";
import NotFound from "./pages/NotFound/NotFound";

const history = createBrowserHistory();
const App = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route component={NotFound} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
