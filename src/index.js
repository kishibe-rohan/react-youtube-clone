import ReactDOM from "react-dom";
import React from "react";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App";
import "./_base.scss";
import store from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
