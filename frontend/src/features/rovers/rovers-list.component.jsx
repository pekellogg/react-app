import React, { Component } from "react";
import RoverCard from "./rover-card.component.jsx";
import roverInitData from "../../data/init-rover-data.component.jsx";

export default class RoverShowcase extends Component {

	createRoverCards = () => {
		return roverInitData.map((rover, index) =>
      <RoverCard
        key={index}
        name={rover.name}
        landing_date={rover.landing_date}
        launch_date={rover.launch_date}
        status={rover.status}
      />
    )
	};

	render() {
		return (
      <div id="rover-showcase">
        {this.createRoverCards()}
      </div>
    );
	}

};