import React from "react";
import classes from "./Comment.module.css";

class Comment extends React.Component {

  render() {
    return (
      <div className={`${classes.comment} comment`}>
        <p>{ this.props.text }</p>
        <p><i>Created: { this.props.created_at }</i></p>
        <p><i>Updated: { this.props.updated_at }</i></p>
      </div>
    );
  };

};

export default Comment;