import React, { Component } from "react";
import { connect } from "react-redux";
import RoverCard from "./RoverCard";
import RoverShow from "./RoverShow";
import "./RoversContainer.css";

class RoversContainer extends Component {

  state = {
    "roverid5": {
      showPage: false, indexPage: true
    },
    "roverid6": {
      showPage: false, indexPage: true
    },
    "roverid7": {
      showPage: false, indexPage: true
    },
    "roverid8": {
      showPage: false, indexPage: true
    },
  };

  initialState = {
    "roverid5": {
      showPage: false, indexPage: true
    },
    "roverid6": {
      showPage: false, indexPage: true
    },
    "roverid7": {
      showPage: false, indexPage: true
    },
    "roverid8": {
      showPage: false, indexPage: true
    },
  };

  componentDidMount() {
    { console.log("Component Mounted"); }
  };

  handleClick = (e) => {
    const target = `roverid${e.target.attributes.roverid.value}`;
    this.setState((prevState) => {
      if (prevState[target].showPage) {
        return this.initialState;
      } else {
        const updatedState = { ...prevState };
        for (const rover in updatedState) {
          if (rover !== target) {
            updatedState[rover] = {
              showPage: false,
              indexPage: false,
            }
          } else {
            updatedState[target] = {
              showPage: true,
              indexPage: false,
            }
          }
        }
        return updatedState;
      }
    })
  };

  displayRovers = () => {
    if (this.props.loading) {
      return `Loading...`
    } else {
      return (
        this.props.rovers.all.map((rover) => (
          <div className="RoverContainer" id={`RoverContainer-${rover.id}`} key={`RoverContainer-${rover.id}`}>
            {[
              <RoverCard
                { ...rover }
                key={`RoverCard-${rover.id}`}
                onClick={this.handleClick}
                roverstate={this.state[`roverid${rover.id}`]}
              />,
              <RoverShow { ...rover } key={`RoverShow-${this.props.id}`} visible={this.state[`roverid${rover.id}`].showPage}/>
            ]}
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