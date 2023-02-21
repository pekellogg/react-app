import React from "react";
import CommentsContainer from "../containers/CommentsContainer";
import style from "./Rover.module.css";

class Rover extends React.Component {

  render() {
    return (
      <div className={`${style.roverContainer}`}>
        <div className="details">
          <h2>{this.props.name}</h2>
          {this.props.status}
          <p>Launched {this.props.displayDate(this.props.launchDate)}</p>
          <p>Landed {this.props.displayDate(this.props.landingDate)}</p>
          
          <img
            alt={`Mars rover, ${this.props.name}`}
            className={`${style.img}`}
            src={this.props.profilePic}
          />
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