"use client";

import { Provider } from "react-redux";
import store from "./index";
import ThemeSlice from "./ThemeSlice";

export default function ReduxProvider({ children }) {
  return (
    <Provider store={store}>
      <ThemeSlice>{children}</ThemeSlice>
    </Provider>
  );
}
