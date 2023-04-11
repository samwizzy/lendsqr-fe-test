import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/auth";
import usersSlice from "./slices/users.slice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    users: usersSlice,
  },
});

export default store;
