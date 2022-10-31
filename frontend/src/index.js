import React from "react";
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom";
import "./styles/index.css";
import Navigation from "./features/navigation.component";
import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Router>
      <Navigation/>
      <App />
    </Router>
  </React.StrictMode>
);