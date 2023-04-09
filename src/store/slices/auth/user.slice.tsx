import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { AppDispatch } from "../..";
import history from "./../../../routes/history";

const user = localStorage.getItem("user");
const token = (localStorage.getItem("token") as any)?.["access_token"];

const initialState = {
  loading: false,
  data: user ? JSON.parse(user) : null,
  token: token || null,
  status: null,
  message: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
    clearUserData: (state) => {
      state.data = null;
      state.token = null;
    },
  },
});

export const { setUserData, clearUserData } = userSlice.actions;

export const logout = () => (dispatch: AppDispatch) => {
  localStorage.clear();
  dispatch(clearUserData());
};

export default userSlice.reducer;
