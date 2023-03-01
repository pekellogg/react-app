import photosReducer from "./photosReducer";
import roversReducer from "./roversReducer";
import usersReducer from "./usersReducer";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  users: usersReducer,
  photos: photosReducer,
  rovers: roversReducer,
})

export default rootReducer;