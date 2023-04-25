import {displayDate} from "../../common/displayDate";

import "./RoverCard.css";

const RoverCard = (props) => {
  return (
    <div className="RoverCard" id={`RoverCard-${props.id}`} onClick={props.onClick} roverid={props.roverid}>
      <h1 className="RoverCard" roverid={props.roverid}>{props.name}</h1>
      <img alt={`Mars rover, ${props.name}`} className="RoverCard" roverid={props.roverid} src={props.profile_pic}/>
      <p className="RoverCard" roverid={props.roverid}>Mission {props.status}</p>
      <p className="RoverCard" roverid={props.roverid}>Launched {displayDate(props.launch_date)}</p>
      <p className="RoverCard" roverid={props.roverid}>Landed {displayDate(props.landing_date)}</p>
    </div>
  );
};

export default RoverCard;