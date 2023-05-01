import { Route } from "react-router-dom";
import About from "./About";
import TestCameraList from "../features/cameras/TestCameraList";
import TestPhotoList from "../features/photos/TestPhotoList";
import TestRoverList from "../features/rovers/TestRoverList";

const Routes = () => {
  return (
    <>
      <Route exact path="/" component={About} />
      <Route path="/cameras" component={TestCameraList} />
      <Route path="/photos" component={TestPhotoList} />
      <Route path="/rovers" component={TestRoverList} />
    </>
  );
};



export default Routes;