import React, { Component } from "react";
import Comment from "./Comment";
import NewComment from "./NewComment";
import "./CommentsContainer.css";

class CommentsContainer extends Component {

  displayComments = () => {
    if (this.props.comments.length > 0) {
      return (
        this.props.comments.map((comment) => (
          < Comment
            { ...comment }
            key={comment.id}
            roverId={this.props.roverId}
          />
        ))
      );
    }
  };

  render() {
    return (
      <div className="commentsContainer">
        < NewComment roverId={this.props.roverId} />
        {this.displayComments()}
      </div>
    );
  };

};

export default CommentsContainer;