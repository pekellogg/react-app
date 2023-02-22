import React from "react";
import Rover from "./Rover";

class Rovers extends React.Component {

  displayRovers = () => {
    return (
      this.props.rovers.all.map((rover) => (
        < Rover
          addComment={this.props.addComment}
          comments={rover.comments}
          deleteComment={this.props.deleteComment}
          displayDate={this.props.displayDate}
          editComment={this.props.editComment}
          id={rover.external_id}
          key={rover.external_id}
          landingDate={rover.landing_date}
          launchDate={rover.launch_date}
          name={rover.name}
          profilePic={rover.profile_pic}
          status={rover.status}
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