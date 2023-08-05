import React from "react";
import { createRoot } from "react-dom/client";
// enable client-side routing: import the browser router
import { AppRouter as Router } from "./ui/shared/routes";
import "./styles.css";

// select root DOM node
const domNode = document.getElementById("root");

// create a root to display React components inside a browser DOM node
const root = createRoot(domNode);

root.render(
  <React.StrictMode>
    {/* render a browser router */}
    <Router />
  </React.StrictMode>
);
