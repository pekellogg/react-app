import { BrowserRouter as Router } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Route } from "react-router-dom";
import About from "../common/About";
// import PhotoList from "../features/photos/PhotoList";
// import RoverList from "../features/rovers/RoverList";
import TestRoverList from "../features/rovers/TestRoverList";

import "./App.css";

function TestApp() {
  return (
    <Router>
      <div id="App">
        <header>
          <nav>
            <NavLink to="/">About</NavLink>
            <NavLink to="/rovers">Rovers</NavLink>
            <NavLink to="/photos">Photos</NavLink>
          </nav>
        </header>
        <Route
          exact
          path="/"
          component={About}
        />
        <Route
          path="/rovers"
          component={TestRoverList}
        />
        {/* <Route
          path="/photos"
          component={PhotoList}
        /> */}
      </div>
    </Router>
  );
}

export default TestApp;
