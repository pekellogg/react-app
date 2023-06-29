import { BrowserRouter as Router } from "react-router-dom";
import { useCameraContext } from "../features/cameras/useCameraContext";
import { usePhotoContext } from "../features/photos/usePhotoContext";
import { useRoverContext } from "../features/rovers/useRoverContext";
import NavigationRoutes from "../common/NavigationRoutes";

import "./App.css";

function TestApp() {
  const cameras = useCameraContext();
  const photos = usePhotoContext();
  const rovers = useRoverContext();

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
}

export default TestApp;
