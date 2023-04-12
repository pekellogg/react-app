import {useContext} from "react";
import {RoverContext} from "../../common/RoverContext";
import {displayDate} from "../../common/displayDate";

import "./RoverCard.css";

const RoverCard = (props) => {

  const roverContext = useContext(RoverContext);

  return (
    <div className="RoverCard" id={`RoverCard-${props.id}`} onClick={props.onClick} roverid={roverContext}> {/* TIED TO RoverListItem's handleClick */}
      <h1 className="RoverCard" roverid={roverContext}>{props.name}</h1>
      <img alt={`Mars rover, ${props.name}`} className="RoverCard" roverid={roverContext} src={props.profile_pic}/>
      <p className="RoverCard" roverid={roverContext}>Mission {props.status}</p>
      <p className="RoverCard" roverid={roverContext}>Launched {displayDate(props.launch_date)}</p>
      <p className="RoverCard" roverid={roverContext}>Landed {displayDate(props.landing_date)}</p>
    </div>
  );

};

export default RoverCard;