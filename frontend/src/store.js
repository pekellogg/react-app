import { configureStore } from "@reduxjs/toolkit";
import roversReducer from "./features/rovers/roversSlice";
import photosReducer from "./features/photos/photosSlice";
import commentsReducer from "./features/comments/commentsSlice";

const store = configureStore({
  reducer: {
    rovers: roversReducer,
    photos: photosReducer,
    comments: commentsReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
  devTools: true,
});

export default store;