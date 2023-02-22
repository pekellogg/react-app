import React from "react";

class Comment extends React.Component {

  state = {
    text: "",
    showEditForm: false,
  };

  changeHandler = (event) => {
    this.setState({ text: event.target.value })
  };

  submitHandler = (event) => {
    event.preventDefault();
    const comment = {
      id: this.props.id,
      rover_id: this.props.roverId,
      text: this.state.text
    }
    if (event.target.name === "edit") {
      this.props.edit(comment)
      this.setState({ text: "", showEditForm: false });
    }
  };

  clickHandler = (event) => {
    if (event.target.name === "edit") {
      this.setState({ showEditForm: true})
    } else if (event.target.name === "delete") {
      this.props.delete(this.props.id, this.props.roverId);
    }
  };

  render() {
    return (
      <div
        className="comment"
        id={this.props.id}
      >
        { this.props.text }
        <button
          name="edit"
          onClick={this.clickHandler}
          type="submit"
        >
          Edit
        </button>
        {this.state.showEditForm ?
          <form name="edit" onSubmit={this.submitHandler}>
            <input
              name="edit"
              onChange={this.changeHandler}
              placeholder={this.props.text}
              type="text"
              value={this.state.text}
            />
            <button
              type="submit"
            >
              Save
            </button>
            <button
              onClick={this.clickHandler}
              name="delete"
              type="delete"
            >
              Delete
            </button>
          </form>
        :
          <></>
        }


      </div>
    );
  };

};

export default Comment;