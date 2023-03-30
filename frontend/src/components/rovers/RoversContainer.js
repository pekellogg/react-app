import React, { Component } from "react";
import { connect } from "react-redux";
import RoverCard from "./RoverCard";
import "./RoversContainer.css";

class RoversContainer extends Component {
  
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     clicked: false,
  //   }
  //   this.handleClick = this.handleClick.bind(this);
  // };

  // handleClick = (e) => {
    // console.log(e.target.attributes.roverid.value);
    // this.setState((prevState) => ({
      // clicked: !prevState.clicked
    // }))
  // };

  displayRovers = () => {
    if (this.props.loading) {
      return `Loading...`
    } else {
      return (
        this.props.rovers.all.map((rover) => (
          <div className="RoverContainer" id={`RoverContainer-${rover.id}`} key={`RoverContainer-${rover.id}`}>
            <RoverCard
              { ...rover }
              // clicked={this.state.clicked}
              key={`RoverCard-${rover.id}`}
              // onClick={this.handleClick}
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