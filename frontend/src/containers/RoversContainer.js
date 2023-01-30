import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchRovers } from "../actions/roverActions";
import Rovers from "../components/Rovers";

class RoversContainer extends Component {

  componentDidMount() {
    this.props.fetchRovers();
  };

  handleLoading = () => {
    if (this.props.loading) {
      return (
        <div>
          Loading...
        </div>
      );
    } else {
      return (
        <Rovers rovers={this.props.rovers} />
      );
    }
  };

  render() {
    return (
      <div>
        <h1>Mars Rovers</h1>
        {this.handleLoading()}
        {/* < CommentContainer comments={} addComment={this.props.addComment} deleteComment={this.props.deleteComment} /> */}
      </div>
    );
  };

};

const mapStateToProps = (state) => {
  return {
    rovers: state.rovers.all,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRovers: () => dispatch(fetchRovers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RoversContainer);