import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../../../shared/errors";
import Root from "../../../Root";
import AboutPage from "../../about-page/ui";
import PhotosPage from "../../photos-page/ui";
import RoversPage from "../../rovers-page/ui";
import RoverCard from "../../rovers-page/RoverCard";

// enable client-side routing: create a browser router
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/about",
        element: <AboutPage />,
      },

      {
        path: "rovers",
        element: <RoversPage />,
      },
      {
        path: "rovers/:roverId",
        element: <RoverCard />,
      },
      {
        path: "/photos",
        element: <PhotosPage />,
      },
    ],
  },
]);
