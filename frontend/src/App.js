import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import { fetchRovers } from "./actions/roverActions";
import { fetchPhotos } from "./actions/photoActions";
import NavBar from "./ui/NavBar";
import About from "./components/about/About";
import RoversContainer from "./components/rovers/RoversContainer";
import PhotosContainer from "./components/photos/PhotosContainer";
// import CreateUser from "./components/users/create/CreateUser";
// import EditUser from "./components/users/edit/EditUser";
// import Login from "./components/users/login/LoginUser";
import "./App.css";

class App extends Component {

  componentDidMount() {
    this.props.fetchRovers();
    this.props.fetchPhotos();
  };
  
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
            <Route exact path="/" component={About} />
            <Route path="/rovers" component={RoversContainer} />
            <Route exact path="/photos" component={PhotosContainer} />
            {/* <Route exact path="/login" component={Login} /> */}
            {/* <Route exact path="/users/new" component={CreateUser} /> */}
            {/* Update to reflect dynamic user id */}
            {/* <Route exact path="/users/:id/edit" component={EditUser} /> */}
        </div>
      </Router>
    );
  };

};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPhotos: () => dispatch(fetchPhotos()),
    fetchRovers: () => dispatch(fetchRovers()),
  };
};

export default connect(null, mapDispatchToProps)(App);