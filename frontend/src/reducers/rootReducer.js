import camerasReducer from "./camerasReducer";
import photosReducer from "./photosReducer";
import roversReducer from "./roversReducer";
import usersReducer from "./usersReducer";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  cameras: camerasReducer,
  photos: photosReducer,
  rovers: roversReducer,
  users: usersReducer,
})

export default rootReducer;