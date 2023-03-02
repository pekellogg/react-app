import React from "react";
import { connect } from "react-redux";
import { deleteComment } from "../../actions/roverActions";
import EditComment from "./EditComment";

class Comment extends React.Component {

  state = {
    showEditForm: false,
    buttonText: "Edit"
  };

  deleteHandler = () => {
    this.props.deleteComment(this.props.id, this.props.roverId);
  };

  toggleEditForm = () => {
    this.setState((prevState) => {
      if (prevState.buttonText === "Edit") {
        return { showEditForm: !prevState.showEditForm, buttonText: "Cancel" }
      } else {
        return { showEditForm: !prevState.showEditForm, buttonText: "Edit" }
      }
    });
  };

  render() {
    return (
      <div className="comment" key={this.props.id} >

        { this.props.text }

        <button className="Comment" onClick={this.toggleEditForm} type="submit"> { this.state.buttonText } </button>
        <button className="Comment" onClick={this.deleteHandler} type="delete"> Delete </button>

        { 
          this.state.showEditForm ?
            < EditComment id={this.props.id} roverId={this.props.roverId} toggleEditForm={this.toggleEditForm} />
          :
            <></>
        }

      </div>
    );
  };

};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteComment: (commentId, roverId) => dispatch(deleteComment(commentId, roverId))
  };
};

export default connect(null, mapDispatchToProps)(Comment);