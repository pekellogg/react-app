import { BrowserRouter as Router, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import About from "../common/About";
import PhotoList from "../features/photos/PhotoList";
import RoverList from "../features/rovers/RoverList";

import "./App.css";

function App() {
  return (
    <>
      <Router>
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
          component={RoverList}
        />
        <Route
          path="/photos"
          component={PhotoList}
        />
      </Router>
      <footer></footer>
    </>
  );
}

export default App;
