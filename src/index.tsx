import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import AppContext from "./contexts/AppContext";
import App from "./App";

ReactDOM.render(
  <BrowserRouter basename="/">
    <AppContext>
      <App />
    </AppContext>
  </BrowserRouter>,
  document.getElementById("root")
);
