import React, {Component} from "react";
import {NavLink} from "react-router-dom";

import "./NavBar.css";

class NavBar extends Component {

	render() {
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

};

export default NavBar;