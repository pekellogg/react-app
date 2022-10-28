import React, { Component } from 'react';
import RoverCard from './RoverCard.jsx';
import roverInitData from './RoverInitData.js';

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