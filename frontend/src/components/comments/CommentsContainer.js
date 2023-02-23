import React, { Component } from "react";
import Comment from "./Comment";
import NewComment from "./NewComment";
import "./CommentsContainer.css";

class CommentsContainer extends Component {

  state = {
    clicked: false,
    buttonText: "Load comments"
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
    this.setState((prevState) => {
      if (prevState.buttonText === "Load comments") {
        return { clicked: !prevState.clicked, buttonText: "Hide comments" }
      } else {
        return { clicked: !prevState.clicked, buttonText: "Load comments" }
      }
    })
  };

  render() {
    return (
      <div className="commentsContainer">

        < NewComment roverId={this.props.roverId} />

        {
          this.props.comments.length > 0 ?
            <button onClick={this.toggleComments} > { this.state.buttonText } </button>
          :
            <></>
        }
        
        { this.state.clicked ? this.displayComments() : <></> }
        
      </div>
    );
  };

};

export default CommentsContainer;