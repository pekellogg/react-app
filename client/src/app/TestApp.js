import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "../common/NavBar";
import Routes from "../common/Routes";

import "./App.css";

function TestApp() {
  return (
    <Router>
      <div id="App">
        <NavBar />
        <Routes />
      </div>
    </Router>
  );
}

export default TestApp;
