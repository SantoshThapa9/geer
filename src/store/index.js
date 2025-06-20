import { configureStore } from "@reduxjs/toolkit";
import reduxReducer from "./ReduxSlice";

const store = configureStore({
  reducer: {
    redux: reduxReducer,
  },
});

store.subscribe(() => {
  if (typeof window !== "undefined") {
    const state = store.getState();
    localStorage.setItem("theme", state.redux.theme);
  }
});

export default store;
