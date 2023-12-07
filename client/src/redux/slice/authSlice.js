import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    isLoggedIn: localStorage.getItem("isLoggedIn") || false,
    role: localStorage.getItem("role") || "",
    data: localStorage.getItem("data") || {},
    signup: {
      loading: false,
      error: null,
      successMessage: null,
    },
    signin: {
      loading: false,
      error: null,
      successMessage: null,
      user: null,
    },
  };


const authSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{}
})

export default authSlice.reducer