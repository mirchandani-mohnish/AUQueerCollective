import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "authentication",
  initialState: {},
  reducers: {
    setProfile: (state, profileObj) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = profileObj;
    },
    resetProfile: (state) => {
      state.value = {};
    },
  },
});

// Action creators are generated for each case reducer function
export const { setProfile, resetProfile } = authSlice.actions;

export default authSlice.reducer;
