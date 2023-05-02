import { NavLink } from "react-router-dom";

import "./NavBar.css";

export default function NavBar() {
  return (
    <header>
      <nav>
        <NavLink to="/">About</NavLink>
        <NavLink to="/rovers">Rovers</NavLink>
        <NavLink to="/photos">Photos</NavLink>
      </nav>
    </header>
  );
};