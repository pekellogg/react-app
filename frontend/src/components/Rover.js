import React from "react";
import CommentsContainer from "../containers/CommentsContainer";

class Rover extends React.Component {

  render() {
    return (
      <>
        <img
          alt={`Mars rover, ${this.props.name}`}
          src={this.props.profilePic}
        />
        <p>Name: {this.props.name}</p>
        <p>Launched: {this.props.landingDate}</p>
        <p>Landed on Mars: {this.props.landingDate}</p>
        <p>Mission Status: {this.props.status}</p>
        <CommentsContainer
          addComment={this.props.addComment}
          deleteComment={this.props.deleteComment}
          editComment={this.props.editComment}
          roverId={this.props.id}
          comments={this.props.comments}
        />
      </>

    );
  };

};

export default Rover;