import { BrowserRouter as Router, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import AboutPage from "./ui/about-page/ui";
import PhotosPage from "./ui/photos-page/ui";
import RoversPage from "./ui/rovers-page/ui";

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
