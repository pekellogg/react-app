import React, { Component } from "react";
import Comments from "../components/Comments";

class CommentsContainer extends Component {

  render() {
    return (
      <div className="rover-comments">
        {/* {console.log(this.props)} */}
        <Comments
          addComment={this.props.addComment}
          editComment={this.props.editComment}
          comments={this.props.comments}
          roverId={this.props.roverId}
        />
      </div>
    );
  };

};

export default CommentsContainer;