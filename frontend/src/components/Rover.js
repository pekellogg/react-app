import React from "react";
import CommentsContainer from "../containers/CommentsContainer";
import style from "./Rover.module.css";

class Rover extends React.Component {

  render() {
    return (
      <div className={`${style.roverContainer}`}>
        <h2>{this.props.name}</h2>
        <div id={`${this.props.externalId} status`}>
          {this.props.status}
        </div>
        <div className={`${style.imgContainer}`}>
          <img
            alt={`Mars rover, ${this.props.name}`}
            className={`${style.img}`}
            src={this.props.profilePic}
          />
        </div>
        <div className="land-launch-details">
          <p>Launched: {this.props.launchDate}</p>
          <p>Landed on Mars: {this.props.landingDate}</p>
        </div>
        <CommentsContainer
          addComment={this.props.addComment}
          deleteComment={this.props.deleteComment}
          editComment={this.props.editComment}
          roverId={this.props.id}
          comments={this.props.comments}
        />
      </div>

    );
  };

};

export default Rover;