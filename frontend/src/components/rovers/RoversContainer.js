import React, { Component } from "react";
import { connect } from "react-redux";
import Rover from "./Rover";

class RoversContainer extends Component {

  displayRovers = () => {
    if (this.props.loading) {
      return `Loading...`
    } else {
      return (
        this.props.rovers.all.map((rover) => (
          < Rover
            { ...rover }
            comments={rover.comments}
            key={rover.external_id}
          />
        ))
      );
    }
  };

  render() {
    return (
      <div className="roversContainer">
        { this.displayRovers() }
      </div>
    );
  };

};

const mapStateToProps = (state) => ({ rovers: state.rovers });

export default connect(mapStateToProps)(RoversContainer);