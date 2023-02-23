import React from "react";
import { connect } from "react-redux";
import { addComment } from "../../actions/roverActions";

class NewComment extends React.Component {

  state = {
    text: "",
  };

  onChangeHandler = (event) => {
    this.setState({ text: event.target.value })
  };

  submitHandler = (event) => {
    event.preventDefault();
    if (this.state.text.length > 0) {
      const comment = {
        rover_id: this.props.roverId,
        text: this.state.text
      }
      this.props.addComment(comment)
      this.setState({ text: "" })
    }
  }


  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <input
          onChange={this.onChangeHandler}
          placeholder="Add comment..."
          type="text"
          value={this.state.text}
        />
        <button type="submit"> Comment </button>
      </form>
    );
  };

};

const mapDispatchToProps = (dispatch) => {
  return {
    addComment: (comment) => dispatch(addComment(comment))
  };
};

export default connect(null, mapDispatchToProps)(NewComment);