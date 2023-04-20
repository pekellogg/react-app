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

function App(props) {

  useEffect(() => {
    props.fetchCameras();
    props.fetchPhotos();
    props.fetchRovers();
  });
  
  return (
    <Router>
      <div id="App">
        <NavBar />
        <Route exact path="/" component={About}/>
        <Route path="/rovers" component={RoverList}/>
        <Route exact path="/photos" component={PhotoList}/>
      </div>
    </Router>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCameras: () => dispatch(fetchCameras()),
    fetchPhotos: () => dispatch(fetchPhotos()),
    fetchRovers: () => dispatch(fetchRovers()),
  };
};

export default connect(null, mapDispatchToProps)(App);