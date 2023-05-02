import displayDate from "../../common/displayDate";

import "./RoverCard.css";

export default function RoverCard({ id, landingDate, launchDate, name, onClick, profilePic, roverid, status }) {
  return (
    <div className="RoverCard" id={`RoverCard-${id}`} onClick={onClick} roverid={roverid}>
      <h1 className="RoverCard" roverid={roverid}>{ name }</h1>
      <img alt={`Mars rover, ${name}`} className="RoverCard" roverid={roverid} src={profilePic} />
      <p className="RoverCard" roverid={roverid}>Mission { status }</p>
      <p className="RoverCard" roverid={roverid}>Launched { displayDate(launchDate) }</p>
      <p className="RoverCard" roverid={roverid}>Landed { displayDate(landingDate) }</p>
    </div>
  );
};