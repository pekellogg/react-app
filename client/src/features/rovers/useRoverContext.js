// import RoverContext from "./RoverContext";
// import { useContext } from "react";

// const useRoverContext = () => useContext(RoverContext);
// export default useRoverContext;

import React, { useContext } from "react";

const roverContext = React.createContext(5);
const useRoverContext = () => useContext(roverContext);

export { roverContext, useRoverContext };