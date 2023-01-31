import React from "react";
import CommentsContainer from "../containers/CommentsContainer";

class Rover extends React.Component {

  render() {
    return (
      <>
        <p>Name: {this.props.name}</p>
        <p>Launched: {this.props.landingDate}</p>
        <p>Landed on Mars: {this.props.landingDate}</p>
        <p>Mission Status: {this.props.status}</p>
        <CommentsContainer
          addComment={this.props.addComment}
          editComment={this.props.editComment}
          roverId={this.props.id}
          comments={this.props.comments}
        />
      </>

    );
  };

};

export default Rover;