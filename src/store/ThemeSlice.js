"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "./ReduxSlice";

export default function ThemeSlice({ children }) {
  const theme = useSelector((state) => state.redux.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    if (localTheme) dispatch(toggleTheme(localTheme));
  }, [dispatch]);

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return children;
}
