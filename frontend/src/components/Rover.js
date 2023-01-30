import React from "react";

class Rover extends React.Component {

  render() {
    return (
      <>
        <p>Name: {this.props.name}</p>
        <p>Launched: {this.props.landingDate}</p>
        <p>Landed on Mars: {this.props.landingDate}</p>
        <p>Mission Status: {this.props.status}</p>
      </>

    );
  };

};

export default Rover;