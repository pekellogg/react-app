import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import roversReducer from "./reducers/roversReducer";
// import { createStore, applyMiddleware, compose } from "redux";
// import thunk from "redux-thunk";
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(roversReducer, composeEnhancers(applyMiddleware(thunk)));
// const store = createStore(manageComments, applyMiddleware(thunk));
// const store = createStore(photosReducer, applyMiddleware(thunk));

import photosReducer from "./reducers/photosReducer";
// import manageComments from "./reducers/manageComments";
import App from "./App";

const domNode = document.getElementById("root");
const root = createRoot(domNode);

const reducer = {
  roversReducer,
  photosReducer,
}

// https://redux-toolkit.js.org/api/configureStore#reducer
const store = configureStore({reducer})

root.render(
  <Provider store={store} >
    <App />
  </Provider>,
);