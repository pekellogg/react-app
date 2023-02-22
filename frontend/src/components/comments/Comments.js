import React from "react";
import Comment from "./Comment";
import "./Comments.css";

class Comments extends React.Component {

  state = {
    text: "",
  };

  onChangeHandler = (event) => {
    this.setState({ text: event.target.value })
  };

  submitHandler = (event) => {
    event.preventDefault();
    const comment = {
      rover_id: this.props.roverId,
      text: this.state.text
    }
    this.props.addComment(comment)
    this.setState({ text: "" })
  }

  displayComments = () => {
    if (this.props.comments.length > 0) {
      return (
        this.props.comments.map((comment) => (
          < Comment
            { ...comment }
            delete={this.props.deleteComment}
            edit={this.props.editComment}
            id={comment.id}
            key={comment.id}
            roverId={this.props.roverId}
            submitHandler={this.submitHandler}
          />
        ))
      );
    }
  };

  render() {
    return (
      <>
        <form onSubmit={this.submitHandler}>
          <input
            name="text"
            onChange={this.onChangeHandler}
            placeholder="Add comment..."
            type="text"
            value={this.state.text}
          />
          <button
            type="submit"
          >
            Comment
          </button>
        </form>
        {this.displayComments()}
      </>
    );
  };

};

export default Comments;