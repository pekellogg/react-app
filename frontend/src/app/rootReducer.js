import camerasReducer from "../features/cameras/camerasReducer";
import photosReducer from "../features/photos/photosReducer";
import roversReducer from "../features/rovers/roversReducer";
import {combineReducers} from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  cameras: camerasReducer,
  photos: photosReducer,
  rovers: roversReducer,
})

export default rootReducer;