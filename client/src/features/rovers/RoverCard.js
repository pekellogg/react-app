import {displayDate} from "../../common/displayDate";

import "./RoverCard.css";

const RoverCard = (props) => {
  const {id, landing_date, launch_date, name, onClick, profile_pic, roverid, status} = props;
  
  return (
    <div className="RoverCard" id={`RoverCard-${id}`} onClick={onClick} roverid={roverid}>
      <h1 className="RoverCard" roverid={roverid}>{name}</h1>
      <img alt={`Mars rover, ${name}`} className="RoverCard" roverid={roverid} src={profile_pic}/>
      <p className="RoverCard" roverid={roverid}>Mission {status}</p>
      <p className="RoverCard" roverid={roverid}>Launched {displayDate(launch_date)}</p>
      <p className="RoverCard" roverid={roverid}>Landed {displayDate(landing_date)}</p>
    </div>
  );
};

export default RoverCard;