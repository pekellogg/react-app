import React from "react";
import Comment from "./Comment";

class Comments extends React.Component {

  state = {
    text: ""
  };

  handleOnChange = (event) => {
    this.setState({ text: event.target.value })
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    const body = {
      text: this.state.text,
      rover_id: this.props.roverId,
    }
    // console.log(this.props);
    fetch(`http://127.0.0.1:3000/api/v1/rovers/${this.props.roverId}/comments`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
      }
    )
    .then((response) => response.json())
    .then((data) => console.log(data));
    this.setState({text: ""})
  };

  displayComments = () => {
    if (this.props.comments.length > 0) {
      // console.log(this.props.comments)
      return (
        this.props.comments.map((comment) => (
          < Comment
            key={comment.id}
            id={comment.id}
            {...comment}
            // addComment={this.props.addComment}
            // deleteComment={this.props.deleteComment}
          />
        ))
      );
    } else {
      return "Be the first to add a comment!"
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <input
            name="text"
            type="text"
            placeholder="Add comment"
            onChange={this.handleOnChange}
            value={this.state.text}
          />
          <p><input type="submit" /></p>
        </form>
        {this.displayComments()}
      </div>
    );
  };

};

export default Comments;