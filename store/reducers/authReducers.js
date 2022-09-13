import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: {},
  },
  reducers: {
    addUser: (state, action) => {
      state.currentUser = action.payload;
    },
    removeUser: (state) => {
      state.currentUser = {};
    },
  },
});
export const authReducer = authSlice.reducer;
export const { addUser, removeUser } = authSlice.actions;
