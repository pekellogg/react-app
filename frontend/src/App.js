import React from "react";
import RoverShowcase from "./RoverShowcase";
import "./App.css";

export default class App extends React.Component {
  render () {
    return (
      <div className="App">
        <h1>Mars Rovers Photos</h1>
        <div>
          <RoverShowcase />
        </div>
      </div>
    );
  }

};