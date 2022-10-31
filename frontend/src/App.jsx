import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./routes/home";
import About from "./routes/about";
import RoversList from "./features/rovers/rovers-list.component";
import "./styles/index.css";

export default class App extends React.Component {

  componentDidMount() {
    let url = "http://localhost:3000/api/v1/rovers";
    // if (selectedRover) {
    //   url = `http://localhost:3000/rovers/${selectedRover.name}/photos`;
    // }
    fetch(url)
    .then((response) => response.json())
    .then((rovers) => console.log(rovers));
  };

	// const createRoverCards = () => {
	// 	return rovers.map((rover) => {
  //     return (
  //       <RoverCard
  //         key={rover.externalID}
  //         name={rover.name}
  //         landingDate={rover.landingDate}
  //         launchDate={rover.launchDate}
  //         status={rover.status}
  //       />
  //     )
  //   });
	// };
  
  render() {
    return (
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/rovers">
          <RoversList />
        </Route>
      </Switch>
    )
  }

};