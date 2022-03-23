import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import userReducer from "./userSlice";
import questionReducer from "./questionSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        users: userReducer,
        questions: questionReducer
    }
});