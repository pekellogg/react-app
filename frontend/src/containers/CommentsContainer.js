import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchComments } from "../actions/commentActions";
import Comments from "../components/Comments";

class CommentsContainer extends Component {

  constructor() {
    super();
  };

  componentDidMount() {
    this.props.fetchComments();
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
        <Comments comments={this.props.comments} />
      );
    }
  };

  render() {
    return (
      <div>
        <h1>Mars Comments</h1>
        {this.handleLoading()}
      </div>
    );
  };

};

const mapStateToProps = (state) => {
  return {
    comments: state.comments,
    loading: state.loading,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchComments: () => dispatch(fetchComments()),
//   };
// };

const mapDispatchToProps = (dispatch) => ({
  fetchComments: () => dispatch(fetchComments()),
  addComment: (comment) => dispatch({ type: "POSTING_COMMENT", comment }),
  // deleteComment: (commentId) => dispatch({ type: "DELETE_BAND", commentId }),
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentsContainer);