import React, { Component } from "react";
import Comments from "./Comments";
import "./CommentsContainer.css";

class CommentsContainer extends Component {

  render() {
    return (
      <div className="commentsContainer">
        <Comments
          addComment={this.props.addComment}
          comments={this.props.comments}
          deleteComment={this.props.deleteComment}
          editComment={this.props.editComment}
          roverId={this.props.roverId}
        />
      </div>
    );
  };

};

export default CommentsContainer;