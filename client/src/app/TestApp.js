import { BrowserRouter as Router } from "react-router-dom";
import NavigationRoutes from "../common/NavigationRoutes";

import "./App.css";

function TestApp() {
  return (
    <Router>
      <div id="App">
        <NavigationRoutes />
      </div>
    </Router>
  );
}

export default TestApp;
