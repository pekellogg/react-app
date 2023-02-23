import React from "react";
import { connect } from "react-redux";
import { deleteComment, editComment } from "../../actions/roverActions";

class EditComment extends React.Component {

  state = {
    text: ""
  };

  changeHandler = (event) => {
    this.setState({ text: event.target.value })
  };

  deleteHandler = () => {
    this.props.deleteComment(this.props.id, this.props.roverId);
  };

  submitHandler = (event) => {
    event.preventDefault();
    const comment = {
      id: this.props.id,
      rover_id: this.props.roverId,
      text: this.state.text
    }
    this.props.editComment(comment)
    this.setState({ text: "", showEditForm: false });
  };

  render() {
    return (
      <form name="edit" onSubmit={this.submitHandler}>
        <input
          name="edit"
          onChange={this.changeHandler}
          placeholder={this.props.text}
          type="text"
          value={this.state.text}
        />
        <button type="submit"> Save </button>
        <button
          onClick={this.deleteHandler}
          type="delete"
        >
          Delete
        </button>
      </form>
    );
  };

};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteComment: (commentId, roverId) => dispatch(deleteComment(commentId, roverId)),
    editComment: (comment) => dispatch(editComment(comment)),
  };
};

export default connect(null, mapDispatchToProps)(EditComment);