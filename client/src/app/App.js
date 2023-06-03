import { BrowserRouter as Router } from "react-router-dom";
import { useCameraContext as cameras, usePhotoContext as photos, useRoverContext as rovers } from "../features/contexts/ResourcesContexts";
import NavigationRoutes from "../common/NavigationRoutes";

import "./App.css";

function App() {
  if (!cameras || !photos || !rovers) {
    return "loading...";
  }

  return (
    <Router>
      <div id="App">
        <NavigationRoutes />
      </div>
    </Router>
  );
};

export default App;