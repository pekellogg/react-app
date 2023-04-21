import {BrowserRouter as Router, Route} from "react-router-dom";
import {useEffect} from "react";
import {connect} from "react-redux";
import {fetchCameras} from "../features/cameras/cameraActions";
import {fetchPhotos} from "../features/photos/photoActions";
import {fetchRovers} from "../features/rovers/roverActions";
import NavBar from "../common/NavBar";
import About from "../common/About";
import PhotoList from "../features/photos/PhotoList";
import RoverList from "../features/rovers/RoverList";

import "./App.css";

function App({fetchCameras, fetchPhotos, fetchRovers}) {

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    fetchCameras({signal: signal});
    return () => controller.abort();
  }, [fetchCameras]);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    fetchPhotos({signal: signal});
    return () => controller.abort();
  }, [fetchPhotos]);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    fetchRovers({signal: signal});
    return () => controller.abort();
  }, [fetchRovers]);

  return (
    <Router>
      <div id="App">
        <NavBar/>
        <Route exact path="/" component={About}/>
        <Route path="/rovers" component={RoverList}/>
        <Route exact path="/photos" component={PhotoList}/>
      </div>
    </Router>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCameras: (signal) => dispatch(fetchCameras(signal)),
    fetchPhotos: (signal) => dispatch(fetchPhotos(signal)),
    fetchRovers: (signal) => dispatch(fetchRovers(signal)),
  };
};

export default connect(null, mapDispatchToProps)(App);