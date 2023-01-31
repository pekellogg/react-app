import React from "react";
import classes from "./Comment.module.css";

class Comment extends React.Component {

  state = {
    text: "",
    showEditForm: false,
  };

  onChangeHandler = (event) => {
    this.setState({ text: event.target.value })
  };

  submitHandler = (event) => {
    event.preventDefault();
    if (event.target.name === "edit") {
      const comment = {
        id: this.props.id,
        text: this.state.text,
        rover_id: this.props.roverId
      }
      this.props.edit(comment)
      // this.props.edit(this.props.id, this.state.text)
      this.setState({ text: "", showEditForm: false });
    }
  };

  clickHandler = (event) => {
    if (event.target.name === "edit") {
      this.setState({ showEditForm: true})
    }
    // else {
    //   // this.props.deleteComment();
    // }
  };

  render() {
    return (
      <div className={`${classes.comment} comment`}>
        <p>{ this.props.text }</p>
        <p><i>Created: { this.props.created_at }</i></p>
        <p><i>Updated: { this.props.updated_at }</i></p>
        <button
          onClick={this.clickHandler}
          type="submit"
          name="edit"
        >
          Edit
        </button>
        {this.state.showEditForm ?
          <form name="edit" onSubmit={this.submitHandler}>
            <input
              // id={this.props.id}
              name="edit"
              type="text"
              placeholder={this.props.text}
              onChange={this.onChangeHandler}
              value={this.state.text}
            />
            <input type="submit" />
          </form>
        :
          <></>
        }

        <button
          onClick={this.clickHandler}
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