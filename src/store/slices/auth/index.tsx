import { combineReducers } from "@reduxjs/toolkit";
import { loginSlice } from "./login.slice";
import { signupSlice } from "./signup.slice";
import { userSlice } from "./user.slice";

const authSlices = combineReducers({
  [loginSlice.name]: loginSlice.reducer,
  [signupSlice.name]: signupSlice.reducer,
  [userSlice.name]: userSlice.reducer,
});

export default authSlices;
