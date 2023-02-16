import React, { Component } from "react";
import { connect } from "react-redux";
import { addComment, deleteComment, editComment } from "../actions/roverActions";
import Rovers from "../components/Rovers";
import style from "./RoversContainer.module.css";

class RoversContainer extends Component {

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
      <>
        <h1>Mars Rovers</h1>
        <div className={`${style.roversContainer}`}>
          {this.handleLoading()}
        </div>
      </>
    );
  };

};

const mapStateToProps = (state) => ({ rovers: state.rovers });

const mapDispatchToProps = (dispatch) => {
  return {
    addComment: (comment) => dispatch(addComment(comment)),
    editComment: (comment) => dispatch(editComment(comment)),
    deleteComment: (commentId, roverId) => dispatch(deleteComment(commentId, roverId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RoversContainer);