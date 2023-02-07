import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import { fetchRovers } from "./actions/roverActions";
import NavBar from "./ui/NavBar";
import Home from "./components/Home";
import Data from "./components/Data";
import RoversContainer from "./containers/RoversContainer";
import PhotosContainer from "./containers/PhotosContainer";

class App extends Component {

  componentDidMount() {
    this.props.fetchRovers();
  };
  
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
            <Route exact path="/" component={Home} />
            <Route path="/rovers" component={RoversContainer} />
            <Route exact path="/photos" component={PhotosContainer} />
            <Route exact path="/data" component={Data} />
        </div>
      </Router>
    );
  };

};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRovers: () => dispatch(fetchRovers()),
  };
};

export default connect(null, mapDispatchToProps)(App);