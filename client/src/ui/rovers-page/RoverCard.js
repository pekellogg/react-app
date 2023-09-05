import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../data/useFetch";
import displayDate from "../shared/utils/displayDate";
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
  const { cameras, name, profile_pic, landing_date, launch_date, status } =
    request.data;

  // return to /rovers
  function handleClick(e) {
    navigate("/rovers");
  }

  function handleButtonClick(e) {
    navigate(
      `/rovers/${id}/cameras/${e.currentTarget.attributes.id.value}/photos`
    );
  }

  return (
    <div className="RoverCard-Cameras">
      <div
        className="RoverCard"
        onClick={handleClick}
      >
        <h1>{name}</h1>
        <img
          alt={`Mars rover, ${name}`}
          src={profile_pic}
        />
        <p>Mission {status}</p>
        <p>Launched {displayDate(launch_date)}</p>
        <p>Landed {displayDate(landing_date)}</p>
      </div>
      <div className="Cameras">
        {cameras.map((c) => (
          <button
            className="CameraButton"
            key={c.id}
            id={c.id}
            onClick={handleButtonClick}
          >
            {c.full_name}
          </button>
        ))}
      </div>
    </div>
  );
}
