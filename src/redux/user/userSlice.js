import { configureStore, createSlice } from "@reduxjs/toolkit";


const initialState = {
    currentUser: null,
    error: null,
    loading: false,
    profilePage: null, // Add profilePage to store the profile page URL
    fullName: null,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        signInStart: (state) => {
            state.loading = true;
            state.error = null;

        },
        signInSuccess: (state, action) => {
            state.currentUser = action.payload;
            state.loading = false;
            state.error = null;
        },
        signInFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        updateStart: (state) => {
          state.loading = true;
          state.error = null;
        },
        updateSuccess: (state, action) => {
          state.currentUser = action.payload;
          state.loading = false;
          state.error = null;
        },
        updateFailure: (state, action) => {
          state.loading = false;
          state.error = action.payload;
        },
        updateProfilePage: (state, action) => {
            state.profilePage = action.payload;
          },
      
          // Action to update full name
          updateFullName: (state, action) => {
            state.fullName = action.payload;
          },
    }
});

export const {signInStart, signInSuccess, signInFailure, updateStart, updateSuccess, updateFailure, updateProfilePage, updateFullName} = userSlice.actions;
export default userSlice.reducer;