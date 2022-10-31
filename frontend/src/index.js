import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/App.css";
import App from "./App";
import Header from "./features/header.component.jsx";
import Navigation from "./features/navigation.component.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App>
      <Header />
      <Navigation />
    </App>
  </React.StrictMode>
);