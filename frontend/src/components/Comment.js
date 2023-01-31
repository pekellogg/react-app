import React from "react";
import classes from "./Comment.module.css";

class Comment extends React.Component {

  render() {
    return (
      <div className={`${classes.comment} comment`}>
        <p>{ this.props.text }</p>
        <p><i>Created: { this.props.created_at }</i></p>
        <p><i>Updated: { this.props.updated_at }</i></p>
        <button
          onClick={this.props.clickHandler}
          type="submit"
          name="edit"
        >
          Edit
        </button>

        {this.props.showEditForm ?
          <form onSubmit={this.props.handleOnSubmit}>
            <input
              name="edit"
              type="text"
              placeholder={this.props.text}
              onChange={this.props.handleOnEdit}
              value={this.props.textToEdit}
            />
            <input type="submit" />
          </form>
        :
          <></>
        }

        <button
          onClick={this.props.clickHandler}
          name="delete"
          type="delete"
        >
          Delete
        </button>
      </div>
    );
  };

};

export default Comment;