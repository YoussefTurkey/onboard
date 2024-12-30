import { createSlice } from "@reduxjs/toolkit";

// Helper Function to Apply Theme Class
const applyThemeClass = (isDarkMode) => {
  if (typeof window !== "undefined") {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }
};

const initialState = {
  darkMode:
    typeof window !== "undefined"
      ? localStorage.getItem("theme") === "dark" ||
        (!localStorage.getItem("theme") &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      : true,
};

// Apply the theme class on initial load
if (typeof window !== "undefined") {
  applyThemeClass(initialState.darkMode);
}

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
      if (typeof window !== "undefined") {
        localStorage.setItem("theme", state.darkMode ? "dark" : "light");
        applyThemeClass(state.darkMode);
      }
    },
  },
});

export const { toggleDarkMode } = themeSlice.actions;
export default themeSlice.reducer;
