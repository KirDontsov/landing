import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { init } from "@rematch/core";

import shutter from "./models/shutter";
import filters from "./models/filters";
import search from "./models/search";
import callBack from "./models/callBack";

import App from "./App";

const store = init({
  models: {
    shutter,
    filters,
    search,
    callBack
  }
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
