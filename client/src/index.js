import React from "react";
import { createRoot } from "react-dom/client";
import DataContextProvider from "./shared/DataContextProvider";
import App from "./App";
import "./styles.css";

// select root DOM node
const domNode = document.getElementById("root");
// create a root to display React components inside a browser DOM node.
const root = createRoot(domNode);

root.render(
  <React.StrictMode>
    <DataContextProvider>
      <App />
    </DataContextProvider>
  </React.StrictMode>
);
