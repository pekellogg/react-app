import React, { Component } from "react";
import { connect } from "react-redux";
import RoverCard from "./RoverCard";
import "./RoversContainer.css";

class RoversContainer extends Component {

  revealShow = (e) => {
    // console.log(e.target.attributes.roverid.value)
  }

  displayRovers = () => {
    if (this.props.loading) {
      return `Loading...`
    } else {
      return (
        this.props.rovers.all.map((rover) => (
          < RoverCard
            { ...rover }
            comments={rover.comments}
            key={rover.external_id}
            revealShow={this.revealShow}
          />
        ))
      );
    }
  };

  render() {
    return (
      <div id="RoversContainer">
        { this.displayRovers() }
      </div>
    );
  };

};

const mapStateToProps = (state) => ({ rovers: state.rovers });

export default connect(mapStateToProps)(RoversContainer);