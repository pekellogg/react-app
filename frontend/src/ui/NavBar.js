import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

class NavBar extends Component {

	render() {
		return (
      <header>
        <nav>
          <NavLink to="/"> About </NavLink>
          <NavLink to="/rovers"> Rovers </NavLink>
          <NavLink to="/photos"> Photos </NavLink>
          {/* <NavLink to="/login"> Login </NavLink> */}
          {/* <NavLink to="/users/new"> Create Account </NavLink> */}
          {/* Update to reflect dynamic user id */}
          {/* <NavLink to="/users/:id/edit"> Edit Account </NavLink> */}
        </nav>
      </header>
    );
	};

};

export default NavBar;