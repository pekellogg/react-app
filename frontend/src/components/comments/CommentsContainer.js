import React, { Component } from "react";
import Comment from "./Comment";
import NewComment from "./NewComment";
import "./CommentsContainer.css";

class CommentsContainer extends Component {

  displayComments = () => {
    if (this.props.comments.length > 0) {
      return (
        this.props.comments.map((comment) => (
          <li key={comment.id}>
            < Comment
              { ...comment }
              key={comment.id}
              roverId={this.props.roverId}
            />
          </li>
        ))
      );
    }
  };

  render() {
    return (
      <div className="commentsContainer">

        < NewComment roverId={this.props.roverId} />

        <ul>
          { this.displayComments() }
        </ul>
        
      </div>
    );
  };

};

export default CommentsContainer;