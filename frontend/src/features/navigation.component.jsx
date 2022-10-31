import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home.component.jsx";
import About from "./about.component.jsx";
import Routers from "./rovers/rovers-list.component.jsx";

export default class Navigation extends React.Component {

  render () {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/routers" element={<Routers />} />
        </Routes>
      </Router>
    );
  }

};