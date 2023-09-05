import { useNavigate } from "react-router-dom";
import useFetch from "../../../data/useFetch";

export default function RoversPage() {
  const request = useFetch(`/api/v1/rovers`);

  const navigate = useNavigate();

  if (request.loading) return `Loading...`;

  if (request.error) {
    return <pre>{JSON.stringify(request.error, null, 2)}</pre>;
  }

  function handleButtonClick(e) {
    navigate(`/rovers/${e.currentTarget.attributes.id.value}/cameras`);
  }

  return (
    <div id="RoverList">
      {request.data.map((rover) => (
        <button
          className="RoverButton"
          key={rover.id}
          id={rover.id}
          onClick={handleButtonClick}
        >
          <h1>{rover.name}</h1>
        </button>
      ))}
    </div>
  );
}
