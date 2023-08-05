import displayDate from "../shared/utils/displayDate";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../data/useFetch";
import "./RoverCard.css";

export default function RoverCard() {
  // grab id from React Router params for fetch
  const { id } = useParams();
  const request = useFetch(`/api/v1/rovers/${id}`);

  // create navigate hook to return to /rovers
  const navigate = useNavigate();

  // handle loading state
  if (request.loading) return `Loading...`;

  // handle error state
  if (request.error) {
    return <pre>{JSON.stringify(request.error, null, 2)}</pre>;
  }

  // pull out properties of rover
  const { name, profile_pic, landing_date, launch_date, status } = request.data;

  // return to /rovers
  function handleClick(e) {
    navigate("/rovers");
  }

  // function handleButtonClick(e) {}

  return (
    <>
      <div
        className="RoverCardWrapper"
        id={id}
        name={name}
        onClick={handleClick}
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
      {/* <button onClick={handleButtonClick}>Display Photos</button> */}
    </>
  );
}
