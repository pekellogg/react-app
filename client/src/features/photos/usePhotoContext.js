import React, { useContext } from "react";

const photoContext = React.createContext();
const usePhotoContext = () => useContext(photoContext);

export { photoContext, usePhotoContext };