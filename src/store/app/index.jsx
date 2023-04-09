import { combineReducers } from "@reduxjs/toolkit";
import snackbarSlice from "./snackbar";

const appSlices = combineReducers({
  snackbar: snackbarSlice,
});

export default appSlices;
