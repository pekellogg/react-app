import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import style from "./NavBar.module.css";

class NavBar extends Component {

	render() {
		return (
      <header>
        <nav className={style.nav}>
          <NavLink to="/">
            About
          </NavLink>
          <NavLink to="/rovers">
            Rovers
          </NavLink>
          <NavLink to="/photos">
            Photos
          </NavLink>
        </nav>
      </header>
    );
	};

};

export default NavBar;