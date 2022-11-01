import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const roversURL = "http://localhost:3000/api/v1/rovers";

export const fetchRovers = createAsyncThunk("rovers/fetchRovers", () => {
  return fetch(roversURL)
  .then(response => response.json())
  .then(rovers => rovers);
});

const roversSlice = createSlice({
  name: "rovers",
  initialState: {
    entities: [],
    status: "idle",
  },
  // handle async: network GET requests
  // Promise return values: Pending, Fulfilled
  extraReducers: {
    // Pending
    [fetchRovers.pending](state) {
      state.status = "loading";
    },
    // Fulfilled
    [fetchRovers.fulfilled](state, action) {
      state.entities = action.payload;
      state.status = "idle";
    },
  },
});

export default roversSlice.reducer;