import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
    name: "profile",
    initialState: {
        user: null,
        loading: false,
        error: null,
    },
    reducers: {
        setProfile: (state, action) => {
            state.user = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        clearProfile: (state) => {
            state.user = null;
            state.loading = false;
            state.error = null;
        },
    },
});

export const { setProfile, setLoading, setError, clearProfile } = profileSlice.actions;
export const selectProfile = (state) => state.profile.user;
export default profileSlice.reducer;