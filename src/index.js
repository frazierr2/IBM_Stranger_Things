import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import * as English from "./Data/en_US.json";
import * as PigLatin from "./Data/la_PG.json";

// Redux Store
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import languageReducer from "./Reducers/languageReducer";

const allReducers = combineReducers({
  language: languageReducer
});

const initialState = {
  language: "English",
  eng: [English.default],
  pig: [PigLatin.default]
};

// Redux Store w/ Initial State
const store = createStore(
  allReducers,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//WITH REDUX
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
