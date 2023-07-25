import { BrowserRouter as Router, Route } from "react-router-dom";
// The compatibility package includes a special CompatRouter that synchronizes the v5 and v6 APIs state so that both APIs are available.
import { CompatRouter } from "react-router-dom-v5-compat";
import { NavLink } from "react-router-dom";
import AboutPage from "./ui/about-page/ui";
import PhotosPage from "./ui/photos-page/ui";
import RoversPage from "./ui/rovers-page/ui";

function App() {
  return (
    <>
      <Router>
        {/* Render the <CompatRouter> directly below your v5 <BrowserRouter>. */}
        <CompatRouter>
          {/* CompatRouter accesses the history from v5, sets up a listener, and then renders a "controlled" v6 <Router>.
          This way both v5 and v6 APIs are talking to the same history instance. */}
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
        </CompatRouter>
      </Router>

      <footer></footer>
    </>
  );
}

export default App;
