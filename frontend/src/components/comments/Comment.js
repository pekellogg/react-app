import React from "react";
import { connect } from "react-redux";
import { deleteComment } from "../../actions/roverActions";
import EditComment from "./EditComment";

class Comment extends React.Component {

  state = {
    showEditForm: false
  };

  deleteHandler = () => {
    this.props.deleteComment(this.props.id, this.props.roverId);
  };

  toggleEditForm = () => {
    this.setState((prevState) => { 
      return { showEditForm: !prevState.showEditForm } 
    });
  };

  render() {
    return (
      <div className="comment" key={this.props.id} >

        { this.props.text }

        <button name="edit" onClick={this.toggleEditForm} type="submit"> Edit </button>
        <button onClick={this.deleteHandler} type="delete"> Delete </button>

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