import camerasReducer from "./camerasReducer";
import roversReducer from "./roversReducer";
import usersReducer from "./usersReducer";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  cameras: camerasReducer,
  rovers: roversReducer,
  users: usersReducer,
})

export default rootReducer;