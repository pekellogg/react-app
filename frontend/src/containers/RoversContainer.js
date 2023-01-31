import React, { Component } from "react";
import { connect } from "react-redux";
import { addComment, deleteComment, editComment, fetchRovers } from "../actions/roverActions";
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
        <Rovers
          addComment={this.props.addComment}
          editComment={this.props.editComment}
          deleteComment={this.props.deleteComment}
          rovers={this.props.rovers}
        />
      );
    }
  };

  render() {
    return (
      <div>
        <h1>Mars Rovers</h1>
        {this.handleLoading()}
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
    addComment: (comment) => dispatch(addComment(comment)),
    editComment: (comment) => dispatch(editComment(comment)),
    deleteComment: (commentId, roverId) => dispatch(deleteComment(commentId, roverId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RoversContainer);