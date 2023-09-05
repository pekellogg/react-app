// enable client-side routing: app renders new UI instead of requesting add'l docs from server
import { NavLink } from "react-router-dom";

export default function NavLinks() {
  return (
    <nav>
      <NavLink to="/about">About</NavLink>
      <NavLink to="rovers">Rovers</NavLink>
      <NavLink to="/photos">Photos</NavLink>
    </nav>
  );
}
