import React from "react";
import Rover from "./Rover";

class Rovers extends React.Component {

  displayRovers = () => {
    // console.log(this.props);
    return (
      this.props.rovers.map((rover) => (
        <div
          className="rover"
          id={rover.external_id}
          key={rover.external_id}
        >
          < Rover
            addComment={this.props.addComment}
            key={rover.external_id}
            id={rover.external_id}
            name={rover.name}
            landingDate={rover.landing_date}
            launchDate={rover.launch_date}
            status={rover.status}
            comments={rover.comments}
          />
        </div>
      ))
    );
  };

  render() {
    return (
      <div>
        {/* {console.log(this.props)} */}
        {this.displayRovers()}
      </div>
    );
  };

};

export default Rovers;