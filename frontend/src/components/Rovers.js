import React from "react";
import Rover from "./Rover";

class Rovers extends React.Component {

  displayRovers = () => {
    return (
      this.props.rovers.map((rover) => (
        <div id={rover.external_id} key={rover.external_id} >
          < Rover
            key={rover.external_id}
            id={rover.external_id}
            name={rover.name}
            landingDate={rover.landing_date}
            launchDate={rover.launch_date}
            status={rover.status}
          />
        </div>
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