import React from "react";
import Comment from "./Comment";

class Comments extends React.Component {

  state = {
    text: ""
  };

  handleOnChange = (event) => {
    console.log(this.state.text);
    this.setState({ text: event.target.value })
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    console.log(this.props);
    
    // this.props.addComment(this.state.text);
    // this.setState({ text: "" });
  };

  displayComments = () => {
    // console.log(this.props.comments);
    return (
      this.props.comments.map((comment) => (
        < Comment
          key={comment.external_id}
          externalId={comment.external_id}
          addComment={this.props.addComment}
          deleteComment={this.props.deleteComment}
        />
      ))
    );
  };

  render() {
    return (
      <div>
        {this.displayComments()}
        <form onSubmit={this.handleOnSubmit}>
          <p>Enter a comment below: </p>
          <input 
            type="text"
            placeholder="add comment"
            onChange={this.handleOnChange}
            value={this.state.text}
          />
          <p><input type="submit" /></p>
        </form>
      </div>
    );
  };

};

export default Comments;