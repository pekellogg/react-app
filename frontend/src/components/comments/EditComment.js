import React from "react";
import { connect } from "react-redux";
import { editComment } from "../../actions/roverActions";

class EditComment extends React.Component {

  state = {
    text: ""
  };

  changeHandler = (event) => {
    this.setState({ text: event.target.value })
  };

  submitHandler = (event) => {
    event.preventDefault();
    if (this.state.text.length > 0) {
      const comment = {
        id: this.props.id,
        rover_id: this.props.roverId,
        text: this.state.text
      }
      this.props.editComment(comment)
      this.setState({ text: "" });
      this.props.toggleEditForm()
    }
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <input
          id="EditComment"
          onChange={this.changeHandler}
          placeholder={this.props.text}
          type="text"
          value={this.state.text}
        />
        <button id="EditComment" type="submit"> Save </button>
      </form>
    );
  };

};

const mapDispatchToProps = (dispatch) => {
  return {
    editComment: (comment) => dispatch(editComment(comment)),
  };
};

export default connect(null, mapDispatchToProps)(EditComment);