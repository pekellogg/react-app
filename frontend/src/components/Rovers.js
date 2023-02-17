import React from "react";
import Rover from "./Rover";

class Rovers extends React.Component {

  displayRovers = () => {
    return (
      this.props.rovers.all.map((rover) => (
        <div
          className="rover"
          id={rover.external_id}
          key={rover.external_id}
        >
          < Rover
            addComment={this.props.addComment}
            comments={rover.comments}
            deleteComment={this.props.deleteComment}
            editComment={this.props.editComment}
            id={rover.external_id}
            key={rover.external_id}
            landingDate={rover.landing_date}
            launchDate={rover.launch_date}
            name={rover.name}
            profilePic={rover.profile_pic}
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