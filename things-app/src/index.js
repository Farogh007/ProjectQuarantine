import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

import App from "./layouts/MyApp";
//import App from "../src/views/MyThings/MyThings";

const hist = createBrowserHistory();

//ReactDOM.render(<App />, document.getElementById("root"));

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/app" component={App} />
      <Redirect from="/" to="/app" />
    </Switch>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
