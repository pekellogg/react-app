import React from "react";
// import CommentsContainer from "../comments/CommentsContainer";
import RoverShow from "./RoverShow";
import "./RoverCard.css";

class RoverCard extends React.Component {

  state = {
    clicked: false,
    visible: false,
  }; 

  displayDate = (date) => {
    const [year, month, day] = date.split("-");
    return month + "/" + day + "/" + year;
  };

  handleClick = (e) => {
    // console.log(e.target.attributes.roverid.value);
    this.setState((prevState) => ({
      clicked: !prevState.clicked,
      visible: !prevState.visible,
    }))
  };

  render() {
    return (
      <div
        className="RoverCard"
        id={`RoverCard-${this.props.id}`}
        // onClick={this.props.onClick}
        onClick={this.handleClick}
        roverid={this.props.id}
      >

        <div className="RoverCardDetails" id={`RoverCardDetails-${this.props.id}`} roverid={this.props.id}>
          <h1 className="RoverCard" roverid={this.props.id}>{this.props.name}</h1>
          <img
            alt={`Mars rover, ${this.props.name}`}
            className="RoverCard"
            roverid={this.props.id}
            src={this.props.profile_pic}
          />
          <p className="RoverCard" roverid={this.props.id}>Mission {this.props.status}</p>
          <p className="RoverCard" roverid={this.props.id}>Launched {this.displayDate(this.props.launch_date)}</p>
          <p className="RoverCard" roverid={this.props.id}>Landed {this.displayDate(this.props.landing_date)}</p>
        </div>
        <RoverShow { ...this.props } key={`RoverShow-${this.props.id}`} visible={this.state.visible}/>
        {/* <CommentsContainer comments={this.props.comments} roverId={this.props.external_id} /> */}
      </div>

    );
  };

};

export default RoverCard;