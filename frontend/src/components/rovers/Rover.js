import React from "react";
import CommentsContainer from "../comments/CommentsContainer";
import "./Rover.css";

class Rover extends React.Component {

  displayDate = (date) => {
    const [year, month, day] = date.split("-")
    return month + "/" + day + "/" + year;
  }

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
          <li>Launched {this.displayDate(this.props.launch_date)}</li>
          <li>Landed {this.displayDate(this.props.landing_date)}</li>
          <img
            alt={`Mars rover, ${this.props.name}`}
            src={this.props.profile_pic}
          />
        </div>
        
        <CommentsContainer
          comments={this.props.comments}
          roverId={this.props.external_id}
        />

      </div>

    );
  };

};

export default Rover;