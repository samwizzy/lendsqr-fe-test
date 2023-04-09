import { createSlice, Slice } from "@reduxjs/toolkit";
import axios from "axios";
import { AppDispatch } from "..";
import { User } from "../model/User";

interface InitialType {
  loading: boolean;
  data: User[];
  filterUsers: User[];
  status: string | null;
  message: string | null;
  selectedUser: User | null;
}

const initialState: InitialType = {
  loading: false,
  data: [],
  filterUsers: [],
  status: null,
  message: null,
  selectedUser: null,
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.data = action.payload;
      state.filterUsers = action.payload;
      state.loading = false;
    },
    setUserById: (state, action) => {
      state.selectedUser = action.payload;
      state.loading = false;
    },
    filterUsers: (state, action) => {
      const { orgName, email, user: userName, phoneNumber } = action.payload;

      const filteredUsers: User[] = state.data.filter((user: User) => {
        var orgNameRe = new RegExp(orgName.toLowerCase(), "g");
        var emailRe = new RegExp(email.toLowerCase(), "g");
        var userNameRe = new RegExp(userName.toLowerCase(), "g");
        var phoneNumberRe = new RegExp(phoneNumber.toLowerCase(), "g");
        return (
          orgNameRe.test(user.orgName.toLowerCase()) ||
          emailRe.test(user.email.toLowerCase()) ||
          userNameRe.test(user.profile.firstName.toLowerCase()) ||
          userNameRe.test(user.profile.lastName.toLowerCase()) ||
          phoneNumberRe.test(user.phoneNumber.toLowerCase())
        );
      });

      return {
        ...state,
        filterUsers: filteredUsers.length ? [...filteredUsers] : [...state.data],
      };
    },
    resetFilter: (state) => {
      state.data = [...state.data];
      state.filterUsers = [...state.data];
    },
    isLoading: (state) => {
      state.loading = true;
    },
  },
});

export const { isLoading, setUsers, setUserById, filterUsers, resetFilter } = usersSlice.actions;

export const getUsersAsync = () => (dispatch: AppDispatch) => {
  dispatch(isLoading());
  return axios.get<User[]>("/lendsqr/api/v1/users").then((response) => {
    dispatch(setUsers(response.data));
  });
};

export const getUserById = (id: string) => (dispatch: AppDispatch) => {
  dispatch(isLoading());
  return axios.get<User>(`/lendsqr/api/v1/users/${id}`).then((response) => {
    dispatch(setUserById(response.data));
    dispatch(getUsersAsync());
  });
};

export default usersSlice.reducer;
