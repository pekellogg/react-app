import React from "react";
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom";
import "./styles/index.css";
import Navigation from "./features/navigation.component";
import App from "./App";
// import store from "./redux/store";
// import { Provider } from "react-redux";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
      <Router>
          <Navigation/>
          <App />
        </Router>
    {/* </Provider> */}
  </React.StrictMode>
);