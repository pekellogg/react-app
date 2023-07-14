import displayDate from "../../common/displayDate";

import "./RoverCard.css";

export default function RoverCard({
  id,
  landing_date,
  launch_date,
  name,
  onClick,
  profile_pic,
  roversVisibility,
  status,
}) {
  return (
    <>
      {roversVisibility ? (
        <>
          <div
            className="RoverCardWrapper"
            id={id}
            name={name}
            onClick={onClick}
          >
            <div
              className="RoverCard"
              name={name}
            >
              <h1>{name}</h1>
              <img
                alt={`Mars rover, ${name}`}
                className="RoverCard"
                src={profile_pic}
              />
              <p>Mission {status}</p>
              <p>Launched {displayDate(launch_date)}</p>
              <p>Landed {displayDate(landing_date)}</p>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
}
