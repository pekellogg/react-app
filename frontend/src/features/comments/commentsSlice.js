import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const baseUrl = "http://127.0.0.1:3000/api/v1/comments";

// ACTIONS to DISPATCH
// FETCH COMMENTS
export const fetchComments = createAsyncThunk("comments/fetchComments", () => {
  return fetch(baseUrl)
    .then((response) => response.json())
    .then((comments) => comments);
});

// ADD COMMENT
export const addComment = createAsyncThunk("comments/addComment", (comment) => {
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(comment),
  }).then((response) => response.json());
});

// DESTROY COMMENT
export const removeComment = createAsyncThunk("comments/removeComment", (commentID) => {
  return fetch(`${baseUrl}/${commentID}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());
});

// EDIT/PATCH COMMENT
export const patchComment = createAsyncThunk("comments/patchComment", (comment) => {
  return fetch(`${baseUrl}/${comment.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(comment),
  }).then((response) => response.json());
});

const commentsSlice = createSlice({
  name: "comments",
  initialState: {
    entities: [],
    status: "idle",
  },
  extraReducers: {
    [fetchComments.pending](state) {
      state.status = "loading";
    },
    [fetchComments.fulfilled](state, action) {
      state.entities = action.payload;
      state.status = "idle";
    },
    [addComment.fulfilled](state, action) {
      state.entities.push(action.payload);
    },
    [removeComment.fulfilled](state, action) {
      const index = state.entities.findIndex(
        (comment) => comment.id === action.payload
      );
      state.entities.splice(index, 1);
    },
    [patchComment.fulfilled](state, action) {
      const updatedComments = state.entities.map((comment) => {
        if (comment.id === action.payload.id) return action.payload;
        return comment;
      });
      state.entities = updatedComments;
    },
  },
});

export default commentsSlice.reducer;