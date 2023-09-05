// enable client-side routing: import the router router
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Root from "../../../Root";
import AboutPage from "../../about-page/ui";
import PhotosPage from "../../photos-page/ui";
import RoversPage from "../../rovers-page/ui";
import RoverCard from "../../rovers-page/RoverCard";
import CameraButton from "../../rovers-page/CameraButton";

// enable client-side routing: create a browser router
export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Root />}
        >
          <Route
            path="/about"
            element={<AboutPage />}
          />
          <Route
            path="/rovers"
            element={<RoversPage />}
          />
          <Route
            path="/rovers/:id/cameras"
            element={<RoverCard />}
          />
          <Route
            path="/rovers/:id/cameras/:id/photos"
            element={<CameraButton />}
          />
          <Route
            path="/photos"
            element={<PhotosPage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
