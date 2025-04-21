import { configureStore } from "@reduxjs/toolkit";
import ProfileReducer from "./profile/ProfileSlice";

export const store = configureStore({
    reducer: {
        profile: ProfileReducer,
    },
});