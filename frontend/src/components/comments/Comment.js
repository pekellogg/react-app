import React from "react";
import EditComment from "./EditComment";

class Comment extends React.Component {

  state = {
    showEditForm: false
  };

  clickHandler = (event) => {
    this.setState({ showEditForm: true});
  };

  render() {
    return (
      <div className="comment" key={this.props.id} >

        { this.props.text }

        < br />

        <button
          name="edit"
          onClick={this.clickHandler}
          type="submit"
        >
          Edit
        </button>

        { this.state.showEditForm ?
          < EditComment id={this.props.id} roverId={this.props.roverId} />
        :
          <></>
        }

      </div>
    );
  };

};

export default Comment;