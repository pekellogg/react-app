import React, { Component } from "react";
import { connect } from "react-redux";
import Rovers from "./Rovers";
import "./RoversContainer.module.css";

class RoversContainer extends Component {

  handleLoading = () => {
    if (this.props.loading) {
      return `Loading...`
    } else {
      return < Rovers rovers={this.props.rovers} />
    }
  };

  render() {
    return (
      <div className="roversContainer">
        {this.handleLoading()}
      </div>
    );
  };

};

const mapStateToProps = (state) => ({ rovers: state.rovers });

export default connect(mapStateToProps)(RoversContainer);