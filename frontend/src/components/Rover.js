import React from "react";

class Rover extends React.Component {

  render() {
    return (
      <div className="rovers">
        <p>Name: {this.props.name}</p>
        <p>Launched: {this.props.landingDate}</p>
        <p>Landed on Mars: {this.props.landingDate}</p>
        <p>Mission Status: {this.props.status}</p>
      </div>
    );
  };

};

export default Rover;