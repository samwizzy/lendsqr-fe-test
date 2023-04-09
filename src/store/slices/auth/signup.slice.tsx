import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { AppDispatch } from "../..";
import history from "./../../../routes/history";
import { setUserData } from "./user.slice";

const initialState = {
  loading: false,
  data: null,
  status: null,
  message: null,
};

export const signupSlice = createSlice({
  name: "signup",
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
  },
});

export const { isSubmitting, onSuccess, onFailure } = signupSlice.actions;

export const signup = (data: any) => (dispatch: AppDispatch) => {
  return axios
    .post("/api/v1/auth/register", data)
    .then((response) => {
      const { token, ...rest } = response.data?.data;
      localStorage.setItem("user", rest);
      localStorage.setItem("token", token);
      dispatch(onSuccess());
      dispatch(setUserData(rest));
    })
    .catch((err) => {
      if (err.response && err.response.data) {
        dispatch(onFailure(err.response.data));
        toast(err.response.data.message);
      }
    });
};

export default signupSlice.reducer;
