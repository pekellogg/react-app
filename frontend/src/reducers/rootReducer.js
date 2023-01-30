import roversReducer from "./roversReducer";
import photosReducer from "./photosReducer";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  rovers: roversReducer,
  photos: photosReducer
})

export default rootReducer;