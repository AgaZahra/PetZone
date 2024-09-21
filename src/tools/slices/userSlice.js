import { createSlice } from "@reduxjs/toolkit";

// Initial state setup
const initialState = [];

// Create the slice
const userSlice = createSlice({
  name: 'car',
  initialState,
  reducers: {
    userread: (state, action) => {
      return action.payload;
    },
  },
});

// Export the reducer and actions
export default userSlice.reducer;
export const { userread } = userSlice.actions;
