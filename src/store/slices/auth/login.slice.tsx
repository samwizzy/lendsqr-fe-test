import { createSlice } from "@reduxjs/toolkit";
import { ToastContainer, toast } from "react-toastify";
import { AppDispatch } from "../..";
import { setUserData } from "./user.slice";

const initialState = {
  loading: false,
  data: null,
  status: null,
  message: null,
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    onSuccess: (state) => {
      state.loading = false;
    },
    onFailure: (state, action) => {
      state.message = action.payload.message;
      state.status = action.payload.status;
      state.loading = false;
    },
    isSubmitting: (state) => {
      state.loading = true;
    },
    clearUserData: (state) => {
      state.data = null;
    },
  },
});

export const { isSubmitting, onSuccess, clearUserData, onFailure } = loginSlice.actions;

export const login = (data?: any) => (dispatch: AppDispatch) => {
  dispatch(isSubmitting());
  return new Promise((resolve) => {
    resolve({ id: 2, name: "Samuel Okeke", ...data });
  }).then((response) => {
    toast("You have been logged in successfully");
    localStorage.setItem("user", JSON.stringify(response));
    dispatch(setUserData(response));
  });
};

export default loginSlice.reducer;
