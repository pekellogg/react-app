import React from "react";
import Comment from "./Comment";

class Comments extends React.Component {

  state = {
    text: "",
  };

  handleOnChange = (event) => {
    this.setState({
      text: event.target.value,
    })
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    const comment = {
      text: this.state.text,
      rover_id: this.props.roverId,
    }
    this.props.addComment(comment)
    this.setState({text: ""})
  };

  displayComments = () => {
    if (this.props.comments.length > 0) {
      return (
        this.props.comments.map((comment) => (
          < Comment
            key={comment.id}
            id={comment.id}
            {...comment}
            editComment={this.props.editComment}
            deleteComment={this.props.deleteComment}
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
        {/* {console.log(this.props)} */}
        <form onSubmit={this.handleOnSubmit}>
          <input
            name="text"
            type="text"
            placeholder="Add comment"
            onChange={this.handleOnChange}
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