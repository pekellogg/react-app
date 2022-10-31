import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import RoverCard from "./rover-card.component.jsx";

export default class RoversList extends Component {

  render() {
    return (
      <Switch>
        <Route exact path="/rovers/:id">
          <RoverCard />
        </Route>
      </Switch>
    );
  }


};