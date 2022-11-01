import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const photosURL = "http://localhost:3000/api/v1/photos";

export const fetchPhotos = createAsyncThunk("rovers/fetchPhotos", () => {
  return fetch(photosURL)
  .then(response => response.json())
  .then(photos => photos);
});

const photosSlice = createSlice({
  name: "photos",
  initialState: {
    entities: [],
    status: "idle",
  },
  // handle async: network GET requests
  // Promise return values: Pending, Fulfilled
  extraReducers: {
    // Pending
    [fetchPhotos.pending](state) {
      state.status = "loading";
    },
    // Fulfilled
    [fetchPhotos.fulfilled](state, action) {
      state.entities = action.payload;
      state.status = "idle";
    },
  },
});

export default photosSlice.reducer;