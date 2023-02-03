import React from "react";
import Rover from "./Rover";

class Rovers extends React.Component {

  displayRovers = () => {
    // console.log(this.props.rovers.all)
    return (
      this.props.rovers.all.map((rover) => (
        <div
          className="rover"
          id={rover.external_id}
          key={rover.external_id}
        >
          < Rover
            addComment={this.props.addComment}
            deleteComment={this.props.deleteComment}
            editComment={this.props.editComment}
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
        {this.displayRovers()}
      </div>
    );
  };

};

export default Rovers;