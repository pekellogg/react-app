import React from "react";
import Rover from "./Rover";

class Rovers extends React.Component {

  displayRovers = () => {
    return (
      this.props.rovers.all.map((rover) => (
        < Rover
          { ...rover }
          comments={rover.comments}
          key={rover.external_id}
        />
      ))
    );
  };

  render() {
    return (
      <>
        {this.displayRovers()}
      </>
    );
  };

};

export default Rovers;