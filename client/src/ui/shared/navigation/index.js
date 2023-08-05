// enable client-side routing: app renders new UI instead of requesting add'l docs from server
import { Link } from "react-router-dom";
import "./styles.css";

export default function NavLinks() {
  return (
    <nav>
      <Link to="/about">About</Link>
      <Link to="rovers">Rovers</Link>
      <Link to="/photos">Photos</Link>
    </nav>
  );
}
