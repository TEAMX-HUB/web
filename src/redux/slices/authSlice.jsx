import { createSlice} from "@reduxjs/toolkit";

const initialState = {
  userInfo: localStorage.getItem("userInfo") || null,
  tokens: localStorage.getItem("tokens") || null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.userInfo = action.payload;
      if (action.payload) {
        localStorage.setItem("userInfo", action.payload);
      } else {
        localStorage.removeItem("userInfo");
      }
    },
    setTokens: (state, action) => {
      state.tokens = null;
      if (action.payload) {
        localStorage.setItem("tokens", action.payload);
      } else {
        localStorage.removeItem("tokens");
      }
    },
    logout: (state) => {
      state.userInfo = null;
      localStorage.removeItem("userInfo");
    },
  },
});

export const { setCredentials, setTokens, logout } = authSlice.actions;

export default authSlice;