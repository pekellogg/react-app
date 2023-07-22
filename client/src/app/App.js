import { BrowserRouter as Router, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import AboutPage from "../common/AboutPage";
import PhotosPage from "../features/photos/PhotosPage";
import RoversPage from "../features/rovers/RoversPage";

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
          component={AboutPage}
        />
        <Route
          path="/rovers"
          component={RoversPage}
        />
        <Route
          path="/photos"
          component={PhotosPage}
        />
      </Router>
      <footer></footer>
    </>
  );
}

export default App;
