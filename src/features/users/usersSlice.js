import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "0",
    name: "Boba Cocoa",
  },
  {
    id: "1",
    name: "David Dance",
  },
  {
    id: "2",
    name: "Amar Star",
  },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
