import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class NavBar extends Component {

	render() {
		return (
      <header>
        <nav className="navigation">
          <NavLink style={{ marginRight: '10px' }} to="/">
            Home
          </NavLink>
          <NavLink style={{ marginRight: '10px' }} to="/rovers">
            Rovers
          </NavLink>
          <NavLink style={{ marginRight: '10px' }} to="/photos">
            Photos
          </NavLink>
          <NavLink style={{ marginRight: '10px' }} to="/data">
            Data
          </NavLink>
          {/* <NavLink style={{ marginRight: '10px' }} to="/comments">
            Comments
          </NavLink> */}
        </nav>
      </header>
    );
	};

};

export default NavBar;