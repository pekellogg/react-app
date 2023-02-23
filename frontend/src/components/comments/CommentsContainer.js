import React, { Component } from "react";
import Comment from "./Comment";
import NewComment from "./NewComment";
import "./CommentsContainer.css";

class CommentsContainer extends Component {

  state = {
    clicked: false
  };

  displayComments = () => {
    return (
      <ul>
        {this.props.comments.map((comment) => (
          <li key={comment.id}>
            < Comment
              { ...comment }
              key={comment.id}
              roverId={this.props.roverId}
            />
          </li>
        ))}
      </ul>
    );
  };

  toggleComments = () => {
    this.setState((prevState) => ({ clicked: !prevState.clicked }) );
  };

  render() {
    return (
      <div className="commentsContainer">

        < NewComment roverId={this.props.roverId} />

        {
          this.props.comments.length > 0 ?
            <button onClick={this.toggleComments} > Load comments </button>
          :
            <></>
        }
        
        { this.state.clicked ? this.displayComments() : <></> }
        
      </div>
    );
  };

};

export default CommentsContainer;