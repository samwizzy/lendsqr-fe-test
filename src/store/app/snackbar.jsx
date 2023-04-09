import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
  title: null,
  message: null,
};

export const snackbarSlice = createSlice({
  name: "snackbar",
  initialState,
  reducers: {
    openSnackbar: (state, action) => {
      state.open = true;
      state.message = action.payload;
    },
    closeSnackbar: (state, action) => {
      state.open = false;
      state.message = action.payload;
    },
  },
});

export const { openSnackbar, closeSnackbar } = snackbarSlice.actions;

export default snackbarSlice.reducer;
