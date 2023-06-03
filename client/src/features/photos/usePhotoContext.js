import PhotoContext from "./PhotoContext";
import { useContext } from "react";

const usePhotoContext = () => useContext(PhotoContext);
export default usePhotoContext;