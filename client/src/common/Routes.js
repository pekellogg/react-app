import { Route } from "react-router-dom";
import About from "./About";
import PhotoList from "../features/photos/PhotoList";
import RoverList from "../features/rovers/RoverList";

export default function Routes() {
  return (
    <>
      <Route exact path="/" component={About} />
      <Route path="/rovers" component={RoverList} />
      <Route path="/photos" component={PhotoList} />
    </>
  );
};