import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./ui/NavBar";
import About from "./components/about";
import RoversContainer from "./containers/RoversContainer";
import PhotosContainer from "./containers/PhotosContainer";
// import CommentsContainer from "./containers/CommentsContainer";

class App extends Component {
  
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
            <Route exact path="/about" component={About} />
            <Route exact path="/rovers" component={RoversContainer} />
            <Route exact path="/photos" component={PhotosContainer} />
            {/* <Route exact path="/comments" component={CommentsContainer} /> */}


            {/* Implement Nested Routes for Below: */}
            {/* <Route path="/rovers" render={(routerProps) => <RoversContainer {...routerProps} rovers={this.state.rovers} />} /> */}
        </div>
      </Router>
    );
  };

};

export default App;