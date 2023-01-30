import React from "react";
import Rover from "./Rover";

class Rovers extends React.Component {

  displayRovers = () => {
    return (
      this.props.rovers.map((rover) => (
        < Rover
          key={rover.external_id}
          externalId={rover.external_id}
          name={rover.name}
          landingDate={rover.landing_date}
          launchDate={rover.launch_date}
          status={rover.status}
        />
      ))
    );
  };

  render() {
    return (
      <div>
        {this.displayRovers()}
      </div>
    );
  };

};

export default Rovers;