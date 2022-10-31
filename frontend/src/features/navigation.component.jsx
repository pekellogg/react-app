import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Navigation extends Component {

	render() {
		return (
      <header>
        <nav className="navigation">
          <NavLink className="button" exact to="/">
            Home
          </NavLink>
          <NavLink className="button" exact to="/about">
            About
          </NavLink>
          <NavLink className="button" to="/rovers">
            Rovers
          </NavLink>
        </nav>
      </header>
    );
	}

};