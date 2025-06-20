"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = Object.freeze({
  theme: "dark",
});

const reduxSlice = createSlice({
  name: "redux",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
    },

    resetSpeechState(state) {
      return {
        ...initialState,
        theme: state.theme,
      };
    },
  },
});

export const { toggleTheme } = reduxSlice.actions;

export default reduxSlice.reducer;
