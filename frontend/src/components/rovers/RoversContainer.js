import React, { Component } from "react";
import { connect } from "react-redux";
import RoverCard from "./RoverCard";
import "./RoversContainer.css";

class RoversContainer extends Component {

  state = {
    "roverid5": {
      visible: true
    },
    "roverid6": {
      visible: true
    },
    "roverid7": {
      visible: true
    },
    "roverid8": {
      visible: true
    },
  };

  handleClick = (e) => {
    this.setState((prevState) => ({
      ...prevState,
      [`roverid${[e.target.attributes.roverid.value]}`]: {
        visible: !prevState[`roverid${[e.target.attributes.roverid.value]}`].visible,
      }
    }));
  };

  displayRovers = () => {
    if (this.props.loading) {
      return `Loading...`
    } else {
      return (
        this.props.rovers.all.map((rover) => (
          <div className="RoverContainer" id={`RoverContainer-${rover.id}`} key={`RoverContainer-${rover.id}`}>
            <RoverCard
              { ...rover }
              key={`RoverCard-${rover.id}`}
              onClick={this.handleClick}
              visible={this.state[`roverid${rover.id}`].visible}
            />
          </div>
        ))
      );
    }
  };

  render() {
    return (
      <div className="RoversContainer" id="RoversContainer">
        { this.displayRovers() }
      </div>
    );
  };

};

const mapStateToProps = (state) => ({ rovers: state.rovers });

export default connect(mapStateToProps)(RoversContainer);