import React, { useContext } from "react";

const cameraContext = React.createContext();
const useCameraContext = () => useContext(cameraContext);

export { cameraContext, useCameraContext };