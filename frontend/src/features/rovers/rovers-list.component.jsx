import React, { Component } from "react";
import RoverCard from "./rover-card.component.jsx";
import initRovers from "../../data/init-rover-data.component.jsx";

export default class RoverShowcase extends Component {

	createRoverCards = () => {
		return initRovers.map((rover) => {
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
      <div id="rover-showcase">
        {this.createRoverCards()}
      </div>
    );
	}

};