import React from "react";
import CommentsContainer from "../containers/CommentsContainer";
// import Comments from "./Comments";

class Rover extends React.Component {

  render() {
    return (
      <>
        {/* {console.log(this.props)} */}
        <p>Name: {this.props.name}</p>
        <p>Launched: {this.props.landingDate}</p>
        <p>Landed on Mars: {this.props.landingDate}</p>
        <p>Mission Status: {this.props.status}</p>
        <CommentsContainer
          addComment={this.props.addComment}
          roverId={this.props.id}
          comments={this.props.comments}
        />
        {/* {console.log(this.props.comments)} */}
        {/* <Comments roverId={this.props.id} comments={this.props.comments} /> */}
      </>

    );
  };

};

export default Rover;