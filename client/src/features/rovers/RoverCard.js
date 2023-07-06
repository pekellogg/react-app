import displayDate from "../../common/displayDate";

import "./RoverCard.css";

export default function RoverCard({
  id,
  landingDate,
  launchDate,
  name,
  onClick,
  profilePic,
  status,
}) {
  return (
    <div
      className="RoverCard"
      id={id}
      onClick={onClick}
    >
      <h1>{name}</h1>
      <img
        alt={`Mars rover, ${name}`}
        className="RoverCard"
        src={profilePic}
      />

      <div>
        <p>Mission {status}</p>
        <p>Launched {displayDate(launchDate)}</p>
        <p>Landed {displayDate(landingDate)}</p>
      </div>
    </div>
  );
}
