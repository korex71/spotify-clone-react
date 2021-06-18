import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AppContext from "./contexts/AppContext";
import App from "./App";
import Login from "./component/Login";

ReactDOM.render(
  <BrowserRouter>
        <AppContext>
            <Switch>
              <Route path="/" component={App} exact />
              <Route path="/login" component={() => <Login/>} />

            </Switch>
        </AppContext>
  </BrowserRouter>,
  document.getElementById("root")
);
