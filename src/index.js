import { StrictMode } from "react";
import ReactDOM from "react-dom";

import { createStore } from "redux";
import { Provider } from "react-redux";


import App from "./App.tsx";
import lessonReducer from "./reducers/lessons";
const store = createStore(lessonReducer);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);


