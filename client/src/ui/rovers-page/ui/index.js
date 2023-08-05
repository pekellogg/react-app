import { Link } from "react-router-dom";
import useFetch from "../../../data/useFetch";
import "./styles.css";

export default function RoversPage() {
  const request = useFetch(`/api/v1/rovers`);

  if (request.loading) return `Loading...`;

  if (request.error) {
    return <pre>{JSON.stringify(request.error, null, 2)}</pre>;
  }

  return (
    <div id="RoverList">
      {request.data.map((rover) => (
        <Link
          key={rover.id}
          to={`/rovers/${rover.id}`}
        >
          <h1>{rover.name}</h1>
        </Link>
      ))}
    </div>
  );
}
