import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
    user: user ?? null,
    isLoading: false,
    isSuccess: false,
    hasError: false,
    message: ""
};

export const register = createAsyncThunk("auth/register",
    async (data, thunkAPI) => {
        try {
            return await authService.register(data);
        } catch (err) {
            const message = (err.response && err.response.data &&
                    err.response.data.message)
                || err.message || err.toString();

            return thunkAPI.rejectWithValue(message);
        }
    });

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false;
            state.isSucces = false;
            state.hasError = false;
            state.message = "";
        }
    },
    extraReducers: (builder) => {
        builder.addCase(register.pending, (state) => {
            state.isLoading = true;
        }).addCase(register.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.user = action.payload
        }).addCase(register.rejected, (state, action) => {
            state.isLoading = false;
            state.hasError = true;
            state.message = action.payload;
            state.user = null;
        });
    }
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;

