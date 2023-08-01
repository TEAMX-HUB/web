import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: localStorage.getItem("userInfo") || null,
  tokens: localStorage.getItem("tokens") || null,
  userSchedules: localStorage.getItem("userSchedules") || null,
  mapData: localStorage.getItem("mapData") || null,
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
      state.tokens = action.payload;
      if (action.payload) {
        localStorage.setItem("tokens", action.payload);
      } else {
        localStorage.removeItem("tokens");
      }
    },
    setSchedule: (state, action) => {
      state.userSchedules = action.payload;
      if (action.payload) {
        localStorage.setItem("userSchedules", action.payload);
      } else {
        localStorage.removeItem("userSchedules");
      }
    },
    setMapData: (state, action) => {
      state.mapData = action.payload;
      if (action.payload) {
        localStorage.setItem("mapData", action.payload);
      } else {
        localStorage.removeItem("mapData");
      }
    },
    clearMapData: (state) => {
      state.mapData = null;
    },
    logout: (state) => {
      state.userInfo = null;
      localStorage.removeItem("userInfo");
    },
  },
});

export const {
  setCredentials,
  setTokens,
  clearMapData,
  setMapData,
  setSchedule,
  logout,
} = authSlice.actions;

export default authSlice; // Export the generated reducer function
