import React from "react";
import RoverShowcase from "./features/rovers/rovers-list.component";
import "./styles/App.css"

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