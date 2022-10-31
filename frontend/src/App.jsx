import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./routes/home";
import About from "./routes/about";
import RoverShowcase from "./features/rovers/rovers-list.component";
import Navigation from "./features/navigation.component";
import "./styles/index.css";

export default class App extends React.Component {

  render () {
    return (
      <div className="app">
        <Navigation/>
        <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/rovers">
          <RoverShowcase />
        </Route>
      </Switch>
      </div>
    );
  }

};