import React from "react";
import RoverShowcase from "./features/rovers/rovers-list.component";
import "./styles/App.css"
import Navigation from "./features/navigation.component.jsx"

export default class App extends React.Component {
  render () {
    return (
      <div className="App">
        <Navigation />
        <h1>Mars Rovers</h1>
        <div>
          <RoverShowcase />
        </div>
      </div>
    );
  }

};