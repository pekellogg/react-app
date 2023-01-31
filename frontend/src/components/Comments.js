import React from "react";
import Comment from "./Comment";

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
      text: this.state.text,
      rover_id: this.props.roverId,
    }
    this.props.addComment(comment)
    this.setState({ text: "" })
  }

  displayComments = () => {
    if (this.props.comments.length > 0) {
      return (
        this.props.comments.map((comment) => (
          < Comment
            {...comment}
            id={comment.id}
            key={comment.id}
            submitHandler={this.submitHandler}
            edit={this.props.editComment}
            roverId={this.props.roverId}
            // delete={}
          />
        ))
      );
    } else {
      return "Be the first to add a comment!"
    }
  };

  render() {
    return (
      <>
        <form onSubmit={this.submitHandler}>
          <input
            name="text"
            type="text"
            placeholder="Add comment"
            onChange={this.onChangeHandler}
            value={this.state.text}
          />
          <input type="submit" />
        </form>
        {this.displayComments()}
      </>
    );
  };

};

export default Comments;