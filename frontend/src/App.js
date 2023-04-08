import React, {Component} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {connect } from "react-redux";
import {fetchCameras} from "./actions/cameraActions";
import {fetchPhotos} from "./actions/photoActions";
import {fetchRovers} from "./actions/roverActions";
import NavBar from "./ui/NavBar";
import About from "./components/about/About";
import PhotosContainer from "./components/photos/PhotosContainer";
import RoversContainer from "./components/rovers/RoversContainer";

import "./App.css";

class App extends Component {

  componentDidMount() {
    this.props.fetchCameras();
    this.props.fetchPhotos();
    this.props.fetchRovers();
    // {console.log("Component Mounted")}
  };
  
  render() {
    return (
      <Router>
        <div id="App">
          <NavBar />
          <Route exact path="/" component={About} />
          <Route path="/rovers" component={RoversContainer} />
          <Route exact path="/photos" component={PhotosContainer} />
        </div>
      </Router>
    );
  };

};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCameras: () => dispatch(fetchCameras()),
    fetchPhotos: () => dispatch(fetchPhotos()),
    fetchRovers: () => dispatch(fetchRovers()),
  };
};

export default connect(null, mapDispatchToProps)(App);