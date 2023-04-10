import React, {Component} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {connect} from "react-redux";
import {fetchCameras} from "../features/cameras/cameraActions";
import {fetchPhotos} from "../features/photos/photoActions";
import {fetchRovers} from "../features/rovers/roverActions";
import NavBar from "../common/NavBar";
import About from "../common/About";
import PhotosContainer from "../features/photos/PhotosContainer";
import RoversList from "../features/rovers/RoversList";

import "./App.css";

class App extends Component {

  componentDidMount() {
    this.props.fetchCameras();
    this.props.fetchPhotos();
    this.props.fetchRovers();
  };
  
  render() {
    return (
      <Router>
        <div id="App">
          <NavBar />
          <Route exact path="/" component={About}/>
          <Route path="/rovers" component={RoversList}/>
          <Route exact path="/photos" component={PhotosContainer}/>
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