import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./routes/home";
import About from "./routes/about";
import RoverCard from "./features/rovers/rover-card.component";
import RoversList from "./features/rovers/rovers-list.component";
import "./styles/index.css";

export default class App extends React.Component {

  componentDidMount() {
    this.fetchRovers = () => {
      let roversURL = "http://localhost:3000/api/v1/rovers";
      fetch(roversURL)
      .then(response => response.json())
      .then(rovers => this.createRoverCards(rovers));
    }
    // this.fetchPhotos = () => {
    //   let photosURL = "http://localhost:3000/api/v1/photos";
    //   fetch(photosURL)
    //   .then(response => console.log(response.json()))
    //   .then(photos => this.createPhotos(photos));
    // }
  };

  // createPhotos = (photos) => {
	// 	return photos.map((photo) => {
  //     return (
  //       <img src="" alt=""/>
  //     )
  //   });
	// };

	createRoverCards = (rovers) => {
		return rovers.map((rover) => {
      return (
        <RoverCard
          key={rover.externalID}
          name={rover.name}
          landingDate={rover.landingDate}
          launchDate={rover.launchDate}
          status={rover.status}
        />
      )
    });
	};

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