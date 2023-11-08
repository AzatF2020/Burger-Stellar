import {createSlice} from "@reduxjs/toolkit"
import {registerThunk} from "../thunks/registerThunk.ts";
import {loginThunk} from "../thunks/loginThunk.ts";
import {profileThunk} from "../thunks/profileThunk.ts";
import type {TUserData} from "../types/data.ts";
import {profileEditThunk} from "../thunks/profileEditThunk.ts";

export type TInitialState = {
  isAuth: boolean | null;
  userData: TUserData | null;
  isLoading: boolean;
}

const initialState: TInitialState = {
  isAuth: null,
  userData: null,
  isLoading: true
}

const authSlice = createSlice({
  name: "auth/slice",
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.isAuth = action.payload?.success
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.isAuth = action.payload?.success
      })
      .addCase(profileThunk.pending, (state, action) => {
        state.isLoading = true
      })
      .addCase(profileThunk.fulfilled, (state, action) => {
        state.isAuth = action.payload?.success
        state.userData = action.payload?.user
        state.isLoading = false
      })
      .addCase(profileThunk.rejected, (state, action) => {
        state.isAuth = action.payload?.success
        state.userData = action.payload?.user
        state.isLoading = true
      })
      .addCase(profileEditThunk.fulfilled, (state, action) => {
        state.isAuth = action.payload?.success
        state.userData = action.payload?.user
      })
  }
})

export {authSlice};
