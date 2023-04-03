import camerasReducer from "./camerasReducer";
import roversReducer from "./roversReducer";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  cameras: camerasReducer,
  rovers: roversReducer,
})

export default rootReducer;