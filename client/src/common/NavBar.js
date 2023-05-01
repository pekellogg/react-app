import { NavLink } from "react-router-dom";

import "./NavBar.css";

const NavBar = () => {
  return (
    <header>
      <nav>
        <NavLink to="/">About</NavLink>
        <NavLink to="/cameras">All Cameras</NavLink>
        <NavLink to="/photos">All Photos</NavLink>
        <NavLink to="/rovers">All Rovers</NavLink>
      </nav>
    </header>
  );
};

export default NavBar;