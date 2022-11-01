import React from "react";
import Rovers from "./Rovers";

function RoversList({ initRovers }) {

  const renderRovers = () => {
    return Object.entries(initRovers).map((rover) => (
      <Rovers key={rover.externalID} rover={rover}/>
    ))
  }

  return (
    <div className="rovers">
      {renderRovers()}
    </div>
  );

};

export default RoversList;