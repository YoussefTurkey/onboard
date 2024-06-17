import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkMode:
    typeof window !== "undefined"
      ? localStorage.getItem("theme") === "dark" ||
        (!localStorage.getItem("theme") &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      : true,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
      if (typeof window !== "undefined") {
        localStorage.setItem("theme", state.darkMode ? "dark" : "light");
        if (state.darkMode) {
          document.body.classList.add("dark-mode");
        } else {
          document.body.classList.remove("dark-mode");
        }
      }
    },
  },
});

export const { toggleDarkMode } = themeSlice.actions;
export default themeSlice.reducer;
