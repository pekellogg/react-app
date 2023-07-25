import React from "react";
import { createRoot } from "react-dom/client";
import DataContextProvider from "./shared/DataContextProvider";
import App from "./App";
import "./styles.css";

const domNode = document.getElementById("root");
const root = createRoot(domNode);

root.render(
  <React.StrictMode>
    <DataContextProvider>
      <App />
    </DataContextProvider>
  </React.StrictMode>
);
