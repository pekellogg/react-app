import React from "react";
// import CommentsContainer from "../comments/CommentsContainer";
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
          <h1>{this.props.name}</h1>
          <img
            alt={`Mars rover, ${this.props.name}`}
            className="RoverProfile"
            src={this.props.profile_pic}
          />
          <p>Mission {this.props.status}</p>
          <p>Launched {this.displayDate(this.props.launch_date)}</p>
          <p>Landed {this.displayDate(this.props.landing_date)}</p>
        </div>
        
        {/* <CommentsContainer comments={this.props.comments} roverId={this.props.external_id} /> */}

      </div>

    );
  };

};

export default Rover;