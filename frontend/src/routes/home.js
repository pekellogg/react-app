import React from "react";
import initRovers from "../data/init-rovers";
import RoverCard from "../features/rovers/rover-card.component";

const Home = () => {

  const displayInitRoverCards = () => {
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

  return (
    <div className="home">
      <div className="about-rovers">
        {displayInitRoverCards()}
      </div>
    </div>
  );

};

export default Home;