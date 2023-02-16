import React, { Component } from "react";
import Comments from "../components/Comments";
import style from "./CommentsContainer.module.css";

class CommentsContainer extends Component {

  render() {
    return (
      <div className={`${style.commentsContainer}`}>
        <Comments
          addComment={this.props.addComment}
          deleteComment={this.props.deleteComment}
          editComment={this.props.editComment}
          comments={this.props.comments}
          roverId={this.props.roverId}
        />
      </div>
    );
  };

};

export default CommentsContainer;