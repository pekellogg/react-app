import camerasReducer from "./camerasReducer";
import photosReducer from "./photosReducer";
import roversReducer from "./roversReducer";
import {combineReducers} from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  cameras: camerasReducer,
  photos: photosReducer,
  rovers: roversReducer,
})

export default rootReducer;