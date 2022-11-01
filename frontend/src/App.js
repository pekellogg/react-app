import React from "react";
import { Rovers } from "./features/rovers/Rovers";
import { CommentForm } from "./features/comments/CommentForm";
import "./styles/index.css";

function App() {

  return (
    <div className="app">
      <CommentForm />
      <Rovers />
    </div>
  );
  
};

export default App;