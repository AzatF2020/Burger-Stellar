import {createSlice} from "@reduxjs/toolkit"
import {registerThunk} from "../thunks/registerThunk.ts";
import {loginThunk} from "../thunks/loginThunk.ts";
import {userThunk} from "../thunks/userThunk.ts";

const initialState = {
  isAuth: null,
  userData: {}
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
      .addCase(userThunk.fulfilled, (state, action) => {
        state.isAuth = action.payload?.success
        state.userData = action.payload?.user
      })
  }
})

export {authSlice};
