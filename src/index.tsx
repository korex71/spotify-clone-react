import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AppContext from "./contexts/AppContext";
import App from "./App";
import Login from "./component/Login";
import ForgotPassword from "./component/forgotPassword";
import AuthContext from "./contexts/AuthContext";

import "./apix";

ReactDOM.render(
  <BrowserRouter>
    <AppContext>
      <AuthContext>
        <Switch>
          <Route path="/" component={App} exact />
          <Route path="/signin" component={Login} />
          {/* <Route path="/signup" component={} /> */}
          <Route path="/forgot" component={ForgotPassword} />
        </Switch>
      </AuthContext>
    </AppContext>
  </BrowserRouter>,
  document.getElementById("root")
);
