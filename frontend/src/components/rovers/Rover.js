import React from "react";
import CommentsContainer from "../comments/CommentsContainer";
import "./Rover.css";

class Rover extends React.Component {

  render() {
    return (
      <div
        className="rover"
        id={this.props.id}
        key={this.props.id}
      >
        <div className="details">
          <h2>{this.props.name}</h2>
          <li>{this.props.status}</li>
          <li>Launched {this.props.displayDate(this.props.launchDate)}</li>
          <li>Landed {this.props.displayDate(this.props.landingDate)}</li>
          
          <img
            alt={`Mars rover, ${this.props.name}`}
            src={this.props.profilePic}
          />
        </div>

        <CommentsContainer
          addComment={this.props.addComment}
          comments={this.props.comments}
          deleteComment={this.props.deleteComment}
          editComment={this.props.editComment}
          roverId={this.props.id}
        />

      </div>

    );
  };

};

export default Rover;